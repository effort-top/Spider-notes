import time
from lxml import etree
import requests
from faker import Faker

urls = [
    'https://m.douban.com/time/column/135/',
    'https://m.douban.com/time/column/124/',
    'https://m.douban.com/time/column/127/',
    'https://m.douban.com/time/column/233/',
    'https://m.douban.com/time/column/95/',
    'https://m.douban.com/time/column/216/'
]

fake = Faker()


def get_title(url, cnt):
    # 设置请求头
    headers = {
        'Upgrade-Insecure-Requests': '1',
        'User-Agent': fake.user_agent(),
        'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Microsoft Edge";v="126"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
    }
    response = requests.get(url, headers=headers)  # 提交请求,获取响应内容
    html = response.content  # 获取网页内容(content返回的是bytes型数据,text()获取的是Unicode型数据)

    title = etree.HTML(html).xpath('//title/text()')  # 由xpath解析HTML
    if title:
        title = title[0].strip()
    else:
        title = "没找到标题"
    print('第%d个title: %s' % (cnt, title))


if __name__ == '__main__':
    start1 = time.time()
    i = 0
    for url in urls:
        i = i + 1
        start = time.time()
        get_title(url, i)
        print('第%d个title爬取耗时:%.5f秒' % (i, float(time.time() - start)))
    print('爬取总耗时:%.5f秒' % float(time.time() - start1))
