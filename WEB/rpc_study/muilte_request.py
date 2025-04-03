import requests,time
from concurrent.futures.thread import ThreadPoolExecutor


headers = {
    'Accept': 'text/plain, */*; q=0.01',
    'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8,ru;q=0.7',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    'Origin': 'https://www.endata.com.cn',
    'Pragma': 'no-cache',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'same-origin',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36 Edg/126.0.0.0',
    'X-Requested-With': 'XMLHttpRequest',
    'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Microsoft Edge";v="126"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
}

data = {
    'year': '2023',
    'MethodName': 'BoxOffice_GetYearInfoData',
}

response = requests.post('https://www.endata.com.cn/API/GetData.ashx', headers=headers, data=data)
params=response.text

tp = ThreadPoolExecutor(max_workers=50)
def fetch_response(url):
    response = requests.get(url)
    return url,response.text

def callback_successed(f):
    print(f.result())

start_timestamp = time.time()
tp.submit(fetch_response,"http://localhost:12080/go?group=test&name=test&action=test&param={}".format(params)).add_done_callback(callback_successed)
tp.shutdown()
end_timestamp = time.time()

print("每个请求时间开销:{}ms".format(round(end_timestamp-start_timestamp,3) *1000 / 100))
