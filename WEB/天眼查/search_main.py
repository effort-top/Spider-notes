import time

import requests
import json


headers = {
    "Accept": "application/json, text/plain, */*",
    "Accept-Language": "zh-CN,zh;q=0.9",
    "Cache-Control": "no-cache",
    "Connection": "keep-alive",
    "Content-Type": "application/json",
    "Origin": "https://www.tianyancha.com",
    "Pragma": "no-cache",
    "Referer": "https://www.tianyancha.com/",
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-site",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36",
    "X-AUTH-TOKEN": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxOTA2ODk5NTg4NyIsImlhdCI6MTc0NTU0ODk2MywiZXhwIjoxNzQ4MTQwOTYzfQ.AKfyp4_RKRnX6GNhquJAHFdxKr0MocylyQEZzQhLYX0T8lmso0eEZTWyrw34LocHN8EflSvASvv7JYYqneDrXg",
    "X-TYCID": "cc444460217d11f0aee3e56c3960d957",
    "eventId": "i246",
    "page_id": "SearchResult",
    "pm": "451",
    "sec-ch-ua": "\"Google Chrome\";v=\"135\", \"Not-A.Brand\";v=\"8\", \"Chromium\";v=\"135\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "spm": "i246"
}
cookies = {
    "HWWAFSESTIME": "1745548459537",
    "HWWAFSESID": "d5dc91097ad9f4aaabd",
    "csrfToken": "d5gZb5Mzd6-4A4Bj4Fu6sZTg",
    "CUID": "112330a0aae02c4fb27451ff338424f8",
    "TYCID": "cc444460217d11f0aee3e56c3960d957",
    "sajssdk_2015_cross_new_user": "1",
    "Hm_lvt_e92c8d65d92d534b0fc290df538b4758": "1745548464",
    "HMACCOUNT": "FDD8BC8358B70DD5",
    "bannerFlag": "true",
    "sensorsdata2015jssdkcross": "%7B%22distinct_id%22%3A%22346465118%22%2C%22first_id%22%3A%221966acbcdab1731-0181ee7113506ac-26011c51-1327104-1966acbcdac19c3%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E7%9B%B4%E6%8E%A5%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%22%2C%22%24latest_referrer%22%3A%22%22%7D%2C%22identities%22%3A%22eyIkaWRlbnRpdHlfY29va2llX2lkIjoiMTk2NmFjYmNkYWIxNzMxLTAxODFlZTcxMTM1MDZhYy0yNjAxMWM1MS0xMzI3MTA0LTE5NjZhY2JjZGFjMTljMyIsIiRpZGVudGl0eV9sb2dpbl9pZCI6IjM0NjQ2NTExOCJ9%22%2C%22history_login_id%22%3A%7B%22name%22%3A%22%24identity_login_id%22%2C%22value%22%3A%22346465118%22%7D%2C%22%24device_id%22%3A%221966acbcdab1731-0181ee7113506ac-26011c51-1327104-1966acbcdac19c3%22%7D",
    "tyc-user-info": "%7B%22state%22%3A%220%22%2C%22vipManager%22%3A%220%22%2C%22mobile%22%3A%2219068995887%22%2C%22userId%22%3A%22346465118%22%7D",
    "tyc-user-info-save-time": "1745548963761",
    "auth_token": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxOTA2ODk5NTg4NyIsImlhdCI6MTc0NTU0ODk2MywiZXhwIjoxNzQ4MTQwOTYzfQ.AKfyp4_RKRnX6GNhquJAHFdxKr0MocylyQEZzQhLYX0T8lmso0eEZTWyrw34LocHN8EflSvASvv7JYYqneDrXg",
    "searchSessionId": "1745548964.04999169",
    "Hm_lpvt_e92c8d65d92d534b0fc290df538b4758": "1745548967"
}
url = "https://capi.tianyancha.com/cloud-tempest/web/searchCompanyV4"
params = {
    "_": str(int(time.time()*1000))
}
data = {
    "filterJson": "{\"economicTypeMethod\":{\"key\":\"economicTypeMethod\",\"items\":[{\"value\":\"1\"}]},\"institutionTypeMethod\":{\"key\":\"institutionTypeMethod\",\"items\":[{\"value\":\"1\"}]},\"word\":{\"key\":\"word\",\"items\":[{\"value\":\"思帆信息科技有限公司\"}]}}",
    "searchType": 1,
    "sessionNo": "1745548964.04999169",
    "allowModifyQuery": 1,
    "reportInfo": {
        "page_id": "SearchResult",
        "page_name": "主搜搜索结果页",
        "tab_id": "company",
        "tab_name": "公司",
        "search_session_id": "1745548964.04999169",
        "distinct_id": "346465118"
    },
    "pageNum": 1,
    "pageSize": 20
}
data = json.dumps(data, separators=(',', ':'))
response = requests.post(url, headers=headers, params=params, data=data,cookies=cookies)

print(response.text)
print(response)

# import requests
#
#
# headers = {
#     "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
#     "Accept-Language": "zh-CN,zh;q=0.9",
#     "Cache-Control": "no-cache",
#     "Connection": "keep-alive",
#     "Pragma": "no-cache",
#     "Referer": "https://www.tianyancha.com/nsearch?key=%E6%80%9D%E5%B8%86%E4%BF%A1%E6%81%AF%E7%A7%91%E6%8A%80%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8",
#     "Sec-Fetch-Dest": "document",
#     "Sec-Fetch-Mode": "navigate",
#     "Sec-Fetch-Site": "same-origin",
#     "Sec-Fetch-User": "?1",
#     "Upgrade-Insecure-Requests": "1",
#     "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36",
#     "sec-ch-ua": "\"Google Chrome\";v=\"135\", \"Not-A.Brand\";v=\"8\", \"Chromium\";v=\"135\"",
#     "sec-ch-ua-mobile": "?0",
#     "sec-ch-ua-platform": "\"Windows\""
# }
# cookies = {
#     "HWWAFSESTIME": "1745548459537",
#     "HWWAFSESID": "d5dc91097ad9f4aaabd",
#     "csrfToken": "d5gZb5Mzd6-4A4Bj4Fu6sZTg",
#     "CUID": "112330a0aae02c4fb27451ff338424f8",
#     "TYCID": "cc444460217d11f0aee3e56c3960d957",
#     "sajssdk_2015_cross_new_user": "1",
#     "Hm_lvt_e92c8d65d92d534b0fc290df538b4758": "1745548464",
#     "HMACCOUNT": "FDD8BC8358B70DD5",
#     "bannerFlag": "true",
#     "sensorsdata2015jssdkcross": "%7B%22distinct_id%22%3A%22346465118%22%2C%22first_id%22%3A%221966acbcdab1731-0181ee7113506ac-26011c51-1327104-1966acbcdac19c3%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E7%9B%B4%E6%8E%A5%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%22%2C%22%24latest_referrer%22%3A%22%22%7D%2C%22identities%22%3A%22eyIkaWRlbnRpdHlfY29va2llX2lkIjoiMTk2NmFjYmNkYWIxNzMxLTAxODFlZTcxMTM1MDZhYy0yNjAxMWM1MS0xMzI3MTA0LTE5NjZhY2JjZGFjMTljMyIsIiRpZGVudGl0eV9sb2dpbl9pZCI6IjM0NjQ2NTExOCJ9%22%2C%22history_login_id%22%3A%7B%22name%22%3A%22%24identity_login_id%22%2C%22value%22%3A%22346465118%22%7D%2C%22%24device_id%22%3A%221966acbcdab1731-0181ee7113506ac-26011c51-1327104-1966acbcdac19c3%22%7D",
#     "tyc-user-info": "%7B%22state%22%3A%220%22%2C%22vipManager%22%3A%220%22%2C%22mobile%22%3A%2219068995887%22%2C%22userId%22%3A%22346465118%22%7D",
#     "tyc-user-info-save-time": "1745548963761",
#     "auth_token": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxOTA2ODk5NTg4NyIsImlhdCI6MTc0NTU0ODk2MywiZXhwIjoxNzQ4MTQwOTYzfQ.AKfyp4_RKRnX6GNhquJAHFdxKr0MocylyQEZzQhLYX0T8lmso0eEZTWyrw34LocHN8EflSvASvv7JYYqneDrXg",
#     "searchSessionId": "1745548964.04999169",
#     "Hm_lpvt_e92c8d65d92d534b0fc290df538b4758": "1745548967"
# }
# url = "https://www.tianyancha.com/nsearch"
# params = {
#     "key": "思帆信息科技有限公司"
# }
# response = requests.get(url, headers=headers, cookies=cookies, params=params)
#
# print(response.text)
# print(response)