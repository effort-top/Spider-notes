from multiprocessing import Pool
import time
from lxml import etree
import aiohttp
import asyncio
from faker import Faker

urls = [
    'https://m.douban.com/time/column/135/',
    'https://m.douban.com/time/column/124/',
    'https://m.douban.com/time/column/127/',
    'https://m.douban.com/time/column/233/',
    'https://m.douban.com/time/column/95/',
    'https://m.douban.com/time/column/216/'
]

# 【请求网页】：使用协程。
# 【解析HTML】：使用多进程。
htmls = []
titles = []
sem = asyncio.Semaphore(10)  # 信号量，控制协程数，防止爬的过快
fake = Faker()


async def get_html(url):
    async with sem:
        # 设置请求头
        headers = {
            'Upgrade-Insecure-Requests': '1',
            'User-Agent': fake.user_agent(),
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Microsoft Edge";v="126"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
        }
        # async with是异步上下文管理器
        async with aiohttp.ClientSession() as session:  # 获取session
            async with session.request('GET', url, headers=headers) as resp:  # 提出请求
                html = await resp.read()  # 直接获取到bytes
                htmls.append(html)
                print('异步获取%s下的html.' % url)


async def main_get_html():
    tasks = [asyncio.create_task(get_html(url)) for url in urls]  # 把所有任务放到一个列表中
    await asyncio.wait(tasks)


def multi_parse_html(html, cnt):
    title = etree.HTML(html).xpath('//title/text()')
    if title:
        title = title[0].strip()
    else:
        title = "没找到标题"
    titles.append(''.join(title))
    print('第%d个html完成解析－title:%s' % (cnt, ''.join(title)))


def main_parse_html():
    p = Pool(4)
    i = 0
    for html in htmls:
        i += 1
        p.apply_async(multi_parse_html, args=(html, i))
    p.close()
    p.join()


if __name__ == '__main__':
    start = time.time()
    asyncio.run(main_get_html())
    main_parse_html()  # 解析html
    print('总耗时：%.5f秒' % float(time.time() - start))
