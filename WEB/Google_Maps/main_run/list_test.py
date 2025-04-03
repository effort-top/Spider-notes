import json
import asyncio
import multiprocessing
import random
import re
import subprocess
import threading
import time
from multiprocessing import Manager
from lxml import html
import aiohttp
from playwright.async_api import async_playwright

from MysqlTaskManager import MySQLTaskManager
from config.logconfig import MyLogger

logger = MyLogger().get_logger()


async def search_response(response, db_data, response_data):
    async with aiohttp.ClientSession() as session:
        try:
            if '/search?' in response.url:
                response_data['time'] = time.time()
        except Exception as e:
            logger.error(e)


async def scroll_page(page):
    try:
        await page.mouse.wheel(0, 450)
        await page.wait_for_timeout(500)
        content = await page.content()
        if '没有其他结果' in content or 'the end of the list' in content:
            logger.info("无更多数据，结束本次任务")
            return True
        else:
            return False
    except Exception as e:
        logger.error(f"滚动函数发生错误:{e}")


async def try_again(page, search):
    try:
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
        selector = "//*[@class='hfpxzc']"
        if (await page.locator(selector).count()) == 0:
            return False
        else:
            return True
    except Exception as e:
        logger.warning(f"try_again报错：{e}")


async def run_task(coordinates, search, db_data, mysql_manager, browser):
    async with async_playwright() as p:
        # browser = await p.chromium.launch(executable_path='C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
        #                                   headless=False)
        # context = await browser.new_context(viewport={'width': 1920, 'height': 1080})
        # browser = await p.chromium.connect_over_cdp(f"http://127.0.0.1:9222")

        response_data = {}

        async def on_response(response):
            await search_response(response, db_data, response_data)

        while True:
            try:
                response_data['time'] = time.time()
                # storage_state = "state.json"
                context = await browser.new_context(storage_state="state.json")
                await context.set_geolocation(
                    {'latitude': float(coordinates.split(',')[0]), 'longitude': float(coordinates.split(',')[1])})
                await context.grant_permissions(['geolocation'])
                page = await context.new_page()
                page.on('response', on_response)
                url = f'https://www.google.com/maps/search/@{coordinates}'
                logger.info(url)
                try:
                    await page.goto(url, wait_until="load", timeout=10000)
                except Exception as e:
                    logger.warning(f"Error loading page: {e}")
                    # 可以增加重试机制
                    await asyncio.sleep(1)
                    await page.goto(url, wait_until="load", timeout=10000)  # 重试

                width = await page.locator('//*[@class="aFsglc widget-scene-canvas"]').get_attribute("width")
                height = await page.locator('//*[@class="aFsglc widget-scene-canvas"]').get_attribute("height")
                width = int(width)
                height = int(height)
                mid_x = int(width // 2)
                mid_y = int(height // 2)

                for attempt in range(3):
                    try:
                        await page.locator('//*[@id="sVuEFc"]').click()
                        await page.locator('//*[@class="aFsglc widget-scene-canvas"]').click(button='right',
                                                                                             position={"x": mid_x,
                                                                                                       "y": mid_y})
                        await asyncio.sleep(1)
                        await page.wait_for_selector('//*[@id="action-menu"]/div[6]', state='attached', timeout=3000)

                        break  # 如果成功，不再重试
                    except Exception as e:  # 捕获所有异常
                        if attempt == 2:
                            logger.warning("重试右键三次失败，最后一次异常：%s", str(e))
                            raise  # 第三次失败后抛出错误
                        else:
                            logger.warning(f"第{attempt}次右键失败，重试中。错误信息：{e}")
                            await asyncio.sleep(1)  # 可以加点延时后再重试

                await page.locator('//*[@id="action-menu"]/div[6]').click()
                await asyncio.sleep(1)
                await page.locator('//*[@id="searchboxinput"]').fill(search)
                await asyncio.sleep(1)
                search_btn = page.locator('//*[@id="searchbox-searchbutton"]')
                await search_btn.click()
                await asyncio.sleep(1.5)
                # if search == 'cookie':
                #     # 暂停脚本以调试
                #     await page.pause()
                selector = "//*[@class='hfpxzc']"
                if (await page.locator(selector).count()) == 0:
                    result = await try_again(page, search)
                    if result == False:
                        logger.warning("没有检测到：  //*[@class='hfpxzc']")
                        return False

                # 获取元素的边界信息
                box = await search_btn.bounding_box()
                await page.mouse.move(box['x'] + box['width'] / 2, box['y'] + box['height'] / 2 + 200)

                while True:
                    now = time.time()
                    time_stored = response_data['time']
                    time_difference = now - time_stored
                    if abs(time_difference) > 25:
                        logger.error("数据获取接口超过25s，任务失败")
                        return False
                    page_finished = await scroll_page(page)
                    if page_finished:
                        return True

            except Exception as e:
                logger.error(f"run_task执行过程中发生错误: {e}")
                return False
            finally:
                # 获取页面内容
                html_content = await page.content()
                # 使用lxml解析HTML内容
                tree = html.fromstring(html_content)
                div_list = tree.xpath('//*[@class="hfpxzc"]')
                sum = 0
                for div in div_list:
                    sum = sum + 1
                    url = div.xpath('./@href')[0]
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
                logger.success(f"获取到{sum}条数据")
                await page.close()
                await context.close()


async def task_maker(mysql_manager, task_queue):
    while True:
        if task_queue.qsize() >= 10:
            logger.info("当前任务队列长度大于10,休息1分钟")
            await asyncio.sleep(60)
            continue
        try:
            tasks = mysql_manager.take_many_tasks(0, n=20)  # 111 表示未完成
            if not tasks:
                logger.warning("数据库中已没有更多的任务,休息5秒")
                await asyncio.sleep(5)
                continue

            type_1and2 = ['restaurant', 'cookie', 'food', 'drink']
            type_3 = ['pastry', 'ice cream', 'tea house', 'juice', 'pizza', 'sandwich', 'fast food', 'buffet',
                      'breakfast']

            selected_tasks = random.sample(tasks, min(len(tasks), 15))
            for task in selected_tasks:
                search_keywords = []

                if task['type'] == 1:
                    search_keywords = type_1and2
                    z = '17z'
                elif task['type'] == 2:
                    search_keywords = type_1and2
                    z = '16z'
                elif task['type'] == 3:
                    search_keywords = type_3
                    z = '15z'

                for keyword in search_keywords:
                    task_info = {
                        'id': task['id'],
                        'search': keyword,
                        'lat': task['lat'],
                        'lon': task['lon'],
                        'z': z,
                        'city': task['city'],
                        'city_en': task['city_en'],
                        'cityid': task['cityid'],
                        'type': task['type'],
                        'yxj': task['yxj'],
                        'try_num': 0,
                    }
                    await task_queue.put(task_info)

            await asyncio.sleep(5)
        except Exception as e:
            logger.error(e)


async def worker(task_queue, mysql_manager, browser):
    while True:
        task = await task_queue.get()
        if task is None:
            break

        _id = task['id']
        search = task['search']
        lat = task['lat']
        lon = task['lon']
        z = task['z']
        coordinates = f"{lat},{lon},{z}"

        logger.info(
            f"当前任务 | 关键字:{search} 经纬度:{coordinates} 重试次数:{task['try_num']} | 队列长度:{task_queue.qsize()}")

        db_data = {
            'id': _id,
            'keyword': search,
            'city': task['city'],
            'city_en': task['city_en'],
            'cityid': task['cityid'],
            'yxj': task['yxj'],
            'km': task['type']
        }

        task_completed = await run_task(coordinates, search, db_data, mysql_manager, browser)

        if not task_completed:
            task['try_num'] += 1
            logger.warning(
                f"任务出错，重试次数+1 | 坐标:{coordinates} | 关键字:{search} | 当前重试次数：{task['try_num']}")

            if task['try_num'] >= 3:
                mysql_manager.update_status_field(_id, 11)  # 11 表示错误状态
                logger.warning(f"任务重试超过三次，标记为错误 | 坐标:{coordinates} | 关键字:{search}")
            else:
                await task_queue.put(task)
        else:
            db_data = mysql_manager.get_data_by_id(_id)
            status = db_data['status']
            type = db_data['type']
            type_1and2 = ['restaurant', 'cookie', 'food', 'drink']
            type_3 = ['pastry', 'ice cream', 'tea house', 'juice', 'pizza', 'sandwich', 'fast food', 'buffet',
                      'breakfast']

            status = status + 1
            if type == 1 or type == 2:
                if status >= len(type_1and2):
                    mysql_manager.update_status_field(_id, 10)  # 10 表示完成状态
                else:
                    mysql_manager.update_status_field(_id, status)

            if type == 3:
                if status >= len(type_3):
                    mysql_manager.update_status_field(_id, 10)  # 10 表示完成状态
                else:
                    mysql_manager.update_status_field(_id, status)

            logger.success(f"任务完成 | 坐标:{coordinates} | 关键字:{search}")


async def main():
    task_queue = asyncio.Queue()
    mysql_manager = MySQLTaskManager()
    # 连接已打开浏览器，找好端口
    chrome_path = r'"C:\Program Files\Google\Chrome\Application\chrome.exe"'
    debugging_port = f"--remote-debugging-port=9222"
    command = f"{chrome_path} {debugging_port}"
    subprocess.Popen(command, shell=True)
    await asyncio.sleep(3)
    async with async_playwright() as p:
        browser = await p.chromium.connect_over_cdp(f"http://127.0.0.1:9222")
        context = browser.contexts[0]
        await context.storage_state(path="state.json")

        # 启动任务生成器协程
        task_maker_task = asyncio.create_task(task_maker(mysql_manager, task_queue))
        # 启动单个worker协程
        num_workers = 2  # 这里可以指定 Worker 的数量
        worker_tasks = [
            asyncio.create_task(worker(task_queue, mysql_manager, browser))
            for _ in range(num_workers)
        ]

        try:
            # 使用 asyncio.gather 来确保所有任务完成
            await asyncio.gather(task_maker_task, *worker_tasks)
        except KeyboardInterrupt:
            print("中断，正在停止任务...")


# 使用 asyncio 运行主协程
if __name__ == '__main__':
    asyncio.run(main())
