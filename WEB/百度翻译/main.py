import requests

cookies = {
    'BAIDUID_BFESS': '1A5E95253E9D74A8523DE211996F3991:FG=1',
    'BIDUPSID': '1A5E95253E9D74A8523DE211996F3991',
    'PSTM': '1724643512',
    'ZFY': '8ldKskppQOaB6wIwlndj2Pv77:A9TArx9bcE2JbsaqO0:C',
    'H_PS_PSSID': '60360_60623_60630_60664_60676_60682_60696',
    'ab_sr': '1.0.1_MDU3NGY2MjRkZDlmNWFjYWI5MmI2Y2NlNDYyOTM5Zjg1MGIyM2Y4ZDY3NjRiMWM4MmFhMzY4ZmJiN2IyY2ZmMmJmMzAxMTUzZWJiODZhNjY0YzAyMzliZDRiMjcyZDk5NTAwN2Q2MTkzNjM1YjQyZDJiYzcxNmM3YzVkZDEzMzJiZmM3NjZjZDNhYTViM2IyZjAzOTlmNTQyOTJhMDBhYw==',
    'RT': '"z=1&dm=baidu.com&si=1a2ad389-5ddb-457e-8046-e1c37bccf08c&ss=m0m125e4&sl=1&tt=31a&bcn=https%3A%2F%2Ffclog.baidu.com%2Flog%2Fweirwood%3Ftype%3Dperf&ld=4iq"',
}

headers = {
    'Accept-Language': 'zh-CN,zh;q=0.9',
    'Acs-Token': '1725271208652_1725343708349_j0aso6k8GDD5zUuyQnvCuvxRmGgU+Tuih4CuuCiO1ETcdKveyXlCQg2EL1xSXVBoMJEaWjP8nAC+Gx+dK6lcbNgbtlhJZHv2pnOvknKRpVbY+Z1oh2HVgb3WoEGE6nFVhsSUYEeJ17oHOiTLHlYoM7co+KzqyBBUKzDsO1Ucqtjy+CjufMdUq/2jxuVOemubv5BF0uz2RHqKgCmjNQI2NzAG7+1Lpppk2nTLjluOjH3cRx6JMqWq+qywmdPv8lgnS+Cmn8U3F5Dt85AwJVHRHep6nn8bWuTfAub80VWHeSeMNKtS/ayf7xFPSvNjt9UxAgJyKtpH/VnUFJsr8AxQDpyihD/t0l6K/O0spEc+oLXwX5LNJ6gpxYiHCwrRV8SksIx6F2B7NdLhUwX+EigirtMFTulxSK/swnWGnHZAGgiX6LZfupyGI6UV1wo+HQwl',
    'Connection': 'keep-alive',
    'Content-Type': 'application/json;charset=UTF-8',
    # 'Cookie': 'BAIDUID_BFESS=1A5E95253E9D74A8523DE211996F3991:FG=1; BIDUPSID=1A5E95253E9D74A8523DE211996F3991; PSTM=1724643512; ZFY=8ldKskppQOaB6wIwlndj2Pv77:A9TArx9bcE2JbsaqO0:C; H_PS_PSSID=60360_60623_60630_60664_60676_60682_60696; ab_sr=1.0.1_MDU3NGY2MjRkZDlmNWFjYWI5MmI2Y2NlNDYyOTM5Zjg1MGIyM2Y4ZDY3NjRiMWM4MmFhMzY4ZmJiN2IyY2ZmMmJmMzAxMTUzZWJiODZhNjY0YzAyMzliZDRiMjcyZDk5NTAwN2Q2MTkzNjM1YjQyZDJiYzcxNmM3YzVkZDEzMzJiZmM3NjZjZDNhYTViM2IyZjAzOTlmNTQyOTJhMDBhYw==; RT="z=1&dm=baidu.com&si=1a2ad389-5ddb-457e-8046-e1c37bccf08c&ss=m0m125e4&sl=1&tt=31a&bcn=https%3A%2F%2Ffclog.baidu.com%2Flog%2Fweirwood%3Ftype%3Dperf&ld=4iq"',
    'Origin': 'https://fanyi.baidu.com',
    'Referer': 'https://fanyi.baidu.com/mtpe-individual/multimodal?query=%E9%9D%92%E6%98%A5%0A&lang=zh2en',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'same-origin',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36',
    'accept': 'text/event-stream',
    'sec-ch-ua': '"Chromium";v="128", "Not;A=Brand";v="24", "Google Chrome";v="128"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
}

json_data = {
    'query': '树木',
    'from': 'zh',
    'to': 'en',
    'reference': '',
    'corpusIds': [],
    'qcSettings': [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        '11',
    ],
    'needPhonetic': True,
    'domain': 'common',
    'milliTimestamp': 1725343708384,
}

response = requests.post('https://fanyi.baidu.com/ait/text/translate', cookies=cookies, headers=headers, json=json_data)

print(response.text)

# Note: json_data will not be serialized by requests
# exactly as it was in the original request.
#data = '{"query":"青春\\n","from":"zh","to":"en","reference":"","corpusIds":[],"qcSettings":["1","2","3","4","5","6","7","8","9","10","11"],"needPhonetic":true,"domain":"common","milliTimestamp":1725343708384}'.encode()
#response = requests.post('https://fanyi.baidu.com/ait/text/translate', cookies=cookies, headers=headers, data=data)