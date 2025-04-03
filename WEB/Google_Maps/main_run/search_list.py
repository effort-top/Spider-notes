import requests

# cookies = {
#     'AEC': 'AVYB7cpz9J_QWvJl0gtl4_5rY1ZxpvBaJ8S_vPs0WEhcntGTaM9cKpQ8pso',
#     'HSID': 'A2hhVVh8DG8t4mI_x',
#     'SSID': 'A1dmllw-KDuhZHoBR',
#     'APISID': 't3Kjen4aZwgCR3aE/AV8Y_1m9h-sGvVUzK',
#     'SAPISID': 'FBCFBNBi7wiXPpgJ/ALXny3mtQI_KWOXfh',
#     '__Secure-1PAPISID': 'FBCFBNBi7wiXPpgJ/ALXny3mtQI_KWOXfh',
#     '__Secure-3PAPISID': 'FBCFBNBi7wiXPpgJ/ALXny3mtQI_KWOXfh',
#     'SEARCH_SAMESITE': 'CgQIpJwB',
#     'sensorsdata2015jssdkcross': '%7B%22distinct_id%22%3A%22190edebc012fe8-04475b5f965e88c-26001f51-2073600-190edebc01310a8%22%2C%22first_id%22%3A%22%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E7%9B%B4%E6%8E%A5%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%22%2C%22%24latest_referrer%22%3A%22%22%7D%2C%22identities%22%3A%22eyIkaWRlbnRpdHlfY29va2llX2lkIjoiMTkwZWRlYmMwMTJmZTgtMDQ0NzViNWY5NjVlODhjLTI2MDAxZjUxLTIwNzM2MDAtMTkwZWRlYmMwMTMxMGE4In0%3D%22%2C%22history_login_id%22%3A%7B%22name%22%3A%22%22%2C%22value%22%3A%22%22%7D%2C%22%24device_id%22%3A%22190edebc012fe8-04475b5f965e88c-26001f51-2073600-190edebc01310a8%22%7D',
#     'SID': 'g.a000qAg5e1lMuqcaf3UdgF-ySGyLBwO0f82qSofRZDHqVYap6hjLLCu0R4-7IQVd4ftFfudc7QACgYKARISARISFQHGX2MiqvRShH3gX14FT7Y_xkhcmRoVAUF8yKo-AZmL2ptO4p_JkDGt34VY0076',
#     '__Secure-1PSID': 'g.a000qAg5e1lMuqcaf3UdgF-ySGyLBwO0f82qSofRZDHqVYap6hjLO4Wh4pQaLED1DPLd4OqYvAACgYKAcESARISFQHGX2MibYD238gL8TLQQQihwvyuthoVAUF8yKqf2j9HN1eazECZ4n7cJW8V0076',
#     '__Secure-3PSID': 'g.a000qAg5e1lMuqcaf3UdgF-ySGyLBwO0f82qSofRZDHqVYap6hjL8FMqKf1itdL28xMlOObb1gACgYKARkSARISFQHGX2Mi2duXnbSWvki7p84CwV2OBxoVAUF8yKqiIWsI1_01s7_RL8QFE3Ie0076',
#     '__Secure-1PSIDTS': 'sidts-CjIBQT4rX2wTaaDCChr3HmY6TDQFS9XiD8D1uxO8I5JiarSpq4PxKANHGZJlBw4iI3duIRAA',
#     '__Secure-3PSIDTS': 'sidts-CjIBQT4rX2wTaaDCChr3HmY6TDQFS9XiD8D1uxO8I5JiarSpq4PxKANHGZJlBw4iI3duIRAA',
#     'NID': '519=MO2U9hJQ30T_ZtP-ukdbQFXC1SrL39RYdVs9jDal9JLUxvSYidRwNGya9O3K5OdWYVBzgzQZG2xhEi55LmO_fMe6ACHRdZBQcQGQRkgAeqCrBWPnSX0HEP7IgCgUFVG5aDVnCDll9Nq-jmchSRdaaMS1telORTJD3B9fucihhapoQ9oOL9vJtCk7Vvyrk-8jJJpqxyBJN4PiDG1ixGf0XtR0_kdkyfc7wtv0Pag238Teuf262nB2i3y_N7q3eLZg1PUj-sufv_BIUfFcPlPaQFD40xBg-QBofW2vbMPEIa7o_v1p1aWyYqVQoyIvRKCixPE60wM9E5w5Qg3pj7pFOY7PUGx3dOUKphfinVbd2cczqFJNds9TUiwfgGbU2Jev4mQR7TH1Mg03mHW-v9bJzpKMt0R_ao245OjP9FK3n5_MHyMrJXvdN2bOzZFfwJEslHTx5lws-ucULYSPrVwxsT9ep4TrdL-rR6Paf4bKrRWbJKt_mCbl-fLL91v0flr7zZkT1NwhfpKUK163KkljJugUn1oyKKmewUH_RJX8DBryILkldV0xcbwhnB0WB1hbB0M8olONAhaV9XVeAB0C7ixsfLxJ6EyMfKcMW3jb_OUvhFPf_ZZdqjj3lj6DT6DXcBDA98mjPVZ5jXCRRlCgmbxBR52IYFnYnLb9CugupO8Q0C-blshdkovYgNPX8LWFaH5RbeA2adaSgASVqv0KtOw',
#     'UULE': 'a+cm9sZTogMQpwcm9kdWNlcjogMTIKdGltZXN0YW1wOiAxNzMyMTU2NDIwMTg1MDAwCmxhdGxuZyB7CiAgbGF0aXR1ZGVfZTc6IDIyNTMyMjU2MAogIGxvbmdpdHVkZV9lNzogMTEzOTQ1NDc5MAp9CnJhZGl1czogMjQxMDAwCnByb3ZlbmFuY2U6IDYK',
#     'SIDCC': 'AKEyXzWbazO60qjJ64esKV6pL4u81jngxvv7t_WcEMlsY4TC-VeloBMHF4SVk36sxNxsJ7M1RQ',
#     '__Secure-1PSIDCC': 'AKEyXzXpdl6LKhnODkIescsCpUgfi4mMDQ1vnhQnTOYCc_SuOfr9HTiLPZLZRmv4eyvmqkuqNg',
#     '__Secure-3PSIDCC': 'AKEyXzV-MHrrlei1xvm2cFNYydLPBYgypou18XTpKNAEqf4NChnYc8ir2_LmKeFLHhhHOgH6FA',
# }
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
headers = {
    'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
    'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6',
    'cache-control': 'max-age=0',
    # 'cookie': 'AEC=AVYB7cpz9J_QWvJl0gtl4_5rY1ZxpvBaJ8S_vPs0WEhcntGTaM9cKpQ8pso; HSID=A2hhVVh8DG8t4mI_x; SSID=A1dmllw-KDuhZHoBR; APISID=t3Kjen4aZwgCR3aE/AV8Y_1m9h-sGvVUzK; SAPISID=FBCFBNBi7wiXPpgJ/ALXny3mtQI_KWOXfh; __Secure-1PAPISID=FBCFBNBi7wiXPpgJ/ALXny3mtQI_KWOXfh; __Secure-3PAPISID=FBCFBNBi7wiXPpgJ/ALXny3mtQI_KWOXfh; SEARCH_SAMESITE=CgQIpJwB; sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%22190edebc012fe8-04475b5f965e88c-26001f51-2073600-190edebc01310a8%22%2C%22first_id%22%3A%22%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E7%9B%B4%E6%8E%A5%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%22%2C%22%24latest_referrer%22%3A%22%22%7D%2C%22identities%22%3A%22eyIkaWRlbnRpdHlfY29va2llX2lkIjoiMTkwZWRlYmMwMTJmZTgtMDQ0NzViNWY5NjVlODhjLTI2MDAxZjUxLTIwNzM2MDAtMTkwZWRlYmMwMTMxMGE4In0%3D%22%2C%22history_login_id%22%3A%7B%22name%22%3A%22%22%2C%22value%22%3A%22%22%7D%2C%22%24device_id%22%3A%22190edebc012fe8-04475b5f965e88c-26001f51-2073600-190edebc01310a8%22%7D; SID=g.a000qAg5e1lMuqcaf3UdgF-ySGyLBwO0f82qSofRZDHqVYap6hjLLCu0R4-7IQVd4ftFfudc7QACgYKARISARISFQHGX2MiqvRShH3gX14FT7Y_xkhcmRoVAUF8yKo-AZmL2ptO4p_JkDGt34VY0076; __Secure-1PSID=g.a000qAg5e1lMuqcaf3UdgF-ySGyLBwO0f82qSofRZDHqVYap6hjLO4Wh4pQaLED1DPLd4OqYvAACgYKAcESARISFQHGX2MibYD238gL8TLQQQihwvyuthoVAUF8yKqf2j9HN1eazECZ4n7cJW8V0076; __Secure-3PSID=g.a000qAg5e1lMuqcaf3UdgF-ySGyLBwO0f82qSofRZDHqVYap6hjL8FMqKf1itdL28xMlOObb1gACgYKARkSARISFQHGX2Mi2duXnbSWvki7p84CwV2OBxoVAUF8yKqiIWsI1_01s7_RL8QFE3Ie0076; __Secure-1PSIDTS=sidts-CjIBQT4rX2wTaaDCChr3HmY6TDQFS9XiD8D1uxO8I5JiarSpq4PxKANHGZJlBw4iI3duIRAA; __Secure-3PSIDTS=sidts-CjIBQT4rX2wTaaDCChr3HmY6TDQFS9XiD8D1uxO8I5JiarSpq4PxKANHGZJlBw4iI3duIRAA; NID=519=MO2U9hJQ30T_ZtP-ukdbQFXC1SrL39RYdVs9jDal9JLUxvSYidRwNGya9O3K5OdWYVBzgzQZG2xhEi55LmO_fMe6ACHRdZBQcQGQRkgAeqCrBWPnSX0HEP7IgCgUFVG5aDVnCDll9Nq-jmchSRdaaMS1telORTJD3B9fucihhapoQ9oOL9vJtCk7Vvyrk-8jJJpqxyBJN4PiDG1ixGf0XtR0_kdkyfc7wtv0Pag238Teuf262nB2i3y_N7q3eLZg1PUj-sufv_BIUfFcPlPaQFD40xBg-QBofW2vbMPEIa7o_v1p1aWyYqVQoyIvRKCixPE60wM9E5w5Qg3pj7pFOY7PUGx3dOUKphfinVbd2cczqFJNds9TUiwfgGbU2Jev4mQR7TH1Mg03mHW-v9bJzpKMt0R_ao245OjP9FK3n5_MHyMrJXvdN2bOzZFfwJEslHTx5lws-ucULYSPrVwxsT9ep4TrdL-rR6Paf4bKrRWbJKt_mCbl-fLL91v0flr7zZkT1NwhfpKUK163KkljJugUn1oyKKmewUH_RJX8DBryILkldV0xcbwhnB0WB1hbB0M8olONAhaV9XVeAB0C7ixsfLxJ6EyMfKcMW3jb_OUvhFPf_ZZdqjj3lj6DT6DXcBDA98mjPVZ5jXCRRlCgmbxBR52IYFnYnLb9CugupO8Q0C-blshdkovYgNPX8LWFaH5RbeA2adaSgASVqv0KtOw; UULE=a+cm9sZTogMQpwcm9kdWNlcjogMTIKdGltZXN0YW1wOiAxNzMyMTU2NDIwMTg1MDAwCmxhdGxuZyB7CiAgbGF0aXR1ZGVfZTc6IDIyNTMyMjU2MAogIGxvbmdpdHVkZV9lNzogMTEzOTQ1NDc5MAp9CnJhZGl1czogMjQxMDAwCnByb3ZlbmFuY2U6IDYK; SIDCC=AKEyXzWbazO60qjJ64esKV6pL4u81jngxvv7t_WcEMlsY4TC-VeloBMHF4SVk36sxNxsJ7M1RQ; __Secure-1PSIDCC=AKEyXzXpdl6LKhnODkIescsCpUgfi4mMDQ1vnhQnTOYCc_SuOfr9HTiLPZLZRmv4eyvmqkuqNg; __Secure-3PSIDCC=AKEyXzV-MHrrlei1xvm2cFNYydLPBYgypou18XTpKNAEqf4NChnYc8ir2_LmKeFLHhhHOgH6FA',
    'priority': 'u=0, i',
    'sec-ch-prefers-reduced-motion': 'no-preference',
    'sec-ch-ua': '"Chromium";v="130", "Not?A_Brand";v="99", "Google Chrome";v="130"',
    'sec-ch-ua-arch': '"x86"',
    'sec-ch-ua-bitness': '"64"',
    'sec-ch-ua-full-version-list': '"Chromium";v="130.0.6723.117", "Not?A_Brand";v="99.0.0.0", "Google Chrome";v="130.0.6723.117"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-model': '""',
    'sec-ch-ua-platform': '"Windows"',
    'sec-ch-ua-platform-version': '"15.0.0"',
    'sec-ch-ua-wow64': '?0',
    'sec-fetch-dest': 'document',
    'sec-fetch-mode': 'navigate',
    'sec-fetch-site': 'same-origin',
    'sec-fetch-user': '?1',
    'service-worker-navigation-preload': 'true',
    'upgrade-insecure-requests': '1',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36',
}

params = {
    'entry': 'ttu',
    'g_ep': 'EgoyMDI0MTExOC4wIKXMDSoASAFQAw==',
}

response = requests.get(
    'https://www.google.com/maps/search/cookie/@25.2242638,45.7537155,12z/data=!3m1!4b1!4m6!2m5!3m4!2s25.2491,+45.8767!4m2!1d45.87672!2d25.249094',
    params=params,
    cookies=cookies,
    headers=headers,
)

print(response.text)
