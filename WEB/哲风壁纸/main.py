import json
import os
from datetime import datetime
import subprocess
from functools import partial

subprocess.Popen = partial(subprocess.Popen, encoding='utf-8')
import execjs
import requests

def down_img_fileId(fileId):
    # 低配图片
    try:
        # 定义文件夹路径
        folder_path = 'download_img'
        # 如果文件夹不存在，则创建它
        if not os.path.exists(folder_path):
            os.makedirs(folder_path)
        # 构建完整的文件保存路径
        save_path = os.path.join(folder_path, fileId + '.png')

        url = 'https://haowallpaper.com/link/common/file/getCroppingImg/' + fileId
        response = requests.get(url)
        response.raise_for_status()

        with open(save_path, 'wb') as file:
            file.write(response.content)

        print(f"下载图片成功,已将图片保存在: {save_path}")
    except requests.exceptions.RequestException as e:
        print(f"下载图片失败,报错: {e}")


cookies = {
    'askId': 'ack%3A_1725355396160172669562647',
    '_ga': 'GA1.1.982041297.1725355401',
    'isWebsiteLog': 'ok',
    'Hm_lvt_3c3619543a455fffe6917f75aba0e02b': '1725355406',
    'HMACCOUNT': '266A8B6BC4F8940B',
    'Hm_lpvt_3c3619543a455fffe6917f75aba0e02b': '1725357595',
    '__gads': 'ID=0ee01f5fcae82d6d:T=1725355414:RT=1725358864:S=ALNI_Ma3d3YbP2msM-xySPBxhcHN5x0X5g',
    '__gpi': 'UID=00000eeaec0093bd:T=1725355414:RT=1725358864:S=ALNI_MbymlwOqctns_ohM1oZuWtrZMlT_A',
    '__eoi': 'ID=e39ac4604fadfbac:T=1725355414:RT=1725358864:S=AA-AfjZQjNEWAvGrAVb-Zm3A9lnc',
    '_ga_XT96CDMYZB': f'GS1.1.1725355400.1.1.1725360677.0.0.0',
}

headers = {
    'Accept': 'application/json',
    'Accept-Language': 'zh-CN,zh;q=0.9',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
    # 'Cookie': 'askId=ack%3A_1725355396160172669562647; _ga=GA1.1.982041297.1725355401; isWebsiteLog=ok; Hm_lvt_3c3619543a455fffe6917f75aba0e02b=1725355406; HMACCOUNT=266A8B6BC4F8940B; Hm_lpvt_3c3619543a455fffe6917f75aba0e02b=1725357595; __gads=ID=0ee01f5fcae82d6d:T=1725355414:RT=1725358864:S=ALNI_Ma3d3YbP2msM-xySPBxhcHN5x0X5g; __gpi=UID=00000eeaec0093bd:T=1725355414:RT=1725358864:S=ALNI_MbymlwOqctns_ohM1oZuWtrZMlT_A; __eoi=ID=e39ac4604fadfbac:T=1725355414:RT=1725358864:S=AA-AfjZQjNEWAvGrAVb-Zm3A9lnc; _ga_XT96CDMYZB=GS1.1.1725355400.1.1.1725360573.0.0.0',
    'Referer': 'https://haowallpaper.com/?page=1&sortType=3&search=%E5%8A%A8%E6%BC%AB%E5%A5%B3%E5%AD%A9&isSel=false',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'same-origin',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36',
    'sec-ch-ua': '"Chromium";v="128", "Not;A=Brand";v="24", "Google Chrome";v="128"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'token': 'ack:_1725355396160172669562647',
}

with open('解码.js', 'r', encoding='utf-8') as f:
    js_code = f.read()
context = execjs.compile(js_code)
# 排序模式(必带)
# 最新sortType为2
# 推荐sortType为3 (默认)
# 下载量sortType为4
# 收藏量sortType为5

# 分别率 ratioId,如1k 2k,可取值 1 2 3 4 5 6 7 8 9 10 12 (选带)

# 分辨率 ratioVal 如 1920×1080 (选带)

# 颜色 colorId(选带)
# 偏蓝: df3121699fcf4155c35ae50b7c93b3f1
# 偏绿: 4b119907ec429a185de5fce6f580036e
# 灰/白: 34d651609d3e8000066a0397cd8902d0
# 偏红: 42a0ba70ffd32f479bb79154922a9f66
# 紫/粉: e35f3c31339fa77498d682ff54ba5069
# 暗色: b6f2e7a3e9aaf1eab391c01b0fed404a
# 偏黄: 5f45dad428890099e26979f6f28e9c0b
# 其他颜色: 24d7ef760ecca54da7e59735e66dad94

# 壁纸分类 typeId(选带)
# 魅力/迷人 35c203f75643ac7803b8f706fa91ef40
# 自制/艺术 ea0a4b100d440b83f2feec8abbd3d9e1
# 安逸/自由 760943d7b1ac898ff9eb31900cbf5df7
# 科幻/星云 55bcd42f60c4631af0a90bacec892958
# 动漫/二次元 553dff627434cc5683a776216c6045d2
# 自然/风景 0202b9e54c3e843a4e70dc0150399d11
# 游戏/玩具 15ea11c65ce0d00c1e4bf042a66dbe15
# 程序/代码 25e2d674a895d54b467a9e4820a12e04
# 未定义 ef9afbc2abbafdb6c414df491842c735

# 都以字符串的形式
# search = '{"page":"1","search":"动漫","sortType":"5","typeId":"ef9afbc2abbafdb6c414df491842c735","colorId":"df3121699fcf4155c35ae50b7c93b3f1",ratioVal:"1920×1080",isSel":"false","rows":9,"isFavorites":false}'
# 手机版
# search = '{"page":"1","sortType":"2","rows":13,"isFavorites":false,"colorId":"1694802403439792130","isSel":true}'
# 电脑版
# search = '{"page":"20","search":"动漫","ratioId":"2","ratioVal":"1920×1080","sortType":"3","isSel":"false","rows":9,"isFavorites":false}'
for page in range(5):
    search = '{"page":"'+str(page)+'","sortType":3,"isSel":"true","rows":9,"isFavorites":false}'
    requestdata = context.call('get_requestdata', search)
    print(requestdata)
    params = {
        "data": requestdata
    }
    # 手机
    # response = requests.get(
    #     f'https://haowallpaper.com/link/pc/wallpaperMobile/getWallpaperMobile',
    #     cookies=cookies,
    #     headers=headers,
    #     params=params
    # )
    # 电脑
    response = requests.get(
        f'https://haowallpaper.com/link/pc/wallpaper/getWallpaperList',
        cookies=cookies,
        headers=headers,
        params=params
    )

    content = response.json()
    print(content)
    request_content = content.get("data").strip()
    print(request_content)

    data = context.call('get_data', request_content)
    print(data)
    # 将 JSON 格式的字符串解析为 Python 字典
    data_dict = json.loads(data)

    data_list = data_dict["list"]
    if len(data_list) == 0:
        print("图片数据为空,无法下载图片,请更换参数")
    else:
        for list in data_list:
            fileId = list['fileId']
            down_img_fileId(fileId)

# 将 Python 字典写入到 JSON 文件中
# with open('output.json', 'w', encoding='utf-8') as f:
#     json.dump(data_dict, f, indent=4, ensure_ascii=False)





def down_img_wtId(wtId):
    # 高配图片
    pass




