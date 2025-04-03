import json
from datetime import datetime

import execjs
import requests

with open('解码.js', 'r', encoding='utf-8') as f:
    js_code = f.read()
context = execjs.compile(js_code)

cookies = {
    "cna": "zImLH7vTTTMCAXFZ61Au6aUF",
    "xlly_s": "1",
    "_samesite_flag_": "true",
    "cookie2": "198b2c00c950956532e3e29b07b4a37f",
    "t": "9a14fee8ffa772917c3f3c47a09cacac",
    "_tb_token_": "8d33061bef73",
    "isg": "BExMGq2nR5s511NnzTDBMJv7Hap-hfAvtnetPqYNXveaMe07zpb2v2mK0TkJeSiH",
    "mtop_partitioned_detect": "1",
    "_m_h5_tk": "ced32190abcc7a253e23a5b2a9b6c0a7_1728364638496",
    "_m_h5_tk_enc": "b7542ce32c57edaa7936fb470001617c",
    "tfstk": "gKEKiBOZq1fHQiJw4Q_iranPaKBGnueU-WyXqbcHP5FTh-RnPkm3wUF3U705TDq868NALYfUqpzai-t3xwok2DorVsfcmiXUL0oW1PNXeXy_QY1D_z4dEJorV1vMVZjYLSifXnrSVOnsEvHIVvGSfOHoFQiSO4O65xGsN0NSNRisUYTBR3gCfOHr1biSVbbdwf9IZ3UrgvBhItmeV3ZtpV_gpfZLYTDKJHyK631bXvdSGJG9V3GnBgAQBJfp0RmUDSH0tGtLM8w4PVEJ1shzXRZQPRRdCmeTSr0LW6t-skcZukivFMwtvX3b25SPLSwTFr0TjtsqvDGQrDykH62TvW2UX8vW5Dn3WqEKciRIZP2Y2YEPaGFYF-zSWudd4Rq0D5ADijHkROB9zUuIQJeIleeUU7DxBjXd2U8r7OktiOB9zUuIQAhcpTLyzVWN."
}

headers = {
    'accept': 'application/json',
    'accept-language': 'zh-CN,zh;q=0.9',
    'content-type': 'application/x-www-form-urlencoded',
    # 'cookie': 'mtop_partitioned_detect=1; _m_h5_tk=34aeea48af5301660ce5ac5da8a1949f_1727695519967; _m_h5_tk_enc=20e08604721aeac8f0598663bb38ba87; cna=qVKBHwUnqioCAbcR51lbkJKJ; cookie2=1445a05e078fdcc8883df9a6649fe1cc; xlly_s=1; tfstk=geb-Z0D2--2ljAcq8vZDxn-lXtPcywCPqT5s-pvoAtBA11kkAaYlpDBlT9xQUUbdH66TaB2P-bSVI1glru8nJU8eRR2gmVNPae8QzBXdbYoX_BanALTCaAXJyPegSPf7VQ8hGRVEjBH6UBTBN3iShSdHtpTBVp1bMBOnFDg5dsNv3CASdpgScxOH1e9Cd3NvcBGu0JpjNp0dYEJClvz972gCkQKbm_pXmnNHN3hlZKgQCgA-Qd1WH_1WU25YksCueV5DzNB9sT4jyOCC_MtAJxw9LZCfPM1qeSTOMijM2ieSJKbk3h7WWXa5MUpJfwB487W1M6sMDZV_7ULWFMYPtfelMaBlaZCnOmTJriKOyFaZFpjc6wdd8JzAB61NAnQKeg8NSNBmIAv9t0NYMDoeKI5RNhi8XSAw-IpgwynEYnP2MdVYMDoeVIRvI7FKYD-4g',
    'origin': 'https://www.goofish.com',
    'priority': 'u=1, i',
    'referer': 'https://www.goofish.com/',
    'sec-ch-ua': '"Google Chrome";v="129", "Not=A?Brand";v="8", "Chromium";v="129"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-site',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36',
}

for i in range(20):
    data = {
        'data': '{"pageNumber":'+str(i)+',"keyword":"红米k30","fromFilter":false,"rowsPerPage":30,"sortValue":"","sortField":"","customDistance":"","gps":"","propValueStr":{},"customGps":""}',
    }
    time = int(datetime.now().timestamp() * 1000)

    cookie_string = "; ".join([f"{key}={value}" for key, value in cookies.items()])
    sign = context.call("get_sign", time, data.get('data'), cookie_string)

    params = {
        'jsv': '2.7.2',
        'appKey': '12574478',
        't': time,
        'sign': sign,
        'v': '1.0',
        'type': 'originaljson',
        'accountSite': 'xianyu',
        'dataType': 'json',
        'timeout': '20000',
        'AntiCreep': 'true',
        'AntiFlool': 'true',
        'api': 'mtop.taobao.idlemtopsearch.pc.search',
        'sessionOption': 'AutoLoginOnly',
        'spm_cnt': 'a21ybx.search.0.0',
        'spm_pre': 'a21ybx.home.searchInput.0',
    }
    context = execjs.compile(js_code)

    response = requests.post(
        'https://h5api.m.goofish.com/h5/mtop.taobao.idlemtopsearch.pc.search/1.0/',
        params=params,
        cookies=cookies,
        headers=headers,
        data=data,
    )
    if response.status_code == 200:
        print(response.text)
        results = []
        response_json = response.json()
        for item in response_json['data']['resultList']:
            element = {}
            item = item['data']
            element['id'] = item['id']
            element['categoryId'] = item['categoryId']
            element['imageUrls'] = item['imageUrls']
            element['price'] = item['price']
            element['title'] = item['title']
            results.append(element)
            with open(f'goofish{i}.txt', 'a') as f:
                f.write(json.dumps(element) + '\n')
            print(f'获取{element["title"]}成功')
    else :
        print(response.status_code)
        print(response.text)
