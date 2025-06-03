import json
import time

import requests
import execjs
from loguru import logger

def gbk_percent_encode(text):
    # 将文本编码为 GBK 字节序列
    gbk_bytes = text.encode('gbk')
    # 对每个字节进行百分号转义
    return ''.join(f'%{byte:02X}' for byte in gbk_bytes)

cookies = {
    'cna': '+f6PIHVcJlkCAbcGf4c9rV5w',
    'xlly_s': '1',
    'ali_apache_id': '33.5.106.177.174542466390.917010.1',
    '__wapcsf__': '1',
    'cookie2': '165da4b9958c944078491c79a757eec5',
    't': '5df8259f2a92e6e3b69a127cc19a9072',
    '_tb_token_': '563de355e177f',
    '__cn_logon__': 'false',
    'leftMenuLastMode': 'COLLAPSE',
    'leftMenuModeTip': 'shown',
    'isg': 'BI-P0K1oO49_BD9zgTRcfC9BHiOZtOPW5YhpoqGdCP4FcKxyqYYNJ0hycKBOCLtO',
    'keywordsHistory': '%E9%BC%A0%E6%A0%87%3B%E9%94%AE%E7%9B%98',
    '_user_vitals_session_data_': '{"user_line_track":true,"ul_session_id":"4tga1uq72do","last_page_id":"s.1688.com%2Fay1vmz2ywuf"}',
    'mtop_partitioned_detect': '1',
    '_m_h5_tk': '4e004b56c40038cf5908a6d80747c858_1745477138241',
    '_m_h5_tk_enc': '5169e6cd39b1fbcdef7bc16a53d9ab44',
    'tfstk': 'gZxqES4Tcmn4NZxqsTja8FZaujIAWicCoh11IdvGhsfcGdjurtBcSnsXhQ5MOQj1GAHTbNfkwFTsHNO5sBONCnt6IRWMNib9l11f_GJ9TYGIAD9vHGIoOXiQVdKJeGCifG05qfCUFbGIAD9motI6EXt6ukUfw9ZGjZbiqzfRQoXciCjlEOfumOqcI7DPB_jgmOXcr_XhQS4GiCvoUOClsGbmh_CGOuWFoA_5LrzswvL5tKfzjkyd3Zc2hPZgjlXAu6blalX24t7VtKxU0z9GE3tPRawsJgvpPIXPY0acxL8MTeAtRzI2IEAOzIh8z_TkDdfGPRqeUpJD-gxsIJQyZO7hjaygjLSAZB-fxDVPeUvXSnd4QlXvcH_N9akgXNskAwYHgRHpEiXM6wKs9oCDIpKpRMo7oMvySB8N4wPOE832XEPg7ZXRU6MrUKLtRedWxsx7WPQvyT5IHxUTWZXRU6MrUPUOkMBPOxHA.',
}

headers = {
    'accept': '*/*',
    'accept-language': 'zh-CN,zh;q=0.9',
    'cache-control': 'no-cache',
    'pragma': 'no-cache',
    'referer': 'https://s.1688.com/',
    'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'script',
    'sec-fetch-mode': 'no-cors',
    'sec-fetch-site': 'same-site',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
    # 'cookie': 'cna=+f6PIHVcJlkCAbcGf4c9rV5w; xlly_s=1; ali_apache_id=33.5.106.177.174542466390.917010.1; __wapcsf__=1; cookie2=165da4b9958c944078491c79a757eec5; t=5df8259f2a92e6e3b69a127cc19a9072; _tb_token_=563de355e177f; __cn_logon__=false; leftMenuLastMode=COLLAPSE; leftMenuModeTip=shown; isg=BI-P0K1oO49_BD9zgTRcfC9BHiOZtOPW5YhpoqGdCP4FcKxyqYYNJ0hycKBOCLtO; keywordsHistory=%E9%BC%A0%E6%A0%87%3B%E9%94%AE%E7%9B%98; _user_vitals_session_data_={"user_line_track":true,"ul_session_id":"4tga1uq72do","last_page_id":"s.1688.com%2Fay1vmz2ywuf"}; mtop_partitioned_detect=1; _m_h5_tk=4e004b56c40038cf5908a6d80747c858_1745477138241; _m_h5_tk_enc=5169e6cd39b1fbcdef7bc16a53d9ab44; tfstk=gZxqES4Tcmn4NZxqsTja8FZaujIAWicCoh11IdvGhsfcGdjurtBcSnsXhQ5MOQj1GAHTbNfkwFTsHNO5sBONCnt6IRWMNib9l11f_GJ9TYGIAD9vHGIoOXiQVdKJeGCifG05qfCUFbGIAD9motI6EXt6ukUfw9ZGjZbiqzfRQoXciCjlEOfumOqcI7DPB_jgmOXcr_XhQS4GiCvoUOClsGbmh_CGOuWFoA_5LrzswvL5tKfzjkyd3Zc2hPZgjlXAu6blalX24t7VtKxU0z9GE3tPRawsJgvpPIXPY0acxL8MTeAtRzI2IEAOzIh8z_TkDdfGPRqeUpJD-gxsIJQyZO7hjaygjLSAZB-fxDVPeUvXSnd4QlXvcH_N9akgXNskAwYHgRHpEiXM6wKs9oCDIpKpRMo7oMvySB8N4wPOE832XEPg7ZXRU6MrUKLtRedWxsx7WPQvyT5IHxUTWZXRU6MrUPUOkMBPOxHA.',
}
url = "https://h5api.m.1688.com/h5/mtop.relationrecommend.wirelessrecommend.recommend/2.0/"

with open('code.js', 'r', encoding='utf-8') as f:
    js_code = f.read()
jsDrive = execjs.compile(js_code)
t = int(time.time()*1000)
token = cookies['_m_h5_tk'].split('_')[0]
keywords = '键盘'
params1 = {
    "beginPage": 1,
    "pageSize": 60,
    "method": "getOfferList",
    "pageId": "ddn87zLMWF6jjyeOfKIuGtxuaBNZxL6m98SUpnyZtV2p6ZBD",
    "verticalProductFlag": "pcmarket",
    "searchScene": "pcOfferSearch",
    "charset": "GBK",
    "spm": "a26352.13672862.searchbox.0",
    "keywords": gbk_percent_encode(keywords)
}
params_json = json.dumps(params1, ensure_ascii=False, separators=(',', ':'))
c ={
    "appId": 32517,
    "params": params_json
}
sign = jsDrive.call('get_sign', token, t,c)
params = {
    "jsv": "2.7.2",
    "appKey": "12574478",
    "t": str(t),
    "sign": sign,
    "api": "mtop.relationrecommend.WirelessRecommend.recommend",
    "v": "2.0",
    "jsonpIncPrefix": "reqTppId_32517_getOfferList",
    "type": "jsonp",
    "dataType": "jsonp",
    "callback": "mtopjsonpreqTppId_32517_getOfferList1",
    "data": json.dumps(c,ensure_ascii=False, separators=(',', ':'))
}

response = requests.get(url, params=params,headers=headers, cookies=cookies)
response_content = response.text
start = response_content.find('(') + 1
end = response_content.rfind(')')

if start != -1 and end != -1:
    json_content = response_content[start:end]
    try:
        # 将 JSON 字符串转换为字典
        content_json = json.loads(json_content)
        print(content_json)
        items = content_json["data"]["data"]["OFFER"]["items"]
        for item in items:
            title = item["data"]["title"]
            price = item["data"]["priceInfo"]["price"]
            logger.info(f"标题:{title} | 价格:{price}")
    except json.JSONDecodeError as e:
        print(f"JSON 解码失败: {e}")
else:
    print("响应内容格式不正确")
