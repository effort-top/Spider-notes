import random
from datetime import datetime

import requests
import execjs

headers = {
    "authority": "tousu.sina.com.cn",
    "accept": "*/*",
    "accept-language": "zh-CN,zh;q=0.9",
    "referer": "https://tousu.sina.com.cn/company/view/?couid=1003609&sid=26828",
    "sec-ch-ua": "\"Chromium\";v=\"122\", \"Not(A:Brand\";v=\"24\", \"Google Chrome\";v=\"122\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.6261.95 Safari/537.36",
    "x-requested-with": "XMLHttpRequest"
}
cookies = {
    "ALF": "02_1745994775",
    "SCF": "All-of6L2i_9JgYe6c490HWtOAzVa-8ls57mNGoRKMImzQulKwSJM-3RqRMyAqZGEstqEv3WH3WfhG8Nzx_x12s.",
    "SUB": "_2A25K7kdHDeRhGeFH7FEU9SfIwjyIHXVpgsaPrDV_PUJbkNAbLUWhkW9Nepf9mILBo4JtyDW3BhQ6Yq6lk6uiv1pM",
    "SUBP": "0033WrSXqPxfM725Ws9jqgMF55529P9D9WFO8j6mKyibkwARYx7UzB0e5NHD95QN1KM0SK-4Sh.7Ws4DqcjMi--NiK.Xi-2Ri--ciKnRi-zNS0.Ne0-f1KB4e5tt",
    "UOR": ",tousu.sina.com.cn,",
    "SINAGLOBAL": "203.168.17.5_1743403379.42599",
    "U_TRS1": "00000005.2af1afc.67ea3973.713c1ddc",
    "Apache": "203.168.17.5_1743696682.652538",
    "U_TRS2": "00000005.df662ad3.67eeb33c.4552f427",
    "ULV": "1743735407502:4:2:4:203.168.17.5_1743696682.652538:1743696681512",
    "HM-AMT": "%7B%22amt%22%3A24987124%2C%22amt24h%22%3A19310%2C%22v%22%3A%222.3.171%22%2C%22vPcJs%22%3A%221.6.83%22%2C%22vPcCss%22%3A%221.2.395%22%7D"
}
url = "https://tousu.sina.com.cn/api/company/service_complaints"
with open('code.js', 'r', encoding='utf-8') as f:
    js_code = f.read()
context = execjs.compile(js_code)


def generate_random_string(e=False, t=16, r=None):
    chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    length = t

    if e and r is not None:  # 如果 e=True 且 r 有值，随机选长度 [t, r]
        length = random.randint(t, r)

    return ''.join(random.choice(chars) for _ in range(length))

rs = generate_random_string()

pageNum = "2"
time = int(datetime.now().timestamp() * 1000)
signature = context.call('get_signature',time, rs, pageNum)
print(signature)
params = {
    "ts": time,
    "rs": rs,
    "signature": signature,
    "type": "1",
    "page_size": "10",
    "page": pageNum,
    "sid": "26828"
}
response = requests.get(url, headers=headers, cookies=cookies, params=params)

print(response.json())
print(response)
