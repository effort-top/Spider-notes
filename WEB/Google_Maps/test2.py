import asyncio
import json
import random
import re
import time
import aiohttp

import requests
from playwright.async_api import Playwright, async_playwright, expect
from pymongo import MongoClient

from config.logconfig import MyLogger

logger = MyLogger().get_logger()


async def run(playwright):
    browser = await playwright.chromium.launch(headless=False)
    context = await browser.new_context(locale="en-GB")
    page = await context.new_page()
    urls = ['https://maps.app.goo.gl/gxYn4D3jKoD26iWb6?g_st=iw']

    for url in urls:
        async with aiohttp.ClientSession() as session:

            try:
                await page.goto(url)
                try:
                    # 等待 URL 变化，匹配包含 @ 的 URL
                    await page.wait_for_url(lambda url: "@" in url, timeout=10000)  # 10秒超时
                    current_url = page.url
                    # 正则表达式
                    pattern = r"0x[0-9a-f]+:0x[0-9a-f]+"
                    # 查找匹配
                    match = re.search(pattern, current_url)
                    if match is None:
                        match = re.search(r'@(\d+\.\d+),(\d+\.\d+),(\d+[a-zA-Z]*)', current_url)
                        print(current_url)
                        if match:
                            latitude = match.group(1)
                            longitude = match.group(2)
                            zoom = match.group(3)
                            logger.info(
                                f"链接：{url} | 浏览器自动转换url的方式 | Latitude: {latitude}, Longitude: {longitude}, Zoom: {zoom}")
                            data_info = {
                                'latitude': latitude,
                                'longitude': longitude,
                                'zoom': zoom,
                            }
                    else:

                        fid = match.group()
                        print(fid)
                        url_new = f'https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s{fid}'
                        await page.goto(url_new)
                        # 正则表达式匹配 @ 后面的经纬度
                        match = re.search(r'@(\d+\.\d+),(\d+\.\d+),(\d+[a-zA-Z]*)', current_url)
                        if match:
                            latitude = match.group(1)
                            longitude = match.group(2)
                            zoom = match.group(3)
                            logger.info(
                                f"链接：{url} | 浏览器自动转换url的方式 | Latitude: {latitude}, Longitude: {longitude}, Zoom: {zoom}")
                            data_info = {
                                'latitude': latitude,
                                'longitude': longitude,
                                'zoom': zoom,
                            }

                        else:
                            logger.error("No match found.无匹配的经纬度")
                except Exception as e:
                    print(f"等待URL变化时出错: {e}")


            except Exception as e:
                logger.error(f"请求公司接口出错：{e}")
                await asyncio.sleep(3)


async def main() -> None:
    num_workers = 1  # 工作进程数量
    async with async_playwright() as playwright:
        # 创建并启动三个 run 协程
        run_tasks = [asyncio.create_task(run(playwright)) for _ in range(num_workers)]
        # 等待所有 run 协程完成
        await asyncio.gather(*run_tasks)


asyncio.run(main())


# from pymongo import MongoClient
#
# # MongoDB 连接信息
# MONGO_URI = "mongodb://localhost:27017/"
# DB_NAME = "google"  # 替换为你自己的数据库名称
# COLLECTION_NAME = "fid_test"  # 替换为你自己的集合名称
#
# # 要插入的数据
# fid = '0x3e2ee3e73c1a2a87:0x3edd59d4b34db85'
# status = "unfinished"
# tag = 1
#
# # 创建 MongoDB 客户端
# client = MongoClient(MONGO_URI)
#
# # 选择数据库
# db = client[DB_NAME]
#
# # 选择集合
# collection = db[COLLECTION_NAME]
#
# # 插入数据
# data = {
#     "fid": fid,
#     "status": status,
#     "tag": tag
# }
#
# # 插入一条数据
# result = collection.insert_one(data)
#
# # 打印插入结果
# if result.inserted_id:
#     print(f"数据插入成功！插入的文档 ID 为: {result.inserted_id}")
# else:
#     print("数据插入失败！")
#
# # 关闭连接
# client.close()
