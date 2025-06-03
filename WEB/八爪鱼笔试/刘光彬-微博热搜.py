import asyncio
import json

import aiohttp
import requests

class Weibo:
    def __init__(self):
        self.search_cookies = {}
        self.search_headers = {
            'accept': 'application/json, text/plain, */*',
            'accept-language': 'zh-CN,zh;q=0.9',
            'client-version': 'v2.46.34',
            'priority': 'u=1, i',
            'referer': 'https://www.weibo.com/hot/mine',
            'sec-ch-ua': '"Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-origin',
            'server-version': 'v2024.11.20.1',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
            'x-requested-with': 'XMLHttpRequest',
            'x-xsrf-token': 'RUG64-Jx0arMKxONEJw6cGpW',
        }



    def get_cookies(self):
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
        set_cookie = response.headers.get('Set-Cookie')
        cookies = set_cookie.split(', ')
        for cookie in cookies:
            cookie_parts = cookie.split('; ')
            cookie_name = None
            cookie_value = None
            for part in cookie_parts:
                equal_pos = part.find('=')
                if equal_pos != -1:
                    key = part[:equal_pos].strip()
                    value = part[equal_pos + 1:].strip()
                    if key == 'path' or key == 'domain' or key == 'SameSite' or key == 'Max-Age':
                        continue
                    if cookie_name is None:
                        cookie_name = key
                        cookie_value = value
            if cookie_name:
                self.search_cookies[cookie_name] = cookie_value

        print(f"接口请求获取ck：{self.search_cookies}")

    async def get_hot_search_data(self, session: aiohttp.ClientSession):
        url = 'https://weibo.com/ajax/side/hotSearch'
        async with session.get(url, cookies=self.search_cookies, headers=self.search_headers) as response:
            if response.status != 200:
                print(f"请求微博热搜榜失败,请求状态码{response.status}")

            result = await response.json()
            if 'data' not in result or 'realtime' not in result['data']:
                print(f"热搜榜响应格式内容有误")

            hot_search_data = []
            for hot in result['data']['realtime']:
                word = hot['word']
                icon_desc = hot.get('icon_desc', '')
                rank = hot['rank']
                num = hot['num']
                hot_search_data.append({
                    'rank': rank + 1,  # 排名从1开始
                    'word': word,
                    'display_flag': icon_desc,
                    'num': num,
                })

            return hot_search_data

    async def get_wy_search_data(self, session: aiohttp.ClientSession):
        url = 'https://weibo.com/ajax/statuses/entertainment'
        async with session.get(url, cookies=self.search_cookies, headers=self.search_headers) as response:
            if response.status != 200:
                print(f"请求请求微博文娱榜失败,请求状态码{response.status}")

            result = await response.json()
            if 'data' not in result or 'band_list' not in result['data']:
                print(f"文娱榜响应格式内容有误")

            hot_search_data = []
            for hot in result['data']['band_list']:
                word = hot['word']
                display_flag = hot.get('display_flag', '')
                realpos = hot['realpos']
                hot_num = hot['hot_num']
                hot_search_data.append({
                    'rank': realpos,  # 排名从1开始
                    'word': word,
                    'display_flag': display_flag,
                    'num': hot_num,
                })

            return hot_search_data


async def main():
    weibo = Weibo()
    weibo.get_cookies()
    async with aiohttp.ClientSession() as session:
        new_hot = await weibo.get_hot_search_data(session)
        new_wy = await weibo.get_wy_search_data(session)
        print(f"热搜榜：{new_hot}")
        print(f"文娱榜：{new_wy}")
    with open('hot_search.json', 'w', encoding='utf-8') as f:
        json.dump(new_hot, f, ensure_ascii=False, indent=2)

    with open('wy_search.json', 'w', encoding='utf-8') as f:
        json.dump(new_wy, f, ensure_ascii=False, indent=2)

if __name__ == '__main__':
    loop = asyncio.get_event_loop()
    loop.run_until_complete(main())