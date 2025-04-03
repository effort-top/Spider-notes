import csv
import math
import multiprocessing
import os
import random
import threading
import asyncio
import traceback
import pandas as pd

import requests
import json
import re
import time
from multiprocessing import Manager, Process, Queue

from main_run.MysqlTaskManager import MySQLTaskManager
from config.logconfig import MyLogger

logger = MyLogger().get_logger()


headers = {
    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
    "accept-language": "zh-CN,zh;q=0.9",
    "cache-control": "max-age=0",
    "priority": "u=0, i",
    "sec-ch-prefers-color-scheme": "light",
    "sec-ch-ua": "\"Google Chrome\";v=\"131\", \"Chromium\";v=\"131\", \"Not_A Brand\";v=\"24\"",
    "sec-ch-ua-arch": "\"x86\"",
    "sec-ch-ua-bitness": "\"64\"",
    "sec-ch-ua-form-factors": "\"Desktop\"",
    "sec-ch-ua-full-version": "\"131.0.6778.86\"",
    "sec-ch-ua-full-version-list": "\"Google Chrome\";v=\"131.0.6778.86\", \"Chromium\";v=\"131.0.6778.86\", \"Not_A Brand\";v=\"24.0.0.0\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-model": "\"\"",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-ch-ua-platform-version": "\"15.0.0\"",
    "sec-ch-ua-wow64": "?0",
    "sec-fetch-dest": "document",
    "sec-fetch-mode": "navigate",
    "sec-fetch-site": "same-origin",
    "sec-fetch-user": "?1",
    "service-worker-navigation-preload": "true",
    "upgrade-insecure-requests": "1",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",
    "x-browser-channel": "stable",
    "x-browser-copyright": "Copyright 2024 Google LLC. All rights reserved.",
    "x-browser-validation": "Nbt54E7jcg8lQ4EExJrU2ugNG6o=",
    "x-browser-year": "2024",
    "x-client-data": "CIa2yQEIorbJAQipncoBCLjZygEIlqHLAQj/ossBCIWgzQEI59DNAQiyns4BCP6lzgEI+cnOAQjnzM4BCMbNzgEIx8/OAQj0z84BCK3QzgEIstPOARj0yc0B"
}
cookies = {
    "SEARCH_SAMESITE": "CgQIz5wB",
    "SID": "g.a000qghiKeCSGVNmmkV5IQ8rzyRXPJHO16yozdGLJdgQ2tJmnLs0lvkEjlr50I7Q-4HS2nt_HwACgYKAckSARMSFQHGX2MiGiZDBAxyYAnQ1oQ3Gx3c5xoVAUF8yKpQ9_NkMtDSSCt_Kak6vVvD0076",
    "__Secure-1PSID": "g.a000qghiKeCSGVNmmkV5IQ8rzyRXPJHO16yozdGLJdgQ2tJmnLs0cO22LHvfdUrpCj3ingRnjwACgYKAewSARMSFQHGX2MikvkY7oRW-KiR-N7CmhlSKhoVAUF8yKpjWtjqqenQhL1R8k5O6eUm0076",
    "__Secure-3PSID": "g.a000qghiKeCSGVNmmkV5IQ8rzyRXPJHO16yozdGLJdgQ2tJmnLs0x7NCpv8rjiXKAC0zj8rAlgACgYKARwSARMSFQHGX2Milrg3i-PD20jLb6K8Rp9caBoVAUF8yKphjjjtHP4DSc8K8tKjdcQ40076",
    "HSID": "AwGZ-aRMQ9VgYlVXA",
    "SSID": "A87H1F-Dx5zcbnrun",
    "APISID": "qDbTdrUWYhfCXAbd/AAykPJ_dUHvshGn5f",
    "SAPISID": "pfxAS8xpyLcZ05Fi/A8OUKSdZ4-IZ1ag9g",
    "__Secure-1PAPISID": "pfxAS8xpyLcZ05Fi/A8OUKSdZ4-IZ1ag9g",
    "__Secure-3PAPISID": "pfxAS8xpyLcZ05Fi/A8OUKSdZ4-IZ1ag9g",
    "OTZ": "7832755_24_24__24_",
    "AEC": "AZ6Zc-U0WrVndjPiQfTtjoASUCPj1CGR0aqKA9UPW1BUJ8SpJibEy5-Rp9Q",
    "NID": "519=VU0vf0bwtoxl_DvZ61FffHpAI9WMrRlbb4dYoF2bgK6gaF-Ni81XLbVxmldc35Ow917Kl6MUvktRyafutg6gkTEugUV_Ijja2aXeM08S6TJAcHNpVmbPKesnvQ_fXXGe3LrbK-yGHnLD-M05NmujaDhsH-qP8uZtLItivBfKSTw9B41zGvJq5IuF6C4mP1BSjO3w9sS_IenUZ71BzTbvvz5dwDutdBm_ZC_uzEj02tkAIguxTtFqFxsXmG_e8wqRZa03B_5jWoTUgLZeK2XFpZgjZzyvUmleCpc893revMoE93NHe-7PtGA_AwyfHt6Y16EijcWVSKhN6Ey93K9iyk4syAq0RVHTPTlSf8KzT5lKh2LRk9T5JCb7KOsY7YgnN8n1nfsHaYaZAl2-gGH7e2ME8YSl5QDlM0ePi0D9nx45C59_gmFbuFxSx5sz4Fw7VZSS2YoVHkFeWY4fJXvq6KWjTpUvG1RB6L1YwaHeYIXB7f44EPsw7_2mGWYwoTrf5u6SWTDFj7207_HtdGMxkRv8N9z1bw1CiAwC6EpTE3KElC8OsMgT_iuG9xr8iovWNROUufGuxojfD_Xsl5gAoC6GzzYTOGRArGRoM-lKKMuGVpOMEMc5gzBu9pTpRpqZARu9dZG8suJQbTRUZwR9NY6OjWpG5K3TJrGUY1oMfOhA3SqPnUEYMj1NTLx9da6iRs60k6zNDQtjmsviiyXx5hd1fVTRj3BoY2kq7cjayVuzO8PU_uQKWa8SzFaLawM4x9hTmkmmKSatS7oTjLq8",
    "__Secure-1PSIDTS": "sidts-CjIBQT4rX3JNZ7kby5gVjq4WRWCDbKZEzQd9P0WRpl_Yy0epxbW0ceTkiDKfu4g2wA8ocxAA",
    "__Secure-3PSIDTS": "sidts-CjIBQT4rX3JNZ7kby5gVjq4WRWCDbKZEzQd9P0WRpl_Yy0epxbW0ceTkiDKfu4g2wA8ocxAA",
    "UULE": "a+cm9sZTogMQpwcm9kdWNlcjogMTIKdGltZXN0YW1wOiAxNzMyNjgwODQyODU2MDAwCmxhdGxuZyB7CiAgbGF0aXR1ZGVfZTc6IDM1NjA5MTk3MwogIGxvbmdpdHVkZV9lNzogMTM5NzMwMzM2NAp9CnJhZGl1czogMjY3ODQxMS4zMzQzODc5Njk3CnByb3ZlbmFuY2U6IDYK",
    "SIDCC": "AKEyXzWBjtmQCRSIv_Rc0FWQJLevqyC2ZFqOEpVr1PGD9CDGLdLEBW5DdJjw7WmB-VLg3CNC84g",
    "__Secure-1PSIDCC": "AKEyXzXGn-gEVkxDkx4lO9RUbENtKdbWjBeu-pQzBvJ9iOoQOivdK4tvd0xYR0DxT5f38FRWnQ",
    "__Secure-3PSIDCC": "AKEyXzXKduvO6pRi81ddR726rfSDb0rIhTLOayK-sng3x0kQnhWgJOtFF3vx8hCelmK6z3bkfAk"
}

def match_pattern(html_content):
    pattern = r'window.APP_INITIALIZATION_STATE=(.*);window.APP_FLAGS'
    match = re.search(pattern, html_content)
    return match.group(1) if match else None


def unique_none(data):
    return [None] + [item for item in data if item is not None]


# 解析detail数据
def parse_detail_new(data):
    tmp_row = {}
    # 提取 JSON 数据
    data = match_pattern(data)
    tmp_row['yssj'] = data
    data = json.loads(data)
    data2 = unique_none(data[3])[2]

    tmp = data2.split("\n")
    data2 = tmp[1]
    data2 = json.loads(data2)
    data = data2

    row3 = data[6]

    tmp_row['title'] = row3[11]
    # 处理pics标签
    if len(row3) > 171 and row3[171] and row3[171][0]:
        pics = row3[171][0]
        pics_list = []
        for pic in pics:
            if pic[3] and 6 < len(pic[3][0]):
                pics_row = {
                    'type': pic[2],
                    'img': pic[3][0][6][0] if pic[3][0] is not None else None
                }
                pics_list.append(pics_row)
        # print(pics_list)
        tmp_row['pics'] = pics_list
    else:
        tmp_row['pics'] = []

    # 替换 'original_title'
    if row3[101]:
        tmp_row['original_title'] = row3[101]
    else:
        tmp_row['original_title'] = ''

    # 替换 'display_link' and 'link'
    if row3[7]:
        tmp_row['display_link'] = row3[7][1]
        tmp_row['link'] = row3[7][0]
    else:
        tmp_row['display_link'] = ''
        tmp_row['link'] = ''

    # 替换 'phone'
    if row3[178] and row3[178][0] and row3[178][0] is not None:
        tmp_row['phone'] = row3[178][0][3]
    else:
        tmp_row['phone'] = ''

    # 替换 'open_hours'
    if row3[203] and row3[203][0]:
        open_hours = {}
        for _ho in row3[203][0]:
            open_hours[_ho[0]] = _ho[3][0][0]
        tmp_row['open_hours'] = open_hours
    else:
        tmp_row['open_hours'] = ''

    # 替换 'category'
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
    else:
        tmp_row['category'] = ''

    # 替换 'tags'
    if row3[100]:
        tags = []
        for ttt in row3[100][1]:
            _ttt = {
                'group_id': ttt[0],
                'group_title': ttt[1]
            }

            for ttt1 in ttt[2]:
                tag = {
                    'key_id': ttt1[0],
                    'key_title': ttt1[1],
                    'value': ttt1[2][2][0] if ttt1[2][2] is not None and ttt1[2][2][0] else None,
                    'value_title': ttt1[2][2][3] if ttt1[2][2] is not None else None,
                    'value_title_short': ttt1[2][2][1] if ttt1[2][2] is not None else None
                }
                tags.append(tag)
        tmp_row['tags'] = tags
    else:
        tmp_row['tags'] = ''

    # 替换 'rating'
    if row3[4] and row3[4] is not None and row3[4][7]:
        tmp_row['rating'] = row3[4][7]
    else:
        tmp_row['rating'] = 0.0

    # 替换 'reviews_cnt'
    if row3[4] and row3[4] is not None and row3[4][8]:
        tmp_row['reviews_cnt'] = row3[4][8]
    else:
        tmp_row['reviews_cnt'] = 0

    # 替换 'latitude' and 'longitude'
    tmp_row['latitude'] = row3[9][2] if row3[9] else ''
    tmp_row['longitude'] = row3[9][3] if row3[9] else ''

    # 替换 'summary'
    if row3[32] and row3[32] is not None and row3[32][0] is not None and row3[32][0][1]:
        tmp_row['summary'] = row3[32][0][1]
    else:
        tmp_row['summary'] = ''

    # 替换 'description'
    if row3[32] and row3[32] is not None and row3[32][1] is not None and row3[32][1][1]:
        tmp_row['description'] = row3[32][1][1]
    else:
        tmp_row['description'] = ''

    # 替换 'price'
    if row3[4] and row3[4] is not None and row3[4][2]:
        tmp_row['price'] = row3[4][2]
    else:
        tmp_row['price'] = ''

    # 替换 other fields
    tmp_row['fid'] = row3[10]
    tmp_row['map_id_encoded'] = row3[78]
    tmp_row['map_id'] = row3[10]
    tmp_row['map_link'] = f'https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s{tmp_row["map_id"]}'

    # 替换 'original_image'
    if row3[72] and row3[72] is not None and row3[72][0] is not None and row3[72][0][1] is not None and row3[72][0][1][
        6] is not None:
        tmp_row['original_image'] = row3[72][0][1][6][0]
    else:
        tmp_row['original_image'] = ''

    # 替换 'image' and 'image_url'
    if row3[37] and row3[37] is not None and row3[37][0] is not None and row3[37][0][0] is not None:
        tmp_row['image'] = row3[37][0][0][6][0]
        tmp_row['image_url'] = row3[37][0][0][6][0]
    else:
        tmp_row['image'] = ''
        tmp_row['image_url'] = ''

    # 替换 'thumbnail'
    if row3[72] and row3[72] is not None and row3[72][0] is not None and row3[72][0][0] is not None:
        tmp_row['thumbnail'] = row3[72][0][0][6][0]
    else:
        tmp_row['thumbnail'] = ''

    tmp_row['icon'] = row3[157] if row3[157] else ''

    # 替换 'temporarily_closed'
    if row3[160] and row3[160][0]:
        tmp_row['temporarily_closed'] = 'true'
    else:
        tmp_row['temporarily_closed'] = ''

    # 替换 'permanently_closed'
    if row3[88] and row3[88][0] == 'CLOSED':
        tmp_row['permanently_closed'] = 'true'
    else:
        tmp_row['permanently_closed'] = ''

    # 替换 'claimed'
    if row3[49] and row3[49] is not None and row3[49][1]:
        tmp_row['claimed'] = False
    else:
        tmp_row['claimed'] = True

    # 替换 'area'
    tmp_row['area'] = row3[183][1] if row3[183] else ''

    # 替换 'plus_code'
    if row3[183] and len(row3[183]) > 2 and len(row3[183][2]) > 2 and row3[183][2][2] and row3[183][2][2][0]:
        tmp_row['plus_code'] = row3[183][2][2][0]
    else:
        tmp_row['plus_code'] = ''

    tmp_row['address'] = row3[39] if row3[39] else ''
    tmp_row['r_city'] = row3[166] if row3[166] else ''

    # Print 'row3[51][0]' items
    if row3[51] and row3[51] is not None:
        if row3[51][0] is not None:
            for ttt in row3[51][0]:
                # print(ttt[6])
                pass
    return tmp_row


# 构成mysql内数据项
def get_mysql_data_element(result, task, mysql_manager):
    try:
        final_result = []
        result = {'organic': [result]}
        # 模拟数据，PHP中的$category_ids，$result['organic']和其他变量在这里是示例
        category_ids = [
            'american_restaurant', 'bakery', 'bar', 'barbecue_restaurant', 'brazilian_restaurant',
            'breakfast_restaurant', 'brunch_restaurant', 'cafe', 'chinese_restaurant', 'coffee_shop',
            'fast_food_restaurant', 'french_restaurant', 'greek_restaurant', 'hamburger_restaurant',
            'ice_cream_shop', 'indian_restaurant', 'indonesian_restaurant', 'italian_restaurant',
            'japanese_restaurant', 'korean_restaurant', 'lebanese_restaurant', 'meal_delivery',
            'meal_takeaway', 'mediterranean_restaurant', 'mexican_restaurant', 'middle_eastern_restaurant',
            'pizza_restaurant', 'ramen_restaurant', 'restaurant', 'sandwich_shop', 'seafood_restaurant',
            'spanish_restaurant', 'steak_house', 'sushi_restaurant', 'thai_restaurant', 'turkish_restaurant',
            'vegan_restaurant', 'vegetarian_restaurant', 'vietnamese_restaurant', 'chicken_shop', 'diner',
            'juice_shop', 'pancake_house', 'pub', 'cocktail_bar', 'pizzatakeaway', 'snack_bar', 'asador',
            'fried_chicken_takeaway', 'coffee_store', 'wine_bar', 'fish_and_chips_takeaway', 'food_producer',
            'food_court', 'dessert_shop', 'food_and_drink', 'bistro', 'tea_house', 'noodle_shop', 'beer_garden',
            'pie_shop', 'donut_shop', 'sushi_takeaway', 'bubble_tea_store', 'bar_pmu', 'tapas_bar', 'food_bank',
            'bar_and_grill', 'beer_distributor', 'beer_hall', 'beer_store', 'belt_shop', 'butcher_shop',
            'butcher_shop_deli', 'cafeteria', 'cake_shop', 'candy_store', 'catering_food_and_drink_supplies',
            'charcuterie', 'cheese_manufacturer', 'cheese_shop', 'childrens_cafe', 'chinese_takeaway',
            'chinese_tea_house', 'chocolate_artisan', 'chocolate_cafe', 'chocolate_factory', 'chocolate_shop',
            'confectionery', 'confectionery_wholesaler', 'cookie_shop', 'cupcake_shop', 'cured_ham_bar',
            'cured_ham_store', 'cured_ham_warehouse', 'dairy', 'dairy_farm', 'dairy_store', 'dairy_supplier',
            'deli', 'dog_cafe', 'eatery', 'food', 'food_and_beverage_consultant', 'food_and_beverage_exporter',
            'food_broker', 'food_delivery', 'food_machinery_supplier', 'food_manufacturer', 'food_manufacturing_supply',
            'food_processing_company', 'food_processing_equipment', 'food_products_supplier', 'food_service',
            'food_store', 'frozen_dessert_supplier', 'frozen_food_manufacturer', 'frozen_food_store',
            'frozen_yogurt_shop',
            'ham_shop', 'hong_kong_style_cafe', 'hot_dog_stand', 'indian_sweets_shop', 'japanese_cheap_sweets_shop',
            'japanese_confectionery_shop', 'japanese_delicatessen', 'japanese_grocery_store', 'japanese_steakhouse',
            'kebab_shop', 'organic_food_store', 'organic_store', 'pasta_shop', 'pastry_shop', 'traditional_teahouse',
            'udon_noodle_shop'
        ]

        # 获取距离的辅助方法
        def get_distance(lat1, lon1, lat2, lon2):
            # 这里可以加入实际的距离计算公式，暂时返回一个假值
            # 地球半径（单位：公里）
            R = 6371.0

            # 将经纬度从度数转换为弧度
            lat1_rad = math.radians(float(lat1))
            lon1_rad = math.radians(float(lon1))
            lat2_rad = math.radians(lat2)
            lon2_rad = math.radians(lon2)

            # 计算差值
            delta_lat = lat2_rad - lat1_rad
            delta_lon = lon2_rad - lon1_rad

            # Haversine公式
            a = math.sin(delta_lat / 2) ** 2 + math.cos(lat1_rad) * math.cos(lat2_rad) * math.sin(delta_lon / 2) ** 2
            c = 2 * math.atan2(math.sqrt(a), math.sqrt(1 - a))

            # 计算距离
            distance = R * c

            return distance

        # 处理数据
        for _tmp in result['organic']:

            # categorys列出category的title
            if _tmp.get('category') is not None:
                _tmp['categorys'] = [category['title'] for category in _tmp['category']]
            else:
                _tmp['categorys'] = []
            # claimed处理
            _tmp['claimed'] = 'true' if _tmp['claimed'] else 'false'
            # 处理tags
            _tmp['services'] = []
            if _tmp.get('tags'):
                for tag in _tmp['tags']:
                    if tag.get('group_id') == 'service_options':
                        _tmp['services'].append(tag['value_title_short'])

            pics_bak = _tmp.get('pics')

            # 处理多余字段(此处删除了pics)
            ex_fields = {}
            for key, value in list(_tmp.items()):
                if key not in ['title', 'address', 'phone', 'open_hours', 'category', 'categorys', 'tags', 'services',
                               'rating', 'reviews_cnt', 'latitude', 'longitude', 'claimed', 'fid', 'map_id',
                               'map_id_encoded', 'map_link', 'original_image', 'image', 'thumbnail', 'image_url',
                               'link', 'ava',
                               'display_link', 'icon', 'rank', 'addtime', 'yssj']:
                    ex_fields[key] = value
                    del _tmp[key]
                elif isinstance(value, list):
                    _tmp[key] = json.dumps(value, ensure_ascii=False)

            # 将ex字段存入ex字段并转换为JSON
            if ex_fields:
                _tmp['ex'] = json.dumps(ex_fields, ensure_ascii=False)

            # 补充其他信息
            _tmp['open_hours'] = json.dumps(_tmp['open_hours'])
            _tmp['id'] = task['id']
            _tmp['keyword'] = task['keyword']
            _tmp['city'] = task['city']
            _tmp['city_en'] = task['city_en']
            _tmp['cityid'] = task['cityid']
            _tmp['km'] = task['km']
            sql_data = mysql_manager.get_data_by_id(task['id'])
            latitude = sql_data.get('lat')
            longitude = sql_data.get('lon')
            _tmp['distance'] = get_distance(latitude, longitude, _tmp['latitude'], _tmp['longitude'])
            # 将被删除的图片url以及细节重新填充回字典中
            _tmp['pics'] = json.dumps(pics_bak)
            _tmp['ava'] = 0
            # 分类判断
            if _tmp.get('category'):
                category = json.loads(_tmp['category'])
                ids = [c['id'] for c in category]

                # 求交集
                tmp = list(set(ids) & set(category_ids))
                tag = 0
                if not tmp:
                    # 判断是否包含restaurant类型的id
                    for _id in ids:
                        if 'restaurant' in _id:
                            tag = 1
                            _tmp['ava'] = 1
                            break
                else:
                    _tmp['ava'] = 1

            final_result.append(_tmp)
        return final_result[0]
    except Exception as e:
        traceback.print_exc()
        logger.warning(f"任务 | ID: {task['id']}, Keyword: {task['keyword']}, FID: {task['fid']} 出错")
        logger.error(e)


params = {
    'authuser': '0',
    'hl': 'zh-CN',
    'entry': 'ttu',
    'g_ep': 'EgoyMDI0MTExMS4wIKXMDSoASAFQAw==',
}

# 定义结果保存的目录
result_dir = "fid_result"
os.makedirs(result_dir, exist_ok=True)  # 确保目录存在


def worker(task_queue, error_count,completed_count):
    while True:
        task = task_queue.get()
        if task is None:  # 停止信号
            break
        try_number = task['try_number']
        if try_number > 3:
            logger.warning(
                f"当前任务 |  FID: {task['fid']} | 重试次数超过3次，不再重试")
            with error_count.get_lock():  # 确保计数器的线程安全性
                error_count.value += 1
            task_queue.task_done()
            continue
        logger.info(
            f"当前任务 | FID: {task['fid']} | 重试次数: {try_number} | 任务队列长度：{task_queue.qsize()}")
        try:
            url = f'https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s{task["fid"]}'
            response = requests.get(
                url=url,
                params=params,
                headers=headers,
                cookies=cookies,
                timeout=10  # 单位：秒
            )

            if response.status_code == 200:
                html_content = response.text
                # 解析 HTML 数据
                extracted_data = parse_detail_new(html_content)
                if extracted_data is None:
                    logger.warning(
                        f"解析结果为空 | 状态码: {response.status_code} | FID: {task['fid']}")
                    task['try_number'] += 1  # 增加重试次数
                    task_queue.put(task)  # 将任务重新放回队列
                    continue

                # 将解析结果保存为 JSON 文件
                fid_file = task['fid'].replace(':','')
                fid_filename = os.path.join(result_dir, f"{fid_file}.json")
                try:
                    with open(fid_filename, 'w', encoding='utf-8') as json_file:
                        json.dump(extracted_data, json_file, ensure_ascii=False, indent=4)
                    with completed_count.get_lock():  # 确保计数器的线程安全性
                        completed_count.value += 1

                    logger.success(f"成功保存解析结果到 {fid_filename} | 已完成的任务量：{completed_count.value}")
                except Exception as e:
                    logger.error(f"保存结果到 {fid_filename} 时出错: {e}")

            else:
                logger.error(f"请求失败，状态码: {response.status_code}，URL: {url}")
                task['try_number'] += 1  # 增加重试次数
                task_queue.put(task)  # 将任务重新放回队列


        except Exception as e:
            # traceback.print_exc()
            logger.error(f"任务处理出错，错误: {e}")
            task['try_number'] += 1  # 增加重试次数
            if task['try_number'] <= 3:
                task_queue.put(task)  # 将任务重新放回队列
            else:
                logger.warning(
                    f"当前任务 | FID: {task['fid']} | 重试次数超过3次，不再重试")
                with error_count.get_lock():  # 确保计数器的线程安全性
                    error_count.value += 1
        finally:
            task_queue.task_done()

# 监控进度的函数
def monitor_progress(error_count, completed_count,interval=60):  # 默认每5分钟（300秒）输出一次
    start_time = time.time()
    while True:
        time.sleep(interval)
        elapsed_time = time.time() - start_time
        completed = completed_count.value
        error = error_count.value
        logger.success(f"！！！ 执行时间: {elapsed_time // 60:.0f} minutes, 完成任务量: {completed}，出错任务量：{error} !!!")


def task_maker(task_queue):
    """
    动态获取任务并加入队列的任务生成器。
    """
    added_tasks = set()  # 用于跟踪已添加任务的唯一标识
    try:
        csv_file_path = r"C:\Users\user\Desktop\project\Google_Maps\fid.csv"
        df = pd.read_csv(csv_file_path, encoding='utf-8')
        # 检查 fid 字段是否存在
        if "fid" not in df.columns:
            logger.error(f"CSV 文件中缺少 'fid' 字段: {csv_file_path}")
            return
        # 将 fid 转化为任务列表
        tasks = [{"fid": str(row["fid"]), "try_number": 0} for _, row in df.iterrows()]

        # 随机选取任务并加入队列
        for task in tasks:
            task_id = task["fid"]  # 使用 fid 作为唯一标识
            if task_id not in added_tasks:
                task_queue.put(task)  # 将任务放入队列
                added_tasks.add(task_id)  # 记录已添加任务的唯一标识

    except Exception as e:
        logger.error(f"任务生成器出错，错误: {e}")


def main():
    """
    主函数，初始化消息队列和任务处理。
    """
    # 全局计数器
    error_count = multiprocessing.Value('i', 0)  # i 表示整数类型
    # 共享的计数器，记录已完成的任务数量
    completed_count = multiprocessing.Value('i', 0)
    manager = multiprocessing.Manager()
    task_queue = manager.Queue()

    # 启动任务生成器线程
    task_maker_thread = threading.Thread(target=task_maker, args=(task_queue,))
    task_maker_thread.start()

    # 等待任务生成器线程完成其初始任务
    task_maker_thread.join()  # 确保任务生成器完成初始任务
    logger.info("任务生成完成")
    # 启动 worker 进程
    num_processes = multiprocessing.cpu_count()

    p2 = multiprocessing.Process(target=monitor_progress, args=(error_count,completed_count))

    processes = []
    p2.start()
    for _ in range(2):
        p = multiprocessing.Process(target=worker, args=(task_queue, error_count, completed_count))
        processes.append(p)
        p.start()

    # 等待所有进程完成
    for p in processes:
        p.join()
    p2.terminate()
    logger.info(f"总错误次数: {error_count.value}")


if __name__ == "__main__":
    main()
