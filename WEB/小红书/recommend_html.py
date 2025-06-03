import json
import re
from bs4 import BeautifulSoup
import requests


headers = {
    "authority": "www.xiaohongshu.com",
    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
    "accept-language": "zh-CN,zh;q=0.9",
    "cache-control": "max-age=0",
    "sec-ch-ua": "\"Chromium\";v=\"122\", \"Not(A:Brand\";v=\"24\", \"Google Chrome\";v=\"122\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "document",
    "sec-fetch-mode": "navigate",
    "sec-fetch-site": "same-origin",
    "sec-fetch-user": "?1",
    "upgrade-insecure-requests": "1",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.6261.95 Safari/537.36"
}
cookies = {
    "acw_tc": "0a00d1a617466947243923188e269c55332c5ad7f8539bacfdd84c2ea67680",
    "abRequestId": "e6a8ad82-fe26-5bfb-a010-b6485d0aba47",
    "webBuild": "4.62.3",
    "xsecappid": "xhs-pc-web",
    "a1": "196af1e614exexroualqce8m8dt7v4nuyuaub79gv50000224591",
    "webId": "2d38ad81403666695f17ca1f2ecb6987",
    "gid": "yjK0iydWJfv4yjK0iydKy7Wj4dCdCFl701AS0khdY6Yf9728Wh4I7D888JJ42jy80idqW08i",
    "web_session": "040069b49f03fa46b6a8f63a293a4bff6d3e70",
    "unread": "{%22ub%22:%22681c192600000000230151a2%22%2C%22ue%22:%2267fa17c4000000001d01fb0c%22%2C%22uc%22:30}",
    "loadts": "1746694867031",
    "websectiga": "f3d8eaee8a8c63016320d94a1bd00562d516a5417bc43a032a80cbf70f07d5c0",
    "sec_poison_id": "856f96db-2770-4e42-99b9-b27b0ccadb20"
}
url = "https://www.xiaohongshu.com/explore"
params = {
    "channel_id": "homefeed_recommend"
}
response = requests.get(url, headers=headers, cookies=cookies, params=params)
html_content = response.text
# 解析 HTML 内容
soup = BeautifulSoup(html_content, 'html.parser')

# 查找包含 window.__INITIAL_STATE__ 的 script 标签
script_tag = soup.find('script', text=lambda t: t and 'window.__INITIAL_STATE__' in t)

if script_tag:
    # 提取 JSON 部分
    content = script_tag.string
    # 提取大括号内的内容
    start = content.find('{')
    end = content.rfind('}') + 1
    if start != -1 and end != -1:
        initial_state_json = content[start:end].strip()
        # 清理 JSON 字符串（移除注释和多余内容）
        cleaned_json = re.sub(r'undefined', 'null', initial_state_json)

        # 尝试解析清理后的 JSON
        try:
            initial_state_data = json.loads(cleaned_json)
            feeds = initial_state_data["feed"]["feeds"]
            for feed in feeds:
                xsecToken = feed["xsecToken"]
                id = feed["id"]
                displayTitle = feed["noteCard"]["displayTitle"]
                user_xsecToken = feed["noteCard"]['user']['xsecToken']
                userId = feed["noteCard"]['user']['userId']
                nickname = feed["noteCard"]['user']['nickname']
                print(xsecToken, id, displayTitle, user_xsecToken, userId, nickname)
            # print(initial_state_data)
        except json.JSONDecodeError as e:
            print(f"JSON 解码错误: {e}")
    else:
        print("未找到 JSON 内容")
else:
    print("未找到包含 window.__INITIAL_STATE__ 的 script 标签")
# print(response.text)
# print(response)