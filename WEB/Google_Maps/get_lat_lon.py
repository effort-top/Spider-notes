import asyncio
import re
from playwright.async_api import Playwright, async_playwright, expect


async def run(playwright: Playwright) -> None:
    browser = await playwright.chromium.launch(headless=False)
    context = await browser.new_context()
    page = await context.new_page()
    urls = ['https://maps.app.goo.gl/ViqQ8V5TQQHUC7Ny9','https://www.google.com/maps?cid=17441009113514111200']
    for url in urls:
        await page.goto(url)
        # 等待页面完全加载
        await page.wait_for_load_state('load')

        # 获取当前页面的URL
        while True:
            current_url = page.url
            print(current_url)
            # 正则表达式匹配@后面的经纬度
            match = re.search(r'@(\d+\.\d+),(\d+\.\d+),(\d+)', current_url)

            if match:
                latitude = match.group(1)
                longitude = match.group(2)
                zoom = match.group(3)
                print(f"链接：{url} | 浏览器自动转换url的方式 | Latitude: {latitude}, Longitude: {longitude}, Zoom: {zoom}")
                break
            else:
                print("No match found.")
                await asyncio.sleep(0.5)
    # ---------------------
    await context.close()
    await browser.close()


async def main() -> None:
    async with async_playwright() as playwright:
        await run(playwright)


asyncio.run(main())
