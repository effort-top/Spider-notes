import hashlib
import time
from Crypto.Cipher import DES3
from Crypto.Util.Padding import pad
import base64

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

def sign_by_type(sign_type: int, param_map: dict) -> str:
    """
    生成签名（对应 Java 的 signByType 方法）

    :param sign_type: 签名类型 (0, 1, 2, 3)
    :param param_map: 有序参数字典（需按键排序，对应 Java TreeMap）
    :return: 大写 MD5 签名
    """
    # 定义密钥常量（需根据实际值替换）
    KEY_V1 = "com.che168.www"  # 替换实际值
    KEY_V2 = "W@oC!AH_6Ew1f6%8"  # 替换实际值
    KEY_SHARE = "moc.861ehc.relaed.bup.wyfv"
    KEY_AUTOHOME = "@7U$aPOE@$"

    # 1. 根据类型选择密钥
    selected_key = KEY_V1
    if sign_type != 0:
        if sign_type == 1:
            selected_key = KEY_V2
        elif sign_type == 2:
            selected_key = KEY_SHARE
        elif sign_type == 3:
            selected_key = KEY_AUTOHOME

    # 2. 构建待签名字符串
    parts = [selected_key]

    # 确保按键排序（模拟 Java TreeMap 行为）
    for key in sorted(param_map.keys()):
        parts.append(key)
        parts.append(str(param_map[key]))  # 确保值为字符串

    parts.append(selected_key)
    combined = ''.join(parts)

    # 3. 计算 MD5 并转为大写
    md5_str = hashlib.md5(combined.encode('utf-8')).hexdigest().upper()

    return md5_str

def encode3Des(context, input_str: str) -> str:
    # 1. 获取密钥（需要您实现AHAPIHelper.getDesKey的Python版本）
    des_key = "appapiche168comappapiche168comap"
    iv = "appapich"
    if not des_key:  # 对应TextUtils.isEmpty(desKey)
        return None

    try:
        # 2. 生成密钥（需要DESedeKeySpec的Python等效实现）
        # 原Java: new DESedeKeySpec(desKey.getBytes())
        key_bytes = des_key.encode('utf-8')
        if len(key_bytes) != 24:  # 3DES密钥必须24字节
            key_bytes = key_bytes.ljust(24, b'\0')[:24]  # 补零处理

        # 3. 初始化加密器
        # 原Java参数说明:
        # "desede/CBC/PKCS5Padding" -> 模式:CBC, 填充:PKCS5
        # cipher.init(1, ...) -> 1对应Cipher.ENCRYPT_MODE
        # 需要您提供iv的具体值
        iv_value = iv.encode('utf-8')  # 需要您提供iv变量的具体值和获取方式

        cipher = DES3.new(
            key_bytes,
            DES3.MODE_CBC,
            iv_value[:8]  # IV取前8字节
        )

        # 4. 加密处理
        # 原Java: str.getBytes("UTF-8")
        input_bytes = input_str.encode('utf-8')

        # 原Java: cipher.doFinal()
        encrypted_bytes = cipher.encrypt(
            pad(input_bytes, DES3.block_size)  # PKCS5填充
        )

        # 5. 返回Base64编码结果
        # 原Java: encode(bArr).toString()
        return base64.b64encode(encrypted_bytes).decode('utf-8')

    except Exception:
        # 原Java: catch (Exception unused)
        return None

imei = "65e171cc-e7c1-3848-893d-3f4333d9cfe1"
deviceId = "430680"
timestamp = str(int(time.time() * 1000) // 1000)
encode3Des_params2 = imei +"|"+timestamp+".000000|"+deviceId
udid = encode3Des("com.che168.autotradercloud.ATCApplication@fd6e9ce",encode3Des_params2)

raw_password = ""
pwd = encode_md5(raw_password)
test_params = {
    "_appid": "atc.android",
    "appversion": "3.73.0",
    "channelid": "csy",
    "pwd": pwd,
    "signkey": "",
    "type": "",
    "udid": udid,
    "username": "13712931111"
}

signature = sign_by_type(1, test_params)
print(signature)

import requests


headers = {
    "Host": "dealercloudapi.che168.com",
    "cache-control": "public, max-age=0",
    "traceid": "atc.android_74495c7f-1a87-4be9-bb95-5cd1e7d131ce",
    "content-type": "application/x-www-form-urlencoded",
    "user-agent": "okhttp/3.14.9"
}
url = "https://dealercloudapi.che168.com/tradercloud/sealed/login/login.ashx"
data = {
    "_appid": "atc.android",
    "_sign": signature,
    "appversion": "3.73.0",
    "channelid": "csy",
    "pwd": pwd,
    "signkey": "",
    "type": "",
    "udid": udid,
    "username": "13712935419"
}
response = requests.post(url, headers=headers, data=data)

print(response.text)
print(response)