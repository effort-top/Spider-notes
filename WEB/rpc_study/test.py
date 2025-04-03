import json

import requests

headers = {
    'Accept': 'text/plain, */*; q=0.01',
    'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8,ru;q=0.7',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    'Origin': 'https://www.endata.com.cn',
    'Pragma': 'no-cache',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'same-origin',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36 Edg/126.0.0.0',
    'X-Requested-With': 'XMLHttpRequest',
    'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Microsoft Edge";v="126"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
}

data = {
    'year': '2023',
    'MethodName': 'BoxOffice_GetYearInfoData',
}

response = requests.post('https://www.endata.com.cn/API/GetData.ashx', headers=headers, data=data)
params = response.text

url = "http://127.0.0.1:12080/go"
params_data = {
    'data': params
}
data = {
    "group": "test",
    "action": "test1",
    "param": json.dumps(params_data)
}
print(json.dumps(params_data))  #dumps后就是长这样的字符串{"user": "\u9ed1\u8138\u602a", "status": "\u597d\u56f0\u554a"}
res = requests.post(url, data=data)  #这里换get也是可以的
print(res.status_code)
print(res.text)
