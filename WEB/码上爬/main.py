import json
from datetime import datetime
import hashlib
import requests
import execjs

with open('code9.js', 'r', encoding='utf-8') as f:
    js_code = f.read()
context = execjs.compile(js_code)
# sign = context.call("get_sign",time)
# time = int(datetime.now().timestamp() * 1000)
headers = {
    "authority": "stu.tulingpyton.cn",
    "accept": "*/*",
    "accept-language": "zh-CN,zh;q=0.9",
    "content-type": "application/json",
    "origin": "https://stu.tulingpyton.cn",
    "referer": "https://stu.tulingpyton.cn/problem-detail/9/",
    "sec-ch-ua": "\"Chromium\";v=\"122\", \"Not(A:Brand\";v=\"24\", \"Google Chrome\";v=\"122\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.6261.95 Safari/537.36",
    "x-requested-with": "XMLHttpRequest"
}
sum = 0
url = "https://stu.tulingpyton.cn/api/problem-detail/9/data/"

for i in range(1, 21):
    time = int(datetime.now().timestamp() * 1000)
    m_t = context.call("get_m_t_s", time, i)
    print(m_t)

    cookies = {
        "sessionid": "3mxiovhv60sgvryip1mptqy7ktbj4e2v",
        "Hm_lvt_b5d072258d61ab3cd6a9d485aac7f183": "1743866844,1743871571",
        "HMACCOUNT": "A3DB31F293D65717",
        "s": "51b351b351b351b370b0d0307110b050b070b07090",
        "Hm_lpvt_b5d072258d61ab3cd6a9d485aac7f183": "1743928741"
    }

    data = {
        "page": i,
        "m": "ca25279ef7c8f311fdee08ebe43d92a633ece095",
        "tt": "MTc0MzkyODc2MTcyOA=="
    }
    data = json.dumps(data, separators=(',', ':'))
    response = requests.post(url, headers=headers, cookies=cookies, data=data)
    data_json = response.json()
    print(data_json)
    current_array = data_json["current_array"]
    for num in current_array:
        sum = sum + num

    # r = data_json.get("r")
    # data = context.call("get_data", r)
    # print(data)
    # data_json = json.loads(data)
    # print(data_json)
    # current_array = data_json["current_array"]
    # for num in current_array:
    #     sum = sum + num
print(sum)
