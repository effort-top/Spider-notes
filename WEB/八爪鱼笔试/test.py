import requests


headers = {
    "accept": "*/*",
    "accept-language": "zh-CN,zh;q=0.9",
    "cache-control": "no-cache",
    "content-type": "application/x-www-form-urlencoded",
    "if-modified-since": "0",
    "origin": "https://passport.weibo.com",
    "pragma": "no-cache",
    "priority": "u=1, i",
    "referer": "https://passport.weibo.com/visitor/visitor?entry=miniblog&a=enter&url=https%3A%2F%2Fweibo.com%2Flogin.php%3Furl%3Dhttps%253A%252F%252Fweibo.com%252Fnewlogin%253Ftabtype%253Dweibo%2526gid%253D102803%2526openLoginLayer%253D0%2526url%253Dhttps%25253A%25252F%25252Fweibo.com%25252Fhot%25252Fsearch&domain=.weibo.com&sudaref=https%3A%2F%2Fweibo.com%2F%2Fnewlogin%3Ftabtype%3Dweibo%26gid%3D102803%26openLoginLayer%3D0%26url%3Dhttps%253A%252F%252Fweibo.com%252Fhot%252Fsearch&ua=php-sso_sdk_client-0.6.36&_rand=1744357259.3337",
    "sec-ch-ua": "\"Google Chrome\";v=\"135\", \"Not-A.Brand\";v=\"8\", \"Chromium\";v=\"135\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36"
}
url = "https://passport.weibo.com/visitor/genvisitor2"
data = {
    "cb": "visitor_gray_callback",
    "tid": "",
    "from": "weibo",
    "webdriver": "false"
}
response = requests.post(url, headers=headers, data=data)

# 提取Set-Cookie
set_cookie = response.headers.get('Set-Cookie')
if set_cookie:
    print("Set-Cookie:", set_cookie)
else:
    print("Set-Cookie not found in response headers.")

# 将Set-Cookie字符串分割成列表
cookies = set_cookie.split(', ')
cookie_dict = {}
for cookie in cookies:
    # 将每个cookie分割成键值对
    cookie_parts = cookie.split('; ')
    cookie_name = None
    cookie_value = None
    for part in cookie_parts:
        # 找到第一个等号的位置
        equal_pos = part.find('=')
        if equal_pos != -1:
            key = part[:equal_pos].strip()
            value = part[equal_pos + 1:].strip()
            if cookie_name is None:
                cookie_name = key
                cookie_value = value
    if cookie_name:
        cookie_dict[cookie_name] = cookie_value

print(cookie_dict)