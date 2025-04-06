import hashlib
import random
import time

from Crypto.Cipher import AES
from Crypto.Util.Padding import pad, unpad
from Crypto.Random import get_random_bytes
import base64
import requests
import json


def aes_encrypt_ECB(key, data_string):
    aes = AES.new(
        key=key.encode('utf-8'),
        mode=AES.MODE_ECB,
    )
    raw = pad(data_string.encode('utf-8'), 16)
    return aes.encrypt(raw)


def create_android_id():
    data_list = []
    for i in range(1, 9):
        part = "".join(random.sample("0123456789ABCDEF", 2))
        data_list.append(part)
    return "".join(data_list).lower()


map_value = {}
uuid = create_android_id()
loginToken = ''
platform = 'android'
timestamp = str(int(time.time() * 1000))
v = '4.75.5'
map_value['uuid'] = uuid
map_value['loginToken'] = loginToken
map_value['platform'] = platform
map_value['timestamp'] = timestamp
map_value['v'] = v
sorted_items = sorted(map_value.items())
# 拼接排序后的键值对
sb2 = ''.join([f"{key}{value}" for key, value in sorted_items])
key = 'd245a0ba8d678a61'
encrypted_str = aes_encrypt_ECB(key, sb2)
value = base64.encodebytes(encrypted_str).replace(b"\n", b'')
newSign = hashlib.md5(value).hexdigest()
headers = {
    "duuuid": uuid,
    "duimei": "",
    "duplatform": "android",
    "appId": "duapp",
    "duchannel": "myapp",
    "humeChannel": "",
    "duv": "4.75.5",
    "duloginToken": "",
    "dudeviceTrait": "Redmi+K30+5G",
    "dudeviceBrand": "Redmi",
    "timestamp": timestamp,
    "shumeiid": "2025040702224667426cf317f74e0c04cbed130e461b990052706499dc0040",
    "oaid": "",
    "User-Agent": "duapp/4.75.5(android;12)",
    "X-Auth-Token": "",
    "isRoot": "0",
    "emu": "0",
    "isProxy": "0",
    "SK": "",
    "Content-Type": "application/json; charset=utf-8",
    "Host": "app.dewu.com"
}
url = "https://app.dewu.com/api/v1/app/user_core/users/getVisitorUserId"
data = {
    "loginToken": "",
    "newSign": newSign,
    "platform": "android",
    "timestamp": timestamp,
    "uuid": uuid,
    "v": "4.75.5"
}
data = json.dumps(data, separators=(',', ':'))
response = requests.post(url, headers=headers, data=data)
x_auth_token = response.headers['X-Auth-Token']
print(x_auth_token)

# 接下来请求推荐接口
map_value = {
    "abValue": "1",
    "deliveryProjectId": "0",
    "abRectagFengge": "0",
    "abType": "social_brand_strategy_v454",
    "limit": "20",
    "lastId": "",
    "abRecReason": "0",
    "abLiveEntranceClose": "0",
    "abVideoCover": "2"
}
timestamp = str(int(time.time() * 1000))
map_value['uuid'] = uuid
map_value['loginToken'] = loginToken
map_value['platform'] = platform
map_value['timestamp'] = timestamp
map_value['v'] = v
sorted_items = sorted(map_value.items())
# 拼接排序后的键值对
sb2 = ''.join([f"{key}{value}" for key, value in sorted_items])
key = 'd245a0ba8d678a61'
encrypted_str = aes_encrypt_ECB(key, sb2)
value = base64.encodebytes(encrypted_str).replace(b"\n", b'')
newSign = hashlib.md5(value).hexdigest()

headers = {
    "debugable": "0",
    "duuuid": "6a939be6061acbbe",
    "duimei": "",
    "duplatform": "android",
    "appId": "duapp",
    "duchannel": "myapp",
    "humeChannel": "",
    "duv": "4.75.5",
    "duloginToken": "",
    "dudeviceTrait": "Redmi+K30+5G",
    "dudeviceBrand": "Redmi",
    "timestamp": "1743965275617",
    "shumeiid": "2025040702224667426cf317f74e0c04cbed130e461b990052706499dc0040",
    "oaid": "365559b373727ce5",
    "User-Agent": "duapp/4.75.5(android;12)",
    "X-Auth-Token": x_auth_token,
    "isRoot": "0",
    "emu": "0",
    "isProxy": "0",
    "SK": "9RQsIOauCsWImuZsuFRj9pp7sgUntR6NOah0Rvy4YynBBI1YS0rtwKHyCLKYXcDueUE4h3EUo4V1d7rStfLZUK4kXM1x",
    "Host": "app.dewu.com"
}
url = "https://app.dewu.com/sns-rec/v1/recommend/all/feed"
params = {
    "abType": "social_brand_strategy_v454",
    "abValue": "1",
    "lastId": "",
    "limit": "20",
    "deliveryProjectId": "0",
    "abVideoCover": "2",
    "abRectagFengge": "0",
    "abRecReason": "0",
    "abLiveEntranceClose": "0",
    "newSign": newSign
}
response = requests.get(url, headers=headers, params=params)

print(response.text)
print(response)