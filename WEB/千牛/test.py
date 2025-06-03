import requests


headers = {
    "accept": "application/json",
    "accept-language": "zh-CN,zh;q=0.9",
    "cache-control": "no-cache",
    "content-type": "application/x-www-form-urlencoded",
    "origin": "https://myseller.taobao.com",
    "pragma": "no-cache",
    "priority": "u=1, i",
    "referer": "https://myseller.taobao.com/home.htm/SellManage/all?current=1&pageSize=20",
    "sec-ch-ua": "\"Google Chrome\";v=\"135\", \"Not-A.Brand\";v=\"8\", \"Chromium\";v=\"135\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36"
}
cookies = {
    "cna": "yt2gIAaI7xgCAXjmeudsm5Mr",
    "xlly_s": "1",
    "_samesite_flag_": "true",
    "cookie2": "19ab5123703248ba3b9958c4c14cabfd",
    "t": "25b98257d8c2ee74bc52cd379abca5d8",
    "_tb_token_": "3711135febef1",
    "3PcFlag": "1746530359136",
    "sgcookie": "E100V1RaKbcyBTnKq6OXIUj5yIToqFmEWInlnjGh8YV16Yw7DApQCHsmSqTSpSIngc4%2FWguLChDMEss2384LkZT%2BhcQw5W%2Fz68epw4RaMa2z9rpousKmdNyvF6xsHgkg%2Bl%2FhsAyI8otT7CxPlEtGno%2F16A%3D%3D",
    "wk_cookie2": "1c9cfc34fd54d09a72cb606990a7ba68",
    "wk_unb": "UonTHCaK6ey92w%3D%3D",
    "unb": "1881742643",
    "uc1": "pas=0&cookie21=U%2BGCWk%2F7p46FZ2E4%2B%2FCg&cookie15=VFC%2FuZ9ayeYq2g%3D%3D&cookie16=VT5L2FSpNgq6fDudInPRgavC%2BQ%3D%3D&existShop=true&cookie14=UoYajezLofZo6g%3D%3D",
    "uc3": "vt3=F8dD2EXZHvGwbrCc8og%3D&id2=UonTHCaK6ey92w%3D%3D&lg2=UIHiLt3xD8xYTw%3D%3D&nk2=BcWkyrbwfkqTcnuGhg%3D%3D",
    "csg": "c255d94d",
    "lgc": "fu_chong_yang",
    "cancelledSubSites": "empty",
    "cookie17": "UonTHCaK6ey92w%3D%3D",
    "dnk": "fu_chong_yang",
    "skt": "7e388c350b6483a4",
    "existShop": "MTc0NjUzMDQyMA%3D%3D",
    "uc4": "nk4=0%40B0n7LvzybKLCMQAmK1u3OwdAvNqYVx6u&id4=0%40UOE5ALRuJjfLjlXQ5tE5UvR4ka5v",
    "tracknick": "fu_chong_yang",
    "_cc_": "VFC%2FuZ9ajQ%3D%3D",
    "_l_g_": "Ug%3D%3D",
    "sg": "g35",
    "_nk_": "fu_chong_yang",
    "cookie1": "BxfSzzU%2FpBqTI9ayoqQoxC6s8eAOS7ndaRhOtPUXiAk%3D",
    "mtop_partitioned_detect": "1",
    "_m_h5_tk": "3f7d026c806a78ab3aa55a4e2edec55e_1746539095934",
    "_m_h5_tk_enc": "4fd2c2f2f43e4a99932237a85e5d54e6",
    "tfstk": "gDAZvdwY1fhZ7WjOIB14UpjvXTCOMso7sIsfoEYc5GjM5Rs0gHKHCZTccs-20nS1ncC6gH-9vO96oI_DgMvvCstXWsJ2c3p1jAKjuPde4SNsXAL0gs1mV0GSNF3OMsm5XJTBfGQv-i0CINtt_VfmV0GINFLOMsxb7T_2TJbRxNVGis0FKZbliNX0i2Shuae0jnxm8ybAyiqGjZX3xMQciixci25hvZ5cmxMlmgNFzO0bLFl9_5cftgYGYSVzyNWgBeebiS0fROSlKMPc7B7NQgYMaRSN5wABTT6QlYCHyptG8_lQI_Yen3JkDYwd_EvMD9-tvJSBKCLcm9a0ae8ySLfHGq4RLHbVEsXUoSYF6Mxy1_cuYwpH5KA9brPcWCO53gBEoSBftQ6kEhzxyefGonBJG0FOjEYJwL1rORfk8Kxy3gr0Dw4KQIpam-WGJwSS8289HY9JU7ciF-eABpQFVV3TH-BGJwSS82yYHOCR8ggtW"
}
url = "https://h5api.m.taobao.com/h5/mtop.taobao.sell.pc.manage.async/1.0/"
params = {
    "jsv": "2.6.1",
    "appKey": "12574478",
    "t": "1746531787099",
    "sign": "60e629eaf11ef1d754a3bcfa72cb36e8",
    "api": "mtop.taobao.sell.pc.manage.async",
    "v": "1.0",
    "ttid": "11320@taobao_WEB_9.9.99",
    "type": "originaljson",
    "dataType": "json"
}
data = {
    "data": "{\"url\":\"/taobao/manager/table.htm\",\"jsonBody\":\"{\\\"tab\\\":\\\"all\\\",\\\"pagination\\\":{\\\"current\\\":1,\\\"pageSize\\\":20},\\\"filtertab\\\":\\\"\\\",\\\"filter\\\":{},\\\"table\\\":{}}\"}"
}
response = requests.post(url, headers=headers, cookies=cookies, params=params, data=data)

print(response.text)
print(response)