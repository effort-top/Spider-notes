import json
import subprocess

import requests
from functools import partial
subprocess.Popen = partial(subprocess.Popen, encoding='utf-8')
import execjs


headers = {
    "Accept": "application/json, text/plain, */*",
    "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
    "Connection": "keep-alive",
    "Referer": "https://www.chinaindex.net/search",
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-origin",
    "UUID": "f42b4c47-283e-5227-ab91-ef6ac81d55f0",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36 Edg/126.0.0.0",
    "funcID": "2614",
    "incognitoMode": "0",
    "sec-ch-ua": "\"Not/A)Brand\";v=\"8\", \"Chromium\";v=\"126\", \"Microsoft Edge\";v=\"126\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\""
}
cookies = {
    "sajssdk_2015_cross_new_user": "1",
    "sensorsdata2015jssdkcross": "%7B%22distinct_id%22%3A%22190dea06db4c52-0f6289843fc591-4c657b58-2073600-190dea06db5170c%22%2C%22first_id%22%3A%22%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E7%9B%B4%E6%8E%A5%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%22%2C%22%24latest_referrer%22%3A%22%22%7D%2C%22identities%22%3A%22eyIkaWRlbnRpdHlfY29va2llX2lkIjoiMTkwZGVhMDZkYjRjNTItMGY2Mjg5ODQzZmM1OTEtNGM2NTdiNTgtMjA3MzYwMC0xOTBkZWEwNmRiNTE3MGMifQ%3D%3D%22%2C%22history_login_id%22%3A%7B%22name%22%3A%22%22%2C%22value%22%3A%22%22%7D%2C%22%24device_id%22%3A%22190dea06db4c52-0f6289843fc591-4c657b58-2073600-190dea06db5170c%22%7D",
    "mobile_iindex_uuid": "f42b4c47-283e-5227-ab91-ef6ac81d55f0"
}
url = "https://www.chinaindex.net/iIndexMobileServer/mobile/comm/getSearchResult"
with open('解密.js', 'r', encoding='utf-8') as f:
    js_code = f.read()
context = execjs.compile(js_code)

keyword = ("蔡徐坤")
sign = context.call('getSign', keyword)

params = {
    "keyWord": keyword,
    "sign": sign
}
response = requests.get(url, headers=headers, cookies=cookies, params=params)

r = response.json()['data']
lastFetchTime = response.json()['lastFetchTime']


result = context.call('decrypt', r, lastFetchTime)
data = json.loads(result)
# 提取所需的数据
print(data)
print('***' *30)

search_tab = data.get('searchTab', {})
object_list = search_tab.get('object_list', [])

prodictTab = data.get('productTab', {})
listOfProduct = prodictTab.get('listOfProduct', [])

print(object_list)
print(listOfProduct)