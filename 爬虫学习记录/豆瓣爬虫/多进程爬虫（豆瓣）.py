import multiprocessing
from multiprocessing import Pool, Queue
import time
import requests
from lxml import etree
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


def get_title(url, cnt, filename):
    try:
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
        title = etree.HTML(html).xpath('//title/text()')[0].strip()  # 由 xpath 解析 HTML
        with open(filename, 'a') as f:
            f.write(f'第{cnt}个title: {title}\n')
    except Exception as e:
        with open(filename, 'a') as f:
            f.write(f'第{cnt}个 URL 请求失败: {e}\n')


def main():
    print('当前环境CPU核数是：%d核' % multiprocessing.cpu_count())
    p = Pool(6)  # 进程池
    i = 0
    filename = 'output.txt'
    for url in urls:
        i += 1
        p.apply_async(get_title, args=(url, i, filename))
    p.close()
    p.join()  # 运行完所有子进程才能顺序运行后续程序


if __name__ == '__main__':
    start = time.time()
    main()  # 调用方
    print('总耗时：%.5f秒' % float(time.time() - start))
