import re
from urllib.parse import unquote

import requests
import random
import json
import numpy as np
import math
agents = [
    'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.101 Safari/537.36',
    'Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US) AppleWebKit/532.5 (KHTML, like Gecko) Chrome/4.0.249.0 Safari/532.5',
    'Mozilla/5.0 (Windows; U; Windows NT 5.2; en-US) AppleWebKit/532.9 (KHTML, like Gecko) Chrome/5.0.310.0 Safari/532.9',
    'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US) AppleWebKit/534.7 (KHTML, like Gecko) Chrome/7.0.514.0 Safari/534.7',
    'Mozilla/5.0 (Windows; U; Windows NT 6.0; en-US) AppleWebKit/534.14 (KHTML, like Gecko) Chrome/9.0.601.0 Safari/534.14',
    'Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US) AppleWebKit/534.14 (KHTML, like Gecko) Chrome/10.0.601.0 Safari/534.14',
    'Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US) AppleWebKit/534.20 (KHTML, like Gecko) Chrome/11.0.672.2 Safari/534.20", "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/534.27 (KHTML, like Gecko) Chrome/12.0.712.0 Safari/534.27',
    'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/535.1 (KHTML, like Gecko) Chrome/13.0.782.24 Safari/535.1']
google_country_dict = {'saudi arabia': 'Saudi Arabia'}
country_suffix_dict = {'sa': 'Saudi Arabia'}

d3 = 25.257094
d2 = 45.87672


def parse_detail_from_html(data, tag=1):
    if not tag:
        # 提取 JSON 数据
        match = re.search(r'APP_INITIALIZATION_STATE = (.*);$', data)
        if match:
            data = match.group(1)
        data = json.loads(data)
        data2 = data[3][2]
    else:
        data = json.loads((data.replace('/*""*/', '')))
        data2 = data['d']

    # 解析数据
    tmp = data2.split("\n")
    # print(tmp)

    data2 = tmp[1].replace('/*""*/', '')
    data2 = json.loads(data2)
    data_list = data2[0][1]
    datas = []

    if not data_list:
        return False

    for k, row2 in enumerate(data_list):
        if len(row2) <= 14:
            continue

        row3 = row2[14]
        if row3 is None:
            return None
        # print(row3)
        tmp_row = {}

        # 标题
        tmp_row['title'] = row3[11]

        # 检查并提取数据
        if row3[171] is not None:
            if row3[171][0][3]:
                # print(row3[171][0][3])
                return

        if row3[101]:
            tmp_row['original_title'] = row3[101]

        if row3[7]:
            tmp_row['display_link'] = row3[7][1]
            tmp_row['link'] = row3[7][0]

        if row3[178]:
            tmp_row['phone'] = row3[178][0][3]

        if row3[203] and row3[203][0]:
            open_hours = {}
            for _ho in row3[203][0]:
                open_hours[_ho[0]] = _ho[3][0][0]
            tmp_row['open_hours'] = open_hours

        if row3[76]:
            categorys = []
            for ck, cat in enumerate(row3[76]):
                _cat = {
                    'id': cat[0],
                    'title': row3[13][ck],
                    'title_short': cat[1] if len(cat) > 1 else None
                }
                categorys.append(_cat)
            tmp_row['category'] = categorys

        if row3[100]:
            tags = []
            for ttt in row3[100][1]:
                _ttt = {
                    'group_id': ttt[0],
                    'group_title': ttt[1]
                }
                for ttt1 in ttt[2]:
                    tag_data = {
                        'key_id': ttt1[0],
                        'key_title': ttt1[1],
                        'value': ttt1[2][2][0] if ttt1[2][2] is not None else None,
                        'value_title': ttt1[2][2][3] if ttt1[2][2] is not None else None,
                        'value_title_short': ttt1[2][2][1] if ttt1[2][2] is not None else None
                    }
                    _ttt.update(tag_data)
                    tags.append(_ttt)
                tmp_row['tags'] = tags
        if row3[4] is not None:
            if row3[4][7]:
                tmp_row['rating'] = row3[4][7]

            if row3[4][8]:
                tmp_row['reviews_cnt'] = row3[4][8]

            if row3[4][2]:
                tmp_row['price'] = row3[4][2]

        tmp_row['latitude'] = row3[9][2]
        tmp_row['longitude'] = row3[9][3]

        if row3[32] is not None:
            if row3[32][0][1]:
                tmp_row['summary'] = row3[32][0][1]

            if row3[32][1][1]:
                tmp_row['description'] = row3[32][1][1]

        tmp_row['fid'] = row3[10]
        tmp_row['map_id_encoded'] = row3[78]
        tmp_row['map_id'] = row3[10]
        tmp_row['map_link'] = f"https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s{tmp_row['map_id']}"

        if row3[72] is not None:
            if row3[72][0][1][6][0]:
                tmp_row['original_image'] = row3[72][0][1][6][0]

            if row3[37][0]:
                if row3[37][0][0][6][0]:
                    tmp_row['image'] = row3[37][0][0][6][0]
                    tmp_row['image_url'] = row3[37][0][0][6][0]

            if row3[72][0][0][6][0]:
                tmp_row['thumbnail'] = row3[72][0][0][6][0]

        tmp_row['icon'] = row3[157]

        if row3[160] is not None:
            if row3[160][0]:
                tmp_row['temporarily_closed'] = 'true'

        if row3[88][0] == 'CLOSED':
            tmp_row['permanently_closed'] = 'true'

        if row3[49] is not None:
            tmp_row['claimed'] = False if row3[49][1] else True
        else:
            tmp_row['claimed'] = True
        tmp_row['area'] = row3[183][1]

        if len(row3[183]) > 2:
            if row3[183][2][2][0]:
                tmp_row['plus_code'] = row3[183][2][2][0]

        tmp_row['address'] = row3[39]
        tmp_row['r_city'] = row3[166]
        tmp_row['rank'] = k

        # print(tmp_row)

        # Optional: output data for debugging
        if row3[51] is not None:
            for ttt in row3[51][0]:
                print(ttt[6][0])
        datas.append(tmp_row)

    return data

url = 'https://www.google.com/search?tbm=map&authuser=0&hl=zh-CN&gl=sa&pb=!4m12!1m3!1d{}!2d{}!3d{}'
page = 0
all_result = []
while True:
    pb = '!2m3!1f0!2f0!3f0!3m2!1i784!2i644!4f13.1!7i20{}!10b1!12m8!1m1!18b1!2m3!5m1!6e2!20e3!10b1!16b1!19m4!2m3!1i360!2i120!4i8!20m57!2m2!1i203!2i100!3m2!2i4!5b1!6m6!1m2!1i86!2i86!1m2!1i408!2i240!7m42!1m3!1e1!2b0!3e3!1m3!1e2!2b1!3e2!1m3!1e2!2b0!3e3!1m3!1e3!2b0!3e3!1m3!1e8!2b0!3e3!1m3!1e3!2b1!3e2!1m3!1e9!2b1!3e2!1m3!1e10!2b0!3e3!1m3!1e10!2b1!3e2!1m3!1e10!2b0!3e4!2b1!4b1!9b0!22m5!1s5mKzXrHAJNSXr7wP5u-akAQ!4m1!2i5600!7e81!12e30!24m46!1m12!13m6!2b1!3b1!4b1!6i1!8b1!9b1!18m4!3b1!4b1!5b1!6b1!2b1!5m5!2b1!3b1!5b1!6b1!7b1!10m1!8e3!14m1!3b1!17b1!20m2!1e3!1e6!24b1!25b1!26b1!30m1!2b1!36b1!43b1!52b1!55b1!56m2!1b1!3b1!65m5!3m4!1m3!1m2!1i224!2i298!26m4!2m3!1i80!2i92!4i8!30m28!1m6!1m2!1i0!2i0!2m2!1i458!2i644!1m6!1m2!1i734!2i0!2m2!1i784!2i644!1m6!1m2!1i0!2i0!2m2!1i784!2i20!1m6!1m2!1i0!2i624!2m2!1i784!2i644!31b1!34m13!2b1!3b1!4b1!6b1!8m3!1b1!3b1!4b1!9b1!12b1!14b1!20b1!23b1!37m1!1e81!42b1!46m1!1e2!47m0!49m1!3b1!50m13!1m8!3m6!1u17!2m4!1m2!17m1!1e2!2z6Led56a7!4BIAE!2e2!3m2!1b1!3b0!59BQ2dBd0Fn!65m0&q=restaurant&tch=1&ech={}&psi=5mKzXrHAJNSXr7wP5u-akAQ.1588814569168.1'
    page_id = '!8i%d' % page
    headers = {'User-Agent': random.choice(agents)}
    response = requests.get(url.format(400000, d2, d3) + pb.format(page_id,page/20 +1), headers=headers)
    result = parse_detail_from_html(response.text)

    print(result)
    if result is not None:
        page += 20
    else:
        break
    all_result += result

print(len(all_result))
# https://www.google.com/maps/search/restaurant/@25.2570936,45.8689952,15z/data=!3m1!4b1!4m6!2m5!3m4!2s25.2571,+45.8767!4m2!1d45.87672!2d25.257094?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D
