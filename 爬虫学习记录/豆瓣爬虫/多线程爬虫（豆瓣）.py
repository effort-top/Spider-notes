import threading
import time
from queue import Queue

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

# 线程池中工作线程的数量
NUM_WORKERS = 5
# 线程安全队列，用于存放待处理的 URL
task_queue = Queue()
# 将 URL 放入队列
for url_d in urls:
    task_queue.put(url_d)


def get_title(thread_id):
    fake = Faker()  # 每个线程创建自己的 Faker 实例
    while True:
        # 从队列中获取一个任务
        url = task_queue.get()
        if url is None:
            # 如果 URL 为 None，表示没有更多任务，退出线程
            break
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
            title = etree.HTML(html).xpath('//title/text()')[0].strip() or "No title found"
            print(f'Thread-{thread_id}: {url} - Title: {title}')
        except Exception as e:
            print(f'Thread-{thread_id}: Error crawling {url}: {e}')
        finally:
            # 任务完成，通知队列
            task_queue.task_done()


if __name__ == '__main__':
    start1 = time.time()

    # 创建并启动线程池
    threads = []
    for i in range(NUM_WORKERS):
        thread = threading.Thread(target=get_title, args=(i,))
        thread.start()
        threads.append(thread)

    # 等待所有任务完成
    task_queue.join()

    # 发送 None 到队列中，表示没有更多任务
    for _ in range(NUM_WORKERS):
        task_queue.put(None)

    # 等待所有线程结束
    for thread in threads:
        thread.join()

    # 打印完成信息
    print('爬取总耗时:%.5f秒' % float(time.time() - start1))


