# import asyncio
# import json
# import random
# import re
# import time
# import aiohttp
#
# import requests
# from playwright.async_api import Playwright, async_playwright, expect
# from pymongo import MongoClient
#
# from config.logconfig import MyLogger
#
# logger = MyLogger().get_logger()
#
#
# async def run(playwright):
#     browser = await playwright.chromium.launch(headless=False)
#     context = await browser.new_context(locale="en-GB")
#     page = await context.new_page()
#     urls = ["https://maps.app.goo.gl/ViqQ8V5TQQHUC7Ny9","https://maps.app.goo.gl/hxb6LHPtMeHFKGEU9","https://maps.app.goo.gl/AqdLASpgzmWgEhTK7","https://maps.app.goo.gl/QTiQy84iJgKvuuja8"]
#     for url in urls:
#         try:
#             logger.info(f"获取到任务链接：{url}")
#             await page.goto(url)
#             try:
#                 # 等待 URL 变化，匹配包含 @ 的 URL
#                 await page.wait_for_url(lambda url: "@" in url, timeout=10000)  # 10秒超时
#                 current_url = page.url
#                 logger.info(current_url)
#                 # 正则表达式匹配 @ 后面的经纬度
#                 match = re.search(r'@(\d+\.\d+),(\d+\.\d+),(\d+\.?\d*[a-zA-Z]*)', current_url)
#                 if match:
#                     latitude = match.group(1)
#                     longitude = match.group(2)
#                     zoom = match.group(3)
#                     logger.info(
#                         f"链接：{url} | 浏览器自动转换url的方式 | Latitude: {latitude}, Longitude: {longitude}, Zoom: {zoom}")
#                     data_info = {
#                         'latitude': latitude,
#                         'longitude': longitude,
#                         'zoom': zoom,
#                     }
#                 else:
#                     logger.error("No match found.无匹配的经纬度")
#             except Exception as e:
#                 print(f"等待URL变化时出错: {e}")
#         except Exception as e:
#             await asyncio.sleep(10)
#         break
#
#
#
# async def main() -> None:
#     num_workers = 1  # 工作进程数量
#     async with async_playwright() as playwright:
#         # 创建并启动三个 run 协程
#         run_tasks = [asyncio.create_task(run(playwright)) for _ in range(num_workers)]
#         # 等待所有 run 协程完成
#         await asyncio.gather(*run_tasks)
#
#
# asyncio.run(main())

MONGO_URI = "mongodb://localhost:27017/"
DB_NAME = "google"  # 替换为你自己的数据库名称
COLLECTION_NAME = "fidData_4"  # 替换为你自己的集合名称
from pymongo import MongoClient


# 连接数据库
client = MongoClient(MONGO_URI)
db = client[DB_NAME]
collection = db[COLLECTION_NAME]

# 查询status为finished的文档，最多查询10000条
docs_to_update = collection.find({"status": "finished"}).limit(10000)

# 遍历查询结果，更新status为finished1
for doc in docs_to_update:
    collection.update_one({"_id": doc["_id"]}, {"$set": {"status": "finished1"}})

print("更新完成")


# import asyncio
# from playwright.async_api import Playwright, async_playwright, expect
#
#
# async def run(playwright: Playwright) -> None:
#     browser = await playwright.chromium.launch(headless=False)
#     context = await browser.new_context()
#     page = await context.new_page()
#     await page.goto("https://maps.app.goo.gl/VabfcA3UbqcF6U758")
#     await expect(page.locator("canvas").first).to_be_visible()
#
#     # 获取 canvas 元素的边界框
#     canvas = page.locator("canvas").first
#     bounding_box = await canvas.bounding_box()
#
#     if bounding_box:
#         # 计算中间点的坐标
#         center_x = bounding_box['x'] + bounding_box['width'] / 2
#         center_y = bounding_box['y'] + bounding_box['height'] / 2
#
#         # 移动鼠标到中间点
#         await page.mouse.move(center_x, center_y)
#
#         # 执行鼠标上滚操作
#         await page.mouse.wheel(0, -100)  # 负值表示向上滚动
#
#     # ---------------------
#     await context.close()
#     await browser.close()
#
#
# async def main() -> None:
#     async with async_playwright() as playwright:
#         await run(playwright)
#
#
# asyncio.run(main())
