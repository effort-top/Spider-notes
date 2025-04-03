import json
import time
import execjs
import requests

cookies = {
    '__jdv': '76161171|direct|-|none|-|1735288491536',
    '__jdu': '1735288491536209267157',
    'areaId': '19',
    'PCSYCityID': 'CN_440000_440300_0',
    'shshshfpa': 'e11c295d-92c6-f5fa-aebc-13c2fd9fa375-1735288493',
    'shshshfpx': 'e11c295d-92c6-f5fa-aebc-13c2fd9fa375-1735288493',
    'TrackID': '1zBMqXkoU-llmkyCtLYUhvwCOkBfN6RkX124hFKi9A7bMTYD70R7BoCQyBQFpxipTbZhSURfX4agWmO1fwzHWJtChYZHSdnAfKuA5PJ6mfrJKngdYVRj1fg7gqTv1W7s8',
    'thor': '4453769BDCED6B11A66E0AFB2F7C14EA7E60C4E502961280F4CA636850F42D480BBD25670F0EBB07C73AF50F6ECF4889B1A227F4F4F06D864FED4105E1F4ED16C4E0B0AAEA552FA6ABBC63AFE5444A0830FB0C2F215D7466F9A99911FC97D263A547B0FF922C8694C15ECACF61621679451ED9E5C0F16AF1AC94EED95451AC5F03E6699CD8C9B4D1E8EB4BA666F4C39A9E9C8D5C677F59404EE574DBCF23B4AD',
    'light_key': 'AASBKE7rOxgWQziEhC_QY6yavjvMEDMB7YDYEB9YCi-05nXUCiYzKAF1aIvPtWCYkVk-mOXL',
    'pinId': 'sIVK9Eg9BlQhngfB1ZJR4Q',
    'pin': 'jd_xYicEkbIdbVc',
    'unick': 'rw49109v8t0h1r',
    'ceshi3.com': '000',
    '_tp': 'rWdb%2Ba4mJVegPU2veHapcA%3D%3D',
    '_pst': 'jd_xYicEkbIdbVc',
    'cn': '0',
    'TARGET_UNIT': 'bjcenter',
    '3AB9D23F7A4B3C9B': 'JRZY6IQS3GCW37OK55BZCUDXA4H3WKJHPCEOSSP2SEBLONVKAXAFQ5QXSKQTR25DXAKGM5QKH7NKXOFTYBUGSCPLJE',
    '__jdc': '181111935',
    'ipLoc-djd': '19-1607-4773-62121',
    'token': '6dd52ac3b64a07e8affa474025a8dc4b,3,964179',
    'jsavif': '1',
    '3AB9D23F7A4B3CSS': 'jdd03JRZY6IQS3GCW37OK55BZCUDXA4H3WKJHPCEOSSP2SEBLONVKAXAFQ5QXSKQTR25DXAKGM5QKH7NKXOFTYBUGSCPLJEAAAAMUCVBE7IQAAAAADE7QOQW646LYRUX',
    '__jda': '181111935.1735288491536209267157.1735288492.1735288492.1735523455.2',
    'flash': '3_kuuRC_FnZTaQ_dP_SolF65NGPi5zrAs_5iHL4SA4MKdRWAes4xTXensI_FTaeaoJisEd3gfaLMsCxwyfFN_IDIDnSLw0fFVVSF2NaVfKAYBBGszHkQJj1_lIL_SjBUo_FwiXWpzker0fPW8EyYB6GamVYLXLUxwNcUo0xGrgRqnOWfm4uJNS',
    '__jdb': '181111935.2.1735288491536209267157|2.1735523455',
    'shshshfpb': 'BApXSgRZLFvFA6odNYIEbThx1erVGWRKvBndpg7xp9xJ1Mgldc4G2',
}

headers = {
    'authority': 'api.m.jd.com',
    'accept': 'application/json, text/javascript, */*; q=0.01',
    'accept-language': 'zh-CN,zh;q=0.9',
    'cache-control': 'no-cache',
    # 'cookie': '__jdv=76161171|direct|-|none|-|1735288491536; __jdu=1735288491536209267157; areaId=19; PCSYCityID=CN_440000_440300_0; shshshfpa=e11c295d-92c6-f5fa-aebc-13c2fd9fa375-1735288493; shshshfpx=e11c295d-92c6-f5fa-aebc-13c2fd9fa375-1735288493; TrackID=1zBMqXkoU-llmkyCtLYUhvwCOkBfN6RkX124hFKi9A7bMTYD70R7BoCQyBQFpxipTbZhSURfX4agWmO1fwzHWJtChYZHSdnAfKuA5PJ6mfrJKngdYVRj1fg7gqTv1W7s8; thor=4453769BDCED6B11A66E0AFB2F7C14EA7E60C4E502961280F4CA636850F42D480BBD25670F0EBB07C73AF50F6ECF4889B1A227F4F4F06D864FED4105E1F4ED16C4E0B0AAEA552FA6ABBC63AFE5444A0830FB0C2F215D7466F9A99911FC97D263A547B0FF922C8694C15ECACF61621679451ED9E5C0F16AF1AC94EED95451AC5F03E6699CD8C9B4D1E8EB4BA666F4C39A9E9C8D5C677F59404EE574DBCF23B4AD; light_key=AASBKE7rOxgWQziEhC_QY6yavjvMEDMB7YDYEB9YCi-05nXUCiYzKAF1aIvPtWCYkVk-mOXL; pinId=sIVK9Eg9BlQhngfB1ZJR4Q; pin=jd_xYicEkbIdbVc; unick=rw49109v8t0h1r; ceshi3.com=000; _tp=rWdb%2Ba4mJVegPU2veHapcA%3D%3D; _pst=jd_xYicEkbIdbVc; cn=0; TARGET_UNIT=bjcenter; 3AB9D23F7A4B3C9B=JRZY6IQS3GCW37OK55BZCUDXA4H3WKJHPCEOSSP2SEBLONVKAXAFQ5QXSKQTR25DXAKGM5QKH7NKXOFTYBUGSCPLJE; __jdc=181111935; ipLoc-djd=19-1607-4773-62121; token=6dd52ac3b64a07e8affa474025a8dc4b,3,964179; jsavif=1; 3AB9D23F7A4B3CSS=jdd03JRZY6IQS3GCW37OK55BZCUDXA4H3WKJHPCEOSSP2SEBLONVKAXAFQ5QXSKQTR25DXAKGM5QKH7NKXOFTYBUGSCPLJEAAAAMUCVBE7IQAAAAADE7QOQW646LYRUX; __jda=181111935.1735288491536209267157.1735288492.1735288492.1735523455.2; flash=3_kuuRC_FnZTaQ_dP_SolF65NGPi5zrAs_5iHL4SA4MKdRWAes4xTXensI_FTaeaoJisEd3gfaLMsCxwyfFN_IDIDnSLw0fFVVSF2NaVfKAYBBGszHkQJj1_lIL_SjBUo_FwiXWpzker0fPW8EyYB6GamVYLXLUxwNcUo0xGrgRqnOWfm4uJNS; __jdb=181111935.2.1735288491536209267157|2.1735523455; shshshfpb=BApXSgRZLFvFA6odNYIEbThx1erVGWRKvBndpg7xp9xJ1Mgldc4G2',
    'origin': 'https://item.jd.com',
    'pragma': 'no-cache',
    'referer': 'https://item.jd.com/100106099450.html',
    'sec-ch-ua': '"Chromium";v="122", "Not(A:Brand";v="24", "Google Chrome";v="122"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-site',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.6261.95 Safari/537.36',
    'x-referer-page': 'https://item.jd.com/100106099450.html',
    'x-rp-client': 'h5_1.0.0',
}
current_time = time.time()
# 将时间戳转换为毫秒
current_time_ms = int(current_time * 1000)
body = '{"skuId":100106099450,"cat":"9987,830,13658","area":"19_1607_4773_62121","shopId":"1000454827","venderId":1000454827,"paramJson":"{\\"platform2\\":\\"1\\",\\"specialAttrStr\\":\\"p0ppppppppppppppppppppppppp\\",\\"skuMarkStr\\":\\"00\\"}","num":1,"bbTraffic":"","canvasType":1,"giftServiceIsSelected":"","customInfoId":"0"}'
with open('sha256加密.js', 'r', encoding='utf-8') as f:
    js_code = f.read()
context = execjs.compile(js_code)
sha1 = context.call("SHA256", body)
print(sha1)
params = {
    "appid": "pc-item-soa",
    "body": sha1,
    "client": "pc",
    "clientVersion": "1.0.0",
    "functionId": "pc_detailpage_wareBusiness",
    "t": current_time_ms
}

url = "http://127.0.0.1:12080/go?group=zzz&action=getSign&param={}".format(json.dumps(params))
print(url)
response = requests.get(url)
# print(response.status_code)
h5st_data = response.text
json_data = json.loads(h5st_data)
print(json_data)
h5st = json_data.get('data')
print(h5st)

params = {
    'appid': 'pc-item-soa',
    'functionId': 'pc_detailpage_wareBusiness',
    'client': 'pc',
    'clientVersion': '1.0.0',
    't': str(current_time_ms),
    'body': body,
    'h5st': h5st,
    'x-api-eid-token': 'jdd03JRZY6IQS3GCW37OK55BZCUDXA4H3WKJHPCEOSSP2SEBLONVKAXAFQ5QXSKQTR25DXAKGM5QKH7NKXOFTYBUGSCPLJEAAAAMUCVBE7IQAAAAADE7QOQW646LYRUX',
    'loginType': '3',
    'scval': '100106099450',
    'uuid': '181111935.1735288491536209267157.1735288492.1735288492.1735523455.2',
}

response = requests.get('https://api.m.jd.com/', params=params, cookies=cookies, headers=headers)
print(response.status_code)
print(response.text)





