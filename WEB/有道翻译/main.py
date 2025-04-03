import json
from datetime import datetime
import subprocess
from functools import partial
subprocess.Popen = partial(subprocess.Popen, encoding='utf-8')
import execjs
import requests


headers = {
    "Accept": "application/json, text/plain, */*",
    "Accept-Language": "zh-CN,zh;q=0.9",
    "Connection": "keep-alive",
    "Content-Type": "application/x-www-form-urlencoded",
    "Origin": "https://fanyi.youdao.com",
    "Referer": "https://fanyi.youdao.com/",
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-site",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36",
    "sec-ch-ua": "\"Chromium\";v=\"128\", \"Not;A=Brand\";v=\"24\", \"Google Chrome\";v=\"128\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\""
}
cookies = {
    "OUTFOX_SEARCH_USER_ID": "1983271992@113.89.235.124",
    "OUTFOX_SEARCH_USER_ID_NCOO": "1742135348.8836842",
    "DICT_DOCTRANS_SESSION_ID": "MTgwN2VkYWMtZjliMC00NzAyLWEyMzgtNzRmZDJkMmQ3NWE2",
    "_uetsid": "bd5203d0645f11efb6ff0f85c58f4ce9",
    "_uetvid": "bd522ae0645f11efa7aeeb8370b5282e"
}
url = "https://dict.youdao.com/webtranslate"
time = int(datetime.now().timestamp() * 1000)
with open('解码.js', 'r', encoding='utf-8') as f:
    js_code = f.read()
context = execjs.compile(js_code)
sign = context.call("get_sign",time)
key = "fantasy"
data = {
    "i": key,
    "from": "auto",
    "to": "",
    "useTerm": "false",
    "dictResult": "true",
    "keyid": "webfanyi",
    "sign": sign,   # 1
    "client": "fanyideskweb",
    "product": "webfanyi",
    "appVersion": "1.0.0",
    "vendor": "web",
    "pointParam": "client,mysticTime,product",
    "mysticTime": time,     # 2
    "keyfrom": "fanyi.web",
    "mid": "1",
    "screen": "1",
    "model": "1",
    "network": "wifi",
    "abtest": "0",
    "yduuid": "abcdefg"
}
response = requests.post(url, headers=headers, cookies=cookies, data=data)

response_content = response.text
print("请求响应数据：",response_content)
data = context.call("get_data",response_content)
data_json = json.loads(data)
print("翻译的关键字：",key)

print("解密后的数据:",data_json)
