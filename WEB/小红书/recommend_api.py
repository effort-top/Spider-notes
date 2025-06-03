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
url = "https://edith.xiaohongshu.com/api/sns/web/v1/homefeed"
parsed_url = urlparse(url)
api = parsed_url.path
data = {
    "cursor_score": "",
    "num": 18,
    "refresh_type": 1,
    "note_index": 35,
    "unread_begin_note_id": "",
    "unread_end_note_id": "",
    "unread_note_count": 0,
    "category": "homefeed_recommend",
    "search_key": "",
    "need_num": 8,
    "image_formats": [
        "jpg",
        "webp",
        "avif"
    ],
    "need_filter_image": False
}

xt_xs = jsDrive.call('get_xt_xs', api, data)
xs = xt_xs['X-s']
xt = xt_xs['X-t']

headers = {
    "accept": "application/json, text/plain, */*",
    "accept-language": "zh-CN,zh;q=0.9",
    "cache-control": "no-cache",
    "content-type": "application/json;charset=UTF-8",
    "origin": "https://www.xiaohongshu.com",
    "pragma": "no-cache",
    "priority": "u=1, i",
    "referer": "https://www.xiaohongshu.com/",
    "sec-ch-ua": "\"Chromium\";v=\"136\", \"Google Chrome\";v=\"136\", \"Not.A/Brand\";v=\"99\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36",
    "x-b3-traceid": "ea2c904fb64fae37",
    "x-mns": "awwuLTI+vm8l89SHva8yYHgaCemGDm3p++epSG3p/CEcn4wCHfO7MzgMkux0liXBZS/Oh8+zpzkSlgg2hH8HFCf6+eTQEHlkSOOb65Z+ufcwK4chzLFiBoc6FR+D3uxbQxTbd8GdzeCSTE6bkf7wPORgHl4dyByce8oblfDNL+P29dxyeWEfhGlZZo3L+ceji6+6Iyg6KiYKS8E8R74j5FkYiY4lwO/+Kc/OwmDadvNKujPQ0bb22F9wF1KJYgFMIRo4xbDwZYX3KGQzBLXddONvME/Ia0PavpDkzjnjh04ISzbat/vi4hZ8Tyc2d7Q2yCZp41mgb3n+nneYzMF8f6lYQnaKBO3jMYzhPx43TY6j9xCTmkPFw6TG98TPz8Kw27OaJtE9p7i3cNcj2u8iutyxhPMhoOjSYdBWkTa4NTdhf1Owt/k1PdnavDWy/P40aEZ9aT1RFfX9DDvlgweQ+1PCzzWNWT3HjxKIlJtSRLFikZwp5b+TzcJ0wxlJ",
    # "x-s": "XYW_eyJzaWduU3ZuIjoiNTYiLCJzaWduVHlwZSI6IngyIiwiYXBwSWQiOiJ4aHMtcGMtd2ViIiwic2lnblZlcnNpb24iOiIxIiwicGF5bG9hZCI6IjJmMGNkNThiNzg0MWJiMjI1ZmMwZDI2MzlmZWQxODE5ZTQzYWNjYzFiNTM2OTI0ZGE0ODRlYmMxMmFkZThiNzUyMjNlOWQ1ZDAzNDhhZjUxMGU0YjVhMDRhODYyYmY5NzZiYWYxOWU1MGJjZTBiODUxYTQzOTVhNGQ4YmY1MWRkZjE1ZTc3ZmE1OTZhNDY5MDU4ZTg1YTJjNjhiNWZiMDdlMzUyY2RiNDhhN2IyMTVkMzQzYzc2ZjFiNDVkOWM0ZmU5OTU1MjM0OTk1MzhmMWZmODhlZDZiYmJmYmJkNDllMGQ5OGVkYWZmYzJmOTJmYzJhNWJjN2QzMDIzN2E2MjNmNjZmN2MzOTJiZjY4NmVlNzFiMjBkNDcxNjIzZGNlMDQ0MDM5ZTY2ZmRjZDliMGJjMDJhODgwY2Q5MTFlNjYyNWVhYTdhYmQ1NTNmMGZkNjcwMWQzMDI3MWVhYzgzM2Q1MjczNWUwYzU1MTFlMWFmOTE5MjMwYTgzZThiYzIwZGY1ZDhkMDNkODAzMGY3NTBmYTU2YWMwZTc0MDgwYzNhIn0=",
    "x-s": xs,
    "x-s-common": "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",
    # "x-t": "1746940045419",
    "x-t": str(xt),
    "x-xray-traceid": "cb5eded432b7d08c2260e0d59b8a43b9"
}
cookies = {
    "abRequestId": "3036ab3c-099e-5e24-9df1-30c2a9cf93e6",
    "webBuild": "4.62.3",
    "xsecappid": "xhs-pc-web",
    "a1": "196b060827fr7uzsflkpppydcum07drq2chohz2qb50000428160",
    "webId": "47892681996d81154656ca60c7ca8920",
    "gid": "yjKD8K8jf8JdyjKD8K8YJSuJWiFW7uMi1TUUxADUvfS76l288WfFAx8884JYyK884i82fii2",
    "web_session": "040069b49f03fa46b6a8b08c293a4b51e91f26",
    "acw_tc": "0ad58ff817469393056387227e5bc0f968b892839a902ec43029e91aed3096",
    "websectiga": "f47eda31ec99545da40c2f731f0630efd2b0959e1dd10d5fedac3dce0bd1e04d",
    "sec_poison_id": "826df52f-8063-439b-9ac0-303a59df5479",
    "loadts": "1746940029734",
    "unread": "{%22ub%22:%226817316c0000000022028774%22%2C%22ue%22:%22680f68b8000000000b014d1a%22%2C%22uc%22:33}"
}

data = json.dumps(data, separators=(',', ':'))
response = requests.post(url, headers=headers, cookies=cookies, data=data)
response_json = response.json()
items = response_json['data']['items']
for item in items:
    xsec_token = item['xsec_token']

    display_title = item['note_card']['display_title']
    user_id = item['note_card']['user']['user_id']
    nickname = item['note_card']['user']['nickname']
    logger.info(f"display_title:{display_title}, user_id:{user_id}, nickname:{nickname}, xsec_token:{xsec_token}")
logger.info(response.text)
