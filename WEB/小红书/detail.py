import requests
import json
from loguru import logger
from functools import partial
import subprocess

# 在导入 execjs 之前应用补丁
subprocess.Popen = partial(subprocess.Popen, encoding='utf-8')
import execjs
from urllib.parse import urlparse

with open('code.js', 'r', encoding='utf-8') as f:
    js_code = f.read()
jsDrive = execjs.compile(js_code)

data = {
    "source_note_id": "6811ef1500000000230003db",
    "image_formats": [
        "jpg",
        "webp",
        "avif"
    ],
    "extra": {
        "need_body_topic": "1"
    },
    "xsec_source": "pc_feed",
    "xsec_token": "ABAL4VQpC6Ny773OV73wBpPEuO3tgOfhi39ycuZ7lQrQE="
}
url = "https://edith.xiaohongshu.com/api/sns/web/v1/feed"
parsed_url = urlparse(url)
api = parsed_url.path
xt_xs = jsDrive.call('get_xt_xs', api, data)
xs = xt_xs['X-s']
xt = xt_xs['X-t']
logger.info(f"x-s :{xs}")
headers = {
    "authority": "edith.xiaohongshu.com",
    "accept": "application/json, text/plain, */*",
    "accept-language": "zh-CN,zh;q=0.9",
    "content-type": "application/json;charset=UTF-8",
    "origin": "https://www.xiaohongshu.com",
    "referer": "https://www.xiaohongshu.com/explore/6811ef1500000000230003db?xsec_token=ABAL4VQpC6Ny773OV73wBpPEuO3tgOfhi39ycuZ7lQrQE=&xsec_source=pc_feed",
    "sec-ch-ua": "\"Chromium\";v=\"122\", \"Not(A:Brand\";v=\"24\", \"Google Chrome\";v=\"122\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.6261.95 Safari/537.36",
    "x-b3-traceid": "4ebb183da87d93e0",
    "x-mns": "awiZ/hmJH1G3D7OLKNEeWkR9Cj+kTOzDztJzzZ74hdxHRKjWYM9am2iSgewHX6MCHjDfWpFa/t4/Nj60jpxSH/FJfp2YDT1pk5MOe7KTzD7hP0i428vHE6QLNkwGljKS3G2uBoC8xpw6S/xtIl8S2P/Q0dFXg07ZP7kNmd0DCYcY34KGkZmIbpb6vtbDtaBRwIo9x/eT9GJZIlDNOckHjGDyoPgd5TxGRfxvDQEM1k06OKl5fo+IgtlwMeX+JZ2Q8LJIcSmK7942nDS4MZCJCaccMEQPZF8cMt6w6ccvFFzSMu8D/lO6fK+TJ1avgPpGSungK6tfLmnK8k4Ldxw28TokEtQPFEXLn87wSM3FCHSGOfzTZ9e/7wF5WhT75yghZPz4HdT7MPbaIh7BBP6EJDYTBegQRlYQjbWjI5e2kKYI8TH1786SJHhLL07hW25ElxHpblJ0lFBhR4ol6YLcBcXB/iOKH/XW2oZR4xOuNzP/Dd/ziQ7wXZO9y8xM",
    # "x-s": "XYW_eyJzaWduU3ZuIjoiNTYiLCJzaWduVHlwZSI6IngyIiwiYXBwSWQiOiJ4aHMtcGMtd2ViIiwic2lnblZlcnNpb24iOiIxIiwicGF5bG9hZCI6IjE2MmM3ZTAyNjcyNWUzYTlmZmQyY2QzNzEyYjYyZjQ3MDEzYmZkOWJhZjY4NjJmN2VhYzU5NzRmZDBkODY2NmU0MDFhYzkzZTQwMDkyMDExNmRhYWMxNGM2M2Y3ZTMzYmQzNjA3NjVjYjA3OGRlMjc3MDE4M2Q1NTdlZjE4YjZjZDA2MDZkMTc3ZmM1MjMwZWE2ZmIwNWI5MzkwYWIzYWYxMjUyMGY2M2ViYjE2NGM0ZGMyZWEyMzJmZWE2ZmVlYjIwOTY1NWY5M2ZlY2JhNWUzYTEyZDA1NTVhMGRmMmUzODBmMjdmMDc3NjNiOGIzNjk2OTFjMGExMzBhMzE1YTMzNThlYmNkYTg4MGFhMDlkYmVjOWM2ODI3YTRhZTVjMTk1ZTgzYTk0ODA1NDk5YTQ1YzEzYzFkMTk0M2JjMTllMzg5N2ViMGY5MTU3YzM3YTQ4NmJlZTEyMTg1MjZjNjk2MGFhNjJmZjFhY2ZkNTYyM2MwZDZhMmMyNzdlOTNiNDhlZGIyYmU0MDgzNGFhNWI4YzVjNzQxYjBiMzczZGM4In0=",
    "x-s": xs,
    "x-s-common": "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",
    # "x-t": "1746716003870",
    "x-t": str(xt),
    "x-xray-traceid": "cb5794f97e324682dbcf6192b512912c"
}
cookies = {
    "abRequestId": "e6a8ad82-fe26-5bfb-a010-b6485d0aba47",
    "webBuild": "4.62.3",
    "xsecappid": "xhs-pc-web",
    "a1": "196b060827fr7uzsflkpppydcum07drq2chohz2qb50000428160",
    "webId": "2d38ad81403666695f17ca1f2ecb6987",
    "acw_tc": "0a4a5af217466947265892626e3c4f41ec5e6035b2a3c013134764ab65853f",
    "gid": "yjK0iydWJfv4yjK0iydKy7Wj4dCdCFl701AS0khdY6Yf9728Wh4I7D888JJ42jy80idqW08i",
    "web_session": "040069b49f03fa46b6a8b08c293a4b51e91f26",
    "websectiga": "f3d8eaee8a8c63016320d94a1bd00562d516a5417bc43a032a80cbf70f07d5c0",
    "sec_poison_id": "856f96db-2770-4e42-99b9-b27b0ccadb20",
    "loadts": "1746695409032",
    "unread": "{%22ub%22:%22681836e00000000023012206%22%2C%22ue%22:%226816ddcb000000000b014bce%22%2C%22uc%22:31}"
}

data = json.dumps(data, separators=(',', ':'))
response = requests.post(url, headers=headers, cookies=cookies, data=data)
response_json = response.json()
print(response_json)
title = response_json["data"]["items"][0]["note_card"]["title"]
desc = response_json["data"]["items"][0]["note_card"]["desc"]
print(title,desc)
video = response_json["data"]["items"][0]["note_card"].get("video","无视频")
if video != "无视频":
    master_url = video["media"]["stream"]["h264"][0]["master_url"]
    print(master_url)
