import requests
import hashlib

def md5(str):
    try:
        # 使用hashlib计算MD5值
        digest = hashlib.md5(str.encode('utf-8')).hexdigest()
        return digest
    except UnicodeEncodeError:
        # 如果UTF-8编码不支持，则抛出异常
        raise RuntimeError("UTF-8 should not be unsupported!")
    except Exception as e:
        # 如果hashlib不支持MD5算法，则抛出异常
        raise RuntimeError("MD5 should not be unsupported!", e)

# 使用示例
# print(md5("your_string_here"))
url = "https://chinayltx.com/app/api/v1/partnerLogin/login"
headers = {
  "X-App": "native",
  "X-Noncestr": "123456",
  "X-OS": "partnerApp_android",
  "X-Req-Time": "1733284473025",
  "X-Sign": "ad1484423f4a9511390f82a6e70a190f",
  "X-Token": "",
  "X-UserID": "378003",
  "Content-Type": "application/x-www-form-urlencoded",
  "Host": "chinayltx.com",
  "Connection": "Keep-Alive",
  "Accept-Encoding": "gzip",
  "User-Agent": "okhttp/3.10.0"
}
password = md5('imustsa666')
data = f"""phone=19068995887&password={password}"""

res = requests.post(url, headers=headers, data=data)
print(res.text)
