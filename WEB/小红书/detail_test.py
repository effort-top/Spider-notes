import requests
import json


headers = {
    "authority": "edith.xiaohongshu.com",
    "accept": "application/json, text/plain, */*",
    "accept-language": "zh-CN,zh;q=0.9",
    "content-type": "application/json;charset=UTF-8",
    "origin": "https://www.xiaohongshu.com",
    "referer": "https://www.xiaohongshu.com/explore/681890c5000000002001e84b?xsec_token=ABVEdv1J1hmHJs7oWMRH5_Y8FJdnPlnLm3xmkZxeO4dG8=&xsec_source=pc_feed",
    "sec-ch-ua": "\"Chromium\";v=\"122\", \"Not(A:Brand\";v=\"24\", \"Google Chrome\";v=\"122\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.6261.95 Safari/537.36",
    "x-b3-traceid": "eff49d409f8f64c3",
    "x-mns": "awttG0hERJcnx6/62o37h+BgKjc8Z/RHXpR9WdLlIZjFNlTERtoP/X2+hfxY9BJbRhSP0ti0NMIS6wS7unM/ljO+L9bKGX9SRuQaNy+QtoKvQOc8x1YH6kpEnEWo3iFtQ2elvckdxKfbEozQBbmKReFPgBdewSO/bpcCFTKwBi+Xdzu3E1J+aybdaeEnyK8iEFCdIdX5h1vv8DlhJO7037GLB5yEntd3lCQQQEa1LPJuOCDX3viYhjMvJNdRNbLhn8nZB6HlD4LN+E1IRonxdXwRkgD9Pm1RGZwieuKRlBy0MfS3MWeooxue3zff9yZmNOINF0yGOX6acfeWCiQY+Pi9HuZXzX68Zxf6/aLD0SLI91IFZXkTkjGFOOyxzNgYxha06XnM7SSIItFHR2XT4DQbnEx37wED8472z9CRWXg1MWYpdQdGaSHHXIxR3j/CX/00dJdtbDimFfh6XC7hWCxga4WRPCWbHM/CHtIvuctTzEgF8EffM3gv7DWd",
    "x-s": "XYW_eyJzaWduU3ZuIjoiNTYiLCJzaWduVHlwZSI6IngyIiwiYXBwSWQiOiJ4aHMtcGMtd2ViIiwic2lnblZlcnNpb24iOiIxIiwicGF5bG9hZCI6IjllOGZiOTdhYjQ1Y2M2OTBkNTZlNzdiNDk3NWRjODE4NWM4ZGFjYTdjM2RmYmZlNzNhZDQ0NWIwYjhiOGQ5YWYwYWFhYzliYTQ1ODIzODYyODJjZjVjNWE0ZTIzMGM3MjNkYzcxNGQ2YWQ1MjM0NTRmMzAxMmUxYjI4ZmQyMjU0MzdkNDM3YTc4MGZmMjY2ZWU2NGI0MWMxMGRiOTk5Yzk2M2NjZmE4Y2VlMWRjMDM4YWY2ZTY5MmM2ZDkwZGYwOTU3YmVkYzExMDRjYTFhYjU1NzhhZjFiNGE4OGZmODgzNGM1NmExYjQyNDA2YjhlYTQ0M2Y3NzUwNTYxYWUzZDYwMTg0NzljZWY3MWFlYTE1ZGE5Y2M0YjRmY2IwNmEwMzg1YmRhMDExNGY3MTI2ZjRiNWI1NDc4YmQyZWQ4ZmVjYjM0ZGFiMzIxNmMxYjUwZTdhY2M3NjQ3NjA3ZGFkNjA2MjM1MTFhM2MyNDQxNjQ4Nzg4NDk0ZmJmMGI4YTJkMWRmZDNkYzQwOTg1MzU0YTNkOWY3MjFhNGRmMzJlNzI1In0=",
    "x-s-common": "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",
    "x-t": "1746696674503",
    "x-xray-traceid": "cb579e0e4db246bb512c338f0991ed7f"
}
cookies = {
    "abRequestId": "e6a8ad82-fe26-5bfb-a010-b6485d0aba47",
    "webBuild": "4.62.3",
    "xsecappid": "xhs-pc-web",
    "a1": "196af1e614exexroualqce8m8dt7v4nuyuaub79gv50000224591",
    "webId": "2d38ad81403666695f17ca1f2ecb6987",
    "gid": "yjK0iydWJfv4yjK0iydKy7Wj4dCdCFl701AS0khdY6Yf9728Wh4I7D888JJ42jy80idqW08i",
    "web_session": "040069b49f03fa46b6a8f63a293a4bff6d3e70",
    "loadts": "1746695409032",
    "unread": "{%22ub%22:%22681836e00000000023012206%22%2C%22ue%22:%226816ddcb000000000b014bce%22%2C%22uc%22:31}",
    "acw_tc": "0a5087e817466965293346316e025cde45d5e13b673fc540f2f70a379c918a",
    "websectiga": "984412fef754c018e472127b8effd174be8a5d51061c991aadd200c69a2801d6",
    "sec_poison_id": "f2c4921a-426b-4bc1-a713-61b35f9b4d22"
}
url = "https://edith.xiaohongshu.com/api/sns/web/v1/feed"
data = {
    "source_note_id": "681890c5000000002001e84b",
    "image_formats": [
        "jpg",
        "webp",
        "avif"
    ],
    "extra": {
        "need_body_topic": "1"
    },
    "xsec_source": "pc_feed",
    "xsec_token": "ABVEdv1J1hmHJs7oWMRH5_Y8FJdnPlnLm3xmkZxeO4dG8="
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