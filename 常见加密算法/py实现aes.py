import base64
from Crypto.Cipher import AES
from Crypto.Util.Padding import pad

# 需要补位，str不是16的倍数那就补足为16的倍数
def add_to_16(value):
    while len(value) % 16 != 0:
        value += '\0'
    return str.encode(value)


# 加密方法
def aes_encrypt(key, t, iv):
    aes = AES.new(add_to_16(key), AES.MODE_CBC, add_to_16(iv))  # 初始化加密器
    encrypt_aes = aes.encrypt(add_to_16(t))                    # 先进行 aes 加密
    encrypted_text = str(base64.encodebytes(encrypt_aes), encoding='utf-8')  # 执行加密并转码返回 bytes
    return encrypted_text


# 解密方法
def aes_decrypt(key, t, iv):
    aes = AES.new(add_to_16(key), AES.MODE_CBC, add_to_16(iv))         # 初始化加密器
    base64_decrypted = base64.decodebytes(t.encode(encoding='utf-8'))  # 优先逆向解密 base64 成 bytes
    decrypted_text = str(aes.decrypt(base64_decrypted), encoding='utf-8').replace('\0', '')  # 执行解密密并转码返回str
    return decrypted_text

def aes_encrypt_ECB(key,data_string):
    aes = AES.new(
        key=key.encode('utf-8'),
        mode=AES.MODE_ECB,
    )
    raw = pad(data_string.encode('utf-8'), 16)
    return aes.encrypt(raw)


if __name__ == '__main__':
    secret_key = '12345678'   # 密钥
    text = 'I love Python!'   # 加密对象
    iv = secret_key           # 初始向量
    encrypted_str = aes_encrypt(secret_key, text, iv)
    print('加密字符串：', encrypted_str)
    decrypted_str = aes_decrypt(secret_key, encrypted_str, iv)
    print('解密字符串：', decrypted_str)

    key = 'd245a0ba8d678a61'
    text = 'abLiveEntranceClose0abRecReason0abRectagFengge0abTypesocial_brand_strategy_v454abValue1abVideoCover2deliveryProjectId0lastIdlimit20loginTokenplatformandroidtimestamp1743959852582uuid6a939be6061acbbev4.75.5'
    encrypted_str = aes_encrypt_ECB(key, text)
    print(encrypted_str)
    value = base64.encodebytes(encrypted_str)
    print(value)


# 加密字符串：lAVKvkQh+GtdNpoKf4/mHA==
# 解密字符串：I love Python!