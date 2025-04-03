import base64
import hashlib
import time

import execjs

from ScrapeCenter.config.logconfig import MyLogger

logger = MyLogger().get_logger()

import requests

headers = {
    "Accept": "application/json, text/plain, */*",
    "Accept-Language": "zh-CN,zh;q=0.9",
    "Connection": "keep-alive",
    "Referer": "https://spa2.scrape.center/",
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-origin",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36",
    "sec-ch-ua": "\"Chromium\";v=\"128\", \"Not;A=Brand\";v=\"24\", \"Google Chrome\";v=\"128\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\""
}
url = "https://spa2.scrape.center/api/movie/"

# 方法一：python改写js
# def get_token(data) -> str:
#     t = str(int(time.time()))
#     data.append(t)
#     sha_hash = hashlib.sha1(','.join(data).encode('utf-8')).hexdigest()
#     token = base64.b64encode(','.join([sha_hash, t]).encode('utf-8')).decode('utf-8')
#     return token
#
#
# for page in range(1,11):
#     offset = (page - 1) * 10
#     token = get_token(['/api/movie', str(offset)])
#
#     params = {
#         "limit": "10",
#         "offset": offset,
#         "token": token
#     }
#     response = requests.get(url, headers=headers, params=params)
#     logger.info(response.text)


# 方法二：扣js代码
with open("解密.js", "r", encoding="utf-8") as f:
    data = f.read()
com = execjs.compile(data)

for page in range(1,11):
    offset = (page - 1) * 10
    timestamp = str(int(time.time()))
    token = com.call("gettoken", offset, timestamp)
    logger.info(token)
    params = {
        "limit": "10",
        "offset": str(offset),
        "token": token
    }
    response = requests.get(url, headers=headers, params=params)
    logger.info(response.status_code)
    logger.info(response.text)
