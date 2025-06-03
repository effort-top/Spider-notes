import requests
from lxml import etree

cookies = {
}

headers = {
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
    'Accept-Language': 'zh-CN,zh;q=0.9',
    'Connection': 'keep-alive',
    # 'Cookie': '__jsluid_s=4cb3029f2e5ec0ce40a8a4ac1a9cc280; __jsl_clearance_s=1744278053.818|0|WJTBA6mJzQK0PWdlp%2Bdztk1oRDw%3D; CURRENT_CITY_CODE=440300; _csrf=3tltqa89bjLEgoNm6bepAwrE6hTo2LEX; sajssdk_2015_cross_new_user=1; sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%221961f12ef502b-046eb8d0cc01fe-15313374-2073600-1961f12ef516c2%22%2C%22%24device_id%22%3A%221961f12ef502b-046eb8d0cc01fe-15313374-2073600-1961f12ef516c2%22%2C%22props%22%3A%7B%7D%7D; Hm_lvt_4f083817a81bcb8eed537963fc1bbf10=1744278057; HMACCOUNT=A3DB31F293D65717; Hm_lpvt_4f083817a81bcb8eed537963fc1bbf10=1744278205',
    'Referer': 'https://sz.ziroom.com/z/d23008679-p2-q1029069297885413377-a1029069297885413377/',
    'Sec-Fetch-Dest': 'document',
    'Sec-Fetch-Mode': 'navigate',
    'Sec-Fetch-Site': 'same-origin',
    'Sec-Fetch-User': '?1',
    'Upgrade-Insecure-Requests': '1',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.6261.95 Safari/537.36',
    'sec-ch-ua': '"Chromium";v="122", "Not(A:Brand";v="24", "Google Chrome";v="122"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
}
for page in range(1, 6):
    print(f"------------------------第{page}页--------------------")
    response = requests.get(
        f'https://sz.ziroom.com/z/d23008679-p{page}-q1029069297885413377-a1029069297885413377/',

        headers=headers,
    )
    html = response.text
    tree = etree.HTML(html)
    boxs = tree.xpath('//div[@class="Z_list-box"]/div')
    for box in boxs:
        try:
            title = box.xpath('./div[3]/h5/a/text()')[0]
            bzs = box.xpath('./div[3]/div[1]')
            bz_name = ''
            for bz in bzs:
                bz_name += bz.xpath('./div[1]/text()')[0].strip()
            print(title, bz_name)
        except Exception as e:
            pass

