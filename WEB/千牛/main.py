import re

import requests
import execjs
import json
import time

with open('code.js', 'r', encoding='utf-8') as f:
    js_code = f.read()
jsDrive1 = execjs.compile(js_code)

with open('解码.js', "r", encoding='utf-8') as f:
    js_tamp = f.read()
jsDrive2 = execjs.compile(js_tamp)

cookies = {
    't': '25b98257d8c2ee74bc52cd379abca5d8',
    'wk_cookie2': '1c9cfc34fd54d09a72cb606990a7ba68',
    '_samesite_flag_': 'true',
    'cookie2': '10943715ee9ffea21918f15057c9ae05',
    '_tb_token_': 'ee35714b7fb5e',
    'mt': 'ci=0_0',
    'wk_unb': 'UUwY%2Fjg%2BJRxTVQ%3D%3D',
    'lgc': '%5Cu8DB3%5Cu7403%5Cu5148%5Cu751F%5Cu963F%5Cu8BFA',
    'cancelledSubSites': 'empty',
    'dnk': '%5Cu8DB3%5Cu7403%5Cu5148%5Cu751F%5Cu963F%5Cu8BFA',
    'tracknick': '%5Cu8DB3%5Cu7403%5Cu5148%5Cu751F%5Cu963F%5Cu8BFA',
    '_cc_': 'Vq8l%2BKCLiw%3D%3D',
    'thw': 'cn',
    '3PcFlag': '1747200903186',
    'isg': 'BJOTwSrz_5762LPOZ3OphS1DIhe9SCcKRMXo10WwvLLpxLJmzRijWvhf_jSq5H8C',
    'sgcookie': 'E100mqCc1MAZXP6oRdSBxvz40p5fkX7iSYFsjv4Lr1KxDdKQAHPqtj%2FPd40t16Bm4sTiR4tpnEKn%2BeA9CNJ9qnbciZL6Jwodt8qPcvkqxNEmgMrKSG9NhuWe3hIOMknKTz9H%2Bj%2FEMkd3Tn5q3%2FO1h8FzNA%3D%3D',
    'unb': '2487913053',
    'uc1': 'cookie14=UoYajLe8UiEn%2Fg%3D%3D&cookie21=V32FPkk%2Fgi8IDE%2FSpbTf&cookie16=V32FPkk%2FxXMk5UvIbNtImtMfJQ%3D%3D&pas=0&cookie15=Vq8l%2BKCLz3%2F65A%3D%3D&existShop=true',
    'uc3': 'vt3=F8dD2EXfIMcuP87XCOs%3D&nk2=tPyx%2BmdUJ5suFyAe&id2=UUwY%2Fjg%2BJRxTVQ%3D%3D&lg2=URm48syIIVrSKA%3D%3D',
    'csg': 'edefe7ac',
    'cookie17': 'UUwY%2Fjg%2BJRxTVQ%3D%3D',
    'skt': 'ebe07036134e714b',
    'existShop': 'MTc0NzIwMTAxMQ%3D%3D',
    'uc4': 'nk4=0%40thpxwJf2ZW2jlM0XVjcHbKzhpehoJcA%3D&id4=0%40U27Hq%2BnL6JHzikHQQR4L751hziPX',
    '_l_g_': 'Ug%3D%3D',
    'sg': '%E8%AF%BA37',
    '_nk_': '%5Cu8DB3%5Cu7403%5Cu5148%5Cu751F%5Cu963F%5Cu8BFA',
    'cookie1': 'B0Txavq8coXp0Z4jBK9eRa%2FsUCTDd7nQ8%2BTSbdWH8O0%3D',
    'xlly_s': '1',
    'cna': 'yt2gIAaI7xgCAXjmeudsm5Mr',
    'mtop_partitioned_detect': '1',
    '_m_h5_tk': '0a6374225f7f46af9519eb0544a749be_1747289054576',
    '_m_h5_tk_enc': 'b14d6477b87ed343eb48b6722cce6099',
    'bxuab': '0',
    'tfstk': 'gWBqajcth-e4BxYviT9ZTHCM72JvpdzQ7OT6jGjMcEYcGFMNQUS3DENTMN5PSadXosTsQO8PoAOfQGHwjGbTDFZYNiIvBdqS-NyCDiFr5XHTPdqGqdtwFXxSZiIvB0nSSW1lDc8CkGSMINvkZH-HIVbMsQqyjhgmsxbg4u-Mmf0mIFvkqnKDIFbMIuSkyhJMjNvip2YMRY-eilaXpXjTDUR2-iYrQiBymIlAmUkiIT5yge06zADiYnSwI1pjL5Th9EOBaa2S3dSkbZT5-JDyEB5dfh743xvfZ_BvhTaEvI7wlBXya80y4TSCt3IzTuSPQERhnQospLvvjNANwykB0K1yTt5YX4jcRE5HHGiUlgRFaBKkZclDh6sCBBX032LW9h7XPw2nULAG4809qpf5Bsui_IxJ4ewLpMibMXGDOoXq6fdAw38QDoht6IxJ4eZz4fh9MpKyRoEA.',
}
# 修复 JSON 数据
def fix_json(data):
    # 将数字键替换为字符串键
    data = re.sub(r'(\d+):', r'"\1":', data)
    # 添加外层结构
    fixed_data = f'{{"componentsVO": {{"umpPriceLogVO": {{"map": {data}}}}}}}'
    return fixed_data

def getDetail(id):
    cookies = {
        't': '25b98257d8c2ee74bc52cd379abca5d8',
        'wk_cookie2': '1c9cfc34fd54d09a72cb606990a7ba68',
        '_samesite_flag_': 'true',
        'cookie2': '10943715ee9ffea21918f15057c9ae05',
        '_tb_token_': 'ee35714b7fb5e',
        'mt': 'ci=0_0',
        'wk_unb': 'UUwY%2Fjg%2BJRxTVQ%3D%3D',
        'lgc': '%5Cu8DB3%5Cu7403%5Cu5148%5Cu751F%5Cu963F%5Cu8BFA',
        'cancelledSubSites': 'empty',
        'dnk': '%5Cu8DB3%5Cu7403%5Cu5148%5Cu751F%5Cu963F%5Cu8BFA',
        'tracknick': '%5Cu8DB3%5Cu7403%5Cu5148%5Cu751F%5Cu963F%5Cu8BFA',
        '_cc_': 'Vq8l%2BKCLiw%3D%3D',
        'thw': 'cn',
        '3PcFlag': '1747200903186',
        'sgcookie': 'E100mqCc1MAZXP6oRdSBxvz40p5fkX7iSYFsjv4Lr1KxDdKQAHPqtj%2FPd40t16Bm4sTiR4tpnEKn%2BeA9CNJ9qnbciZL6Jwodt8qPcvkqxNEmgMrKSG9NhuWe3hIOMknKTz9H%2Bj%2FEMkd3Tn5q3%2FO1h8FzNA%3D%3D',
        'unb': '2487913053',
        'uc1': 'cookie14=UoYajLe8UiEn%2Fg%3D%3D&cookie21=V32FPkk%2Fgi8IDE%2FSpbTf&cookie16=V32FPkk%2FxXMk5UvIbNtImtMfJQ%3D%3D&pas=0&cookie15=Vq8l%2BKCLz3%2F65A%3D%3D&existShop=true',
        'uc3': 'vt3=F8dD2EXfIMcuP87XCOs%3D&nk2=tPyx%2BmdUJ5suFyAe&id2=UUwY%2Fjg%2BJRxTVQ%3D%3D&lg2=URm48syIIVrSKA%3D%3D',
        'csg': 'edefe7ac',
        'cookie17': 'UUwY%2Fjg%2BJRxTVQ%3D%3D',
        'skt': 'ebe07036134e714b',
        'existShop': 'MTc0NzIwMTAxMQ%3D%3D',
        'uc4': 'nk4=0%40thpxwJf2ZW2jlM0XVjcHbKzhpehoJcA%3D&id4=0%40U27Hq%2BnL6JHzikHQQR4L751hziPX',
        '_l_g_': 'Ug%3D%3D',
        'sg': '%E8%AF%BA37',
        '_nk_': '%5Cu8DB3%5Cu7403%5Cu5148%5Cu751F%5Cu963F%5Cu8BFA',
        'cookie1': 'B0Txavq8coXp0Z4jBK9eRa%2FsUCTDd7nQ8%2BTSbdWH8O0%3D',
        'xlly_s': '1',
        'cna': 'yt2gIAaI7xgCAXjmeudsm5Mr',
        'mtop_partitioned_detect': '1',
        '_m_h5_tk': '0a6374225f7f46af9519eb0544a749be_1747289054576',
        '_m_h5_tk_enc': 'b14d6477b87ed343eb48b6722cce6099',
        'bxuab': '0',
        'aui': '2487913053',
        'sca': '81fd29e0',
        'isg': 'BCkpBfhrZX2aKlnMaV1jJ0v1ONWD9h0oIvPCVcsfk5BPkkukE0Ve-C2SVjakCrVg',
        'tfstk': 'gKnxIIqE8QADEloYEx8lSy2eTYJk-UDqejkCj5Vc5bh-ivg0oANgXfht6S46gomtwjDIorDsjRiT000cjSA4XAG3XBAHxHqVdur6tBbF8XygfRtg1U4XHw6HHBAHx3YfFldvtfvxnXi8Q7wbCRNXeTNzIRZ_GP15PJN7flab1zt7CR5_CGN6ezwaIRZ_ffMWeRV7hlZsplXYstNOX28z2LfJ5-s1f0eYlUDbNGwr2-UYOxiAfG_4HrFCf7dXVX4uPAztbOSTGxgE_JGfGB4qC4h8HlKllkM-5XercHfYUqDSK7MdQGkbD2nLcqdPzocxVuijJOsseoF4W-UPMQFI0YiUVzxBpYirixo-IOt_EXVS3mZ9AprYcSZ8UcAPc53S5m44bsO3uAg-w-EC4ginvE0VtWeGlLpR7NPgUEwzEwyHbzIueWvlrN7ar8y8tLpR7NzbU8FHEHbN7z2P.',
    }

    headers = {
        'accept': 'application/json',
        'accept-language': 'zh-CN,zh;q=0.9',
        'bx-umidtoken': 'T2gAykjZdH38MCvTdqU4Ta5JuiGzSuqEyIhs5hgEvKTPEYyrfVan1B4AgT_q1x9vf3k=',
        'cache-control': 'no-cache',
        'content-type': 'application/x-www-form-urlencoded',
        'origin': 'https://item.taobao.com',
        'pragma': 'no-cache',
        'priority': 'u=1, i',
        'referer': 'https://item.taobao.com/',
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-site',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36',
        'x-pipu2': 'h%7Bdugn%7C%7Bllfndv%60%7D%7B353%2B%2B%26%25a%3F8z5)j29%241%3A%3E!%7Bo%7Boqrwijs%7B',
        # 'cookie': 't=25b98257d8c2ee74bc52cd379abca5d8; wk_cookie2=1c9cfc34fd54d09a72cb606990a7ba68; _samesite_flag_=true; cookie2=10943715ee9ffea21918f15057c9ae05; _tb_token_=ee35714b7fb5e; mt=ci=0_0; wk_unb=UUwY%2Fjg%2BJRxTVQ%3D%3D; lgc=%5Cu8DB3%5Cu7403%5Cu5148%5Cu751F%5Cu963F%5Cu8BFA; cancelledSubSites=empty; dnk=%5Cu8DB3%5Cu7403%5Cu5148%5Cu751F%5Cu963F%5Cu8BFA; tracknick=%5Cu8DB3%5Cu7403%5Cu5148%5Cu751F%5Cu963F%5Cu8BFA; _cc_=Vq8l%2BKCLiw%3D%3D; thw=cn; 3PcFlag=1747200903186; sgcookie=E100mqCc1MAZXP6oRdSBxvz40p5fkX7iSYFsjv4Lr1KxDdKQAHPqtj%2FPd40t16Bm4sTiR4tpnEKn%2BeA9CNJ9qnbciZL6Jwodt8qPcvkqxNEmgMrKSG9NhuWe3hIOMknKTz9H%2Bj%2FEMkd3Tn5q3%2FO1h8FzNA%3D%3D; unb=2487913053; uc1=cookie14=UoYajLe8UiEn%2Fg%3D%3D&cookie21=V32FPkk%2Fgi8IDE%2FSpbTf&cookie16=V32FPkk%2FxXMk5UvIbNtImtMfJQ%3D%3D&pas=0&cookie15=Vq8l%2BKCLz3%2F65A%3D%3D&existShop=true; uc3=vt3=F8dD2EXfIMcuP87XCOs%3D&nk2=tPyx%2BmdUJ5suFyAe&id2=UUwY%2Fjg%2BJRxTVQ%3D%3D&lg2=URm48syIIVrSKA%3D%3D; csg=edefe7ac; cookie17=UUwY%2Fjg%2BJRxTVQ%3D%3D; skt=ebe07036134e714b; existShop=MTc0NzIwMTAxMQ%3D%3D; uc4=nk4=0%40thpxwJf2ZW2jlM0XVjcHbKzhpehoJcA%3D&id4=0%40U27Hq%2BnL6JHzikHQQR4L751hziPX; _l_g_=Ug%3D%3D; sg=%E8%AF%BA37; _nk_=%5Cu8DB3%5Cu7403%5Cu5148%5Cu751F%5Cu963F%5Cu8BFA; cookie1=B0Txavq8coXp0Z4jBK9eRa%2FsUCTDd7nQ8%2BTSbdWH8O0%3D; xlly_s=1; cna=yt2gIAaI7xgCAXjmeudsm5Mr; mtop_partitioned_detect=1; _m_h5_tk=0a6374225f7f46af9519eb0544a749be_1747289054576; _m_h5_tk_enc=b14d6477b87ed343eb48b6722cce6099; bxuab=0; aui=2487913053; sca=81fd29e0; isg=BCkpBfhrZX2aKlnMaV1jJ0v1ONWD9h0oIvPCVcsfk5BPkkukE0Ve-C2SVjakCrVg; tfstk=gKnxIIqE8QADEloYEx8lSy2eTYJk-UDqejkCj5Vc5bh-ivg0oANgXfht6S46gomtwjDIorDsjRiT000cjSA4XAG3XBAHxHqVdur6tBbF8XygfRtg1U4XHw6HHBAHx3YfFldvtfvxnXi8Q7wbCRNXeTNzIRZ_GP15PJN7flab1zt7CR5_CGN6ezwaIRZ_ffMWeRV7hlZsplXYstNOX28z2LfJ5-s1f0eYlUDbNGwr2-UYOxiAfG_4HrFCf7dXVX4uPAztbOSTGxgE_JGfGB4qC4h8HlKllkM-5XercHfYUqDSK7MdQGkbD2nLcqdPzocxVuijJOsseoF4W-UPMQFI0YiUVzxBpYirixo-IOt_EXVS3mZ9AprYcSZ8UcAPc53S5m44bsO3uAg-w-EC4ginvE0VtWeGlLpR7NPgUEwzEwyHbzIueWvlrN7ar8y8tLpR7NzbU8FHEHbN7z2P.',
    }
    rtime = round(time.time() * 1000)
    data_dict = {
        'id': id,
        'detail_v': '3.3.2'
    }
    exParams_dict = {
        'id': id,
        'queryParams': f'id={id}',
        'domain': "https://detail.tmall.hk",
        'path_name': "/hk/item.htm"
    }
    # 将 exParams_dict 转换为 JSON 字符串
    data_dict['exParams'] = json.dumps(exParams_dict)
    # 转换 data_dict 为 JSON 字符串
    data = json.dumps(data_dict)

    token = cookies['_m_h5_tk'].split('_')[0]
    sign = jsDrive2.call('get_sing', token, rtime, data)

    params = {
        'jsv': '2.7.4',
        'appKey': '12574478',
        't': rtime,
        'sign': sign,
        'api': 'mtop.taobao.pcdetail.data.get',
        'v': '1.0',
        'isSec': '0',
        'ecode': '0',
        'timeout': '10000',
        'ttid': '2022@taobao_litepc_9.17.0',
        'AntiFlood': 'true',
        'AntiCreep': 'true',
        'dataType': 'json',
        'valueType': 'string',
        'type': 'json',
        'data': data,
    }

    response = requests.get(
        'https://h5api.m.tmall.hk/h5/mtop.taobao.pcdetail.data.get/1.0/',
        params=params,
        cookies=cookies,
        headers=headers,
    )
    try:
        data_json = response.json()
        data = data_json['data']
        itemId = data['item']['itemId']
        title = data['item']['title']
        industryParamVO = data["plusViewVO"]["industryParamVO"]
        basicParamList = industryParamVO["basicParamList"]
        param = {}
        for basicParam in basicParamList:
            propertyName = basicParam['propertyName']
            valueName = basicParam['valueName']
            param[propertyName] = valueName
        if industryParamVO.get("enhanceParamList") != None:
            enhanceParamList = data["plusViewVO"]["industryParamVO"]["enhanceParamList"]
            for enhanceParam in enhanceParamList:
                propertyName = enhanceParam['propertyName']
                valueName = enhanceParam['valueName']
                param[propertyName] = valueName
        sku_list = []
        skuBase = data['skuBase']
        props = skuBase['props']
        for prop in props:
            values = prop['values']
            for value in values:
                name = value['name']
                vid = value['vid']
                sku_detail = {
                    'name': name,
                    'vid': vid,
                }
                sku_list.append(sku_detail)

        map = data["componentsVO"]["umpPriceLogVO"]["map"]
        # 修复数据
        fixed_json_str = fix_json(map)
        fixed_json = json.loads(fixed_json_str)
        map = fixed_json["componentsVO"]["umpPriceLogVO"]["map"]
        skus = data["skuBase"]["skus"]
        skuList = []
        for sku in skus:
            skuId = str(sku['skuId'])
            map_data = map[skuId]
            price1 = map_data['price1']
            propPath = sku['propPath']

            sku_data = {
                'skuId': skuId,
                'propPath': propPath,
                'price': price1,
            }
            skuList.append(sku_data)

        print(f"响应体：{data_json}")
        data = {
            "商品id": itemId,
            "商品名称": title,
            "商品属性": param,
            "sku参数1": sku_list,
            "sku参数2": skuList,
        }
        print(data)
    except Exception as e:
        print(e)
        print(data_json)
        print(f"共计爬取了{all_data}条数据")

headers = {
    "accept": "application/json",
    "accept-language": "zh-CN,zh;q=0.9",
    "cache-control": "no-cache",
    "content-type": "application/x-www-form-urlencoded",
    "origin": "https://myseller.taobao.com",
    "pragma": "no-cache",
    "priority": "u=1, i",
    "referer": "https://myseller.taobao.com/home.htm/SellManage/all?current=1&pageSize=20",
    "sec-ch-ua": "\"Google Chrome\";v=\"135\", \"Not-A.Brand\";v=\"8\", \"Chromium\";v=\"135\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36"
}

url = "https://h5api.m.taobao.com/h5/mtop.taobao.sell.pc.manage.async/1.0/"


token = cookies['_m_h5_tk'].split('_')[0]
pageNum = 1
all_data = 0
while True:
    t = int(time.time() * 1000)

    jsonBody = {
        "tab": "all",
        "pagination": {
            "current": pageNum,
            "pageSize": 20
        },
        "filtertab": "",
        "filter": {},
        "table": {}
    }
    data = {
        "url": "/taobao/manager/table.htm",
        "jsonBody": json.dumps(jsonBody),
    }
    sign = jsDrive1.call('getSign', t, token, data)
    print(sign)
    params = {
        "jsv": "2.6.1",
        "appKey": "12574478",
        "t": str(t),
        "sign": sign,
        "api": "mtop.taobao.sell.pc.manage.async",
        "v": "1.0",
        "ttid": "11320@taobao_WEB_9.9.99",
        "type": "originaljson",
        "dataType": "json"
    }
    data = {
        "data":json.dumps(data, ensure_ascii=False, separators=(',', ':'))
    }
    # data = {
    #     "data": "{\"url\":\"/taobao/manager/table.htm\",\"jsonBody\":\"{\\\"tab\\\":\\\"all\\\",\\\"pagination\\\":{\\\"current\\\":1,\\\"pageSize\\\":20},\\\"filtertab\\\":\\\"\\\",\\\"filter\\\":{},\\\"table\\\":{}}\"}"
    # }
    response = requests.post(url, headers=headers, cookies=cookies, params=params, data=data)
    response_json = response.json()
    result = response_json["data"]["result"]
    result_data = json.loads(result)
    print(result_data)

    total = result_data["data"]["pagination"]["total"]

    dataSource = result_data["data"]["table"]["dataSource"]
    for data in dataSource:
        all_data = all_data + 1
        text = data["itemDesc"]["desc"][0]["text"]
        price = data["managerPrice"]["currentPrice"]
        itemId = data["itemId"]
        print(f"---------------{text}, {price}, {itemId}---------------")
        getDetail(itemId)
    # break
    pageNum = pageNum + 1
    if all_data >= total:
        print(f"共计{all_data}条数据")
        break


