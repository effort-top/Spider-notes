import json
import subprocess

import requests
from functools import partial
subprocess.Popen = partial(subprocess.Popen, encoding='utf-8')
import execjs


headers = {
    "accept": "*/*",
    "accept-language": "zh-CN,zh;q=0.9",
    "content-type": "application/x-www-form-urlencoded",
    "origin": "https://music.163.com",
    "priority": "u=1, i",
    "referer": "https://music.163.com/",
    "sec-ch-ua": "\"Not)A;Brand\";v=\"99\", \"Google Chrome\";v=\"127\", \"Chromium\";v=\"127\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36"
}
cookies = {
    "NMTID": "00OkRfXqLgZWGB_mUBCl8SUtl-cEvMAAAGQ6YAcaQ",
    "_iuqxldmzr_": "32",
    "_ntes_nnid": "17fd5b40d5f360ac769b6d267e9beb55,1721904407554",
    "_ntes_nuid": "17fd5b40d5f360ac769b6d267e9beb55",
    "WEVNSM": "1.0.0",
    "WNMCID": "ljpatm.1721904407794.01.0",
    "WM_NI": "7CUp1QehM9uqhbCh%2BwzvHhB2aYhjxTfy9YSqLYa7F5nOjmNHtttTW11bx6y4KGv640t7PcTt3ywvkN8OOCjx5RDCc8vdbixuIS%2BT0D9DPOerGCgA2svxzrEdCqO0Dyu0SHQ%3D",
    "WM_NIKE": "9ca17ae2e6ffcda170e2e6eea5f76e93a7aca4ca25879e8fa7c55e878b9a83db4f94b79d8dd55b8ab4e184b82af0fea7c3b92af59d9b91b45ba7b883daf87bacbe8d89aa7dbaaa8889c13aa387a88bfb60a6a7f7bad27b9087afd8c53fae91a68ecd44b8acbcb5d63bf3beb8d7fc408999bad7b73cb8e9a084d780f1a7b997ea46fc9181a4e974f78e8ca4e234b6bcae8afb7f8b8de5b5b350fb9ca0b0e87a859da9a2b179b6a8b693c87081af81d1c773b7f09da9d437e2a3",
    "WM_TID": "1KiQ9nexrrhERARBVAeGBPzW0BANluY5",
    "sDeviceId": "YD-AZnjD3N%2FEQxAQkARAQfSQb3GlRUZ5Scc",
    "ntes_utid": "tid._.Ixb%252BwA9zyHpBU1URFQbTRe2WxARIsYqA._.0",
    "JSESSIONID-WYYY": "rmc%5CQwhYCZw7c%2FDkbgktkwVHTdFcf%2B%2BqGO5klma9x1GkPOFNyKhHlc6pYcf8I89IrSA1qVWH8BD2tyqtfJQarrawjbYrOqHkj96pEqMKuVxOD%2BvHCRIkTXt5kIU%2F7phxRKJCMMO7E4nuKzsDN0IIgGzXddE6%2BFUG5qikKIsz2coFK5aP%3A1721976763784",
    "playerid": "13447679"
}
url = "https://music.163.com/weapi/song/enhance/player/url/v1"
params = {
    "csrf_token": "",
    "encodeType":"aac",
    "ids":"[2611596618]",
    "level":"standard"
}
# data = {
#     "params": "zALRRwxVb45UWxZ05dS/5h2dPpVIQliteeqD6a9ozOCfmpx7u3h316Pm4lmDzFzD/Iq9MQ0E2CmP6fkfIXR5guc88WG0xKcXQ+9CJQjHmo9Bi1cD8WA93ZiKgHrVyxhhS7igPjjTuRmSSs1uxyV73w==",
#     "encSecKey": "36a4cc436ceae434025baec523bd2dc809dae57b3acb4f1274f403581a1dce84b643e540b8ea0595960ea44de89448a3792f01e91dd38ec3f14beb160cb2598b9d067f72ed7c11b1a97969edfa8166ebd0f685bfcd035f22a4e4597f541c848aa837a694010176ef1b231dae4c5c0e620b672c431466836ce97b5895038ea644"
# }
with open('解码(全扣).js', 'r', encoding='utf-8') as f:
    js_code = f.read()
context = execjs.compile(js_code)

ret = context.call('fn',params)
# print(ret)

data = {
    "params": ret['encText'],
    "encSecKey": ret['encSecKey'],
}

response = requests.post(url, headers=headers, cookies=cookies, data=data)

print(response.json())
