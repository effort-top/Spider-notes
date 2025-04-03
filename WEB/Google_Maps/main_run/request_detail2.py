import math
import multiprocessing
import random
import threading
import asyncio
import traceback

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
    "referer": "https://www.google.com/",
    "sec-ch-ua": "\"Chromium\";v=\"130\", \"Google Chrome\";v=\"130\", \"Not?A_Brand\";v=\"99\"",
    "sec-ch-ua-arch": "\"x86\"",
    "sec-ch-ua-bitness": "\"64\"",
    "sec-ch-ua-full-version-list": "\"Chromium\";v=\"130.0.6723.92\", \"Google Chrome\";v=\"130.0.6723.92\", \"Not?A_Brand\";v=\"99.0.0.0\"",
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
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36",
    "x-browser-channel": "stable",
    "x-browser-copyright": "Copyright 2024 Google LLC. All rights reserved.",
    "x-browser-validation": "xLDqt3Fwi7d9kcXrccLkH8m4Ep0=",
    "x-browser-year": "2024",
    "x-client-data": "CIa2yQEIorbJAQipncoBCLjZygEIlKHLAQiFoM0BCLKezgEI/qXOAQj7vs4BCLvFzgEI+cnOAQiXy84BCMPMzgEIxszOAQjnzM4BCMfPzgEY9MnNARidsc4BGIDKzgEY183OAQ=="
}
cookies = {
    "SID": "g.a000qAgwS5gwiwNyZGWXTCCBmtsNzokndosy_L_8ilXWpixRtyVy-nVxKxTOq6ircNRkrffGJwACgYKAdQSARMSFQHGX2Miay3ZoQMaf4CfWbOaE6BuChoVAUF8yKo4N1drjIyX7sawv5n3WIwF0076",
    "__Secure-1PSID": "g.a000qAgwS5gwiwNyZGWXTCCBmtsNzokndosy_L_8ilXWpixRtyVyDh0AQNC1TMXnSxMyfkR4VwACgYKAUASARMSFQHGX2Mi8nR7lzdTiY3wEDEBLJ5jLhoVAUF8yKqd8S0YrcjcVaaJYPQr0Abz0076",
    "__Secure-3PSID": "g.a000qAgwS5gwiwNyZGWXTCCBmtsNzokndosy_L_8ilXWpixRtyVyyKAKBM5AtrdjIcLqn1BMwgACgYKAWASARMSFQHGX2MikVltUCGzIdkAug8WQPEzUxoVAUF8yKr4mzkHspUDBI11r2JO5SJG0076",
    "HSID": "A-iDPYer16asxfAdk",
    "SSID": "AHko5Hvz0vK8DTfJK",
    "APISID": "sI7iXdKC4dFWzqD6/Asdn3u8PWfFjmWh7Y",
    "SAPISID": "Z544zamoiHSUx-mh/As8h6NMKPa25KUv7R",
    "__Secure-1PAPISID": "Z544zamoiHSUx-mh/As8h6NMKPa25KUv7R",
    "__Secure-3PAPISID": "Z544zamoiHSUx-mh/As8h6NMKPa25KUv7R",
    "GOOGLE_ABUSE_EXEMPTION": "ID=96226512fd874b47:TM=1731487266:C=r:IP=83.229.123.37-:S=Z6Ezfx4Tmn5EB0kGl_3WUqI",
    "SEARCH_SAMESITE": "CgQIyJwB",
    "NID": "519=oYaH0D9PihpCdQqLH3w2HD_Nf2HZ0pTFK3ijaBtweR-ay-qkMplJPzNeUNL28VKN13e4AshC7tFNC4fDMUpDODqyWOXE_IWBXxkSo9qeXxOIMiKG4NtqXCT-M669esejeqIObIyBPygvlFjmlSgecnzD9i_8WWxRc2XwAOvOYEj_G5cu42833LMZ6awUROxvLqbb11nfSLeYbOBG8BCTt5IjWiJMSoJZisquMyFokvdjVbV03ti449DEC8a3zne0TpyGxKbx4mY34jvKkzfGXrLtA3nJiLX9b1xHmo0dCwZ8ZB4xDNUaT-TRmJ2RyOH5bEVJdHxUGFpymbOHV1JnWW8qltmYodexLZNBuXX5X44wdKrzvSDxSFqxQwCNyV_Zuj1TtSxam18UOS1RQK9Ks8Sm27wEINO6nx0pN4_h3SRYOWKV7h9sFfwP0nrWJjqL7O8T2-J7wL46XN3ktbyg7bC1o_k3wCgQp1eY6CzMoMIVXYh11z_LVc1OAUGafMX53RtFBGAP99G8dQue0muVGq1x8DuQSRbsEA5z8CWepJftGP937nUgC2tz1sdHXGQ2nNpzJ_WojwGqLaWo4U997vbk-Hg7ff8HNantVAeYk2CrPvPnDwjjXffm6rQwGL5HTfrkM9TRmddg8AH0OYYHs1jMO38NddW6Y371_ClC2Tk4Y493fxf36FZqmhAm-nKJIyqyQES9_I91tcuRGUJV",
    "__Secure-1PSIDTS": "sidts-CjIBQT4rX8vw4Ed_3ebMsYQtmEE9PdNoECrPVqjUzDoTy-uxFfzA8N5asqHghNknhMnt3BAA",
    "__Secure-3PSIDTS": "sidts-CjIBQT4rX8vw4Ed_3ebMsYQtmEE9PdNoECrPVqjUzDoTy-uxFfzA8N5asqHghNknhMnt3BAA",
    "SIDCC": "AKEyXzXxVmvsT-tCm2Ji2HE_htwNdbX68BXOOYlEpjfQHabjgaT0PP8h8Mt6p6ZtNcK1qM3MdQ",
    "__Secure-1PSIDCC": "AKEyXzWiKe-bZMszwk8J8O-alKGegO8pipiQUVXG7XOJOwOMD2qYFu66l8nQMsCbotK4S65nhQ",
    "__Secure-3PSIDCC": "AKEyXzWLK5hFDPETYPUFqhuXuwhj-v6XmtTbHrfzHVjAzVGg_77c8LJWX_nlZ84Pck2it9q5pA"
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
def get_mysql_data_element(result, task,mysql_manager):
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
                               'link','ava',
                               'display_link', 'icon', 'rank', 'addtime','yssj']:
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


def worker(task_queue):
    """
    处理任务的 worker 进程。每个进程独立初始化 MySQLTaskManager。
    """
    mysql_manager = MySQLTaskManager()  # 在子进程中初始化
    while True:
        task = task_queue.get()
        if task is None:  # 停止信号
            break
        try_number = task['try_number']
        if try_number > 3:
            logger.warning(
                f"当前任务 | ID: {task['id']}, Keyword: {task['keyword']}, FID: {task['fid']} | 重试次数超过3次，更改任务状态")
            mysql_manager.update_status_detail(task['id'], 2, task)  # 标记为错误
            task_queue.task_done()
            continue
        logger.info(
            f"当前任务 | ID: {task['id']}, Keyword: {task['keyword']}, FID: {task['fid']} | 重试次数: {try_number} | 任务队列长度：{task_queue.qsize()}")
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
                db_data = get_mysql_data_element(extracted_data, task,mysql_manager)
                if db_data is None:
                    logger.warning(
                        f"解析结果为空 | 状态码: {response.status_code} | ID: {task['id']}, Keyword: {task['keyword']}, FID: {task['fid']}")
                    task['try_number'] += 1  # 增加重试次数
                    task_queue.put(task)  # 将任务重新放回队列
                    continue

                # 插入解析结果到数据库
                update_num = mysql_manager.update_db_data(db_data)

                # 更新数据库任务状态为完成
                if update_num>0:
                    mysql_manager.update_status_detail(task['id'], 1, task)
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
                    f"当前任务 | ID: {task['id']}, Keyword: {task['keyword']}, FID: {task['fid']} | 重试次数超过3次，更改任务状态")
                mysql_manager.update_status_detail(task['id'], 2, task)  # 标记为错误
        finally:
            task_queue.task_done()


def task_maker(mysql_manager, task_queue):
    """
    动态获取任务并加入队列的任务生成器。
    """
    added_tasks = set()  # 用于跟踪已添加任务的唯一标识
    while True:
        if task_queue.qsize() >= 50:
            logger.info("当前任务队列长度大于30, 休息 10 s")
            time.sleep(10)
            continue

        try:
            # 从 tmp_coordinate_table_2km_point_detail 获取状态为 0 的任务
            tasks = mysql_manager.take_detail_tasks(task_status=0, n=50)
            if not tasks:
                logger.warning("数据库中已没有更多的任务, 休息 5 秒")
                time.sleep(5)
                continue

            selected_tasks = random.sample(tasks, min(len(tasks), 10))
            for task in selected_tasks:
                task_id = str(task['id']) + task['keyword'] + task['fid']
                if task_id not in added_tasks:
                    task['try_number'] = 0
                    task_queue.put(task)
                    added_tasks.add(task_id)  # 记录已添加任务的唯一标识

        except Exception as e:
            logger.error(f"任务生成器出错，错误: {e}")


def main():
    """
    主函数，初始化消息队列和任务处理。
    """

    manager = multiprocessing.Manager()
    task_queue = manager.Queue()
    mysql_manager = MySQLTaskManager()

    # 启动任务生成器线程
    task_maker_thread = threading.Thread(target=task_maker, args=(mysql_manager, task_queue))
    task_maker_thread.start()
    # 启动 worker 进程
    num_processes = multiprocessing.cpu_count()
    processes = []

    for _ in range(4):
        p = multiprocessing.Process(target=worker, args=(task_queue,))
        processes.append(p)
        p.start()

    # 等待任务生成器线程完成
    task_maker_thread.join()

    # 发送停止信号
    for _ in processes:
        task_queue.put(None)

    # 等待所有进程完成
    for p in processes:
        p.join()


if __name__ == "__main__":
    main()
