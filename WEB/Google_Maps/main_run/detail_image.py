import json
import re
import subprocess
from multiprocessing import Process, Queue, Value
import random

import requests
from pymongo import MongoClient
from playwright.sync_api import sync_playwright
import time
from functools import partial

# 日志配置
from config.logconfig import MyLogger

logger = MyLogger().get_logger()

# MongoDB 配置
MONGO_URI = "mongodb://localhost:27017/"
DB_NAME = "google"
COLLECTION_NAME = "fid_test"

status = 'unfinished'
def handle_response(response, return_data):
    global status  # 声明为全局变量
    try:
        result_list = []
        # 检查 URL 是否包含目标字符串
        if "pc/photo/listentityphotos" in response.url:
            client = MongoClient(MONGO_URI)
            db = client[DB_NAME]
            collection = db[COLLECTION_NAME]
            logger.info(f"捕获到目标请求 URL: {response.url}")

            response_result = requests.get(response.url, timeout=5)
            response_text = response_result.text
            cleaned_text = response_text[5:]
            data = json.loads(cleaned_text)

            for i in data[0]:
                images_url = i[6][0]
                result_list.append(images_url)
                # logger.info(images_url)
            logger.info("捕获响应的图片数量：{}".format(len(data[0])))
            return_data['url_data'] = result_list
            # return_data['status'] = 'finished'
            status = 'finished'
            return_data["last_update_time"] = time.time()  # 更新时间戳


    except Exception as e:
        logger.error(f"处理响应时出错: {e}")
        status = 'failed'


height_value = 0
def scroll_page(page):
    global height_value  # 声明为全局变量
    try:
        element_locator = page.locator('//*[@id="QA0Szd"]/div/div/div[1]/div[2]/div/div[1]/div/div/div[3]/div[1]')
        style = element_locator.get_attribute("style")
        logger.info(style)
        # 使用正则表达式提取 height 的值
        match = re.search(r"height:\s*(\d+)px", style)
        if match:
            height = int(match.group(1))  # 提取的值转换为整数
            # print(f"高度值是: {height_value}")
        else:
            logger.warning("未找到 height 值")
        logger.info(f"下移：{height - height_value}")
        page.mouse.wheel(0, height - height_value)
        style = element_locator.get_attribute("style")
        logger.info(style)
        height_value = height
    except Exception as e:
        logger.error(f"滚动函数发生错误:{e}")


# def scroll_page(page, max_scrolls=50, scroll_step=500):
#     """
#     执行页面下拉操作，确保拉到底部，避免滚动距离过大导致卡死。
#
#     :param page: Playwright 的 Page 对象
#     :param max_scrolls: 最大滚动次数，防止死循环
#     :param scroll_step: 每次滚动的像素值
#     """
#     try:
#         element_locator = page.locator('//*[@id="QA0Szd"]/div/div/div[1]/div[2]/div/div[1]/div/div/div[3]/div[1]')
#         hight = element_locator.get_attribute("style")
#         logger.info(hight)
#         page.pause()
#         last_height = page.evaluate("document.body.scrollHeight")  # 获取初始页面高度
#         for _ in range(max_scrolls):
#             # 执行滚动
#             page.mouse.wheel(0, scroll_step)
#
#             # 等待页面加载（如果有新内容）
#             time.sleep(0.5)  # 可根据需要调整等待时间
#
#             # 获取当前页面高度
#             new_height = page.evaluate("document.body.scrollHeight")
#
#             # 如果页面高度未变化，说明已到底
#             if new_height == last_height:
#                 logger.info("页面已滚动到底部")
#                 break
#
#             # 更新 last_height 以进行下一次比较
#             last_height = new_height
#         else:
#             logger.warning("达到最大滚动次数，但页面可能未完全加载")
#     except Exception as e:
#         logger.error(f"滚动函数发生错误: {e}")


def worker1(task_queue):
    """
    从任务队列中获取 URL，并使用 Playwright 访问页面。
    """
    client = MongoClient(MONGO_URI)
    db = client[DB_NAME]
    collection = db[COLLECTION_NAME]

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=False)
        # browser = p.chromium.connect_over_cdp(f"http://127.0.0.1:9222")
        context = browser.new_context(locale="en-GB")
        page = context.new_page()
        current_listener = None  # 用于记录当前的监听器

        while True:
            if task_queue.empty():
                logger.info("暂无任务，休息10s")
                time.sleep(10)
            task = task_queue.get()
            if task is None:  # 停止信号
                break

            url = task.get("data").get("map_link")
            fid = task['fid']
            logger.info(f"当前任务fid:{fid} | 任务队列长度：{task_queue.qsize()}")
            if not url:
                logger.error("任务中缺少 map_link，跳过此任务。")
                continue

            try:
                # 移除上一个监听器
                if current_listener:
                    page.remove_listener("response", current_listener)
                # 添加新的监听器
                return_data = {}
                return_data["status"] = 'unfinished'
                return_data["last_update_time"] = time.time()  # 更新时间戳

                current_listener = lambda response: handle_response(response, return_data)
                page.on("response", current_listener)
                page.goto(url, timeout=10000)  # 设置最大等待时间为 7 秒
                page.wait_for_selector("body", timeout=7000)  # 设置等待 DOM 元素加载完成的最大时间为 7 秒

                # page.pause()
                # if '添加照片和视频' not in html_content and '添加照片' in html_content:
                if not page.locator(
                        '//*[@id="QA0Szd"]/div/div/div[1]/div[2]/div/div[1]/div/div/div[1]/div[1]/button').is_visible():
                    logger.info("该页面无图片")
                    # logger.info(html_content)
                    # page.pause()
                    collection.update_one(
                        {"fid": fid},  # 根据 fid 找到文档
                        {"$set": {"status": "not have_image_url"}}
                    )
                    logger.success(f"已将{fid} 修改状态值:not have_image_url")
                else:
                    page.locator(
                        '//*[@id="QA0Szd"]/div/div/div[1]/div[2]/div/div[1]/div/div/div[1]/div[1]/button/img').click()
                    time.sleep(1)
                    buttons_locator = page.locator(
                        '//*[@role="tablist"]/button')
                    # 获取按钮的数量
                    button_count = buttons_locator.count()
                    # page.pause()
                    # 遍历每个按钮并点击
                    image_data = {}
                    logger.info(f"按钮数量：{button_count}")
                    global status  # 声明为全局变量
                    for i in range(button_count):
                        print(i)
                        global height_value  # 声明全局变量
                        height_value = 0  # 在每个任务开始时重置高度值
                        type_result_list = []
                        button = buttons_locator.nth(i)  # 获取第 i 个按钮
                        second_div_value = button.locator('div:nth-child(2) > div:nth-child(2)').text_content()
                        if i !=0 :
                            page.get_by_role("tab", name=second_div_value).click()
                        # button.click()
                        time.sleep(1)
                        aa = 0
                        while True:
                            # if return_data['status'] == 'unfinished':
                            if status == 'unfinished':
                                last_time = return_data["last_update_time"]
                                if time.time() - last_time > 10:
                                    logger.info("超过10s没数据包，结束操作")
                                    return_data["last_update_time"] = time.time()  # 更新时间戳
                                    break
                                aa = aa+1
                                if aa > 3:
                                    page.pause()
                                logger.info("暂未完成")
                                time.sleep(1)
                                # page.pause()
                                continue
                            elif status == 'failed':
                                raise RuntimeError("任务状态为 'failed'，抛出异常")
                            result_list = return_data['url_data']
                            type_result_list.extend(result_list)

                            if len(result_list) >= 20:
                                logger.info("执行下滚")
                                result_list.clear()  # 清空 result_list
                                search_btn = page.locator('//*[@id="searchbox-searchbutton"]')
                                #     # 获取元素的边界信息
                                box = search_btn.bounding_box()
                                # 确保 box 不是 None
                                if box:
                                    page.mouse.move(box['x'] + box['width'] / 2, box['y'] + box['height'] / 2 + 200)
                                else:
                                    logger.warning("无法获取 search_btn 的边界信息，跳过滚动操作")
                                if 'url_data' in return_data:
                                    logger.info("删除url_data")
                                    del return_data['url_data']
                                # return_data['status'] = 'unfinished'
                                status = 'unfinished'
                                last_time = return_data["last_update_time"]
                                if time.time() - last_time > 10:
                                    logger.info("超过10s没数据包，结束下拉操作")
                                    break
                                scroll_page(page)

                                # page.pause()
                            else:
                                if 'url_data' in return_data:
                                    del return_data['url_data']
                                # return_data['status'] = 'unfinished'
                                status = 'unfinished'
                                break
                        image_data[second_div_value] = type_result_list
                        print(image_data)
                    if button_count == 0:
                        logger.info("没有button，数量为0")
                        type_result_list = []
                        while True:
                            # if return_data['status'] == 'unfinished':
                            if status == 'unfinished':
                                continue
                            result_list = return_data['url_data']
                            type_result_list.extend(result_list)

                            if len(result_list) >= 20:
                                logger.info("执行下滚")
                                result_list.clear()  # 清空 result_list
                                search_btn = page.locator('//*[@id="searchbox-searchbutton"]')
                                #     # 获取元素的边界信息
                                box = search_btn.bounding_box()
                                # 确保 box 不是 None
                                if box:
                                    page.mouse.move(box['x'] + box['width'] / 2, box['y'] + box['height'] / 2 + 200)
                                else:
                                    logger.warning("无法获取 search_btn 的边界信息，跳过滚动操作")
                                if 'url_data' in return_data:
                                    del return_data['url_data']
                                # return_data['status'] = 'unfinished'
                                status = 'unfinished'
                                scroll_page(page)
                            else:
                                if 'url_data' in return_data:
                                    del return_data['url_data']
                                # return_data['status'] = 'unfinished'
                                status = 'unfinished'
                                break
                        image_data["All"] = type_result_list
                    logger.info(image_data)
                    collection.update_one(
                        {"fid": fid},  # 根据 fid 找到文档
                        {"$set": {"status": "have_image_url", "image_data": image_data}}
                    )
                    logger.success(f"已将{fid} 修改状态值:have_image_url,已经成功保存图片数据")
                    # page.pause()


            except Exception as e:
                logger.error(f"访问页面失败: {e}| 任务重新添加到任务队列中 | {url}")
                # page.pause()
                task_queue.put(task)

        browser.close()


def task_maker(task_queue):
    """
    从 MongoDB 中选择未完成的任务，随机选择若干任务放入队列。
    """
    client = MongoClient(MONGO_URI)
    db = client[DB_NAME]
    collection = db[COLLECTION_NAME]
    added_task_ids = set()  # 用于跟踪已添加任务的ID

    while True:
        # 如果队列长度大于 50，休息一段时间
        if task_queue.qsize() >= 50:
            logger.info("当前任务队列长度大于 50，休息 10 秒")
            time.sleep(10)
            continue

        try:
            # 随机选择 50 个未完成的任务
            tasks_cursor = collection.find(
                {"status": "finished"},  # 筛选 status 为 finished 的文档
                {"_id": 1, "fid": 1, "data.map_link": 1}  # 限制返回的字段
            ).limit(5000)

            tasks = list(tasks_cursor)
            if not tasks:
                logger.info("没有更多未完成任务，休息 10 秒")
                time.sleep(10)
                continue
            random_tasks = random.sample(tasks, 50)  # 随机选择50个文档

            for task in random_tasks:
                if task['fid'] in added_task_ids:  # 检查是否已经添加过
                    # logger.warning("重复")

                    continue
                else:
                    task_queue.put(task)
                    added_task_ids.add(task['fid'])  # 记录已添加任务的ID

        except Exception as e:
            logger.error(f"任务生成器出错：{e}")
        logger.info(f"任务生成器 | 当前队列长度为：{task_queue.qsize()}")
        time.sleep(5)


def main():
    """
    主函数，初始化任务队列和处理流程。
    """
    task_queue = Queue()
    logger.info("启动任务生成器和工作进程")

    # 启动任务生成器进程
    task_maker_process = Process(target=task_maker, args=(task_queue,))
    task_maker_process.start()

    num_workers = 1  # 工作进程数量
    worker_processes = [Process(target=worker1, args=(task_queue,)) for _ in range(num_workers)]

    for process in worker_processes:
        process.start()

    try:
        # 等待任务生成器完成
        task_maker_process.join()

        # 等待工作进程完成
        for _ in range(num_workers):
            task_queue.put(None)  # 发送停止信号

        for process in worker_processes:
            process.join()

    except KeyboardInterrupt:
        logger.warning("检测到手动中断，正在终止所有进程...")
        task_maker_process.terminate()
        for process in worker_processes:
            process.terminate()

    logger.info("所有进程已完成")


if __name__ == "__main__":
    main()
