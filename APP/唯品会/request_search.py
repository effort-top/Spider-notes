import hashlib
import random
import time
import urllib.parse
from base64 import b64encode

import requests
import uuid
from urllib.parse import quote_plus
from Crypto.Util.Padding import pad
from Crypto.Cipher import AES

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
    vcspKey 以及 请求头中的 vcspauthorization	vcspSign=xxxx
4.注册设备（https://mp.appvipshop.com/apns/device_reg）
    skey	            6692c461c3810ab150c9a980d0c275ec(不变)
    device_token	    uuid.uuid4()
    authorization
'''


def get_device_token():
    mid = str(uuid.uuid4())
    return mid

def sha1(data_string):
    # sha1加密
    hash_object = hashlib.sha1()
    hash_object.update(data_string.encode('utf-8'))
    arg7 = hash_object.hexdigest()
    return arg7
def get_apiSign(data):
    x = 'aee4c425dbb2288b80c71347cc37d04b'
    # 对字典进行排序
    sorted_params = dict(sorted(data.items()))

    # 将排序后的字典转换为查询字符串
    data_string = urllib.parse.urlencode(sorted_params)
    # data_string = 'app_name=achievo_ad&app_version=7.83.3&channel=oziq7dxw:::&device=Redmi K30 5G&device_token=eb479aba-ebdc-36ee-a481-75cadbc77666&manufacturer=Xiaomi&mf_cid=BCRUVy5JqpRXdkr3Vcy2NUphqZl4e3P6wMiPvJKDYF5q2w1VUwVKk2NAV/ws3Dvp&mf_regPlat=1&os_version=31&regPlat=1&regid=BCRUVy5JqpRXdkr3Vcy2NUphqZl4e3P6wMiPvJKDYF5q2w1VUwVKk2NAV/ws3Dvp&rom=Dalvik/2.1.0 (Linux; U; Android 12; Redmi K30 5G Build/SKQ1.211006.001)&skey=6692c461c3810ab150c9a980d0c275ec&status=1&vipruid=&warehouse=VIP_NH'
    text1 = x + data_string
    hash_object = hashlib.sha1()
    hash_object.update(text1.encode('utf-8'))
    value = hash_object.hexdigest()
    text2 = x + value
    hash_object = hashlib.sha1()
    hash_object.update(text2.encode('utf-8'))
    apiSign = hash_object.hexdigest()
    return apiSign


device_token = get_device_token()
android_id = ''.join(["%x" % random.randint(1, 15) for i in range(16)])


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
    print(response.json())


device_reg()


def getTokenByFP():
    headers = {
        "Host": "vcsp-api.vip.com",
        "vcspauthorization": "vcspSign=05a68135d2bfd322e3a22f95bbc25a24c777f387",
        "user-agent": "okhttp/4.9.1"
    }
    url = "https://vcsp-api.vip.com/token/getTokenByFP"
    params = {
        "vcspKey": "4d9e524ad536c03ff203787cf0dfcd29"
    }
    response = requests.get(url, headers=headers, params=params)
    data_json = response.json()
    print(data_json)
    data = data_json["data"]
    vcspToken = data["vcspToken"]
    return vcspToken


def generate_token():
    timestamp = str(int(time.time()*1000))

    url = "https://mapi.appvipshop.com/vips-mobile/rest/device/generate_token"
    dinfo = '{"ah1": "","ah2":"","ah3":"","ah4": "wifi", "ah5": "1080_2261","ah6": 1804800,"ah7": 8, "ah8": 7785779200,"ah9": "Redmi K30 5G", "ah10": "","ah11": "", "ah12": "","ah13": "", "as1": "12","as2": "", "as3": "","as4": "%s","as5": "", "as6": "", "as7": "31", "ac1": "%s"}' % (
        android_id,device_token)
    data_dict = {
        "app_name": "shop_android",
        "app_version": "7.83.3",
        "client_type": "android",
        "dinfo": quote_plus(dinfo),
        "mars_cid": device_token,
        "phone_model": "Redmi K30 5G",
        "session_id": device_token + "_shop_android_" + timestamp,
        "sys_version": "29",
        "vcspKey": "4d9e524ad536c03ff203787cf0dfcd29",
        "vcspToken": getTokenByFP(),
    }
    data = "&".join(["{}={}".format(key, data_dict[key]) for key in sorted(data_dict.keys())])
    iv = ''.join(["%x" % random.randint(1, 15) for i in range(16)])
    obj = hashlib.md5()
    obj.update(b'aee4c425dbb2288b80c71347cc37d04b')
    key = obj.digest()
    aes = AES.new(
        key=key,
        mode=AES.MODE_CBC,
        iv=iv.encode('utf-8')
    )
    raw = pad(data.encode('utf-8'), 16)
    encrypt_bytes = aes.encrypt(raw)
    total_bytes = iv.encode('utf-8') + encrypt_bytes
    edata = b64encode(total_bytes).decode('utf-8')
    data = {
        "api_key": "23e7f28019e8407b98b84cd05b5aef2c",
        "did": "",
        "edata": edata,
        "eversion": "0",
        "skey": "6692c461c3810ab150c9a980d0c275ec",
        "timestamp": int(time.time())
    }
    body_string = "&".join(["{}={}".format(key, data[key]) for key in sorted(data.keys())])
    # print(body_string)
    salt = "aee4c425dbb2288b80c71347cc37d04b"
    tmp = sha1(f"{salt}{body_string}")
    api_sign = sha1(f"{salt}{tmp}")
    headers = {
        "Host": "mapi.appvipshop.com",
        "authorization": f"OAuth api_sign={api_sign}",
        "content-type": "application/x-www-form-urlencoded",
        "user-agent": "okhttp/4.9.1"
    }
    response = requests.post(url, headers=headers, data=data)
    data_json = response.json()
    print(data_json)
    data = data_json["data"]
    did = data['token']["did"]
    return did


def search(keyword):

    url = "https://mapi.appvipshop.com/vips-mobile/rest/shopping/search/product/list/v1"
    timestamp = str(int(time.time()*1000))
    data = {
        "api_key": "23e7f28019e8407b98b84cd05b5aef2c",
        "app_name": "shop_android",
        "app_version": "7.83.9",
        "bigSaleTagIds": "",
        "brandIds": "",
        "brandStoreSns": "",
        "categoryId": "",
        "channelId": "1",
        "channel_flag": "0_1",
        "client": "android",
        "client_type": "android",
        "darkmode": "0",
        "deeplink_cps": "",
        "device_model": "Xiaomi Redmi K30 5G",
        "did": generate_token(),
        "elder": "0",
        "fdc_area_id": "104104101",
        "functions": "RTRecomm,flagshipInfo,feedback,otdAds,zoneCode,slotOp,survey,hasTabs,floaterParams",
        "harmony_app": "0",
        "harmony_os": "0",
        "headTabType": "all",
        "height": "2261",
        "isMultiTab": "0",
        "keyword": keyword,
        "lastPageProperty": "{\"isBgToFront\":\"0\",\"suggest_text\":\"冲锋衣\",\"scene_entry_id\":\"-99\",\"refer_page_id\":\"page_te_globle_classify_search_1744209449874\",\"text\":\"冲锋衣\",\"tag\":\"1\",\"module_name\":\"com.achievo.vipshop.search\",\"type\":\"all\",\"typename\":\"全部\",\"is_back_page\":\"0\"}",
        "maker": "REDMI",
        "mars_cid": device_token,
        "mobile_channel": "oziq7dxw:::",
        "mobile_platform": "3",
        "net": "WIFI",
        "operator": "",
        "os": "Android",
        "osv": "12",
        "otddid": "",
        "other_cps": "",
        "page_id": "page_te_commodity_search_1744209462939",
        "phone_model": "redmi k30 5g",
        "priceMax": "",
        "priceMin": "",
        "props": "",
        "province_id": "104104",
        "referer": "com.achievo.vipshop.search.activity.TabSearchProductListActivity",
        "rom": "Dalvik/2.1.0 (Linux; U; Android 12; Redmi K30 5G Build/SKQ1.211006.001)",
        "sd_tuijian": "0",
        "service_provider": "",
        "session_id": device_token + "_shop_android_" + timestamp,
        "skey": "6692c461c3810ab150c9a980d0c275ec",
        "sort": "0",
        "source": "app",
        "source_app": "android",
        "standby_id": "oziq7dxw:::",
        "sys_version": "31",
        "timestamp": timestamp,
        "union_mark": "blank&_&blank&_&oziq7dxw:::&_&blank&_&blank",
        "vipService": "",
        "warehouse": "VIP_NH",
        "width": "1080"
    }
    body_string = "&".join(["{}={}".format(key, data[key]) for key in sorted(data.keys())])
    salt = "aee4c425dbb2288b80c71347cc37d04b"
    tmp = sha1(f"{salt}{body_string}")
    api_sign = sha1(f"{salt}{tmp}")

    headers = {
        "Host": "mapi.appvipshop.com",
        "authorization": f"OAuth api_sign={api_sign}",
        "x-vip-host": "mapi.appvipshop.com",
        "content-type": "application/x-www-form-urlencoded",
        "user-agent": "okhttp/4.9.1"
    }
    response = requests.post(url, headers=headers, data=data)
    print(response.json())


search("冲锋衣")