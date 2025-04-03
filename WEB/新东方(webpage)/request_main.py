from datetime import datetime

import requests
import execjs
with open('解密.js', 'r', encoding='utf-8') as f:
    js_code = f.read()
context = execjs.compile(js_code)
params = {
    'pageIndex': '1',
    'pageSize': '12',
    'keyword': '12312312',
    "order":'0'
}
time = int(datetime.now().timestamp() * 1000)
sign = context.call('getSign',params,time)
print(sign)
headers = {
    'accept': '*/*',
    'accept-language': 'zh-CN,zh;q=0.9',
    'content-type': 'application/json',
    'origin': 'https://souke.xdf.cn',
    'priority': 'u=1, i',
    'referer': 'https://souke.xdf.cn/search?cityCode=430300&categoryCode=123&kw=%E8%8B%B1%E8%AF%AD',
    'sec-ch-ua': '"Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-site',
    'sign': sign,
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
}

params = {
    'appId': '5053',
    't': time,
    'cityCode': '430300',
    'pageIndex': '1',
    'pageSize': '12',
    'keyword': '12312312',
    'order': '0',
}

response = requests.get('https://dsapi.xdf.cn/product/v2/class/search', params=params, headers=headers)
print(response.status_code)
print(response.text)
