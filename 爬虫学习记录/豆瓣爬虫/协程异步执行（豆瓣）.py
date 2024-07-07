import time
from lxml import etree
import aiohttp
import asyncio

urls = [
    'https://m.douban.com/time/column/135/',
    'https://m.douban.com/time/column/124/',
    'https://m.douban.com/time/column/127/',
    'https://m.douban.com/time/column/233/',
    'https://m.douban.com/time/column/95/',
    'https://m.douban.com/time/column/216/'
]
titles = []
sem = asyncio.Semaphore(10)  # 信号量，控制协程数，防止爬的过快


async def get_title(url):
    async with sem:
        # async with是异步上下文管理器
        async with aiohttp.ClientSession() as session:  # 获取session
            async with session.request('GET', url) as resp:  # 提出请求
                # html_unicode = await resp.text()
                # html = bytes(bytearray(html_unicode, encoding='utf-8'))
                html = await resp.read()  # 可直接获取bytes
                title = etree.HTML(html).xpath('//title/text()')
                if title:
                    title = title[0].strip()
                else:
                    title = "没找到标题"
                print(''.join(title))


async def main():
    tasks = [asyncio.create_task(get_title(url)) for url in urls]  # 把所有任务放到一个列表中
    await asyncio.wait(tasks)


if __name__ == '__main__':
    start = time.time()
    asyncio.run(main())  # 调用方
    print('总耗时：%.5f秒' % float(time.time() - start))
