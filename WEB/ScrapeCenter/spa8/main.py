import json
import re

import requests
from lxml import etree
import chardet


headers = {
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
    "Accept-Language": "zh-CN,zh;q=0.9",
    "Cache-Control": "max-age=0",
    "Connection": "keep-alive",
    # "If-Modified-Since": "Sun, 27 Feb 2022 04:45:41 GMT",
    # "If-None-Match": "\"621b01f5-155d\"",
    "Referer": "https://scrape.center/",
    "Sec-Fetch-Dest": "document",
    "Sec-Fetch-Mode": "navigate",
    "Sec-Fetch-Site": "same-site",
    "Sec-Fetch-User": "?1",
    "Upgrade-Insecure-Requests": "1",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36",
    "sec-ch-ua": "\"Chromium\";v=\"128\", \"Not;A=Brand\";v=\"24\", \"Google Chrome\";v=\"128\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",

}
url = "https://spa8.scrape.center/"
response = requests.get(url, headers=headers)
encoding = chardet.detect(response.content)['encoding']  # 检测响应的编码
html = response.content.decode(encoding)  # 根据检测到的编码进行解码
tree = etree.HTML(html)
data = tree.xpath("//script[last()]/text()")[0]
match = re.search(r"const players = (\[.*?\]);", data, re.S)
if match:
    players_json_str = match.group(1).strip()

    # 将属性名转换为带双引号的格式
    players_json_str = re.sub(r'(\w+):', r'"\1":', players_json_str)
    # 替换单引号为双引号（避免错误，JavaScript 中的单引号应转换为双引号）
    players_json_str = players_json_str.replace("'", '"')
    # 删除尾随逗号
    players_json_str = re.sub(r',(\s*[\]}])', r'\1', players_json_str)

    try:
        # 解析 JSON 字符串
        players_data = json.loads(players_json_str)
        # 输出解析的数据
        print(players_data)
    except json.JSONDecodeError as e:
        print(f"JSON 解码错误: {e}")

else:
    print("未找到匹配的 players 数据")