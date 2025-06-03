import time

import requests


headers = {
    "authority": "edith.xiaohongshu.com",
    "accept": "application/json, text/plain, */*",
    "accept-language": "zh-CN,zh;q=0.9",
    "origin": "https://www.xiaohongshu.com",
    "referer": "https://www.xiaohongshu.com/explore/681a1edb000000002300f306?xsec_token=ABKePxa9UTGISkNLG3qxIHCVQhAW9M9H7XktcvYIES3_w=&xsec_source=pc_feed",
    "sec-ch-ua": "\"Chromium\";v=\"122\", \"Not(A:Brand\";v=\"24\", \"Google Chrome\";v=\"122\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.6261.95 Safari/537.36",
    "x-b3-traceid": "b9d4fa0808ab8aaa",
    "x-mns": "awlX3p4fBW0zowEYmXJgeb8XYQW8GI0Qd+6y1cB+kzmZD2FK7x23nmEwN9np0Fv8b+0y2IxO/zHM37w/2GeNnTpwXIeCfZkEi/oXOXBuewEg4xBN3M1gpXxC6ExaQuE+0c+aQ4ypaNJ+oFXY5uYtBFzXM4j1+Kc/hC5WHySb8fJh+1t8kpN/zXyjI11o6Hdc8DI9hd1/bH3YDFQ6HE38GXpCoP3cwha9cEfybeWzdbImoiavMzSRzXRlQv9WyPO/p5y6M8o818IZKXFK1yfnhuoy4WnnlMNE4ilPN7hkpvKxht7DxJQFZw3+0btwH3LyNB9j5Yo/NRCdF53MKmTBZLPIZla6ZyClxFnfizBwfmQBb30QwE4QNDHxZbCg+ikhMuDmc4YHbHKTZ1pCObDHlEhkRSCnIlFi3WTidDHeGQlzJ3dI3gMYtDBkn/+LQf6wZLu/9WJN5FMuxhl5Eox082kkFIeT8jY9iuB1og037TFWvwhZYdimW9/Wf+5p",
    "x-s": "XYW_eyJzaWduU3ZuIjoiNTYiLCJzaWduVHlwZSI6IngyIiwiYXBwSWQiOiJ4aHMtcGMtd2ViIiwic2lnblZlcnNpb24iOiIxIiwicGF5bG9hZCI6Ijg4MWI3NDVhYTRjMzUyYmI5OWFmMzA4MmNlN2Q0NWYzMWZkNWIyNzU1ZTc2MGE5MmYzMjFhN2QyZjQ4NjUzYTFjMDU3Y2IzODA0MTkxMmE2Y2NlMWYxN2JmYWMxMGFlMDk3NjViM2JhNThmZTRkMDRhMGYzMjNmNmI0ODA5MDM5YjNmMjczOTMxNGM4ZTg2ODAyMWM4NGE5NGMxMGEwNzZlYjJkNzk2MTI2ZjhhM2M2MjdmMzZhZDZjNWUwNTg1YjJiYjRkYWEzZDUxYjBjYzY4MDMzNTg0OGZmMmY5OWY0MDE5MDNhMjg2ZGQ2NWIwNmFjNTA5Nzg5YWMwNmY2ZmMyYmFjNmZhM2YwNmVkMGZjNjAyMTBkOGU1ZWMyNWVjMDkyYWNlODY0YzM1MGI3ODk3YTIxZDUxODBiMTZiNTY4OWIxMDA2MDY5NzY5MTJjYzYzYWI3N2Q3MWQxMTcyOTI4YmM0NGY4NWY2ZGE4MDJhNmE2OTM3NTFkYWFkNGI4NGQ0OWJmZjQzNzgyZDQ1YzBhMzgwOWMyZTVlZmIwY2E2In0=",
    "x-s-common": "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",
    # "x-t": "1746695484276",
    "x-t":str(int(time.time()*1000)),
    "x-xray-traceid": "cb5794f980b2468384a6ea82c5c0718b"
}
cookies = {
    "abRequestId": "e6a8ad82-fe26-5bfb-a010-b6485d0aba47",
    "webBuild": "4.62.3",
    "xsecappid": "xhs-pc-web",
    "a1": "196af1e614exexroualqce8m8dt7v4nuyuaub79gv50000224591",
    "webId": "2d38ad81403666695f17ca1f2ecb6987",
    "acw_tc": "0a4a5af217466947265892626e3c4f41ec5e6035b2a3c013134764ab65853f",
    "gid": "yjK0iydWJfv4yjK0iydKy7Wj4dCdCFl701AS0khdY6Yf9728Wh4I7D888JJ42jy80idqW08i",
    "web_session": "040069b49f03fa46b6a8f63a293a4bff6d3e70",
    "websectiga": "f3d8eaee8a8c63016320d94a1bd00562d516a5417bc43a032a80cbf70f07d5c0",
    "sec_poison_id": "856f96db-2770-4e42-99b9-b27b0ccadb20",
    "loadts": "1746695409032",
    "unread": "{%22ub%22:%22681836e00000000023012206%22%2C%22ue%22:%226816ddcb000000000b014bce%22%2C%22uc%22:31}"
}
url = "https://edith.xiaohongshu.com/api/sns/web/v2/comment/page"
params = {
    "note_id": "681a1edb000000002300f306",
    "cursor": "",
    "top_comment_id": "",
    "image_formats": "jpg,webp,avif",
    "xsec_token": "ABKePxa9UTGISkNLG3qxIHCVQhAW9M9H7XktcvYIES3_w="
}
response = requests.get(url, headers=headers, cookies=cookies, params=params)
response_json = response.json()
comments = response_json["data"]["comments"]
for comment in comments:
    ip_location = comment["ip_location"]
    create_time = comment["create_time"]
    content = comment["content"]
    print(ip_location, create_time, content)
# print(response.status_code)
# print(response.text)
