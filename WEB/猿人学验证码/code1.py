import os

import requests
from functools import partial
import subprocess
import base64
import matplotlib.pyplot as plt
import matplotlib.image as mpimg
from PIL import Image
import io
import numpy as np
import cv2
import ddddocr

# 在导入 execjs 之前应用补丁
subprocess.Popen = partial(subprocess.Popen, encoding='utf-8')
import execjs

with open('code1.js', 'r', encoding='utf-8') as f:
    js_code = f.read()
jsDrive = execjs.compile(js_code)


def extract_frames(gif_path, output_dir='frames'):
    # 创建输出目录
    import os
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)

    # 打开 GIF 文件
    gif = Image.open(gif_path)

    # 获取帧数
    frame_count = gif.n_frames

    # 遍历每一帧
    for frame_index in range(frame_count):
        # 获取当前帧
        gif.seek(frame_index)
        frame = gif.convert('RGB')  # 转换为 RGB 模式

        # 保存当前帧
        frame_path = os.path.join(output_dir, f'frame_{frame_index}.png')
        frame.save(frame_path)

        # print(f'Saved frame {frame_index} to {frame_path}')

    return frame_count


def calculate_clarity(image_path):
    # 使用 OpenCV 计算图像的清晰度（这里使用拉普拉斯算子来检测图像的模糊度）
    image = cv2.imread(image_path)
    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
    fm = cv2.Laplacian(gray, cv2.CV_64F).var()
    return fm


def find_clear_frame(gif_path):
    # 提取帧
    frame_count = extract_frames(gif_path)

    # 计算每一帧的清晰度
    import os
    clarity_list = []
    for frame_index in range(frame_count):
        frame_path = os.path.join('frames', f'frame_{frame_index}.png')
        clarity = calculate_clarity(frame_path)
        clarity_list.append((frame_index, clarity))

    # 找到清晰度最高的帧
    clear_frame = max(clarity_list, key=lambda x: x[1])
    return clear_frame

session = requests.Session()
session.headers = {
    # "content-length": "33",
    "sec-ch-ua-platform": "\"Windows\"",
    "x-requested-with": "XMLHttpRequest",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36",
    "accept": "application/json, text/javascript, */*; q=0.01",
    "sec-ch-ua": "\"Google Chrome\";v=\"137\", \"Chromium\";v=\"137\", \"Not/A)Brand\";v=\"24\"",
    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    "sec-ch-ua-mobile": "?0",
    "origin": "https://match2025.yuanrenxue.cn",
    "sec-fetch-site": "same-origin",
    "sec-fetch-mode": "cors",
    "sec-fetch-dest": "empty",
    "referer": "https://match2025.yuanrenxue.cn/match2025/topic/1",
    "accept-encoding": "gzip, deflate, br, zstd",
    "accept-language": "zh-CN,zh;q=0.9",
    'Cookie': 'sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%22190d90f5929491-076c70a76f99bd4-4c657b58-1327104-190d90f592a168e%22%2C%22first_id%22%3A%22%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E7%9B%B4%E6%8E%A5%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%22%2C%22%24latest_referrer%22%3A%22%22%7D%2C%22identities%22%3A%22eyIkaWRlbnRpdHlfY29va2llX2lkIjoiMTkwZDkwZjU5Mjk0OTEtMDc2YzcwYTc2Zjk5YmQ0LTRjNjU3YjU4LTEzMjcxMDQtMTkwZDkwZjU5MmExNjhlIn0%3D%22%2C%22history_login_id%22%3A%7B%22name%22%3A%22%22%2C%22value%22%3A%22%22%7D%2C%22%24device_id%22%3A%22190d90f5929491-076c70a76f99bd4-4c657b58-1327104-190d90f592a168e%22%7D; sessionid=jiy2fq4wrioxinvtmhc6qnx7ej8gpuhv',

    "priority": "u=1, i",

    # "cache-control": "no-cache",
    # "pragma": "no-cache",
}
cookies = {
    "sessionid": "u16kwqjr3a8z870vnowy2if2kakq3j5q",
    "Hm_lvt_3e4ffd7a3b6387fe4632831f1230b518": "1749040421,1749211896",
    "HMACCOUNT": "9CD159CF10F1FDB4",
    "Hm_lpvt_3e4ffd7a3b6387fe4632831f1230b518": "1749211960"
}
# while True:
for i in range(10):
    a = jsDrive.call('get_a')
    # print(a)
    url = "https://match2025.yuanrenxue.cn/match2025/topic/1_captcha_jpg"
    data = {
        "a": a
    }
    response = session.post(url, data=data)
    response_data = response.json()
    # print(response.status_code)
    print(response.json())
    gif_result = jsDrive.call('get_gif', response_data)
    gif_data = gif_result['gif_data']
    l = gif_result['l']
    print(gif_result)
    gif_base64 = gif_data.split(',')[1]  # 移除 "data:image/gif;base64," 部分
    gif_bytes = base64.b64decode(gif_base64)

    # 保存到文件
    with open("output.gif", "wb") as f:
        f.write(gif_bytes)

    gif_path = 'output.gif'  # 替换为你的 GIF 文件路径
    clear_frame_index, clarity = find_clear_frame(gif_path)
    print(f'The clearest frame is frame {clear_frame_index} with clarity {clarity}')

    gif_clear_img = f'./frames/frame_{clear_frame_index}.png'
    ocr = ddddocr.DdddOcr()  # 切换为第二套ocr模型

    image = open(gif_clear_img, "rb").read()
    result = ocr.classification(image)
    print(result)

    text = jsDrive.call('get_text', result, l)
    print(text)
    headers = {
        # "content-length": "33",
        "sec-ch-ua-platform": "\"Windows\"",
        "x-requested-with": "XMLHttpRequest",
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36",
        "accept": "application/json, text/javascript, */*; q=0.01",
        "sec-ch-ua": "\"Google Chrome\";v=\"137\", \"Chromium\";v=\"137\", \"Not/A)Brand\";v=\"24\"",
        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        "sec-ch-ua-mobile": "?0",
        "origin": "https://match2025.yuanrenxue.cn",
        "sec-fetch-site": "same-origin",
        "sec-fetch-mode": "cors",
        "sec-fetch-dest": "empty",
        "referer": "https://match2025.yuanrenxue.cn/match2025/topic/1",
        "accept-encoding": "gzip, deflate, br, zstd",
        "accept-language": "zh-CN,zh;q=0.9",
        'Cookie': 'sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%22190d90f5929491-076c70a76f99bd4-4c657b58-1327104-190d90f592a168e%22%2C%22first_id%22%3A%22%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E7%9B%B4%E6%8E%A5%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%22%2C%22%24latest_referrer%22%3A%22%22%7D%2C%22identities%22%3A%22eyIkaWRlbnRpdHlfY29va2llX2lkIjoiMTkwZDkwZjU5Mjk0OTEtMDc2YzcwYTc2Zjk5YmQ0LTRjNjU3YjU4LTEzMjcxMDQtMTkwZDkwZjU5MmExNjhlIn0%3D%22%2C%22history_login_id%22%3A%7B%22name%22%3A%22%22%2C%22value%22%3A%22%22%7D%2C%22%24device_id%22%3A%22190d90f5929491-076c70a76f99bd4-4c657b58-1327104-190d90f592a168e%22%7D; sessionid=jiy2fq4wrioxinvtmhc6qnx7ej8gpuhv',

        "priority": "u=1, i",

        # "cache-control": "no-cache",
        # "pragma": "no-cache",
    }
    url = "https://match2025.yuanrenxue.cn/match2025/topic/1_captcha_check"
    data = {
        "text": text
    }
    response = session.post(url, data=data)

    print(response.json())
    print('\n')
