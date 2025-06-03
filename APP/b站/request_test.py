import base64
import binascii
import hashlib
from Crypto.Cipher import AES
from Crypto.Util.Padding import pad
def get_sign(b_arr, b_arr2):
    barr = b_arr.encode('utf-8')
    barr2 = b_arr2.encode('utf-8')
    sha = hashlib.sha256()
    sha.update(barr)
    sha.update(barr2)
    return sha.hexdigest()

# 示例参数
barr = "aid=334971195&auto_play=0&build=6240300&cid=392861336&did=fUx7SHkYfhoqTHlLckQnFFQGYwdqA0h7S345&epid=&from_spmid=main.ugc-video-detail.0.0&ftime=1744442839&lv=0&mid=0&mobi_app=android&part=1&sid=0&spmid=main.ugc-video-detail.0.0&stime=1744477079&sub_type=0&type=3"
barr2 = "9cafa6466a028bfb"

# 计算哈希
result = get_sign(barr, barr2)
print(result)

def add_to_16(value):
    while len(value) % 16 != 0:
        value += '\0'
    return str.encode(value)

def aes_encrypt(key, t, iv):
    aes = AES.new(add_to_16(key), AES.MODE_CBC, add_to_16(iv))  # 初始化加密器
    raw = pad(t.encode('utf-8'), 16)
    return aes.encrypt(raw)

key = 'fd6b639dbcff0c2a1b03b389ec763c4b'
iv = '77b07a672d57d64c'
data = 'aid=114317265471990&auto_play=0&build=6240300&cid=29348924235&did=fUx7SHkYfhoqTHlLckQnFFQGYwdqA0h7S345&epid=&from_spmid=main.ugc-video-detail.0.0&ftime=1744442839&lv=0&mid=0&mobi_app=android&part=1&sid=0&spmid=main.ugc-video-detail.0.0&stime=1744480514&sub_type=0&type=3&sign=333fb367927e1c9d4dcd6632c13b9ce237c818e9e371e6744322fd4ff8494283'

bytes_data = aes_encrypt(key, data, iv)
result = [item for item in bytes_data]
print(result)
res = [hex(item)[2:] for item in result]
print(''.join(res))
print(aes_encrypt(key, data, iv))
# bef04771caab9312d7468e3a8e9a7341deae034b8aac4a50333d38b4a12c8b78b137f0e61b3727e7c414da1c8bc728f4c249b1fd1c0ba0f782153153f801c0b5ec8cd574a877cfb20e68d7820134d8e4ab0c09171c27c59378bae5a4b0663da789fc50c624bf3f11aa7b841e5897c3293775d15741a4fa3e47a29799fc99257606ba3ce195947a9d3831c11e3a3c5728d506cdfa4c03981af98b96371e2fb6bb686dc3b20b294707e844620c3fd0c505f2e5a3f48fa71995003002fd60d90f2771ad05de57ce066713088cfc7dbc1a22051ed4d74478d595e4b1e39eac48816e7d0579d32f43bf1946fe2e1904bb947e6fd0fae7f22a93a86a926168fcd518ddb8e06d135f7c08e39d13e6776049af184138f51b7150fed7d7a62cb560aaed83e67b0438617711acf4181f198810654dbd3833fa3fe79a5c2d2e8e48d495fdb08f12ff35db6ede3994797d99a48bd1182e9f0a7e07a98eb9d40a7abaaeb9e466
for i in data.split("&"):
    print(i)
