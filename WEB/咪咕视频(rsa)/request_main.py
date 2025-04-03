import requests
import execjs

headers = {
    "Accept": "application/json, text/javascript, */*; q=0.01",
    "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
    "Cache-Control": "no-cache",
    "Connection": "keep-alive",
    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    "Origin": "https://passport.migu.cn",
    "Pragma": "no-cache",
    "Referer": "https://passport.migu.cn/login?sourceid=203058&apptype=2&forceAuthn=true&isPassive=false&authType=&display=&nodeId=70027513&relayState=login&weibo=1&callbackURL=https%3A%2F%2Fwww.miguvideo.com%2Fp%2Fchannel%2F%3FisIframe%3Dweb",
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-origin",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36 Edg/131.0.0.0",
    "X-Requested-With": "XMLHttpRequest",
    "sec-ch-ua": "\"Microsoft Edge\";v=\"131\", \"Chromium\";v=\"131\", \"Not_A Brand\";v=\"24\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\""
}
cookies = {
    "mgnd_session_id": "ASHCVNPG3-DO8RX4KR9WPMT6TCH6022-VYZR6S4M-0",
    "mgnd_session_create": "1734423176407",
    "mgnd_session_last_access": "1734424066212"
}
url = "https://passport.migu.cn/authn"
with open('解密.js', 'r', encoding='utf-8') as f:
    js_code = f.read()
context = execjs.compile(js_code)
modulus = '00833c4af965ff7a8409f8b5d5a83d87f2f19d7c1eb40dc59a98d2346cbb145046b2c6facc25b5cc363443f0f7ebd9524b7c1e1917bf7d849212339f6c1d3711b115ecb20f0c89fc2182a985ea28cbb4adf6a321ff7e715ba9b8d7261d1c140485df3b705247a70c28c9068caabbedbf9510dada6d13d99e57642b853a73406817'
num = '010001'
account = '13712935418'
password = '112233'
loginID = context.call('getEncryptedLoginID', account,modulus,num)
enpassword = context.call('getEncryptedPwd',password,modulus,num)
finger = context.call('getFingerPrint',modulus,num)
fingerPrint = finger['fingerPrint']
fingerPrintDetail = finger['fingerPrintDetail']
data = {
    "sourceID": "203058",
    "appType": "2",
    "relayState": "login",
    "loginID": loginID,
    "enpassword": enpassword,
    "captcha": "",
    "imgcodeType": "1",
    "fingerPrint": fingerPrint,
    "fingerPrintDetail": fingerPrintDetail,
    "isAsync": "true"
}
response = requests.post(url, headers=headers, cookies=cookies, data=data)

print(response.text)
print(response)
