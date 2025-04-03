import base64
import time

import requests
import hashlib
from Crypto.Cipher import DES3


def encode_md5(input_str):
    try:
        # 创建 MD5 哈希对象
        md5_hash = hashlib.md5()

        # 更新哈希对象，传入字符串的字节数据
        md5_hash.update(input_str.encode('utf-8'))

        # 获取 MD5 哈希值，返回小写的十六进制字符串
        return md5_hash.hexdigest().lower()
    except Exception as e:
        print(f"Error: {e}")
        return None

def des_encrypt(key, text, iv):
    """
    使用3DES CBC模式加密，匹配Java实现
    """
    # 初始化加密器，使用CBC模式
    cipher_encrypt = DES3.new(
        key.encode('utf-8'),
        DES3.MODE_CBC,  # 改用CBC模式
        iv.encode('utf-8')
    )

    # 使用PKCS5Padding填充
    def pad(text):
        pad_len = 8 - (len(text) % 8)
        return text + pad_len * chr(pad_len)

        # 加密

    padded_text = pad(text).encode('utf-8')
    encrypted_text = cipher_encrypt.encrypt(padded_text)
    return base64.b64encode(encrypted_text).decode('utf-8')
def get_nano_time():
    """
    使用time.monotonic_ns()模拟System.nanoTime()
    这个方法提供单调递增的纳秒级时间戳
    """
    return str(time.monotonic_ns())
# 修改密钥处理方式
def pad_key(key):
    """确保密钥长度符合 DES3 要求"""
    if len(key) > 24:
        return key[:24]
    else:
        return key.ljust(24, ' ')  # 用空格填充到24字节

def pad_iv(iv):
    """确保 IV 长度为 8 字节"""
    if len(iv) > 8:
        return iv[:8]
    else:
        return iv.ljust(8, ' ')  # 用空格填充到8字节
iv = pad_iv('appapich')
key = pad_key('appapiche168comappapiche168comap')

def get_udid():
    imei = "65e171cc-e7c1-3848-893d-3f4333d9cfe1"
    nano_time = get_nano_time()
    device_id = '430680'
    udid_plain = f"{imei}|{nano_time}|{device_id}"
    print(f"UDID原文: {udid_plain}")
    return des_encrypt(key, udid_plain, iv)


def get_sign(params):
    KEY_V2 = 'W@oC!AH_6Ew1f6%8'
    # 拼接参数
    sb = KEY_V2
    for key_param in sorted(params.keys()):  # 确保按照键的字典顺序拼接
        sb += key_param + params[key_param]
    sb += KEY_V2

    # 计算 MD5
    md5_result = encode_md5(sb)
    if md5_result:
        return md5_result.upper()
    return ""


cookies = {
    'app_deviceid': '65e171cc-e7c1-3848-893d-3f4333d9cfe1',
    'app_devicename': 'Redmi K30 5G',
    'app_key': 'czyp_android',
    'app_platform': 'Android',
    'app_sign': '0297E2C1CF5BFC5E386DA4B2D69B2D97',
    'app_sysver': '12',
    'app_userid': '0',
    'app_ver': '3.51.0',
    'isFromApp': '1',
}

headers = {
    'Cache-Control': 'public, max-age=0',
    'traceid': 'atc.android_f6650893-3a34-4aec-a693-9d9efc84dbda',
    'Content-Type': 'application/x-www-form-urlencoded',
    'Host': 'dealercloudapi.che168.com',
    'Connection': 'Keep-Alive',
    'User-Agent': 'okhttp/3.14.9',
}

raw_password = "1122334455aa"
encrypted_password = encode_md5(raw_password)
print(f"Password MD5: {encrypted_password}")

udid = get_udid()
print(f"UDID: {udid}")
# 请求参数
params = {
    '_appid': 'atc.android',
    'appversion': '3.51.0',
    'channelid': 'csy',
    'pwd': encrypted_password,
    'signkey': '',
    'type': '',
    'udid': udid,
    'username': '13712935419'
}
sign = get_sign(params)
params['_sign'] = sign
print(f"Sign: {sign}")
response = requests.post(
    'https://dealercloudapi.che168.com/tradercloud/sealed/login/login.ashx',
    cookies=cookies,
    headers=headers,
    data=params,
    verify=False,
)

print(f"Response: {response.text}")
