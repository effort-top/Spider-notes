import json

import requests
import execjs

headers = {
    'accept': 'application/json, text/plain, */*',
    'accept-language': 'zh-CN,zh;q=0.9',
    'content-type': 'application/x-www-form-urlencoded',
    'origin': 'https://www.iciba.com',
    'priority': 'u=1, i',
    'referer': 'https://www.iciba.com/',
    'sec-ch-ua': '"Chromium";v="128", "Not;A=Brand";v="24", "Google Chrome";v="128"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-site',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36',
}
with open('解密.js', 'r', encoding='utf-8') as f:
    js_code = f.read()
context = execjs.compile(js_code)

searchWord = "好多"
sign = context.call('get_sign', searchWord)

params = {
    'c': 'trans',
    'm': 'fy',
    'client': '6',
    'auth_user': 'key_web_new_fanyi',
    'sign': sign,
}

data = {
    'from': 'auto',
    'to': 'auto',
    'q': searchWord,
}

response = requests.post('https://ifanyi.iciba.com/index.php', params=params, headers=headers, data=data)
content = response.json().get('content')
print(content)
data = context.call('get_content', content)
print(data)
data_json = json.loads(data)
print(data_json.get("out"))