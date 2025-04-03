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
    urls = ['https://maps.app.goo.gl/ViqQ8V5TQQHUC7Ny9','https://www.google.com/maps?cid=17441009113514111200']

    # for url in urls:
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
                        await page.goto(hid)
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
                                        logger.success(f"任务提交成功，响应内容：{response},任务状态码：{status}")
                                else:
                                    logger.error("No match found.无匹配的经纬度")
                            else:
                                fid = match.group()
                                print(fid)
                                url_new = f'https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s{fid}'
                                await page.goto(url_new)
                                await page.wait_for_url(lambda url: "@" in url, timeout=10000)  # 10秒超时
                                current_url = page.url
                                # 正则表达式匹配 @ 后面的经纬度
                                match = re.search(r'@(\d+\.\d+),(\d+\.\d+),(\d+[a-zA-Z]*)', current_url)
                                if match:
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
                                        logger.success(f"任务提交成功，响应内容：{response},任务状态码：{status}")
                                else:
                                    logger.error("No match found.无匹配的经纬度")
                        except Exception as e:
                            print(f"等待URL变化时出错: {e}")
                    except Exception as e:
                        logger.error(f"获取任务出错：{e},响应内容{data},休眠10s")
                        await asyncio.sleep(10)
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
