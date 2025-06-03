import os

import requests


headers = {
    "accept": "application/json, text/plain, */*",
    "accept-language": "zh-CN,zh;q=0.9",
    "cache-control": "no-cache",
    "pragma": "no-cache",
    "priority": "u=1, i",
    "referer": "https://fxg.jinritemai.com/ffa/g/excel?btm_ppre=a2427.b72317.c0.d0&btm_pre=a2427.b08003.c938398.d414745&btm_show_id=d323ac8f-8658-49c0-bab5-b859ab993d45",
    "sec-ch-ua": "\"Chromium\";v=\"136\", \"Google Chrome\";v=\"136\", \"Not.A/Brand\";v=\"99\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36"
}
cookies = {
    "x-web-secsdk-uid": "ea909741-8607-4aa4-957a-9fcf138cc462",
    "Hm_lvt_b6520b076191ab4b36812da4c90f7a5e": "1747408508",
    "Hm_lpvt_b6520b076191ab4b36812da4c90f7a5e": "1747408508",
    "HMACCOUNT": "FDD8BC8358B70DD5",
    "passport_csrf_token": "4475a066c416e6c0f4e209e107e3292f",
    "passport_csrf_token_default": "4475a066c416e6c0f4e209e107e3292f",
    "ttcid": "bcc54829f433406abe0febd962588f1511",
    "tt_scid": "2J2ueb1.om-raqY4oogpkG7ZVbpErATf7Ou9B0APvgaQ2hQy4sEAboc0sv4fMYQA7093",
    "passport_mfa_token": "CjZDv%2BMVZ31035xJSRvi6xW4vXK8Q3DHbi5P1T4KgpCLphmmpV23JyUUUgmqGKlxheUQvt5TrqwaSgo8fA6XZyFXypTJDQXsB11Ntn2kSZtxKbdsknNd7o0lhGsoaMSnNDIv1%2FkfrV1XHY2kyiE%2F1hr%2BJc5yzksOEI3G8Q0Y9rHRbCACIgEDhttdDg%3D%3D",
    "odin_tt": "b09da267d831c8d990de296e3a6f2eef0ea65b163028319b3b7f88c6e3da45dc5d78328810a28ade2b68a52c8cc6fa96eb2d0d3c3b0a9fff9922455ac00484d2",
    "passport_auth_status": "cc48d68b7db01840a4b70b29c19eb1ef%2C",
    "passport_auth_status_ss": "cc48d68b7db01840a4b70b29c19eb1ef%2C",
    "uid_tt": "899a8db87016a3bf66bc8bb6a4baa55e",
    "uid_tt_ss": "899a8db87016a3bf66bc8bb6a4baa55e",
    "sid_tt": "fbb7609adb23d17596831d9c7d6b4b70",
    "sessionid": "fbb7609adb23d17596831d9c7d6b4b70",
    "sessionid_ss": "fbb7609adb23d17596831d9c7d6b4b70",
    "is_staff_user": "false",
    "ucas_c0": "CkAKBTEuMC4wEImIkfCW09WTaBjmJiDrtIGJtI33BCiwITCo6KCqxvR_QKWtncEGSKXh2cMGUKe8md6gx_bZY1huEhSraVmXP8Fvc-TenMpWLxsrowzwfA",
    "ucas_c0_ss": "CkAKBTEuMC4wEImIkfCW09WTaBjmJiDrtIGJtI33BCiwITCo6KCqxvR_QKWtncEGSKXh2cMGUKe8md6gx_bZY1huEhSraVmXP8Fvc-TenMpWLxsrowzwfA",
    "PHPSESSID": "d091c40783f3d61c34c0afabc33a3937",
    "PHPSESSID_SS": "d091c40783f3d61c34c0afabc33a3937",
    "gfkadpd": "4272,23756",
    "s_v_web_id": "verify_maqxxoy8_2sJkX6fG_PICZ_4nvS_9Srf_qyKsBBwfE5c5",
    "csrf_session_id": "56a42a7316043dc0557e9864a6f0c98d",
    "ecom_gray_shop_id": "7976817",
    "sid_guard": "fbb7609adb23d17596831d9c7d6b4b70%7C1747408561%7C5184000%7CTue%2C+15-Jul-2025+15%3A16%3A01+GMT",
    "sid_ucp_v1": "1.0.0-KDRjMmQzNTkxMzZlZjRhZjFlN2JkMTZjYjQwM2E4MjNiMzVjZDM5OGUKGAio6KCqxvR_ELGtncEGGLAhIAw4AkDxBxoCaGwiIGZiYjc2MDlhZGIyM2QxNzU5NjgzMWQ5YzdkNmI0Yjcw",
    "ssid_ucp_v1": "1.0.0-KDRjMmQzNTkxMzZlZjRhZjFlN2JkMTZjYjQwM2E4MjNiMzVjZDM5OGUKGAio6KCqxvR_ELGtncEGGLAhIAw4AkDxBxoCaGwiIGZiYjc2MDlhZGIyM2QxNzU5NjgzMWQ5YzdkNmI0Yjcw",
    "COMPASS_LUOPAN_DT": "session_7505058686134468890",
    "BUYIN_SASID": "SID2_7505056116216611113",
    "ffa_goods_ewid": "89a4245f7b51e964b66bbed69ec2603b",
    "ffa_goods_seraph_did": "undefined",
    "ttwid": "1%7CODBstBmWsM1LLELFom_tNDWRPPGjELv26_s-kXj24BI%7C1747456435%7C5d77ce14a1cb817af92a176e0bb73f991604d0a1c29df193e5a0b200b584985b"
}
url = "https://fxg.jinritemai.com/product/tproduct/downloadTaskResult"
params = {
    "task_id": "793038909330688002",
    "msToken": "fRswjXMVSBaMDR2Q-gVGgopox3a9-YXZ9A05SfxCCN9fXenbkP1RLrHiWhvIqm571IiMqFtndEkm5nMypx5J5tV9AXkClinbvehoRIBy-yeaFaydpbmPU4M1AxnOgE1pBaL89ow3XybboykrjdBaUULLPluL-NccL_Q-sH55",
    "a_bogus": "YfWqQRwgDDgkkVDh5XxLfY3qIfl3Yhq70Gi0MEZMinv7Qg39HMPS9exEVt7vbZYjxT/2Ieujy4hbY3oBrQ2j0qwf9W0L/25hsDSkKl5Q5xSSs1X9eghgJ0sqmkt5SMx2RvB-rOX8qheHKmms09oHmhK4bIOwu3GMaE==",
    "verifyFp": "verify_maqxxoy8_2sJkX6fG_PICZ_4nvS_9Srf_qyKsBBwfE5c5",
    "fp": "verify_maqxxoy8_2sJkX6fG_PICZ_4nvS_9Srf_qyKsBBwfE5c5"
}
response = requests.get(url, headers=headers, cookies=cookies, params=params)

# print(response.text)
file_name = 'downloaded_file.xlsx'
save_dir = 'downloaded_files'
os.makedirs(save_dir, exist_ok=True)  # 确保目录存在
file_path = os.path.join(save_dir, file_name)

# 将响应内容写入文件
with open(file_path, 'wb') as f:
    f.write(response.content)

print(f'文件已成功保存到: {file_path}')
print(response)