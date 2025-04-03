import random
import threading
import asyncio
import traceback

import aiohttp

import requests
import json
import re
import time

from pymongo import MongoClient
from config.logconfig import MyLogger

logger = MyLogger().get_logger()

# MongoDB 配置
MONGO_URI = "mongodb://localhost:27017/"
DB_NAME = "google"  # 替换为你自己的数据库名称
COLLECTION_NAME = "fidData_5"  # 替换为你自己的集合名称

headers = {
    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
    "accept-language": "zh-CN,zh;q=0.9",
    "cache-control": "max-age=0",
    "priority": "u=0, i",
    "referer": "https://www.google.com/",
    "sec-ch-prefers-color-scheme": "light",
    "sec-ch-ua": "\"Google Chrome\";v=\"131\", \"Chromium\";v=\"131\", \"Not_A Brand\";v=\"24\"",
    "sec-ch-ua-arch": "\"x86\"",
    "sec-ch-ua-bitness": "\"64\"",
    "sec-ch-ua-form-factors": "\"Desktop\"",
    "sec-ch-ua-full-version": "\"131.0.6778.86\"",
    "sec-ch-ua-full-version-list": "\"Google Chrome\";v=\"131.0.6778.86\", \"Chromium\";v=\"131.0.6778.86\", \"Not_A Brand\";v=\"24.0.0.0\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-model": "\"\"",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-ch-ua-platform-version": "\"15.0.0\"",
    "sec-ch-ua-wow64": "?0",
    "sec-fetch-dest": "document",
    "sec-fetch-mode": "navigate",
    "sec-fetch-site": "same-origin",
    "sec-fetch-user": "?1",
    "service-worker-navigation-preload": "true",
    "upgrade-insecure-requests": "1",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",
    "x-browser-channel": "stable",
    "x-browser-copyright": "Copyright 2024 Google LLC. All rights reserved.",
    "x-browser-validation": "Nbt54E7jcg8lQ4EExJrU2ugNG6o=",
    "x-browser-year": "2024",
    "x-client-data": "CIa2yQEIorbJAQipncoBCLjZygEIlqHLAQj/ossBCIWgzQEI59DNAQiyns4BCP6lzgEI+cnOAQjnzM4BCMbNzgEIx8/OAQj0z84BCK3QzgEIstPOARj0yc0B"
}
cookies = {
    "SID": "g.a000qwhiKahgMKqNDFq5DHrrKfeFi8yg8EahbIvEUuQo9j6awo9Ea1un6Q9SZlcNLQqpFzHCiwACgYKAQUSARMSFQHGX2MiIgnooAQJPuhhggMzgeYD6BoVAUF8yKp0M-FxGqwIhh6AJUA1UADV0076",
    "__Secure-1PSID": "g.a000qwhiKahgMKqNDFq5DHrrKfeFi8yg8EahbIvEUuQo9j6awo9E2tHBGg8LuU0jVJLvKstnYwACgYKAR0SARMSFQHGX2MiUikcyGtF-INAtHo2FcVdZRoVAUF8yKraGsC6RSMmEKjz9f3k13HV0076",
    "__Secure-3PSID": "g.a000qwhiKahgMKqNDFq5DHrrKfeFi8yg8EahbIvEUuQo9j6awo9ERBcKGOxWd51ljbSaFDQBOQACgYKAToSARMSFQHGX2Mi-XexHuN6HWZY-cUFC2wVyBoVAUF8yKr7-iZqWiojTzB7EUL1tKeW0076",
    "HSID": "AVkwEQz9poVqBZb99",
    "SSID": "Ael-y_hY5BwmYh_CA",
    "APISID": "ivDxtr9JnVoSSpZT/Abt4CAZcQ8MS6e-2M",
    "SAPISID": "HRiDnAKL_tqO03G4/AEaKK9CVOFw9F4gms",
    "__Secure-1PAPISID": "HRiDnAKL_tqO03G4/AEaKK9CVOFw9F4gms",
    "__Secure-3PAPISID": "HRiDnAKL_tqO03G4/AEaKK9CVOFw9F4gms",
    "__Secure-1PSIDTS": "sidts-CjIBQT4rX2i_bldG9zXuKeb9PNVG_6RaanFjaZRSuEn75XrPmRfWmgjscTaOE7ergq2dPBAA",
    "__Secure-3PSIDTS": "sidts-CjIBQT4rX2i_bldG9zXuKeb9PNVG_6RaanFjaZRSuEn75XrPmRfWmgjscTaOE7ergq2dPBAA",
    "NID": "519=BtYGKgIEGTPn-vWy-XkTEv1AtMqajlEf2E1Wp1MBPLO8YVDIQvEiQluuoJKSQ2l4XXrfBhv2GmM9BDmJ3a7vCRAd8a18XUrJiTDUFCVNn7Xa_7ybXI0gJO7hP1Cw6bNvpUAtAD62vGVt-undbg14WMJmivA9GZaM3krHZ3VdseSY8IVlb9HUsowvGtjnR3-CBTrsM67h1r9SntHWNpXxboWjXx__DKcurwEuxcWs8ce8TLzsiJeMtYEvFFdRwLcmOFNH3HNJUcSnVaGiRDLslkUiwrjCNhcQjuIga9jgMokbqrwQoHQRY72KVpD-0NpUx6kzXTs1LmgE3AHov5lwnlfqTBEnDLibZDpppDCPKkN0Qis-1E3th8rTOEOS6wkSzT7zWW1eEa_58HKZ96P5pffm81OUwZQGVMdT2ZMVtGAtgGPIClk0Agu56pPpyJDlivE0FP8pkF9_YQogQ2HN8P3ojeBq9YsktswePlGFYnRRSFPLnA3NgsJ73wEyE1QlGEnQEceGh9V0LMMoYgcP6rDmS77u6LVGn5y-PRO3QMya-zwuwnP7gfuEu-qCX5uAISKlwgp54zCe90LqtFv4DhFnsDtEkEqEdzvtlcE8yuaSjdsUgpDt2BcwEcYPeHUXVy_DurIhre2t6W0EAkg5ut7iRyNd5tily-YagpCKguyHe9xLfFRlIiHsvVBWSTitpBsmhaCzl_PvCoz8yhdNVJL96SFkw7VFEU1PZmCVTE028IiN30YRSPwm4iPXIw",
    "SIDCC": "AKEyXzWAnpmcIV9YvqId2f-k2EBbr7XivOqxjUhRm2hcZltWkLFXgk0Fd-xOqDUhn-MygbTf",
    "__Secure-1PSIDCC": "AKEyXzUaMtr5PLcrdX_fE714fCUe4FQdvIGfyVf-5z2vJ_IdIwId5B0dRBPqB70HI1P9hnSErg",
    "__Secure-3PSIDCC": "AKEyXzUso9NzC0eD429xyec_sSlMuLgokM20fEpkkfTcYDI0NEsVJ3Kv-yo19THNv6gWD8E"
}


def match_pattern(html_content):
    pattern = r'window.APP_INITIALIZATION_STATE=(.*);window.APP_FLAGS'
    match = re.search(pattern, html_content)
    return match.group(1) if match else None


def unique_none(data):
    return [None] + [item for item in data if item is not None]


# 解析detail数据
def parse_detail_new(data):
    tmp_row = {}
    # 提取 JSON 数据
    data = match_pattern(data)
    tmp_row['yssj'] = data
    data = json.loads(data)
    data2 = unique_none(data[3])[2]

    tmp = data2.split("\n")
    data2 = tmp[1]
    data2 = json.loads(data2)
    data = data2

    row3 = data[6]

    tmp_row['title'] = row3[11]
    # 处理pics标签
    if len(row3) > 171 and row3[171] and row3[171][0]:
        pics = row3[171][0]
        pics_list = []
        for pic in pics:
            if pic[3] and 6 < len(pic[3][0]):
                pics_row = {
                    'type': pic[2],
                    'img': pic[3][0][6][0] if pic[3][0] is not None else None
                }
                pics_list.append(pics_row)
        # print(pics_list)
        tmp_row['pics'] = pics_list
    else:
        tmp_row['pics'] = []

    # 替换 'original_title'
    if row3[101]:
        tmp_row['original_title'] = row3[101]
    else:
        tmp_row['original_title'] = ''

    # 替换 'display_link' and 'link'
    if row3[7]:
        tmp_row['display_link'] = row3[7][1]
        tmp_row['link'] = row3[7][0]
    else:
        tmp_row['display_link'] = ''
        tmp_row['link'] = ''

    # 替换 'phone'
    if row3[178] and row3[178][0] and row3[178][0] is not None:
        tmp_row['phone'] = row3[178][0][3]
    else:
        tmp_row['phone'] = ''

    # 替换 'open_hours'
    if row3[203] and row3[203][0]:
        open_hours = {}
        for _ho in row3[203][0]:
            open_hours[_ho[0]] = _ho[3][0][0]
        tmp_row['open_hours'] = open_hours
    else:
        tmp_row['open_hours'] = ''

    # 替换 'category'
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
    else:
        tmp_row['category'] = ''

    # 替换 'tags'
    if row3[100]:
        tags = []
        for ttt in row3[100][1]:
            _ttt = {
                'group_id': ttt[0],
                'group_title': ttt[1]
            }

            for ttt1 in ttt[2]:
                tag = {
                    'key_id': ttt1[0],
                    'key_title': ttt1[1],
                    'value': ttt1[2][2][0] if ttt1[2][2] is not None and ttt1[2][2][0] else None,
                    'value_title': ttt1[2][2][3] if ttt1[2][2] is not None else None,
                    'value_title_short': ttt1[2][2][1] if ttt1[2][2] is not None else None
                }
                tags.append(tag)
        tmp_row['tags'] = tags
    else:
        tmp_row['tags'] = ''

    # 替换 'rating'
    if row3[4] and row3[4] is not None and row3[4][7]:
        tmp_row['rating'] = row3[4][7]
    else:
        tmp_row['rating'] = 0.0

    # 替换 'reviews_cnt'
    if row3[4] and row3[4] is not None and row3[4][8]:
        tmp_row['reviews_cnt'] = row3[4][8]
    else:
        tmp_row['reviews_cnt'] = 0

    # 替换 'latitude' and 'longitude'
    tmp_row['latitude'] = row3[9][2] if row3[9] else ''
    tmp_row['longitude'] = row3[9][3] if row3[9] else ''

    # 替换 'summary'
    if row3[32] and row3[32] is not None and row3[32][0] is not None and row3[32][0][1]:
        tmp_row['summary'] = row3[32][0][1]
    else:
        tmp_row['summary'] = ''

    # 替换 'description'
    if row3[32] and row3[32] is not None and row3[32][1] is not None and row3[32][1][1]:
        tmp_row['description'] = row3[32][1][1]
    else:
        tmp_row['description'] = ''

    # 替换 'price'
    if row3[4] and row3[4] is not None and row3[4][2]:
        tmp_row['price'] = row3[4][2]
    else:
        tmp_row['price'] = ''

    # 替换 other fields
    tmp_row['fid'] = row3[10]
    tmp_row['map_id_encoded'] = row3[78]
    tmp_row['map_id'] = row3[10]
    tmp_row['map_link'] = f'https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s{tmp_row["map_id"]}'

    # 替换 'original_image'
    if row3[72] and row3[72] is not None and row3[72][0] is not None and row3[72][0][1] is not None and row3[72][0][1][
        6] is not None:
        tmp_row['original_image'] = row3[72][0][1][6][0]
    else:
        tmp_row['original_image'] = ''

    # 替换 'image' and 'image_url'
    if row3[37] and row3[37] is not None and row3[37][0] is not None and row3[37][0][0] is not None:
        tmp_row['image'] = row3[37][0][0][6][0]
        tmp_row['image_url'] = row3[37][0][0][6][0]
    else:
        tmp_row['image'] = ''
        tmp_row['image_url'] = ''

    # 替换 'thumbnail'
    if row3[72] and row3[72] is not None and row3[72][0] is not None and row3[72][0][0] is not None:
        tmp_row['thumbnail'] = row3[72][0][0][6][0]
    else:
        tmp_row['thumbnail'] = ''

    tmp_row['icon'] = row3[157] if row3[157] else ''

    # 替换 'temporarily_closed'
    if row3[160] and row3[160][0]:
        tmp_row['temporarily_closed'] = 'true'
    else:
        tmp_row['temporarily_closed'] = ''

    # 替换 'permanently_closed'
    if row3[88] and row3[88][0] == 'CLOSED':
        tmp_row['permanently_closed'] = 'true'
    else:
        tmp_row['permanently_closed'] = ''

    # 替换 'claimed'
    if row3[49] and row3[49] is not None and row3[49][1]:
        tmp_row['claimed'] = False
    else:
        tmp_row['claimed'] = True

    # 替换 'area'
    tmp_row['area'] = row3[183][1] if row3[183] else ''

    # 替换 'plus_code'
    if row3[183] and len(row3[183]) > 2 and len(row3[183][2]) > 2 and row3[183][2][2] and row3[183][2][2][0]:
        tmp_row['plus_code'] = row3[183][2][2][0]
    else:
        tmp_row['plus_code'] = ''

    tmp_row['address'] = row3[39] if row3[39] else ''
    tmp_row['r_city'] = row3[166] if row3[166] else ''

    # Print 'row3[51][0]' items
    if row3[51] and row3[51] is not None:
        if row3[51][0] is not None:
            for ttt in row3[51][0]:
                # print(ttt[6])
                pass
    return tmp_row


params = {
    'authuser': '0',
    'hl': 'zh-CN',
    'entry': 'ttu',
    'g_ep': 'EgoyMDI0MTExMS4wIKXMDSoASAFQAw==',
}


async def fetch_url(session, url):
    """
    异步请求 URL，返回 HTML 内容
    """
    try:
        async with session.get(url, params=params, headers=headers, cookies=cookies, timeout=10) as response:
            return await response.text(), response.status
    except Exception as e:
        print(e)


async def process_task(task, session, collection, finished_count):
    """
    处理任务：爬取数据并保存到 MongoDB
    """
    try_number = task['try_num']
    task_id = task['fid']  # 任务的唯一标识符

    if try_number > 3:
        logger.warning(f"当前任务 | FID: {task['fid']} | 重试次数超过3次，不再重试")
        # 更新任务状态为 error
        await collection.update_one(
            {"fid": task_id},
            {"$set": {"status": "error"}}
        )
        return

    logger.info(f"当前任务 | FID: {task['fid']} | 重试次数: {try_number} ")

    url = f'https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s{task["fid"]}'

    try:
        html_content, status_code = await fetch_url(session, url)

        if status_code == 200:
            extracted_data = parse_detail_new(html_content)  # 解析 HTML 数据
            if extracted_data is None:
                logger.warning(f"解析结果为空 | 状态码: {status_code} | FID: {task['fid']}")
                task['try_num'] += 1
                return task  # 返回任务，稍后重试

            # 更新任务状态为 finished 并保存解析结果
            collection.update_one(
                {"fid": task_id},
                {"$set": {
                    "status": "finished",
                    "data": extracted_data
                }}
            )

            finished_count.value += 1  # 增加已完成任务数量
            logger.success(f"FID: {task['fid']} | 成功保存解析结果到 MongoDB | 已经完成的数量：{finished_count.value}")

        else:
            logger.error(f"请求失败，状态码: {status_code}，URL: {url}")
            task['try_num'] += 1
            return task  # 返回任务，稍后重试

    except Exception as e:
        logger.error(f"任务处理出错，错误: {e}")
        task['try_num'] += 1
        if task['try_num'] <= 3:
            return task  # 返回任务，稍后重试
        else:
            logger.warning(f"当前任务 | FID: {task['fid']} | 重试次数超过3次，不再重试")
            await collection.update_one(
                {"fid": task_id},
                {"$set": {"status": "error"}}
            )


async def worker1(task_queue, finished_count):
    client = MongoClient(MONGO_URI)
    db = client[DB_NAME]
    collection = db[COLLECTION_NAME]

    async with aiohttp.ClientSession() as session:
        while True:
            task = await task_queue.get()
            if task is None:  # 停止信号
                break
            # 处理任务并返回更新后的任务
            updated_task = await process_task(task, session, collection, finished_count)

            # 如果任务需要重试，将其放回队列
            if updated_task:
                await task_queue.put(updated_task)

            task_queue.task_done()


def run_worker_in_process(task_queue, finished_count):
    """
    在新的进程中运行协程
    """
    loop = asyncio.get_event_loop()
    loop.run_until_complete(worker1(task_queue, finished_count))


async def success_count_monitor(completed_count):
    """
    每 1 分钟输出程序运行的时长（分钟）和已完成任务的数量。如果没有变化，记录最后一次任务数量变化事件。
    """
    start_time = time.time()  # 记录程序开始运行的时间
    last_completed_count = completed_count.value  # 初始化最后完成的任务数量
    last_change_time = time.time()  # 初始化上次变化的时间

    while True:
        await asyncio.sleep(60)  # 每 1 分钟检查一次
        elapsed_time = int((time.time() - start_time) // 60)  # 计算已运行的分钟数

        # 如果任务数量没有变化
        if completed_count.value == last_completed_count:
            logger.info(
                f"-------------已运行 {elapsed_time} 分钟 | 完成的任务数量未变化: {completed_count.value} | 最后一次变化的执行时间 {last_change_time} ---------------")
        else:
            # 如果任务数量发生变化，记录新的任务数量和时间
            last_completed_count = completed_count.value
            last_change_time = time.time()  # 更新最后一次变化的时间
            logger.success(
                f"-------------已运行 {elapsed_time} 分钟 | 完成的任务数量: {completed_count.value}---------------")


async def task_maker(task_queue, collection):
    """
    从 MongoDB 中选择 status 为 'unfinished' 的任务，随机选择 50 个任务，再从中随机选取 30 个任务放入队列。
    """
    added_tasks = set()  # 用于跟踪已添加任务的唯一标识
    while True:
        if task_queue.qsize() >= 50:
            logger.info("当前任务队列长度大于50, 休息 10 s")
            await asyncio.sleep(10)
            continue

        try:
            # 从 MongoDB 中选择 status 为 'unfinished' 的任务，并随机选取 50 个任务
            tasks_cursor = collection.aggregate([
                {"$match": {"status": "unfinished"}},  # 过滤条件，选择 status 为 'unfinished' 的任务
                {"$sample": {"size": 50}}  # 随机选择 50 个任务
            ])

            # 将任务转换为列表
            tasks = list(tasks_cursor)

            # 如果没有返回任何任务
            if not tasks:
                logger.info("数据库已无更多任务")
                await asyncio.sleep(5)  # 如果没有任务，稍作等待后继续尝试获取任务
                continue

            # 随机选择 30 个任务
            selected_tasks = random.sample(tasks, min(30, len(tasks)))  # 确保不会超出任务数量

            # 将选择的任务放入队列，并避免重复添加
            for task in selected_tasks:
                task_id = task["fid"]  # 使用 fid 作为唯一标识符
                if task_id not in added_tasks:  # 如果任务未被添加过
                    task['try_num'] = 0
                    await task_queue.put(task)  # 将任务放入队列
                    added_tasks.add(task_id)  # 记录已添加任务的唯一标识

            # 如果任务数量不足 50，允许任务生成器继续进行，而不是休眠太长时间
            if len(tasks) < 50:
                logger.info("任务数量不足 50，稍作等待后继续获取任务")
                await asyncio.sleep(5)  # 稍微短暂等待，避免长时间占用 CPU

        except Exception as e:
            logger.error(f"任务生成器出错，错误: {e}")


class Completed_count1:
    value = 0


async def main():
    """
    主函数，初始化消息队列和任务处理。
    """
    # 连接到 MongoDB
    client = MongoClient(MONGO_URI)
    db = client[DB_NAME]
    collection = db[COLLECTION_NAME]

    completed_count = Completed_count1()

    task_queue = asyncio.Queue()

    logger.info("启动任务生成线程")

    # 协程版本
    task_maker_task = asyncio.create_task(task_maker(task_queue, collection))

    # 启动成功任务计数监控进程，协程版本
    monitor_task = asyncio.create_task(success_count_monitor(completed_count))

    num_workers = 2

    # 协程版本 任务处理器
    worker_tasks = [asyncio.create_task(worker1(task_queue, completed_count)) for _ in range(num_workers)]

    await asyncio.gather(task_maker_task, monitor_task, *worker_tasks)

    # 向队列中放入停止信号，告诉工作进程停止
    for _ in range(num_workers):
        await task_queue.put(None)  # 向队列中放入 None，作为停止信号


# if __name__ == "__main__":
#     print("启动")
#     asyncio.run(main())

asyncio.run(main())
