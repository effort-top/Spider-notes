import requests
import subprocess
from functools import partial

subprocess.Popen = partial(subprocess.Popen, encoding='utf-8') #设置默认解码行为
import execjs
import json

with open('v1 (2).js', 'r', encoding="utf-8") as f:
    code = f.read()
context = execjs.compile(code)


headers = {
    "Accept": "application/json, text/javascript, */*; q=0.01",
    "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
    "Cache-Control": "no-cache",
    "Connection": "keep-alive",
    "Content-Type": "application/json",
    "Origin": "https://idmsa.apple.com.cn",
    "Pragma": "no-cache",
    "Referer": "https://idmsa.apple.com.cn/",
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-origin",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36 Edg/131.0.0.0",
    "X-APPLE-HC": "1:10:20250115021331:1e51dd371aae35c5af45e50a93227cfe::287",
    "X-Apple-Auth-Attributes": "ND6fYYEVm962VwztQW///puUgEMDLwnKKybP/xv/Z//OvQWiF0Cl+BEc2K1V8KkBN3P/Uqr7rmDUoroUGLdIQOxt0VxLyBSRfGoP+4r+g8Lg/+IbVRhp4jXfF5AEEMV4recaH6D86LZsJFYsmaj+9IaOYa1IYwDQJe26N0WP8lnGFbdhcnBlb35+Z351Py4SlQ8GocXjMqtIKqlvjX4jGPZXxucE0X9amkW4Yg+lfbt+I9vg5sTogHjnh3+ToMFsKb2HHC2lrMr+OknqABu6zNzSVL8=",
    "X-Apple-Domain-Id": "36",
    "X-Apple-Frame-Id": "auth-kvmtn4hj-qnse-kwez-tole-mnouhx2b",
    "X-Apple-I-FD-Client-Info": "{\"U\":\"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36 Edg/131.0.0.0\",\"L\":\"zh-CN\",\"Z\":\"GMT+08:00\",\"V\":\"1.1\",\"F\":\"Fla44j1e3NlY5BNlY5BSmHACVZXnNA9Z6P5KHildFMurJhBR.uMp4UdHz13NlejV2pNk0ug9WJNsdlITL4yKAwENNlY5BNp55BNlan0Os5Apw.5h_\"}",
    "X-Apple-Locale": "zh_CN",
    "X-Apple-OAuth-Client-Id": "a797929d224abb1cc663bb187bbcd02f7172ca3a84df470380522a7c6092118b",
    "X-Apple-OAuth-Client-Type": "firstPartyAuth",
    "X-Apple-OAuth-Redirect-URI": "https://secure6.www.apple.com.cn",
    "X-Apple-OAuth-Response-Mode": "web_message",
    "X-Apple-OAuth-Response-Type": "code",
    "X-Apple-OAuth-State": "auth-kvmtn4hj-qnse-kwez-tole-mnouhx2b",
    "X-Apple-Widget-Key": "a797929d224abb1cc663bb187bbcd02f7172ca3a84df470380522a7c6092118b",
    "X-Requested-With": "XMLHttpRequest",
    "scnt": "AAAA-jEzOENBMkM3MEE4OThDRDE4M0VFN0UzRjMyNjlENTkyQTgzMzlCNTU2MkQ2MjU2MUY5ODc2QzFDMkFCOENDMDAwMjdBRjdCQkQyQkQ0RUM2OUE3MzUzMEUwMDE2Rjg0N0UwNEQ3QzMzQkFFMTA0QUVFRTEzNzk4MTk5QkI0Q0I2NjI4NTQ3ODg5MkNBQkE3OEJBN0RERjBBNkVCNTI4RTRCRjY2NEJCNURFODAwNkVCRkE4RDUyNUJDRThDRDg1NjgzN0ZFREM3MjE4MURBNTE4NjVGNDk1MEE1Nzg3MDlFMkRGRjM4RjA3NTU2RjMwQXwyAAABlGfKuPBYyzgwj7A1dfBrVydBDPNTWgZLbu62cLFygrYL6IgZ8QIGYfUGrrShABu60Hyi6n6Oj06TuMy2gjChI4Daw7KX2jAeyDP_MVXx0rKXNC-hkQ",
    "sec-ch-ua": "\"Microsoft Edge\";v=\"131\", \"Chromium\";v=\"131\", \"Not_A Brand\";v=\"24\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\""
}
cookies = {
    "dssid2": "e28a7521-8aa5-49c7-b20a-1c298dd6f148",
    "dssf": "1",
    "as_pcts": "QEBQ0NFoIf8TU7rN5XXXgI57qMTC:uEZ3FqqlbSg1d6g1LQQ-3uh4QHwrOX2jNOM0iXRo0:58TUX_WJW04_6Ep1kCCJdZoNgMyGvLsZJp33JJH5DWe1CVSmFJ_4TDR0d2dbXAPGy3Hxg-pgQAUNTZGlWDg8ZFx3T7XcO_UNLuyHfaw15gu-k1lRIPoF9mkYj3OSLPeyDdrC0f49Ui+RAD",
    "as_sfa": "Mnxjbnxjbnx8emhfQ058Y29uc3VtZXJ8aW50ZXJuZXR8MHwwfDE",
    "s_cc": "true",
    "as_affl": "p238%7C%7Cmtid%3A%3A18707vxu38484%26mnid%3A%3A9zdFWstl-dc_mtid_18707vxu38484_pcrid_73255274861740_pgrid_1172081104447824_pntwk_o_pchan__pexid__ptid_kwd-73255312721631%3Aloc-39_%26cid%3A%3Aaos-cn-kwbi-brand--slid---product-%26%7C%7C20250112_220600",
    "s_campaign": "aos-cn-kwbi-brand--slid---product-",
    "s_afc": "p238%7C9zdFWstl-dc_mtid_18707vxu38484_pcrid_73255274861740_pgrid_1172081104447824_pntwk_o_pchan__pexid__ptid_kwd-73255312721631%3Aloc-39_",
    "dslang": "CN-ZH",
    "site": "CHN",
    "as_dc": "ucp3",
    "s_fid": "3864B91CCE7B3DCC-367D71D09ADCA906",
    "s_vi": "[CS]v1|33C38CE3D7F89CA7-60001936C685F3C5[CE]",
    "s_sq": "%5B%5BB%5D%5D",
    "aasp": "138CA2C70A898CD183EE7E3F3269D592A8339B5562D62561F9876C1C2AB8CC00027AF7BBD2BD4EC69A73530E0016F847E04D7C33BAE104AEEE13798199BB4CB66285478892CABA78BA7DDF0A6EB528E4BF664BB5DE8006EBFA8D525BCE8CD856837FEDC72181DA51865F4950A578709E2DFF38F07556F30A",
    "aa": "3F2F9B27275443D7ABE8D2D79D2084AB"
}
url = "https://idmsa.apple.com.cn/appleauth/auth/signin/complete"
params = {
    "isRememberMeEnabled": "true"
}

account = "+86 191 1231 1115"
password = "asdasdasdasda"

initData = context.call("getAllParams2", account, password)
# data = {
#     "accountName": account,
#     "rememberMe": False,
#     "m1": "w9wYREXd9nxbbX4qv0EnL02ysn8BnNZqBau43m/s9pQ=",
#     "c": "d-dd-59e49c4a-d2e6-11ef-97ab-275b6761e197:RNO",
#     "m2": "JE6VVGvLJUQ6CWf4oY0d/BREKuJ1NaoaHOnizDX0cTU="
# }
data = json.dumps(initData, separators=(',', ':'))
response = requests.post(url, headers=headers, cookies=cookies, params=params, data=data)

print(response.text)
print(response)
