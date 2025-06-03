import time

import requests


headers = {
    "accept": "*/*",
    "accept-language": "zh-CN,zh;q=0.9",
    "bx-pp": "78613a61356164376666663331336562303232383161383864373232373335643332333a307c307c617c313735313137353737353639347c6d64357c7177656173647a7863677c317c317c7c53535a4b4c626774765a4c6f455162787c303a53535a4b4c626774765a4c6f455162783a303a6539306164666134396633616165376438643237633939323332333562636365633832326531353963373438313937333830633439633735656234373633646266353064613934323436626361623133303333336433393966363331633633343a30",
    "bx_et": "g_FmRO4dd-kXyrs-e7GfLZp4AV6JhjG__ldtXfnNU0oWMlhx6ARgqkyxWVevshoujfUAlCUZQkU6MASjM5qo4lAvkPIbqC4bxSpxXZZu28y5ciiTkVq8U8ZiCZitbcqT7-QR96UblfGZsMCd99GlYCZm7KlN7Qux5a3Viw10RfGNvM3dze0q1oS6NrE4za0tWI84bmkPrVuZ_IkwgL-rV0lZufuqz3ut8Cu2glzPrVirbfk4bb7o5x9D_DVaN7SRfAbal213EqDmYro4krFP1Yvbo02LB7u0rDz2CCRaZqD0ax-hLODYQyMQMS5MNjU3UbuLlsAoTru3D0EFTQczyzrtd8s69YZusvNq3F7r4SquGjrAQBqnilDUgYYw6rzqcb0zTNpI27mYbSDPJBDtaWHEg8B5DAhm-lPbmFAaYzULGYNGx3o_H2GrJr1DZXzq7gW2UpogOCgPW7J6CxuSrDh_g5ArrGiXVabkdtMqPqIdrav6CxuSrDQlrpts34gAv",
    "cache-control": "no-cache",
    "pragma": "no-cache",
    "priority": "u=1, i",
    "referer": "https://shoprenderview.aliexpress.com//async/execute/_____tmd_____/punish?x5secdata=xcI8FKuC1TypH4poVfjddJ5o3g%2fqFWxj5gbmoJ%2fj%2f7KZSOtew%2bSvrWhirg%2fTV%2bDiokT3knsBUMwMXjwaJA7eG9UDSJANwHNZ8c1rKzDENczL3AW2KG%2bPC2TXrfQ9g0X7abjn2VSmz29wxjP3SJwd0ZJgTmd7M12RJuMoEaEy2xRfIWKe5KVDXjHHo1fhu3L14YXvlpnni3MLdh%2f7Ayz7jcxhcojRWnNDS2ibGJ06X7ux7MNykQK8fq06qw%2f9wDr6lDCxvaVJLrjXGuTsflVGQRigjTFzk1RkXSQF4%2fM6rIoO4%3d__bx__shoprenderview.aliexpress.com%2fasync%2fexecute&x5step=1",
    "sec-ch-ua": "\"Not)A;Brand\";v=\"8\", \"Chromium\";v=\"138\", \"Google Chrome\";v=\"138\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36"
}
cookies = {
    "cna": "IWC/IEUME28CAXFUqo2mYX7V",
    "ali_apache_id": "33.5.157.190.1751175776658.737542.8",
    "xman_us_f": "x_locale=en_US&x_l=1&x_c_chg=1&acs_rt=a2ca553f01704f0fa80923b7d2f33ce2",
    "intl_common_forever": "/YJeXe3YbNURhFHBYpK0mwErUf/C8D8mtetvf6h4VaQ/Pn770MtzeA==",
    "intl_locale": "en_US",
    "xman_f": "60eeLsZR4Qn4KnjbZOKVscHYGuOADRizV4TautRFLlStDppDpGy+mOMLPLAKxDEQmGuaT3j5Tu0NHIPCZD5FUFg1YKTy58dsgwUjjUynQhoA0wmfeU7U8Q==",
    "acs_usuc_t": "x_csrf=w9jyycgsrrr9&acs_rt=a2ca553f01704f0fa80923b7d2f33ce2",
    "xman_t": "8fqFb+8CVwEnz6lgl473EadDjnn31omr1AceKQ6gIkgL7QsHwM5ee14RcFz475s9",
    "aep_usuc_f": "site=glo&c_tp=USD&region=CN&b_locale=en_US",
    "tfstk": "gSPrRUvpN_Cyh8n-ESGe0F0u6KG-sXS1xWiI-y4nP0moVWZU-yrZdW_-dpfUfPHhykwWTe4LR8OSVymUYoixqanWFJoEml-QFg3S-Bo0HgIRw_33TleA2gFUJBu3-kQ-AaBbyzhKtGs_Y1a8yQoUmSFrKs40kV8kZtMuV3-JtGs111tk6gLdfk1KDWSqJm0o-0vlum0EmQm3x0DDmVuttXqnErAmWV3ktDDkmZuKmDcntkccu2imxv7uryAq5YbpOYcuhw5-ac4o0BAwW4klhrvBTBPqzYP3rmujlSurUcD3gb20Zoa3N7HAbhcLlRrUKkB6Hbz3Eb0_y_Rqsz2bTqNCRpou2Sz0wx8w_Xyu4JDT31ptEvozn7D2-B4xi8D_LuSye0270A3mne5tlli0y72VJn4uf0loox1G7rD3h7HTNiArsRUSNJqdCKhz-8cV4KxKof2b98-HLY0xuc_VuvS05dDlPgEBppHm6qo1P49ppY0xuc_VuppKnm3qfag5."
}
url = "https://shoprenderview.aliexpress.com/async/execute/_____tmd_____/slide"

n = '231!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'


params = {
    "slidedata": "{\"a\":\"X82Y__9feb04e69d79f63f300b53770d5e0f0d\",\"t\":\"1ad7b59c1be5e05cc868de18ca297c7f\",\"n\":\"%s\",\"p\":\"{\\\"ncbtn\\\":\\\"273.5|577|42|30|577|607|273.5|315.5\\\",\\\"umidToken\\\":\\\"T2gAmYc3QMuS3d7tqldZl6ZWFFaQpur_fLmY9sUFahizGXGhIujGvQaWy6kV9lRh60Q=\\\",\\\"ncSessionID\\\":\\\"5e701e8774ec\\\",\\\"et\\\":\\\"1\\\"}\",\"scene\":\"register\",\"asyn\":0,\"lang\":\"cn\",\"v\":1}" % n,
    "x5secdata": "xe2b1f746cac574ee31ad7b59c1be5e05cc868de18ca297c7f1751175775a-1168960602a-394158536abaac3aaaaa__bx__shoprenderview.aliexpress.com%3A443%2Fasync%2Fexecute",
    "ppt": "4",
    "_rand": "empty",
    # "ts": "1751176045000",
    "ts": str(int(time.time()*1000)),
    "v": "06171829278784486"
}
print(params)
response = requests.get(url, headers=headers, cookies=cookies, params=params)

print(response.text)
print(response)