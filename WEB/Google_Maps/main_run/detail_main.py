import math
import random
import threading
import asyncio
import traceback

import aiohttp
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
    "accept-language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
    "cache-control": "max-age=0",
    "priority": "u=0, i",
    "referer": "https://accounts.google.com/",
    "sec-ch-prefers-reduced-motion": "no-preference",
    "sec-ch-ua": "\"Chromium\";v=\"131\", \"Not_A Brand\";v=\"24\", \"Google Chrome\";v=\"131\"",
    "sec-ch-ua-arch": "\"x86\"",
    "sec-ch-ua-bitness": "\"64\"",
    "sec-ch-ua-full-version-list": "\"Chromium\";v=\"131.0.6778.86\", \"Not_A Brand\";v=\"24.0.0.0\", \"Google Chrome\";v=\"131.0.6778.86\"",
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
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36"
}
cookies = {
    "SEARCH_SAMESITE": "CgQI0JwB",
    "AEC": "AZ6Zc-VUhw7zu9LTW9aNMIfZ7SVw71Y5gpvFLO9DNBFNsDiPSvVjSCei0hU",
    "sensorsdata2015jssdkcross": "%7B%22distinct_id%22%3A%221934dfacf20d9b-07035f06881ca7c-26011951-2073600-1934dfacf2117a4%22%2C%22first_id%22%3A%22%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E7%9B%B4%E6%8E%A5%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%22%2C%22%24latest_referrer%22%3A%22%22%7D%2C%22identities%22%3A%22eyIkaWRlbnRpdHlfY29va2llX2lkIjoiMTkzNGRmYWNmMjBkOWItMDcwMzVmMDY4ODFjYTdjLTI2MDExOTUxLTIwNzM2MDAtMTkzNGRmYWNmMjExN2E0In0%3D%22%2C%22history_login_id%22%3A%7B%22name%22%3A%22%22%2C%22value%22%3A%22%22%7D%2C%22%24device_id%22%3A%221934dfacf20d9b-07035f06881ca7c-26011951-2073600-1934dfacf2117a4%22%7D",
    "UULE": "a+cm9sZTogMQpwcm9kdWNlcjogMTIKdGltZXN0YW1wOiAxNzMzMTk5NzM5ODE4MDAwCmxhdGxuZyB7CiAgbGF0aXR1ZGVfZTc6IDIyNTMyMTI0MAogIGxvbmdpdHVkZV9lNzogMTEzOTQ1NDgyMAp9CnJhZGl1czogMTUwMDAwCnByb3ZlbmFuY2U6IDYK",
    "__Secure-1PSIDTS": "sidts-CjIBQT4rX9ciXlHvYZr2NPjbr6GMEXybtf-Lt9ridu4mQE24i22h7C-oi4lLB01wJOmGdRAA",
    "__Secure-3PSIDTS": "sidts-CjIBQT4rX9ciXlHvYZr2NPjbr6GMEXybtf-Lt9ridu4mQE24i22h7C-oi4lLB01wJOmGdRAA",
    "NID": "519=YUBr6JqrUMca3xvTy1Km-XqptudqepbDq0euS7U4APwiNpe3zuT4-ai-lerqdioWoCBzkLZKludNvflW34D9WjE0fGl8huQcvsFla_cJQ1XK6bLuvn8ikOill5oza9r5jZQ6UK8XxMbEDOYYIttGGc2WuyEv9YdRP4VDrTWdVZvIqbc_FrQ1hWWxklPaycB7-4CDGBJ04wNkfPZjx4P3hYZsLniZwpjBpoMr4wjxM4H6WcmdvUPfIDy1IXvAJWuufqG8P-eeDdWkNu8dpRn4oWgBQnookPcigBJCK48At3D9NnpNSrhHb4108TmrmOvCTt8__f1LReg_wuUjFeeee6bm647WyT4c1wfES8oDGG8nnAJBQ16mEqBUuAh2sZJvsD6szkxRggYcT2dVJHAZTGQ-utDn-ykYUuyMLJpBVTlJYb0HkzmoBZBikz5Dbub9604MoHYGB7bp8y03cF_1EsatpuiNMBWH4o1MdYpXN-sJ2qvPm4Jc7PUpJcpFWpx7fZcioBTWyJoDHO80tMdbpxXAwcuG3cVJyAKsNS_Z7it9EEP97OhTuImRLgP3F0XY-Zg4R7kVMqFBx0qXU8j15AJqa8WjFhSwhhwY0GlmxTuTS5EmQMx3zXw-0KhyBv_p3_2d1AVMWqy8-f0yGwR06vj2usbhlH1dgI-lW-HDaFmpa7lCsZFzT7CnUbxZcCx2VMG6GBueJ5wQjcos7Piq292ndSAIDPkNhFEjGnsSXK3XuvYYwoJnkpXmIHonIEAMPPWz8n8-ojSKCQZc1qUaXlAqEiYY7GKmqUwpyTuNhvFawZ6S3s2w2wPXmqGCFJeeT1NH_kHVK9aBFDcpAJ7GcWk0No04NiPpiuL_g1tu2sBGcc013ASjD6RiBjrRD8Jj8VX_Evgvb93ChhSBewFtHkfOHCJhEWnUupnI4VT3QRPAy8oNkKvThpLz8LmvWdRv2Uhp_LHT1v-0tFYM-YP4F486-vtJbEqMEOgeJDIL1KIOO2D2gyWrJN44GEkvyqjlOLM_sPKUWfE_8U2E-sBw9N0",
    "SID": "g.a000qwg5exImmPKAkmxAbjN_z6PHDDfjF8-M_Vw-OiGdyZdXflbhIXkVBnkviEYuHxlXh5q6hgACgYKAUgSARISFQHGX2MiE7-08SCvi9u6VDd1b-hh4RoVAUF8yKojfcK8UvYVdTNCh7UcoRmm0076",
    "__Secure-1PSID": "g.a000qwg5exImmPKAkmxAbjN_z6PHDDfjF8-M_Vw-OiGdyZdXflbhl7AOMCFNYw8N7yB5_AXbRgACgYKAfISARISFQHGX2MirdOpzaRVeStOHHgq9tb5gxoVAUF8yKr6QPRE8wxp8o3wp_9-67bE0076",
    "__Secure-3PSID": "g.a000qwg5exImmPKAkmxAbjN_z6PHDDfjF8-M_Vw-OiGdyZdXflbh4Y10W3lGiOwPF-rzYM-bFgACgYKAXoSARISFQHGX2MiAMyFQ-nYlKFKBa2x3FU6SBoVAUF8yKovLdEN0SRzUU7Ptj0Jje3L0076",
    "HSID": "AJLrYIG6XsEl15Dap",
    "SSID": "AtAGfjb0eGyvn1haS",
    "APISID": "Ie5XygXg2XwS2oKD/AhQMNMCDXUPGa-g-V",
    "SAPISID": "nY-HcGjzdfNxVs6i/AeznO89eZccxRw9uI",
    "__Secure-1PAPISID": "nY-HcGjzdfNxVs6i/AeznO89eZccxRw9uI",
    "__Secure-3PAPISID": "nY-HcGjzdfNxVs6i/AeznO89eZccxRw9uI",
    "SIDCC": "AKEyXzVQQvqdgLj8Vtil0whMJdzc7O9oBsWMnxUPiLjIafHiVbGp1MNMw70GzERlN5ufVpv2CA",
    "__Secure-1PSIDCC": "AKEyXzWMhbYIv_dqUkXjMoFdlPIxcq6JFws4nHPAxFBf8jcpfl6pp2Udsb3toxhmrVqULzvi2A",
    "__Secure-3PSIDCC": "AKEyXzUyMgvjDi_yVlrhuIY4AyPQKq4s2rcowrHRNd0osS33nL1nxB-1joRTfpKUrT8XpOU52Q"
}


def match_pattern(html_content):
    pattern = r'window.APP_INITIALIZATION_STATE=(.*);window.APP_FLAGS'
    match = re.search(pattern, html_content)
    return match.group(1) if match else None


def unique_none(data):
    return [None] + [item for item in data if item is not None]


# 解析detail数据
def parse_detail_new(data):
    try:
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
    except Exception as e:
        logger.warning(f"html内容解析错误：{e}")
        return None


params = {
    'authuser': '0',
    'hl': 'zh-CN',
    'entry': 'ttu',
    'g_ep': 'EgoyMDI0MTExMS4wIKXMDSoASAFQAw==',
}


async def fetch_url(session, url):
    """
    异步请求 URL，返回 HTML 内容
    """
    try:
        async with session.get(url, params=params, headers=headers, cookies=cookies, timeout=aiohttp.ClientTimeout(total=10)) as response:
            return await response.text(), response.status
    except Exception as e:
        logger.error(e)


async def process_task(task, session, mysql_manager):
    """
    处理任务：爬取数据并保存到 MongoDB
    """
    try_number = task['try_num']
    task_id = task['fid']  # 任务的唯一标识符

    if try_number > 3:
        logger.warning(
            f"当前任务 | ID: {task['id']}, Keyword: {task['keyword']}, FID: {task['fid']} | 重试次数超过3次，更改任务状态")
        mysql_manager.update_status_detail(task['id'], 2, task)  # 标记为错误
        return

    logger.info(
        f"当前任务 | ID: {task['id']}, Keyword: {task['keyword']}, FID: {task['fid']} | 重试次数: {try_number} ")

    url = f'https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s{task["fid"]}'
    logger.info(f"URL:{url}")
    try:
        html_content, status_code = await fetch_url(session, url)
        if status_code == 200:
            extracted_data = parse_detail_new(html_content)  # 解析 HTML 数据
            if extracted_data is None:
                logger.warning(f"解析结果为空 | 状态码: {status_code} | FID: {task['fid']}")
                task['try_num'] += 1
                return task  # 返回任务，稍后重试
            db_data = get_mysql_data_element(extracted_data, task, mysql_manager)
            # 插入解析结果到数据库
            update_num = mysql_manager.update_db_data(db_data)

            # 更新数据库任务状态为完成
            if update_num > 0:
                mysql_manager.update_status_detail(task['id'], 1, task)
        else:
            logger.error(f"请求失败，状态码: {status_code}，URL: {url}")
            task['try_num'] += 1
            return task  # 返回任务，稍后重试

    except Exception as e:
        logger.error(f"任务处理出错，错误: {e}")
        task['try_num'] += 1
        if task['try_num'] <= 3:
            return task  # 返回任务，稍后重试
        else:
            logger.warning(f"当前任务 | FID: {task['fid']} | 重试次数超过3次，不再重试")
            mysql_manager.update_status_detail(task['id'], 2, task)  # 标记为错误


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
        # traceback.print_exc()
        logger.warning(f"任务 | ID: {task['id']}, Keyword: {task['keyword']}, FID: {task['fid']} 出错")
        logger.error(e)


async def worker(task_queue):
    mysql_manager = MySQLTaskManager()  # 在子进程中初始化

    async with aiohttp.ClientSession() as session:
        while True:
            logger.info(f"当前任务队列长度:{task_queue.qsize()}")
            task = await task_queue.get()
            if task is None:  # 停止信号
                break
            # 处理任务并返回更新后的任务
            updated_task = await process_task(task, session, mysql_manager)

            # 如果任务需要重试，将其放回队列
            if updated_task:
                await task_queue.put(updated_task)

            task_queue.task_done()


async def task_maker(mysql_manager, task_queue):
    added_tasks = set()  # 用于跟踪已添加任务的唯一标识
    while True:
        logger.info(f"当前任务队列长度:{task_queue.qsize()}")
        if task_queue.qsize() >= 50:
            logger.info("当前任务队列长度大于50, 休息 10 s")
            await asyncio.sleep(10)
            continue

        try:
            tasks = mysql_manager.take_detail_tasks(task_status=0, n=50)
            if not tasks:
                logger.warning("数据库中已没有更多的任务, 休息 60 秒")
                await asyncio.sleep(60)
                continue

            selected_tasks = random.sample(tasks, min(len(tasks), 30))
            for task in selected_tasks:
                task_id = str(task['id']) + task['keyword'] + task['fid']
                if task_id not in added_tasks:
                    task['try_num'] = 0
                    await task_queue.put(task)
                    added_tasks.add(task_id)  # 记录已添加任务的唯一标识

            # 如果任务数量不足 50，允许任务生成器继续进行，而不是休眠太长时间
            if task_queue.qsize() < 50 and len(tasks) < 50:
                logger.info("任务数量不足 50，稍作等待后继续获取任务")
                await asyncio.sleep(10)  # 稍微短暂等待，避免长时间占用 CPU

        except Exception as e:
            logger.error(f"任务生成器出错，错误: {e}")


async def main():
    mysql_manager = MySQLTaskManager()
    task_queue = asyncio.Queue()
    task_maker_task = asyncio.create_task(task_maker(mysql_manager, task_queue))
    num_workers = 2
    # 协程版本 任务处理器
    worker_tasks = [asyncio.create_task(worker(task_queue, )) for _ in range(num_workers)]

    await asyncio.gather(task_maker_task, *worker_tasks)

    # 向队列中放入停止信号，告诉工作进程停止
    for _ in range(num_workers):
        await task_queue.put(None)  # 向队列中放入 None，作为停止信号


if __name__ == "__main__":
    asyncio.run(main())
