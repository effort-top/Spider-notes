import json
import urllib
from loguru import logger

import requests
from functools import partial
import subprocess

# 在导入 execjs 之前应用补丁
subprocess.Popen = partial(subprocess.Popen, encoding='utf-8')
import execjs

from urllib.parse import urlparse

with open('code.js', 'r', encoding='utf-8') as f:
    js_code = f.read()
jsDrive = execjs.compile(js_code)

params = {
    "channel_id": "3189398996",
    "min_behot_time": "1747068615",
    "offset": "0",
    "refresh_count": "2",
    "category": "pc_profile_channel",
    "client_extra_params": "{\"short_video_item\":\"filter\"}",
    "aid": "24",
    "app_name": "toutiao_web",
    "msToken": "UukPpPA6Lg4Gl5LzCslUY2yiM7BlN5xm7jhVM0h1nUJ-zIrFBuBFEMqqQZPj8NWGkSrLZvwKPsOQOc7cg-IAFmEs31HuyDR05eEtVUJJKQVsfVgc2AcYeON1kVqM4Q==",
    # "a_bogus": "dyRhQQzXDEVkXVWd562LfY3qVXM3Y/u-0t9b/DhqBV3at639HMO79exE6NJvrpjjxT/2Ibfjy4hcYrFMicV9A3v6HSRKl2np-g00t-P2so0j5ZhjCfuDrzfF-vzWt-Bd-Jd3E5Xsy7VGFms0AIee-wHvnwVxapSc"
}

params_encoded = urllib.parse.urlencode(params)
data = [
    0,
    5,
    8,
    params_encoded,
    '',
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.6261.95 Safari/537.36"
]
a_bogus = jsDrive.call('get_a_bogus', data)
logger.info(a_bogus)
params['a_bogus'] = a_bogus
headers = {
    "authority": "www.toutiao.com",
    "accept": "application/json, text/plain, */*",
    "accept-language": "zh-CN,zh;q=0.9",
    "cache-control": "no-cache",
    "pragma": "no-cache",
    "referer": "https://www.toutiao.com/?wid=1747068238004",
    "sec-ch-ua": "\"Chromium\";v=\"122\", \"Not(A:Brand\";v=\"24\", \"Google Chrome\";v=\"122\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.6261.95 Safari/537.36"
}
cookies = {
    "tt_webid": "7503600849630447143",
    "gfkadpd": "24,6457",
    "ttcid": "3a9394eda9564e2aa50c392f744b605819",
    "s_v_web_id": "verify_malbbkzj_q1BTMvaz_2IvS_4cfe_AqKF_t37BZrry5TgS",
    "local_city_cache": "%E5%B9%BF%E5%B7%9E",
    "x-web-secsdk-uid": "8a70750a-3eaa-4c55-ace0-65492df7a58a",
    "_ga": "GA1.1.758295544.1747068240",
    "csrftoken": "6895760e9d7a19504c301618c0fa29f5",
    "tt_scid": "TL9Gmh0bwJy7YF4CcbyGUZw7uMqItpmpu0QTmU2XZUwjHee.7gmdIlBhvOk4rMs4ec01",
    "_ga_QEHZPBE5HH": "GS2.1.s1747068240$o1$g1$t1747068474$j0$l0$h0",
    "ttwid": "1%7CGcnOi_Cla62AUmu5NZY0eu5AeMCSmkv9RRf74_3tnVM%7C1747068559%7C3486ecbb40189729c6a85b8f2d181e4e42c21fb112ba46f54a3e249f64d84c80"
}
url = "https://www.toutiao.com/api/pc/list/feed"

response = requests.get(url, headers=headers, cookies=cookies, params=params)

logger.info(response.text)
logger.info(response)