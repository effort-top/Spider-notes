import asyncio
import json
import random
import re
import time

import requests
from playwright.async_api import Playwright, async_playwright, expect
from pymongo import MongoClient

from config.logconfig import MyLogger

logger = MyLogger().get_logger()

MONGO_URI = "mongodb://localhost:27017/"
DB_NAME = "google"  # 替换为你自己的数据库名称
COLLECTION_NAME = "fidData_5"  # 替换为你自己的集合名称

status = 'unfinished'
async def handle_response(response,return_data):
    global status  # 声明为全局变量
    global try_num
    try:
        result_list = []
        # 检查 URL 是否包含目标字符串
        if "pc/photo/listentityphotos" in response.url:
            # logger.info(f"捕获到目标请求 URL: {response.url}")
            # response_result = requests.get(response.url, timeout=5)
            response_text = await response.text()
            cleaned_text = response_text[5:]

            data = json.loads(cleaned_text)
            if data[0] is not None:
                for i in data[0]:
                    images_url = i[6][0]
                    result_list.append(images_url)
                    # logger.info(images_url)
                logger.info("捕获响应的图片数量：{}".format(len(data[0])))
                return_data['url_data'] = result_list
                try_num = 0
                status = 'finished'

            else:
                for i in data[12][0]:
                    images_url = i[3][0][6][0]
                    result_list.append(images_url)
                    # logger.info(images_url)
                logger.info(f"另外一种结构！！！")
                logger.info("捕获响应的图片数量：{}".format(len(data[12][0])))
                return_data['url_data'] = result_list
                try_num = 0
                status = 'finished'

    except Exception as e:
        logger.error(f"处理响应时出错: {e}")
        status = 'false'
async def handle_navigation(route, request):
    if request.resource_type == "image":
        await route.abort()
    else:
        await route.continue_()
height_value = 0

async def get_scroll_position(page):
    # 使用 page.evaluate() 执行 JavaScript 代码
    # window.scrollY 获取垂直滚动的像素数
    # document.documentElement.scrollHeight 获取整个文档的总高度
    # document.documentElement.scrollTop 获取当前滚动条的垂直位置
    scroll_position = await page.evaluate("""(function(){
        var container = document.querySelectorAll('.m6QErb.XiKgde')
        return {
            scrollBottom: container[container.length - 1].getBoundingClientRect().bottom,
        };
    })()""")

    logger.info(f"Scroll Position: {scroll_position.get('scrollBottom')}")
    return scroll_position.get('scrollBottom')
async def scroll_page(page):
    global height_value  # 声明为全局变量

    try:
        # element_locator = page.locator('//*[@id="QA0Szd"]/div/div/div[1]/div[2]/div/div[1]/div/div/div[3]/div[1]')
        # await element_locator.wait_for(state="visible", timeout=3000)
        # style = await element_locator.get_attribute("style")
        # logger.info(style)
        new_height = await get_scroll_position(page)
        logger.info(f"下移：{new_height}")
        await page.mouse.wheel(0, new_height)
        return 'ture'
    except Exception as e:
        logger.error(f"滚动函数发生错误:{e}")
        return 'false'

try_num = 0
async def run(playwright: Playwright,task_queue) -> None:
    client = MongoClient(MONGO_URI)
    db = client[DB_NAME]
    collection = db[COLLECTION_NAME]

    browser = await playwright.chromium.launch(headless=False)
    context = await browser.new_context(locale="en-GB")
    page = await context.new_page()
    current_listener = None  # 用于记录当前的监听器
    while True:
        if task_queue.empty():
            logger.info("暂无任务，休息10s")
            await asyncio.sleep(10)

        task = await task_queue.get()
        if task is None:  # 停止信号
            break

        task_data = task.get("data")
        url = task_data.get("map_link")
        fid = task['fid']
        logger.info(f"当前任务fid:{fid} | 任务队列长度：{task_queue.qsize()}")
        if not url:
            logger.error("任务中缺少 map_link，跳过此任务。")
            continue
        try:
            # 移除上一个监听器
            if current_listener:
                page.remove_listener("response", current_listener)
            # 设置拦截规则，阻止图片加载
            # await page.route('**/*', handle_navigation)
            return_data = {}
            current_listener = lambda response: handle_response(response, return_data)

            page.on("response", current_listener)
            await page.goto(url, timeout=10000)
            await page.wait_for_selector("body", timeout=7000)
            button1 = page.locator('//*[@id="QA0Szd"]/div/div/div[1]/div[2]/div/div[1]/div/div/div[1]/div[1]/button')
            if not await button1.is_visible():
                logger.info("该页面无图片")
                collection.update_one(
                    {"fid": fid},  # 根据 fid 找到文档
                    {"$set": {"status": "not have_image_url"}}
                )
                logger.success(f"已将{fid} 修改状态值:not have_image_url")
            else:
                await page.locator(
                    '//*[@id="QA0Szd"]/div/div/div[1]/div[2]/div/div[1]/div/div/div[1]/div[1]/button').click()
                await asyncio.sleep(2)
                buttons_locator = page.locator(
                    '//*[@role="tablist"]/button')
                # 获取按钮的数量
                button_count = await buttons_locator.count()
                button = buttons_locator.nth(0)  # 获取第 i 个按钮
                image_data = {}
                global status  # 声明为全局变量
                # global first_time
                for i in range(button_count):
                    type_result_list = []
                    global height_value  # 声明全局变量
                    height_value = 0  # 在每个任务开始时重置高度值
                    button = buttons_locator.nth(i)  # 获取第 i 个按钮
                    second_div_value = await button.locator('div:nth-child(2) > div:nth-child(2)').text_content()
                    print(second_div_value)
                    if second_div_value == 'Overview' or second_div_value == 'Reviews':
                        raise RuntimeError("标签拿到 Overview，抛出异常，重新返回任务队列")
                        # await page.pause()
                    if i != 0:
                        # await page.get_by_role("tab", name=second_div_value).nth(0).click()
                        await button.click()
                        await asyncio.sleep(0.5)
                    global try_num
                    try_num = 0
                    # first_time = time.time()
                    scroll_result = await scroll_page(page)
                    logger.info("提前下移")
                    if scroll_result == 'false':
                        raise RuntimeError("任务状态为 'failed'，抛出异常")
                    while True:
                        if status == 'unfinished':
                            try_num += 1
                            if try_num == 17:
                                logger.info("超过10s没有监听到响应数据，判定为没有翻页，进入下一个tab")
                                break
                            if try_num %5 == 0:
                                scroll_result = await scroll_page(page)
                                logger.warning("5s内没有请求包，可能卡住，尝试下移")
                                if scroll_result == 'false':
                                    raise RuntimeError("任务状态为 'failed'，抛出异常")
                            logger.info(f"请求暂未完成 | try_num:{try_num}")
                            await asyncio.sleep(1)
                            # page.pause()
                            continue
                        elif status == 'false':
                            raise RuntimeError("任务状态为 错误，抛出异常")
                        result_list = return_data['url_data']
                        type_result_list.extend(result_list)

                        if len(result_list) >= 20:
                            logger.info("执行下滚")
                            result_list.clear()  # 清空 result_list
                            search_btn = page.locator('//*[@id="searchbox-searchbutton"]')
                            #     # 获取元素的边界信息
                            box = await search_btn.bounding_box()
                            # 确保 box 不是 None
                            if box:
                                await page.mouse.move(box['x'] + box['width'] / 2, box['y'] + box['height'] / 2 + 200)
                            else:
                                logger.warning("无法获取 search_btn 的边界信息，跳过滚动操作")
                            if 'url_data' in return_data:
                                del return_data['url_data']
                            # return_data['status'] = 'unfinished'
                            status = 'unfinished'
                            scroll_result = await scroll_page(page)
                            if scroll_result == 'false':
                                raise RuntimeError("任务状态为 'failed'，抛出异常")
                            await asyncio.sleep(0.5)
                            # page.pause()
                        else:
                            if 'url_data' in return_data:
                                del return_data['url_data']
                            # return_data['status'] = 'unfinished'
                            status = 'unfinished'
                            break
                    image_data[second_div_value] = type_result_list
                if button_count == 0:
                    logger.info("没有button，数量为0")
                    type_result_list = []
                    try_num = 0
                    while True:
                        if status == 'unfinished':
                            try_num += 1
                            if try_num == 17:
                                logger.info("超过10s没有监听到响应数据，判定为没有翻页，进入下一个tab")
                                break
                            if try_num % 5 == 0:
                                scroll_result = await scroll_page(page)
                                logger.warning("5s内没有请求包，可能卡住，尝试下移")
                                if scroll_result == 'false':
                                    raise RuntimeError("任务状态为 'failed'，抛出异常")
                            # page.pause()
                            continue
                        elif status == 'false':
                            raise RuntimeError("任务状态为 错误，抛出异常")
                        result_list = return_data['url_data']
                        type_result_list.extend(result_list)

                        if len(result_list) >= 20:
                            logger.info("执行下滚")
                            result_list.clear()  # 清空 result_list
                            search_btn = page.locator('//*[@id="searchbox-searchbutton"]')
                            #     # 获取元素的边界信息
                            box = await search_btn.bounding_box()
                            # 确保 box 不是 None
                            if box:
                                await page.mouse.move(box['x'] + box['width'] / 2, box['y'] + box['height'] / 2 + 200)
                            else:
                                logger.warning("无法获取 search_btn 的边界信息，跳过滚动操作")
                            if 'url_data' in return_data:
                                del return_data['url_data']
                            # return_data['status'] = 'unfinished'
                            status = 'unfinished'
                            scroll_result = await scroll_page(page)
                            if scroll_result == 'false':
                                raise RuntimeError("任务状态为 'failed'，抛出异常")

                            # page.pause()
                        else:
                            if 'url_data' in return_data:
                                del return_data['url_data']
                            # return_data['status'] = 'unfinished'
                            status = 'unfinished'
                            break
                    image_data["All"] = type_result_list
                # logger.info(image_data)
                for key, value in image_data.items():
                    # 检查value是否是列表
                    if isinstance(value, list):
                        # 记录每个key对应的value列表的长度
                        logger.info(f"{key} 对应的长度为: {len(value)}")
                # 遍历字典中的所有值
                for value in image_data.values():
                    if value == []:
                        # 如果发现值为空列表，则抛出异常
                        raise ValueError("发现一个值为空列表的字段,")
                collection.update_one(
                    {"fid": fid},  # 根据 fid 找到文档
                    {"$set": {"status": "have_image_url", "image_data": image_data}}
                )
                logger.success(f"已将{fid} 修改状态值:have_image_url,已经成功保存图片数据")
        except Exception as e:
            logger.error(f"访问页面失败: {e}| 任务重新添加到任务队列中 | {url}")
            # await page.pause()
            await task_queue.put(task)


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
            # 随机选择 50 个未完成的任务
            tasks_cursor = collection.find(
                {"status": "finished"},  # 筛选 status 为 finished 的文档
                {"_id": 1, "fid": 1, "data.map_link": 1}  # 限制返回的字段
            ).limit(500)

            # 将任务转换为列表
            tasks = list(tasks_cursor)

            # 如果没有返回任何任务
            if not tasks:
                logger.info("数据库已无更多任务")
                await asyncio.sleep(5)  # 如果没有任务，稍作等待后继续尝试获取任务
                continue

            # 随机选择 30 个任务
            selected_tasks = random.sample(tasks, min(50, len(tasks)))  # 确保不会超出任务数量

            # 将选择的任务放入队列，并避免重复添加
            for task in selected_tasks:
                task_id = task["fid"]  # 使用 fid 作为唯一标识符
                if task_id not in added_tasks:  # 如果任务未被添加过
                    await task_queue.put(task)  # 将任务放入队列
                    added_tasks.add(task_id)  # 记录已添加任务的唯一标识

            # 如果任务数量不足 50，允许任务生成器继续进行，而不是休眠太长时间
            if len(tasks) < 50:
                logger.info("任务数量不足 50，稍作等待后继续获取任务")
                await asyncio.sleep(5)  # 稍微短暂等待，避免长时间占用 CPU

        except Exception as e:
            logger.error(f"任务生成器出错，错误: {e}")
        logger.info(f"任务生成器 | 当前队列长度为：{task_queue.qsize()}")
        await asyncio.sleep(10)

async def main() -> None:

    # 连接到 MongoDB
    client = MongoClient(MONGO_URI)
    db = client[DB_NAME]
    collection = db[COLLECTION_NAME]
    task_queue = asyncio.Queue()
    # 协程版本
    task_maker_task = asyncio  .create_task(task_maker(task_queue, collection))
    num_workers = 1  # 工作进程数量
    async with async_playwright() as playwright:
        # 创建并启动三个 run 协程
        run_tasks = [asyncio.create_task(run(playwright, task_queue)) for _ in range(num_workers)]

        # 等待所有 run 协程完成
        await asyncio.gather(task_maker_task, *run_tasks)
    # 等待所有任务完成
    await task_queue.join()
    # async with async_playwright() as playwright:
    #     await run(playwright)


asyncio.run(main())
