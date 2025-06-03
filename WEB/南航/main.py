import requests
import json


headers = {
    "accept": "application/json, text/javascript, */*; q=0.01",
    "accept-language": "zh-CN,zh;q=0.9",
    "cache-control": "no-cache",
    "content-type": "application/json",
    "origin": "https://b2c.csair.com",
    "pragma": "no-cache",
    "priority": "u=1, i",
    "referer": "https://b2c.csair.com/B2C40/newTrips/static/main/page/booking/index.html?t=S&c1=CAN&c2=CSX&d1=2025-05-08&at=1&ct=0&it=0&b1=CAN&b2=CSX",
    "sec-ch-ua": "\"Google Chrome\";v=\"135\", \"Not-A.Brand\";v=\"8\", \"Chromium\";v=\"135\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36",
    "x-requested-with": "XMLHttpRequest"
}
cookies = {
    "JSESSIONID": "B43F15042123A701FDD30D68F2948A96",
    "language": "zh_CN",
    "sid": "bb2a6d3f11824176912f672d5a38aad7",
    "_gscu_422057653": "467033514qmy4298",
    "_gscbrs_422057653": "1",
    "cookiesession1": "678B2868B82630306DBD8680871C0079",
    "_gcl_au": "1.1.379269397.1746703357",
    "acw_tc": "ac11000117471102623096163e00670d34d4132618da96221d1e023761f427",
    "acw_sc__v2": "6822c976e63c76d7595d1947d62c705894a1723e",
    "isXionganFlag": "false",
    "_gscs_422057653": "t47110262ek7f0f98|pv:2",
    "temp_zh": "cou%3D0%3Bsegt%3D%E5%8D%95%E7%A8%8B%3Btime%3D2025-05-15%3B%E5%B9%BF%E5%B7%9E-%E9%95%BF%E6%B2%99%3B1%2C0%2C0%3B00%3B%26",
    "ssxmod_itna": "Yq0OYvqAx+Ozi7jq0KY0Qg6D3qBP01CD+xQ5DODLxnRDGdXDcCS2DCw+=qqDQDul7GNkzKWqDsQ+gxGzDikPDfDCpva3Y0LKPkl+6MiRx9t0AFQsWtbG++w2j=B7Hs5gONo84LEjWhvEDY=DCqA8n4GGD0oDt4DIDAYDDxDWWeDLDYoDY3TexGPo2mTNpeGADAtYtxDgDB=ox7o3Bh5oyQiFgDG2DGts9C5ox0UbDBL7Q9FDGMBmgon=xz5DbgYK1caDtqD9BiRQ5CHHfCntrmS+CkGVnfDN+oos7GGP/E=NWGvBBxLB3+x/YKjEF1EKzidIrdDD3eSi6ADqh66g=0otHBx4BxcCvt85NQmxiL7ix4iI+WqCAwzBqsnNz7I7mG9ev77ezYD",
    "ssxmod_itna2": "Yq0OYvqAx+Ozi7jq0KY0Qg6D3qBP01CD+xQ5DODLxnRDGdXDcCS2DCw+=qqDQDul7GNkzKBxDWzBgrouIdH8lFU1Vl2TxNKNgRTD",
    "WT.al_flight": "WT.al_hctype(S)%3AWT.al_adultnum(1)%3AWT.al_childnum(0)%3AWT.al_infantnum(0)%3AWT.al_orgcity1(CAN)%3AWT.al_dstcity1(CSX)%3AWT.al_orgdate1(2025-05-15)"
}


url = "https://b2c.csair.com/portal/main/flight/direct/query"
data = data = {
    "depCity": "CAN",
    "arrCity": "CSX",
    "flightDate": "20250515",
    "adultNum": "1",
    "childNum": "0",
    "infantNum": "0",
    "cabinOrder": "0",
    "airLine": 1,
    "flyType": 0,
    "international": "0",
    "action": "0",
    "segType": "1",
    "cache": 0,
    "preUrl": "",
    "tariffRules": [],
    "isMember": "",
    "language": "zh",
    "businessType": "COMMON",
    "isMultipass": 1
}
data = json.dumps(data, separators=(',', ':'))
response = requests.post(url, headers=headers, cookies=cookies, data=data)

print(response.text)
print(response)