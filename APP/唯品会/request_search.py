import hashlib
import urllib.parse
import requests
import uuid

'''
1.搜索接口需要破解的内容：
    请求头：
        authorization
    请求体：
        api_key
        did
        mars_cid
        session_id
        skey
2.破解did,由另外一个接口获取（https://mapi.appvipshop.com/vips-mobile/rest/device/generate_token）
     请求头：
        authorization
     请求体：
        api_key
        edata
        skey
3.破解edata，需要用到另外一个接口（https://vcsp-api.vip.com/token/getTokenByFP?vcspKey=4d9e524ad536c03ff203787cf0dfcd29）
    vcspKey 以及 vcspToken
4.注册设备（https://mp.appvipshop.com/apns/device_reg）
    skey	            6692c461c3810ab150c9a980d0c275ec(不变)
    device_token	    uuid.uuid4()
    authorization
'''


def get_device_token():
    mid = str(uuid.uuid4())
    return mid

def get_apiSign(data):
    x = 'aee4c425dbb2288b80c71347cc37d04b'
    # 对字典进行排序
    sorted_params = dict(sorted(data.items()))

    # 将排序后的字典转换为查询字符串
    data_string = urllib.parse.urlencode(sorted_params)
    # data_string = 'app_name=achievo_ad&app_version=7.83.3&channel=oziq7dxw:::&device=Redmi K30 5G&device_token=eb479aba-ebdc-36ee-a481-75cadbc77666&manufacturer=Xiaomi&mf_cid=BCRUVy5JqpRXdkr3Vcy2NUphqZl4e3P6wMiPvJKDYF5q2w1VUwVKk2NAV/ws3Dvp&mf_regPlat=1&os_version=31&regPlat=1&regid=BCRUVy5JqpRXdkr3Vcy2NUphqZl4e3P6wMiPvJKDYF5q2w1VUwVKk2NAV/ws3Dvp&rom=Dalvik/2.1.0 (Linux; U; Android 12; Redmi K30 5G Build/SKQ1.211006.001)&skey=6692c461c3810ab150c9a980d0c275ec&status=1&vipruid=&warehouse=VIP_NH'
    text1 = x+data_string
    hash_object = hashlib.sha1()
    hash_object.update(text1.encode('utf-8'))
    value = hash_object.hexdigest()
    text2 = x+value
    hash_object = hashlib.sha1()
    hash_object.update(text2.encode('utf-8'))
    apiSign = hash_object.hexdigest()
    return apiSign

device_token = get_device_token()

def device_reg():
    # 破解 authorization 和 device_token skey
    params = {
        "app_name": "achievo_ad",
        "app_version": "7.83.3",
        "device_token": device_token,
        "status": "1",
        "warehouse": "null",
        "manufacturer": "Xiaomi",
        "device": "Redmi K30 5G",
        "os_version": "31",
        "channel": "oziq7dxw:::",
        "vipruid": "",
        "regPlat": "0",
        "regid": "null",
        "rom": "Dalvik/2.1.0 (Linux; U; Android 12; Redmi K30 5G Build/SKQ1.211006.001)",
        "skey": "6692c461c3810ab150c9a980d0c275ec"
    }
    api_sign = get_apiSign(params)
    headers = {
        "Host": "mp.appvipshop.com",
        "authorization": f"OAuth api_sign={api_sign}",
        "x-vip-host": "mp.appvipshop.com",
        "user-agent": "okhttp/4.9.1"
    }
    url = "https://mp.appvipshop.com/apns/device_reg"

    response = requests.get(url, headers=headers, params=params)

    print(response.text)
    print(response)

device_reg()
