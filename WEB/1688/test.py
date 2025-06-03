import requests

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

params = {
    'jsv': '2.7.2',
    'appKey': '12574478',
    't': '1745470742737',
    'sign': 'be0584b09a83a01bee2126a6d0ff9124',
    'api': 'mtop.relationrecommend.WirelessRecommend.recommend',
    'v': '2.0',
    'jsonpIncPrefix': 'reqTppId_32517_getOfferList',
    'type': 'jsonp',
    'dataType': 'jsonp',
    'callback': 'mtopjsonpreqTppId_32517_getOfferList1',
    'data': '{"appId":32517,"params":"{\\"beginPage\\":1,\\"pageSize\\":60,\\"method\\":\\"getOfferList\\",\\"pageId\\":\\"ddn87zLMWF6jjyeOfKIuGtxuaBNZxL6m98SUpnyZtV2p6ZBD\\",\\"verticalProductFlag\\":\\"pcmarket\\",\\"searchScene\\":\\"pcOfferSearch\\",\\"charset\\":\\"GBK\\",\\"spm\\":\\"a26352.13672862.searchbox.0\\",\\"keywords\\":\\"%CA%F3%B1%EA\\"}"}',
}
print(params)
response = requests.get(
    'https://h5api.m.1688.com/h5/mtop.relationrecommend.wirelessrecommend.recommend/2.0/',
    params=params,
    cookies=cookies,
    headers=headers,
)
print(response.text)