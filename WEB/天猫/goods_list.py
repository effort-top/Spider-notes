import requests

cookies = {
    'thw': 'cn',
    't': '87838c8964128beffe142ef56810de5a',
    'cna': 'XWdxIJ1q3EoCAcuoEQWvD49k',
    'wk_cookie2': '136ef79d6239ed390df9f0111b223efd',
    'wk_unb': 'UUpgT78V5mzPUz%2Bf0g%3D%3D',
    'lgc': 'tb514724667609',
    'dnk': 'tb514724667609',
    'tracknick': 'tb514724667609',
    'mtop_partitioned_detect': '1',
    '_m_h5_tk': 'c76120ac868a242c5c00379f737ce4bc_1744284913193',
    '_m_h5_tk_enc': '620f513fa076114aec2ff30e58a4022f',
    '_tb_token_': 'e41e5bb8d9e31',
    'cookie2': '29acc1f7a56f5f42997181561d30b83a',
    'xlly_s': '1',
    '_samesite_flag_': 'true',
    '3PcFlag': '1744276660995',
    'unb': '2219041487532',
    'sn': '',
    'uc3': 'lg2=URm48syIIVrSKA%3D%3D&id2=UUpgT78V5mzPUz%2Bf0g%3D%3D&nk2=F5RAQ159YaaZ3inzT8c%3D&vt3=F8dD2Erm9RtQW5ptH%2Bk%3D',
    'csg': '8811e8b4',
    'cancelledSubSites': 'empty',
    'cookie17': 'UUpgT78V5mzPUz%2Bf0g%3D%3D',
    'skt': 'b7eb54b33f437d02',
    'existShop': 'MTc0NDI3Njc3OA%3D%3D',
    'uc4': 'nk4=0%40FY4L7%2F5I4%2FHg9yfxqsHI6zliFMKw76yF%2Bg%3D%3D&id4=0%40U2gqwAAps5hqCshulxUBHfnp9vqk77u%2B',
    '_cc_': 'UIHiLt3xSw%3D%3D',
    '_l_g_': 'Ug%3D%3D',
    'sg': '92b',
    '_nk_': 'tb514724667609',
    'cookie1': 'BYahADcvJZKIjfPEecLF1sBCJX%2FXt%2FzL%2Bn%2F%2FVlaPQQs%3D',
    'sgcookie': 'E100U1NW4rAa0m53iMVw%2FGHTz5JcUdn05cQHkxZAnldn0HBYf4BILV1A90NHawM6YjoL4n1ohM7mHzlgVHKgLOh5u6CnB%2BecF%2BY7XaHRmqOlLro%3D',
    'isg': 'BD09yM9eBqtmlaLaFlYazq2qTJk32nEsq2uGB_-CQxTDNl1oxy39_tft5GpwsYnk',
    'uc1': 'cookie21=UIHiLt3xSalX&pas=0&cookie15=U%2BGCWk%2F75gdr5Q%3D%3D&existShop=false&cookie16=WqG3DMC9UpAPBHGz5QBErFxlCA%3D%3D&cookie14=UoYaj4ob7aEs%2Bg%3D%3D',
    'tfstk': 'g0sxIitF87VmEXIvEtzoSsxGK-2utzXVesWIjCAm5_CRi9_DoOOMX1CO6IY_gnjOwsXCoEX1jds90gbmjIV2XO1HXWV3xkXV33-_tWvrY0UJfdZM1zYbH2M3HWV3xu4jFhFYtsmle9sJQQ9XhqT_eYOyIKt6GFGSPpOWfhOX1YgWLdcshq9_eU9wIdt6f167edAWChtspFP9NxOiXw7Mh_PK7IisfgpvlzXXNc9P2KLvOtsofcgeHEdChQFF20bvPO8ObAo9Gt_F_p1jGWYVCaCJHhEolH6R56pPckcvUZX5KQ6KQcWXDwIpcZFrznfAV3sfJAi1end2WKLrM7dC0TseVUqQpTsPitSRIAZ6E6A53itTAJ-vcItJUGVrcCQ55iY2bjNHuO_RwKKC4LShvr4qt1Nnl8e-7V8XUbIZZjLi9A26eB2YXVuwz8JJt8e-7V8XULd3HS3Z7UyP.',
}

headers = {
    'authority': 'h5api.m.taobao.com',
    'accept': 'application/json',
    'accept-language': 'zh-CN,zh;q=0.9',
    'bx-umidtoken': 'T2gAMS2bLc7-zs0BvVM-TuxwWQfy2wI3dFfyUaRzEMidzuaxnCekJyWuqVxkyeYaqcg=',
    'content-type': 'application/x-www-form-urlencoded',
    # 'cookie': 'thw=cn; t=87838c8964128beffe142ef56810de5a; cna=XWdxIJ1q3EoCAcuoEQWvD49k; wk_cookie2=136ef79d6239ed390df9f0111b223efd; wk_unb=UUpgT78V5mzPUz%2Bf0g%3D%3D; lgc=tb514724667609; dnk=tb514724667609; tracknick=tb514724667609; mtop_partitioned_detect=1; _m_h5_tk=c76120ac868a242c5c00379f737ce4bc_1744284913193; _m_h5_tk_enc=620f513fa076114aec2ff30e58a4022f; _tb_token_=e41e5bb8d9e31; cookie2=29acc1f7a56f5f42997181561d30b83a; xlly_s=1; _samesite_flag_=true; 3PcFlag=1744276660995; unb=2219041487532; sn=; uc3=lg2=URm48syIIVrSKA%3D%3D&id2=UUpgT78V5mzPUz%2Bf0g%3D%3D&nk2=F5RAQ159YaaZ3inzT8c%3D&vt3=F8dD2Erm9RtQW5ptH%2Bk%3D; csg=8811e8b4; cancelledSubSites=empty; cookie17=UUpgT78V5mzPUz%2Bf0g%3D%3D; skt=b7eb54b33f437d02; existShop=MTc0NDI3Njc3OA%3D%3D; uc4=nk4=0%40FY4L7%2F5I4%2FHg9yfxqsHI6zliFMKw76yF%2Bg%3D%3D&id4=0%40U2gqwAAps5hqCshulxUBHfnp9vqk77u%2B; _cc_=UIHiLt3xSw%3D%3D; _l_g_=Ug%3D%3D; sg=92b; _nk_=tb514724667609; cookie1=BYahADcvJZKIjfPEecLF1sBCJX%2FXt%2FzL%2Bn%2F%2FVlaPQQs%3D; sgcookie=E100U1NW4rAa0m53iMVw%2FGHTz5JcUdn05cQHkxZAnldn0HBYf4BILV1A90NHawM6YjoL4n1ohM7mHzlgVHKgLOh5u6CnB%2BecF%2BY7XaHRmqOlLro%3D; isg=BD09yM9eBqtmlaLaFlYazq2qTJk32nEsq2uGB_-CQxTDNl1oxy39_tft5GpwsYnk; uc1=cookie21=UIHiLt3xSalX&pas=0&cookie15=U%2BGCWk%2F75gdr5Q%3D%3D&existShop=false&cookie16=WqG3DMC9UpAPBHGz5QBErFxlCA%3D%3D&cookie14=UoYaj4ob7aEs%2Bg%3D%3D; tfstk=g0sxIitF87VmEXIvEtzoSsxGK-2utzXVesWIjCAm5_CRi9_DoOOMX1CO6IY_gnjOwsXCoEX1jds90gbmjIV2XO1HXWV3xkXV33-_tWvrY0UJfdZM1zYbH2M3HWV3xu4jFhFYtsmle9sJQQ9XhqT_eYOyIKt6GFGSPpOWfhOX1YgWLdcshq9_eU9wIdt6f167edAWChtspFP9NxOiXw7Mh_PK7IisfgpvlzXXNc9P2KLvOtsofcgeHEdChQFF20bvPO8ObAo9Gt_F_p1jGWYVCaCJHhEolH6R56pPckcvUZX5KQ6KQcWXDwIpcZFrznfAV3sfJAi1end2WKLrM7dC0TseVUqQpTsPitSRIAZ6E6A53itTAJ-vcItJUGVrcCQ55iY2bjNHuO_RwKKC4LShvr4qt1Nnl8e-7V8XUbIZZjLi9A26eB2YXVuwz8JJt8e-7V8XULd3HS3Z7UyP.',
    'origin': 'https://item.taobao.com',
    'referer': 'https://item.taobao.com/item.htm?id=901863273736&pisk=ghMKjg2qgFY3AokLjDRGZXjsqGxGeCmE-2ofEz4hNV3t-PXkYJAze4UtzyV3dDvSS2mXYyAyT4IEBqBlKeREVTeuFEYDnKmeY8yWoFvoZAIUqujCPaV5CNwu2VU8bcnEY8z5jaOm1D7RcdnfAuaWXRZ8VTw7Aza6XuElN8aQNN1_cPw7Fy67CRZu0M67PTt9CurRP_aQNNa_cu57F8g5fhEz5uw7FxNWyPsQrThqat0F66s53tkTvWUREPB8vvW0Ort4STB8SuFdtDaOFTMtsNYCLyOVjzy38YEKzKWUd7hqqu3pp9g-0AuTfq9RnyiZmjVEdQX0MJ4LwvgJy_EKi23zRD_COoeLJSMQ_iKjb7GtBJDBzsoiXyNYIfAw-72KJjz4OC8ZycUnPvF1JF4oicDQ6qTGB4P-g0q-JpBIlgoZnxdHTZ0Wo6t9X_5zOl7tUNbdb5RFGlUDvLCPa5-aXrx9X_5zOlrToHLda_Pwb&pvid=954de52a-a11f-4294-be88-a50c122848d3&scm=1007.55713.413141.0&skuId=5924751002727&spm=tbpc.mytb_index.201876.d4.425b782dS1PtcF&utparam=%7B%22aplus_abtest%22%3A%225dbaeb67ea91a4b82beb3c774733dc61%22%7D&xxc=home_recommend',
    'sec-ch-ua': '"Chromium";v="122", "Not(A:Brand";v="24", "Google Chrome";v="122"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-site',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.6261.95 Safari/537.36',
    'x-pipu2': "h%7Bdugm%7Ctifnmfua%7D*61%3E%2F%3C%3F(6%3F%3E%7B3-2%2F%3C26h4(%7B*1%3B0%24%3A7%2B'%7B*1%3B0%24%3A7%2B'%7B*1%3B0%24%3A7%2B'%7Bo%7Boq",
}

params = {
    'jsv': '2.7.2',
    'appKey': '12574478',
    't': '1728473015859',
    'sign': 'ffd1ac85051e97584a83a9df98d7c9b4',
    'api': 'mtop.relationrecommend.wirelessrecommend.recommend',
    'v': '2.0',
    'type': 'jsonp',
    'dataType': 'jsonp',
    'callback': 'mtopjsonp9',
    'data': '{"appId":"34385","params":"{\\"device\\":\\"HMA-AL00\\",\\"isBeta\\":\\"false\\",\\"grayHair\\":\\"false\\",\\"from\\":\\"nt_history\\",\\"brand\\":\\"HUAWEI\\",\\"info\\":\\"wifi\\",\\"index\\":\\"4\\",\\"rainbow\\":\\"\\",\\"schemaType\\":\\"auction\\",\\"elderHome\\":\\"false\\",\\"isEnterSrpSearch\\":\\"true\\",\\"newSearch\\":\\"false\\",\\"network\\":\\"wifi\\",\\"subtype\\":\\"\\",\\"hasPreposeFilter\\":\\"false\\",\\"prepositionVersion\\":\\"v2\\",\\"client_os\\":\\"Android\\",\\"gpsEnabled\\":\\"false\\",\\"searchDoorFrom\\":\\"srp\\",\\"debug_rerankNewOpenCard\\":\\"false\\",\\"homePageVersion\\":\\"v7\\",\\"searchElderHomeOpen\\":\\"false\\",\\"search_action\\":\\"initiative\\",\\"sugg\\":\\"_4_1\\",\\"sversion\\":\\"13.6\\",\\"style\\":\\"list\\",\\"ttid\\":\\"600000@taobao_pc_10.7.0\\",\\"needTabs\\":\\"true\\",\\"areaCode\\":\\"CN\\",\\"vm\\":\\"nw\\",\\"countryNum\\":\\"156\\",\\"m\\":\\"pc\\",\\"page\\":1,\\"n\\":48,\\"q\\":\\"%E9%9B%A8%E8%88%9E%E8%80%85\\",\\"qSource\\":\\"url\\",\\"pageSource\\":\\"\\",\\"tab\\":\\"all\\",\\"pageSize\\":48,\\"totalPage\\":100,\\"totalResults\\":4800,\\"sourceS\\":\\"0\\",\\"sort\\":\\"_coefp\\",\\"bcoffset\\":\\"\\",\\"ntoffset\\":\\"\\",\\"filterTag\\":\\"\\",\\"service\\":\\"\\",\\"prop\\":\\"\\",\\"loc\\":\\"\\",\\"start_price\\":null,\\"end_price\\":null,\\"startPrice\\":null,\\"endPrice\\":null,\\"itemIds\\":null,\\"p4pIds\\":null,\\"p4pS\\":null,\\"categoryp\\":\\"\\",\\"myCNA\\":\\"fUAqH4MttFwCAXFZ6KypdrNf\\"}"}',
}

response = requests.get(
    'https://h5api.m.taobao.com/h5/mtop.relationrecommend.wirelessrecommend.recommend/2.0/',
    params=params,
    cookies=cookies,
    headers=headers,
)

print(response.text)