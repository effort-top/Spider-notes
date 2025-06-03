import requests


headers = {
    "Host": "frodo.douban.com",
    "user-agent": "api-client/1 com.douban.frodo/7.72.0(286) Android/31 product/picasso vendor/Xiaomi model/Redmi K30 5G brand/Redmi  rom/miui6  network/wifi  udid/2acbebb55e42972c34350f4bdee904bc271bffbf  platform/mobile nd/1"
}
url = "https://frodo.douban.com/api/v2/elendil/recommend_feed"
params = {
    "start": "0",
    "count": "20",
    "apikey": "0dad551ec0f84ed02907ff5c42e8ec70",
    "udid": "2acbebb55e42972c34350f4bdee904bc271bffbf",
    "timezone": "Asia/Shanghai",
    "_sig": "b0WJ/A8b3p+F15Mws+3i4aBAq30=",
    "_ts": "1744126299"
}
response = requests.get(url, headers=headers, params=params)

print(response.json())
print(response)