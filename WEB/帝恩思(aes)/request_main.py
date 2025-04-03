import requests
import execjs


headers = {
    "accept": "*/*",
    "accept-language": "en,zh-CN;q=0.9,zh;q=0.8",
    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    "origin": "https://www.dns.com",
    "priority": "u=1, i",
    "referer": "https://www.dns.com/login.html?redirectTo=/&popup",
    "sec-ch-ua": "\"Google Chrome\";v=\"131\", \"Chromium\";v=\"131\", \"Not_A Brand\";v=\"24\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",
    "x-requested-with": "XMLHttpRequest"
}
cookies = {
    "_gcl_au": "1.1.1735969257.1734344360",
    "Hm_lvt_03fcdd8038a49ec514366b798fc9ccbe": "1734344360",
    "HMACCOUNT": "90D484B7A60C6775",
    "__root_domain_v": ".dns.com",
    "_qddaz": "QD.835334344360307",
    "_qdda": "3-1.1",
    "_qddab": "3-o5ja0l.m4qvup3d",
    "Hm_lpvt_03fcdd8038a49ec514366b798fc9ccbe": "1734344370",
    "source_uri": "eyJpdiI6Imo3d29ET0Z6emRndHNKQm52ejF3YXc9PSIsInZhbHVlIjoidlBQcERWZUZYNDRjTzE1MWRQNlQ3Zz09IiwibWFjIjoiNTE4MWMwMjg1MjEzZjAxNjc1YTRjZmJkNjdmZmVlOTNiZDZmZDU5NzZlOWFiZmI1MjVlNjU0YzcxZGIyNjUzNCJ9",
    "XSRF-TOKEN": "eyJpdiI6IjVaNU4xU2RadzdhS2RjQ3Z0QXpqc2c9PSIsInZhbHVlIjoieURITGZTUzd0bkZYVTN4OUdlZXhWbXQzNHBHUDJCMnhyNUdua3hXb1BVeXhqOUJpbjB2aTBMQXRROW1SOE1OekNyTUFBcjBvY2NlTVVnR2tSNFwvc0lnPT0iLCJtYWMiOiJhZTI3YWU0YTQzMGRiM2IzNDI2NmE3M2UwMGUwNmYxMjhiODUxM2MyYWJlMDI1ODQ3ZDQ1NjYxMDAxYWEyNDAwIn0%3D",
    "dns_session": "eyJpdiI6InIraDFPWFNwbWdZMzJhMlRcL3BMN1BRPT0iLCJ2YWx1ZSI6InJTdVNJc3NxNk1EZytSUU53SWUwVWR1bGJmZkxvWmwwSlZkY1FvT2NVdG5xZUpxWFZkQlNZRmd6Tlwvcnp2dnRIZmplVnc1dTFTUmtJYVwvVGplUEZtWXc9PSIsIm1hYyI6ImZhMGZiMDgwM2E1OWUxZGUwYjFjZTgwZjk1N2RjOGYyNDNiZDRmOGNmMmNlZDdjMWEzZTczN2ZmNzgyZDg1Y2EifQ%3D%3D"
}
url = "https://www.dns.com/login"
with open('解密.js', 'r', encoding='utf-8') as f:
    js_code = f.read()
context = execjs.compile(js_code)
phone = '13712935419'
email_or_phone = context.call('aes',phone)
passwords = '123123'
password = context.call('aes',passwords)
data = {
    "email_or_phone": email_or_phone,
    "password": password,
    "type": "9f/ovwVnNeK/DircMP7ISQ==",
    "redirectTo": "/",
    "_token": "QOhbhzatezJw5gQkZeIBfBFzdOPdZJ0c26URu10p"
}
print(data)
response = requests.post(url, headers=headers, cookies=cookies, data=data)

print(response.json())
print(response)
