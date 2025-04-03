import json

import requests
import execjs
cookies = {
    'dssid2': 'e658b29d-14ca-41bb-b085-49973d0bffcd',
    'dssf': '1',
    'as_dc': 'ucp3',
    'as_pcts': 'XOmLLGiEJHurfCk0krHvvEO0m898+WOtgQmyXds_9GQLKIgk4Rr+L0ZySjSo3d3wC7kUnAIbxoxZKMi4-3CQH5FJ3CvQ6-rRvDpJPfnH9Qv4Sx-wZesuWuLG-_WGjKYSBjAjsZt6pcy0XeEK75OHviGm:bJidnOhZi-0xYLg9G1d7A9Hg',
    'as_sfa': 'Mnx1c3x1c3x8ZW5fVVN8Y29uc3VtZXJ8aW50ZXJuZXR8MHwwfDE',
    'geo': 'CN',
    's_cc': 'true',
    'as_rumid': '120531b7-5063-43c4-a424-135e1eec1897',
    's_sq': '%5B%5BB%5D%5D',
    'pxro': '1',
    'dslang': 'US-EN',
    'site': 'USA',
    's_fid': '4D9027E4E8D572F5-352DFEA4F369C1DE',
    's_vi': '[CS]v1|33C271F198D30B68-60001653E2E17BCD[CE]',
    'aasp': 'DB9C6E2E5CB945334FD06264D562F08E7EE5176B1793E71B807D8200F88D35404C341156652C5D4C0B1EA1043C7F3B222246F0EE0D4F5660CB4B441ADB2CB5A4EED0707D4FBB0B5C9B5A63C116632DD39FBE942B5D023238F5DFCAA6D42455E8BAF26DB5CA6FB8F43FE00BA04828FE400CE5B71DED616A6E',
    'aa': '6FE148F05A5E05335B481C7425434F9E',
}

headers = {
    'Accept': 'application/json, text/javascript, */*; q=0.01',
    'Accept-Language': 'zh-CN,zh;q=0.9',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
    'Content-Type': 'application/json',
    # 'Cookie': 'dssid2=e658b29d-14ca-41bb-b085-49973d0bffcd; dssf=1; as_dc=ucp3; as_pcts=XOmLLGiEJHurfCk0krHvvEO0m898+WOtgQmyXds_9GQLKIgk4Rr+L0ZySjSo3d3wC7kUnAIbxoxZKMi4-3CQH5FJ3CvQ6-rRvDpJPfnH9Qv4Sx-wZesuWuLG-_WGjKYSBjAjsZt6pcy0XeEK75OHviGm:bJidnOhZi-0xYLg9G1d7A9Hg; as_sfa=Mnx1c3x1c3x8ZW5fVVN8Y29uc3VtZXJ8aW50ZXJuZXR8MHwwfDE; geo=CN; s_cc=true; as_rumid=120531b7-5063-43c4-a424-135e1eec1897; s_sq=%5B%5BB%5D%5D; pxro=1; dslang=US-EN; site=USA; s_fid=4D9027E4E8D572F5-352DFEA4F369C1DE; s_vi=[CS]v1|33C271F198D30B68-60001653E2E17BCD[CE]; aasp=DB9C6E2E5CB945334FD06264D562F08E7EE5176B1793E71B807D8200F88D35404C341156652C5D4C0B1EA1043C7F3B222246F0EE0D4F5660CB4B441ADB2CB5A4EED0707D4FBB0B5C9B5A63C116632DD39FBE942B5D023238F5DFCAA6D42455E8BAF26DB5CA6FB8F43FE00BA04828FE400CE5B71DED616A6E; aa=6FE148F05A5E05335B481C7425434F9E',
    'Origin': 'https://idmsa.apple.com',
    'Pragma': 'no-cache',
    'Referer': 'https://idmsa.apple.com/',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'same-origin',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.6261.95 Safari/537.36',
    'X-Apple-Auth-Attributes': 'KYaEsfqlJQE6KStZJKmPdblQ/qLy/2YJXQrp0ow22d+1uZfPEzIxps/lHMT6/zoa2OYMyuQVT7ET0a0L3Iu5aChkAgbwZR/D631V2y1Nq7uQnhta0Q6+rMn2rhUoDdxesa7QRmwhbbfDllAmXb8+emlLPbB+biEgLpkHpLLxk2evbcd3k8lZmRKvspDQjva9f4y2T6OnoMc0TXcgOdYq4Gis3g/ppt+NfG26GQ+wJxOeVH1jZNiWdvzkNjJyR/0EXJ2i+mDPlUj8ZbMAGWncH5tTqQ==',
    'X-Apple-Domain-Id': '35',
    'X-Apple-Frame-Id': 'auth-tp3fso5x-lzga-umd4-wb8v-ppc1huzu',
    'X-Apple-I-FD-Client-Info': '{"U":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.6261.95 Safari/537.36","L":"zh-CN","Z":"GMT+08:00","V":"1.1","F":"Fda44j1e3NlY5BNlY5BSmHACVZXnNA9Z3c48_9ccQxQeLaD.SAuXjodUW1BNpMk0ugN.xL4FeBRJseUA9zCqUd9BNlY5DChJQlOlbw1m7wwL6tqAhbsr8qqMjS8xsrsfOjZzlFUTcouRyg_RSx52JmvpJ2JNNlY5QB4bVNjMk.8Mu"}',
    'X-Apple-Locale': 'en_US',
    'X-Apple-OAuth-Client-Id': 'a797929d224abb1cc663bb187bbcd02f7172ca3a84df470380522a7c6092118b',
    'X-Apple-OAuth-Client-Type': 'firstPartyAuth',
    'X-Apple-OAuth-Redirect-URI': 'https://secure6.store.apple.com',
    'X-Apple-OAuth-Response-Mode': 'web_message',
    'X-Apple-OAuth-Response-Type': 'code',
    'X-Apple-OAuth-State': 'auth-tp3fso5x-lzga-umd4-wb8v-ppc1huzu',
    'X-Apple-Widget-Key': 'a797929d224abb1cc663bb187bbcd02f7172ca3a84df470380522a7c6092118b',
    'X-Requested-With': 'XMLHttpRequest',
    'scnt': 'AAAA-kRCOUM2RTJFNUNCOTQ1MzM0RkQwNjI2NEQ1NjJGMDhFN0VFNTE3NkIxNzkzRTcxQjgwN0Q4MjAwRjg4RDM1NDA0QzM0MTE1NjY1MkM1RDRDMEIxRUExMDQzQzdGM0IyMjIyNDZGMEVFMEQ0RjU2NjBDQjRCNDQxQURCMkNCNUE0RUVEMDcwN0Q0RkJCMEI1QzlCNUE2M0MxMTY2MzJERDM5RkJFOTQyQjVEMDIzMjM4RjVERkNBQTZENDI0NTVFOEJBRjI2REI1Q0E2RkI4RjQzRkUwMEJBMDQ4MjhGRTQwMENFNUI3MURFRDYxNkE2RXwxAAABlF8oXHYBFUbsg0hxvN6WiJEoWlNQkzmQ0nhyS3Avr06bZPCzhUepYvPpDv_GABldaq98znqzS-FbPyFKtmkwIcjCJIaLaWDnOll4A3dJToqb144VxA',
    'sec-ch-ua': '"Chromium";v="122", "Not(A:Brand";v="24", "Google Chrome";v="122"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
}
with open('解密(扣算法).js', 'r', encoding='utf-8') as f:
    js_code = f.read()
context = execjs.compile(js_code)
accountName = '13712121212'
password = "112233431"
a = context.call("get_a",accountName)
json_data = {
    'a': a,
    'accountName': accountName,
    'protocols': [
        's2k',
        's2k_fo',
    ],
}

response = requests.post('https://idmsa.apple.com/appleauth/auth/signin/init', cookies=cookies, headers=headers, json=json_data)
data = response.json()
iterations = data['iteration']
salt = data['salt']
protocol = data['protocol']
serverPublicValue = data['b']
c = data['c']

h = {
    'iterations':iterations,
    'salt':salt,
    'protocol':protocol,
    'serverPublicValue':serverPublicValue,
    'c':c,
    'password':password
}
m1m2 = context.call("get_m1m2",accountName,h)
print(m1m2)


headers = {
    "Accept": "application/json, text/javascript, */*; q=0.01",
    "Accept-Language": "zh-CN,zh;q=0.9",
    "Connection": "keep-alive",
    "Content-Type": "application/json",
    "Origin": "https://idmsa.apple.com",
    "Referer": "https://idmsa.apple.com/",
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-origin",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Safari/537.36",
    "X-Apple-Auth-Attributes": "fU270/EP4fxsGxhL941D86e6us2r5QVSzFw8JQ8pHVE00eAKsYsJaRRARaE0+/hxXqTepiyOxZet5BD3T8ykzCkIuxNWlo9Uh77+jr5WPoNirfvU07DL1XxriyzPYLOEeEsMrHR3k8/P/VLrj50tRMLGZg8cfWzrJGprgD60Ya8FLSWuimULFmPJ2QycWmUWcWtIQRCuFkatUWVKNH92YGP3LQoOLAGgOTGmd4Ta3k+tXwfAKQNTFd4PwiTVTpOiA9rJ0VkuRWFnS+cAAaV0F0UEHQ==",
    "X-Apple-Domain-Id": "42",
    "X-Apple-Frame-Id": "auth-skbcfd6y-ordq-0jfl-wc0w-2y2881hu",
    "X-Apple-I-FD-Client-Info": "{\"U\":\"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Safari/537.36\",\"L\":\"zh-CN\",\"Z\":\"GMT+08:00\",\"V\":\"1.1\",\"F\":\"7la44j1e3NlY5BNlY5BSmHACVZXnNA9aJV2fpApHLzLu_dYV6Hycfx9MsFY5EfU.6elV2pNK1cllIXVwc6sHjp45BNlY5CGWY5BOgkLT0XxU..7Y2\"}",
    "X-Apple-Locale": "en_US",
    "X-Apple-OAuth-Client-Id": "a797929d224abb1cc663bb187bbcd02f7172ca3a84df470380522a7c6092118b",
    "X-Apple-OAuth-Client-Type": "firstPartyAuth",
    "X-Apple-OAuth-Redirect-URI": "https://secure8.store.apple.com",
    "X-Apple-OAuth-Response-Mode": "web_message",
    "X-Apple-OAuth-Response-Type": "code",
    "X-Apple-OAuth-State": "auth-skbcfd6y-ordq-0jfl-wc0w-2y2881hu",
    "X-Apple-Widget-Key": "a797929d224abb1cc663bb187bbcd02f7172ca3a84df470380522a7c6092118b",
    "X-Requested-With": "XMLHttpRequest",
    "scnt": "AAAA-jUyMEFENERDQUJDMjdFNTRDNDVFNUE0QkFBMzIzNEFFNzVGMzUyNDE0RkQ0MDQ4MzM1M0ZFQTg3REQzNUY4NkEwRTM4MTRFN0MzQzUyOTU1NUM5NkNDN0Q5NkE5NDhFRDQ4OEYyM0I4NUQ2RDcyMzVDN0EzMzcxNjVCQTZBMTEzMkY0RDg0OTYwMDc2NzAxNUM4RjVDQkMxNjU1MDQyMkI0MUVCRUU0RkVERjg1RDk3MzNBRjMzMTI0RkQ1MjQ0NTEzQTYxOEIxNThBM0VGQkY5RDI3RUJERTgxQTlBNTZBQjE2NkY4NTEyRUEyRDlCRHwzAAABlG5FVtnFdjfVGNt2l-Q-wVqLWV9OxnsZyGb8kAfsgyHqpXX4G34wwgp6WQ9fABqMzIJDaOjDL4-liRLHDDNFl37aA2hhAW1d7sqM8nwuGSrau7G47w",
    "sec-ch-ua": "\"Not A(Brand\";v=\"8\", \"Chromium\";v=\"132\", \"Google Chrome\";v=\"132\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\""
}
cookies = {
    "geo": "CN",
    "at_check": "true",
    "s_cc": "true",
    "dssid2": "24fe48c2-6b28-4b0e-91b8-871acbb6f4ba",
    "dssf": "1",
    "as_pcts": "vKzy0haGCjcxd8qdm_8sXIW9N_4tPDQpeH1M6KU3VRt_JnoUCg-RfXq_mqOPZ-CZ+bNX7ix98meDhShiqGAOL-I:N6IKNsVWAZS6EwB6R6Sl2uX-Cw_dKyPPshiqB:J4hPU3KO1QEY7VJWV7CxzM2IDWdASkXcvRctab4w5iq8YwON4Z1",
    "as_sfa": "Mnx1c3x1c3x8ZW5fVVN8Y29uc3VtZXJ8aW50ZXJuZXR8MHwwfDE",
    "pxro": "1",
    "s_sq": "%5B%5BB%5D%5D",
    "as_rumid": "3524fe5b-8e35-4267-9fc3-b5feb1fc71f8",
    "dslang": "US-EN",
    "site": "USA",
    "aa": "CAD33FF7AFD8520466277DA14C384652",
    "aasp": "520AD4DCABC27E54C45E5A4BAA3234AE75F352414FD40483353FEA87DD35F86A0E3814E7C3C529555C96CC7D96A948ED488F23B85D6D7235C7A337165BA6A1132F4D849600767015C8F5CBC16550422B41EBEE4FEDF85D9733AF33124FD5244513A618B158A3EFBF9D27EBDE81A9A56AB166F8512EA2D9BD",
    "s_fid": "2A1A9DF6B4DF284C-2773F7404EB4561C"
}
url = "https://idmsa.apple.com/appleauth/auth/signin/complete"
params = {
    "isRememberMeEnabled": "true"
}
data = {
    "accountName": accountName,
    "rememberMe": False,
    "m1": m1m2.get("M1"),
    "c": c,
    "m2": m1m2.get("M2")
}
data = json.dumps(data, separators=(',', ':'))
response = requests.post(url, headers=headers, cookies=cookies, params=params, data=data)

print(response.text)
print(response)

# Note: json_data will not be serialized by requests
# exactly as it was in the original request.
#data = '{"a":"Utuqwcz3K/IAaRcTdYDXQiPxwihXNyVFaR7KO0p4waZRlKtQwhtk78qIEL5TQGHeaX8XbnqCnJDeqC2MZtQ5HL/bvtGF+KeDHSBxp5CaEqFDMvP6P9VtMTq1elkPcid5gjGpoINFC7K4Lc4ynLAtvgG6onDYDDG5APdNHum6Uf/BVzhbjKNBB1ZyYCwD4TqpgVTc61BSJGt86+uN/5lw/F6t8k7ZjVTq55opDUmT3q75gGuxft209sM9lfWjIBGVHpQKa6ToaVMCmxJzlAPxYwePoqcJTJZaLKb+9GSb5fYCDACM+Z6tujvRoaDCxZRiSPJS1ftPC8tLrXNZHpEvRg==","accountName":"13712121212","protocols":["s2k","s2k_fo"]}'
#response = requests.post('https://idmsa.apple.com/appleauth/auth/signin/init', cookies=cookies, headers=headers, data=data)
