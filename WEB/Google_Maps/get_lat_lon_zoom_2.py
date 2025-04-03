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
    async with aiohttp.ClientSession() as session:
        get_url = 'https://www.xiaoxizhongbao.com/googleurl/gettask'
        report_url = 'https://www.xiaoxizhongbao.com/googleurl/report'
        while True:
            try:
                async with session.get(get_url) as response:
                    try:
                        data = await response.text()
                        data_json = json.loads(data)
                        params = data_json['params']
                        hid = params['hid']
                        logger.info(f"获取到任务链接：{hid}")
                        try:
                            await page.goto(hid)
                            await expect(page.locator("canvas").first).to_be_visible()
                            # 获取 canvas 元素的边界框
                            canvas = page.locator("canvas").first
                            bounding_box = await canvas.bounding_box()
                            if bounding_box:
                                # 计算中间点的坐标
                                center_x = bounding_box['x'] + bounding_box['width'] / 2
                                center_y = bounding_box['y'] + bounding_box['height'] / 2
                                # 移动鼠标到中间点
                                await page.mouse.move(center_x, center_y)
                                # 初始化上一次的数值
                                last_numeric_values = None
                                while True:
                                    # 执行鼠标上滚操作
                                    await page.mouse.wheel(0, -1300)  # 负值表示向上滚动

                                    try:
                                        await asyncio.sleep(0.5)

                                        # 获取当前 URL
                                        current_url = page.url

                                        # 使用正则表达式提取数值部分
                                        match = re.search(r'@(\d+\.\d+),(\d+\.\d+),(\d+[a-zA-Z]*)', current_url)
                                        if match:
                                            # 提取三部分数值
                                            numeric_values = (float(match.group(1)), float(match.group(2)), match.group(3))
                                            print("当前 URL 数值:", numeric_values)

                                            # 如果数值不再变化，退出循环
                                            if numeric_values == last_numeric_values:
                                                print("URL 数值不再变化，结束循环")
                                                latitude = match.group(1)
                                                longitude = match.group(2)
                                                zoom = match.group(3)
                                                logger.info(
                                                    f"链接：{hid} | 浏览器自动转换url的方式 | Latitude: {latitude}, Longitude: {longitude}, Zoom: {zoom}")
                                                data_info = {
                                                    'latitude': latitude,
                                                    'longitude': longitude,
                                                    'zoom': zoom,
                                                }
                                                up_data = {
                                                    'data': data_info,
                                                    'params': params
                                                }
                                                logger.info(up_data)
                                                async with session.post(report_url, json=up_data) as response:
                                                    response_text = await response.text()  # 假设返回的是 JSON 数据
                                                    status = response.status
                                                    logger.success(f"任务提交成功，响应内容：{response_text},任务状态码：{status}")
                                                break

                                            # 更新上一次的数值
                                            last_numeric_values = numeric_values
                                        else:
                                            print("未找到数值部分，继续循环")
                                    except Exception as e:
                                        print(f"等待 URL 变化超时或出错: {e}")
                                        continue
                        except Exception as e:
                            logger.error(f"加载页面出错：{e}")

                    except Exception as e:
                        logger.error(f"获取任务出错：{e},响应内容{data},休眠10s")
                        await asyncio.sleep(10)
            except Exception as e:
                logger.error(f"请求公司接口出错：{e}")
                await asyncio.sleep(3)


async def main() -> None:
    num_workers = 3  # 工作进程数量
    async with async_playwright() as playwright:
        # 创建并启动三个 run 协程
        run_tasks = [asyncio.create_task(run(playwright)) for _ in range(num_workers)]
        # 等待所有 run 协程完成
        await asyncio.gather(*run_tasks)


asyncio.run(main())
