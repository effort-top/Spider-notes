import json
import asyncio
import multiprocessing
import random
import re
import threading
import time
from multiprocessing import Manager
from lxml import html
import aiohttp
from playwright.async_api import async_playwright

from MysqlTaskManager import MySQLTaskManager
from config.logconfig import MyLogger

logger = MyLogger().get_logger()


def parse_detail_from_html(data, tag=1):
    if not tag:
        # 提取 JSON 数据
        match = re.search(r'APP_INITIALIZATION_STATE = (.*);$', data)
        if match:
            data = match.group(1)
        data = json.loads(data)
        data2 = data[3][2]
    else:
        data = json.loads(data)
        data = data['data']
        data = json.loads((data.replace('/*""*/', '')))
        data2 = data['d']

    # data2 = json.loads(data)['data']
    # 解析数据
    tmp = data2.split("\n")

    data2 = tmp[1].replace('/*""*/', '')
    data2 = json.loads(data2)
    data_list = data2[0][1]
    datas = []

    if not data_list:
        return False

    for k, row2 in enumerate(data_list):
        if len(row2) <= 14:
            continue

        row3 = row2[14]
        tmp_row = {}

        # 标题
        tmp_row['title'] = row3[11]
        # 检查并提取数据
        if row3[171] is not None:
            if row3[171][0][3]:
                print(row3[171][0][3])
                return

        if row3[101]:
            tmp_row['original_title'] = row3[101]

        if row3[7]:
            tmp_row['display_link'] = row3[7][1]
            tmp_row['link'] = row3[7][0]

        try:
            if row3[178]:
                tmp_row['phone'] = row3[178][0][3]
        except IndexError:
            tmp_row['phone'] = ''

        if row3[203]:
            open_hours = {}
            for _ho in row3[203][0]:
                open_hours[_ho[0]] = _ho[3][0][0]
            tmp_row['open_hours'] = open_hours

        if row3[76]:
            categorys = []
            for ck, cat in enumerate(row3[76]):
                _cat = {
                    'id': cat[0],
                    'title': row3[13][ck],
                    'title_short': cat[1] if len(cat) > 1 else None
                }
                categorys.append(_cat)
            tmp_row['category'] = categorys
        try:
            if row3[100]:
                tags = []
                for ttt in row3[100][1]:
                    _ttt = {
                        'group_id': ttt[0],
                        'group_title': ttt[1]
                    }
                    for ttt1 in ttt[2]:
                        tag_data = {
                            'key_id': ttt1[0],
                            'key_title': ttt1[1],
                            'value': ttt1[2][2][0] if ttt1[2][2] is not None else None,
                            'value_title': ttt1[2][2][3] if ttt1[2][2] is not None else None,
                            'value_title_short': ttt1[2][2][1] if ttt1[2][2] is not None else None
                        }
                        _ttt.update(tag_data)
                        tags.append(_ttt)
                    tmp_row['tags'] = tags
        except IndexError:
            tmp_row['tags'] = ''

        if row3[4] is not None:
            if row3[4][7]:
                tmp_row['rating'] = row3[4][7]

            if row3[4][8]:
                tmp_row['reviews_cnt'] = row3[4][8]

            if row3[4][2]:
                tmp_row['price'] = row3[4][2]

        tmp_row['latitude'] = row3[9][2]
        tmp_row['longitude'] = row3[9][3]

        if row3[32] is not None:
            if row3[32][0][1]:
                tmp_row['summary'] = row3[32][0][1]

            if row3[32][1][1]:
                tmp_row['description'] = row3[32][1][1]

        tmp_row['fid'] = row3[10]
        tmp_row['map_id_encoded'] = row3[78]
        tmp_row['map_id'] = row3[10]
        tmp_row['map_link'] = f"https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s{tmp_row['map_id']}"

        if row3[72] is not None:
            if row3[72][0][1][6][0]:
                tmp_row['original_image'] = row3[72][0][1][6][0]

            if row3[37][0][0][6][0]:
                tmp_row['image'] = row3[37][0][0][6][0]
                tmp_row['image_url'] = row3[37][0][0][6][0]

            if row3[72][0][0][6][0]:
                tmp_row['thumbnail'] = row3[72][0][0][6][0]

        tmp_row['icon'] = row3[157]

        if row3[160] is not None:
            if row3[160][0]:
                tmp_row['temporarily_closed'] = 'true'

        if row3[88][0] == 'CLOSED':
            tmp_row['permanently_closed'] = 'true'

        if row3[49] is not None:
            tmp_row['claimed'] = False if row3[49][1] else True
        else:
            tmp_row['claimed'] = True
        tmp_row['area'] = row3[183][1]

        if len(row3[183]) > 2:
            if row3[183][2][2][0]:
                tmp_row['plus_code'] = row3[183][2][2][0]

        tmp_row['address'] = row3[39]
        tmp_row['r_city'] = row3[166]
        tmp_row['rank'] = k

        # 为空
        tmp_row['services'] = ''
        # print(tmp_row)

        # Optional: output data for debugging
        if row3[51] is not None:
            for ttt in row3[51][0]:
                print(ttt[6][0])

        datas.append(tmp_row)

    return datas


async def search_response(response, db_data, response_data):
    async with aiohttp.ClientSession() as session:
        try:
            if '/search?' in response.url:
                response_data['time'] = time.time()
        except Exception as e:
            logger.error(e)


async def scroll_page(page):
    try:
        await page.mouse.wheel(0, 400)
        await page.wait_for_timeout(500)
        content = await page.content()
        if '没有其他结果' in content or 'the end of the list' in content:
            logger.info("无更多数据，结束本次任务")
            return True
        else:
            return False
    except Exception as e:
        logger.error(f"滚动函数发生错误:{e}")


async def run_task(coordinates, search, db_data, mysql_manager):
    async with async_playwright() as p:
        browser = await p.chromium.launch(executable_path='C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
                                          headless=False)
        # context = await browser.new_context(viewport={'width': 1920, 'height': 1080})
        context = await browser.new_context()
        await context.set_geolocation(
            {'latitude': float(coordinates.split(',')[0]), 'longitude': float(coordinates.split(',')[1])})
        await context.grant_permissions(['geolocation'])
        response_data = {}

        async def on_response(response):
            await search_response(response, db_data, response_data)

        while True:
            try:
                response_data['time'] = time.time()
                page = await context.new_page()
                page.on('response', on_response)
                url = f'https://www.google.com/maps/search/@{coordinates}'
                logger.info(url)
                await page.goto(url, wait_until="domcontentloaded")
                await asyncio.sleep(5)

                width = await page.locator('//*[@class="aFsglc widget-scene-canvas"]').get_attribute("width")
                height = await page.locator('//*[@class="aFsglc widget-scene-canvas"]').get_attribute("height")
                width = int(width)
                height = int(height)
                mid_x = int(width // 2)
                mid_y = int(height // 2)

                await page.locator('//*[@class="aFsglc widget-scene-canvas"]').click(button='right',
                                                                                     position={"x": mid_x, "y": mid_y})
                await asyncio.sleep(1)
                await page.wait_for_selector('//*[@id="action-menu"]/div[6]', state='attached')
                await page.locator('//*[@id="action-menu"]/div[6]').click()
                await asyncio.sleep(1)
                await page.locator('//*[@id="searchboxinput"]').fill(search)
                await asyncio.sleep(1)
                search_btn = page.locator('//*[@id="searchbox-searchbutton"]')
                await search_btn.click()
                # 等待指定的元素出现
                await page.wait_for_selector('//*[contains(@class, "fontTitleLarge IFMGgb")]')
                await asyncio.sleep(1)
                # 获取元素的边界信息
                box = await search_btn.bounding_box()
                await page.mouse.move(box['x'] + box['width'] / 2, box['y'] + box['height'] / 2 + 200)

                while True:
                    now = time.time()
                    time_stored = response_data['time']
                    time_difference = now - time_stored

                    if abs(time_difference) > 90:
                        logger.error("数据获取接口超过1分半，任务失败")
                        return False
                    page_html = await page.content()
                    if '提出修改建议' in page_html:
                        await page.locator('//*[@id="sVuEFc"]').click()
                        await asyncio.sleep(1)
                        width = await page.locator('//*[@class="aFsglc widget-scene-canvas"]').get_attribute("width")
                        height = await page.locator('//*[@class="aFsglc widget-scene-canvas"]').get_attribute("height")
                        width = int(width)
                        height = int(height)
                        mid_x = int(width // 2)
                        mid_y = int(height // 2)
                        await page.locator('//*[@class="aFsglc widget-scene-canvas"]').click(button='right',
                                                                                             position={"x": mid_x,
                                                                                                       "y": mid_y})
                        await asyncio.sleep(1)
                        await page.wait_for_selector('//*[@id="action-menu"]/div[6]', state='attached')
                        await page.locator('//*[@id="action-menu"]/div[6]').click()
                        await asyncio.sleep(1)
                        await page.locator('//*[@id="searchboxinput"]').fill(search)
                        await asyncio.sleep(1)
                        search_btn = page.locator('//*[@id="searchbox-searchbutton"]')
                        await search_btn.click()
                        await asyncio.sleep(1)
                        # 获取元素的边界信息
                        box = await search_btn.bounding_box()
                        await page.mouse.move(box['x'] + box['width'] / 2, box['y'] + box['height'] / 2 + 200)
                    page_finished = await scroll_page(page)
                    if page_finished:
                        return True

            except Exception as e:
                logger.error(f"执行过程中发生错误: {e}")
                break
            finally:
                # 获取页面内容
                html_content = await page.content()
                # 使用lxml解析HTML内容
                tree = html.fromstring(html_content)
                div_list = tree.xpath('//*[@class="Nv2PK THOPZb CpccDe "]')
                for div in div_list:
                    url = div.xpath('./a/@href')[0]
                    db_data['url_detail'] = url
                    # 通用正则表达式
                    pattern = r"1s([a-zA-Z0-9:]+)!"
                    # 查找匹配
                    match = re.search(pattern, url)
                    fid = ''
                    if match:
                        fid = match.group(1)
                    db_data['fid'] = fid
                    mysql_manager.insert_into_detail_table(db_data)
                await page.close()
                await context.close()
                await browser.close()


def worker(task_queue):
    mysql_manager = MySQLTaskManager()

    while True:
        task = task_queue.get()
        if task is None:
            break

        _id = task['id']
        search = task['search']
        lat = task['lat']
        lon = task['lon']
        z = task['z']  # 获取 zoom 参数
        city = task['city']
        city_en = task['city_en']
        cityid = task['cityid']
        yxj = task['yxj']
        type = task['type']
        db_data = {
            'id': _id,
            'keyword': search,
            'city': city,
            'city_en': city_en,
            'cityid': cityid,
            'yxj': yxj,
            'km': type
        }
        try_num = task['try_num']
        coordinates = f"{lat},{lon},{z}"  # 构造坐标和 zoom 参数
        logger.info(
            f"当前任务 | 关键字:{search} 经纬度:{coordinates} 重试次数:{try_num} | 任务队列长度:{task_queue.qsize()}")


        task_completed = asyncio.run(run_task(coordinates, search, db_data, mysql_manager))

        if not task_completed:
            task['try_num'] = try_num + 1
            logger.warning(f"任务失败，重回队列，重试次数+1 | 坐标:{coordinates} | 关键字:{search}")
            if task['try_num'] >= 3:
                mysql_manager.update_status_field(_id, 11)  # 11 表示错误状态
                logger.warning(f"任务重试超过三次 | 坐标:{coordinates} | 关键字:{search} | 标记为错误")
                continue
            task_queue.put(task)
        else:
            db_data = mysql_manager.get_data_by_id(_id)
            status = db_data['status']
            type = db_data['type']
            type_1and2 = ['cookie','restaurant',  'food', 'drink']
            type_3 = ['pastry', 'ice cream', 'tea house', 'juice', 'pizza', 'sandwich', 'fast food', 'buffet',
                      'breakfast']

            status = status+1
            if type == 1 or type == 2:
                if status == len(type_1and2):
                    mysql_manager.update_status_field(_id, 10)  # 10 表示完成状态
            if type == 3:
                if status == len(type_3):
                    mysql_manager.update_status_field(_id, 10)  # 10 表示完成状态
            mysql_manager.update_status_field(_id, status)

            logger.success(f"任务 | 坐标:{coordinates} | 关键字:{search} | 完成")

def task_maker(mysql_manager, task_queue):
    added_task_ids = set()  # 用于跟踪已添加任务的ID

    while True:
        if task_queue.qsize() >= 10:
            logger.info("当前任务队列长度大于10,休息3分钟")
            time.sleep(60)
            continue
        try:
            tasks = mysql_manager.take_many_tasks(111, n=20)  # 0 表示未完成
            if not tasks:
                logger.warning("数据库中已没有更多的任务,休息5秒")
                time.sleep(5)
                continue
            type_1and2 = ['restaurant', 'cookie', 'food', 'drink']
            type_3 = ['pastry', 'ice cream', 'tea house', 'juice', 'pizza', 'sandwich', 'fast food', 'buffet',
                      'breakfast']
            # 从20个任务中随机选择10个
            selected_tasks = random.sample(tasks, min(len(tasks), 15))
            for task in selected_tasks:
                if task['id'] in added_task_ids:  # 检查是否已经添加过
                    continue
                search_keywords = []  # 存放最终的搜索关键字

                # 根据类型设置搜索关键字
                if task['type'] == 1:
                    search_keywords = type_1and2
                    z = '17z'
                elif task['type'] == 2:
                    search_keywords = type_1and2
                    z = '16z'
                elif task['type'] == 3:
                    search_keywords = type_3
                    z = '15z'

                # 对于每个关键字，创建一个任务并添加到队列
                for keyword in search_keywords:
                    task_info = {
                        'id': task['id'],
                        'search': keyword,  # 每次使用当前的关键字
                        'lat': task['lat'],
                        'lon': task['lon'],
                        'z': z,
                        'city': task['city'],
                        'city_en': task['city_en'],
                        'cityid': task['cityid'],
                        'type': task['type'],
                        'yxj': task['yxj'],
                        'try_num': 0,  # 初始重试
                    }
                    task_queue.put(task_info)  # 添加任务到队列
                    added_task_ids.add(task['id'])  # 记录已添加任务的ID

            time.sleep(5)
        except Exception as e:
            logger.error(e)


def main():
    manager = Manager()
    task_queue = manager.Queue()
    mysql_manager = MySQLTaskManager()
    task_maker_thread = threading.Thread(target=task_maker, args=(mysql_manager, task_queue))
    task_maker_thread.start()

    num_processes = multiprocessing.cpu_count()
    processes = []

    for _ in range(1):
        p = multiprocessing.Process(target=worker, args=(task_queue,))
        processes.append(p)
        p.start()

    task_maker_thread.join()

    for _ in processes:
        task_queue.put(None)

    for p in processes:
        p.join()


if __name__ == '__main__':
    main()
