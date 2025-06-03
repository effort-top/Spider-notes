import requests
from functools import partial
import subprocess



headers = {
    "accept": "*/*",
    "accept-language": "zh-CN,zh;q=0.9",
    "bx-pp": "78613a34616636333363343366303534663338303038626466623731643436346263373a307c307c617c313734393238393539373133387c6d64357c7177656173647a7863677c317c317c7c574d41506e4f57726662636a51706b697c303a574d41506e4f57726662636a51706b693a303a6334643162666463646466333961383366326262616464333333643239313065623065323766303430613535333538306539316565393637393237616637393564623534663164663062646561323962646438636434653536633030633862643a30",
    "bx_et": "gRnmRVDpRqzX-Md8y0ZX8mcBJW88GoZsbfIT6lFwz7P5MsIxQlviMXfT6Ppb_5PoKiF40qeNjbF735ra3YkzhRfV_rzV43yLCPlT6xpiZ4uWGItb6c2iz4Gg5KNT_5ctQqpJvHHjhlp4jBKpvJhGgvl03-y2QgyUnLeq8RVIdlZw9BepU924fjosIdhqUL2TBR7Z_SzyERyabizN0a5zN7raQl74U3y3dGyVufkyERNz_lzq_uJuCvPAbWmZV0R-7_-po-rsq-40TYYCbGXTE6Fn3FIFx00uoW-LZGSNK-DgzohlxFFERSULrb-RmlDzIjF-THSu4y0IBRcDmirxz4ibD0dhdrcgMyour35uE0DK88Mk-LDojS4E0zXOAurbQfziPBjLno3u-m0XC_kq9S0UcABHMY4nrywzzOb4D2HKfyo2m6N8RRcYwX-FquzN4A_P8w4lf8Jt4N__u8ZQ9uJ-k0mwqD1eELbBlry7HBpkEN__u8wu9LvlR1a4F-dd.",
    "cache-control": "no-cache",
    "pragma": "no-cache",
    "priority": "u=1, i",
    "referer": "https://www.aliexpress.us//item/1005008178115953.html/_____tmd_____/punish?x5secdata=xcsh6QXsGyLVHMQ1pH0Lfok1oPYAWWnFzLmLiSVdF4y3m2nTY3t7VSZrJ4fZgy42ap1k6HnnFVY4ja9tx0wFsG89jrOvGPckykhtGF6cUumi2%2bl2Tuxz1OWkmTVXDHSHh9ygsO9CQrgXH020rZPzQoHOiQfNS1Ip%2fY0awbgQ77gWI2IW9pHOGrxzaFG8NwLjeWHTBKLS5reM5xDbSHXRbDbF%2fhQ%2fcU1D26ahwzFsSleHGN605fr%2bqv8CP%2bqllhAojHQUbM1uGtc74vaebU2frOtMazTrdRCkhxML5ob4hJpfE%3d__bx__www.aliexpress.us%2fitem%2f1005008178115953.html&x5step=1",
    "sec-ch-ua": "\"Google Chrome\";v=\"137\", \"Chromium\";v=\"137\", \"Not/A)Brand\";v=\"24\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36"
}
cookies = {
    "x_router_us_f": "x_alimid=6379246456",
    "sgcookie": "E100uxOFvHQ/nK3S/LPn1SR3KcMHviw1a4djoeADicVOrSuuuS+vqEmvHCpLwbOKtKq1BJhXJyxXbufxZ4e0gy6T+s/kVimND/CYH53aFCXfeH0=",
    "aep_common_f": "1seEi5TXiEM86GxIH+rawfFMa+7Vq/y0sz9yqerbRdqQ213GGlhWOA==",
    "_ga_save": "yes",
    "xman_f": "vtt4UNzgWow8vPdcmMYQdmxcclcj6YgPLa97RZdTj4AtC0p8X0sbSqr8tyZD9jeVl87UKjZuBAe5wUuWhCIiDJhSJwkHwOilh/EMgvBOQt/SXfCTJJyVDcWGCVRKYfV0NckchjH1jMr9LGTXWM5NSArxwu5rKN2g+NhrvpvjDxpxlhn/PwQgflmNID0IkVG2m+TBvpNveceFj9TNL15lEl3t9Zvd5mJR1soGKOkoG/nC6vpFfnjp00p2j1qV5+Ms4l6+9d+34iBQiLTuFfhOTYZs17DVOFwIrD3OxvdnHb02ZGpoFiwF7fjHaomcWyM8fQ6L8dIx1ihf/N7AKXrVn1r9Mqjo38K3SrfWCfT2c0mTB0Lqn3OpDQJCSOM6pl1pksN8MAmTbQw=",
    "lwrid": "AgGXHH5La9DHiAFAYFK%2FX39uI1Bs",
    "cna": "QmC/IMZVojsCAXFUqo1C2Kwq",
    "_gcl_au": "1.1.1740581417.1748529734",
    "_fbp": "fb.1.1748529753461.252847081628933529",
    "_ga": "GA1.1.1756303085.1748529699",
    "xman_t": "df0qby+6DYL/E+RJmG9jhLRL7+ttUB+RYbYgGLQTQXJLgJnX+MTWyHjdZmG8R/Yd",
    "_m_h5_tk": "5d1129746fc28a73a151c9689503aaab_1749275956506",
    "_m_h5_tk_enc": "82d2b51e8c72b45176945708db1ef33e",
    "xlly_s": "1",
    "lwrtk": "AAIEaEQ8jyHVDI48w4nAG1mzl+VPSzxIxbQJ0EAd5jSTN0M56qpXrG8=",
    "xman_us_f": "zero_order=y&x_locale=en_US&x_l=1&x_user=US|503115107|user|ifm|6379246456&x_lid=us1927856056vxeae&x_c_chg=1&x_c_synced=1&acs_rt=6f711bdeb183489ba120d1ffe4e79afc",
    "aep_usuc_f": "site=usa&c_tp=USD&x_alimid=6379246456&isb=y&region=CN&b_locale=en_US&ae_u_p_s=2",
    "aep_history": "keywords%5E%0Akeywords%09%0A%0Aproduct_selloffer%5E%0Aproduct_selloffer%091005008396073656%091005008178115953",
    "__rtbh.uid": "%7B%22eventType%22%3A%22uid%22%2C%22id%22%3A%226379246456%22%2C%22expiryDate%22%3A%222026-06-07T05%3A57%3A36.668Z%22%7D",
    "__rtbh.lid": "%7B%22eventType%22%3A%22lid%22%2C%22id%22%3A%22xgh6pZaFROCFMoohpH9i%22%2C%22expiryDate%22%3A%222026-06-07T05%3A57%3A36.668Z%22%7D",
    "intl_common_forever": "YqowIlQHVXOLHWpjpRBn3g5bwfp4hohMQXHir/CrOD4SBhljC9DIfg==",
    "_uetsid": "1abc8de0435f11f0bc1cdf21b1821c17",
    "_uetvid": "299515a03c9b11f09fb5df6a993eef69",
    "cto_bundle": "ErCynl9ocEFPUDZoSWZyYms4Zm5GayUyRk00QUFXVmMlMkYyMXJsUWw5NXA1V1p3U1loJTJCNUo4b3dYd2x6aFNzcHZtZUNyT0pXdEFQbXAlMkZFczdncndTRm52NEElMkYwVDFZR2JzUHFsZUFnNU9CS2x5NEpaak5ISndnV21kVGdtUFZxRDJzaEY1WXFxa3M3MHRUWCUyQnA1eTVlckRSMnhuTEpjZW1LTWs4cmphTEMyZXlLTHRWbktNNlFHcW9vbzlsTzBmQ25wQmlLaU5pWXdDQ1l6czVxd0RxRVowN0JsSUhBJTNEJTNE",
    "_ga_VED1YSGNC7": "GS2.1.s1749279456$o5$g0$t1749279456$j60$l0$h0",
    "epssw": "9*mmCpboITAxEg0BvO3oTTUKIV2JuAut-OKImTdAmRotePyJjrmcvGdWY4yAvOmmH4dtvOh2DaHFirb7t7Q2CaVAMH-4MFJzVJ0kHFUwVfZRHH7LuJ0RHaVcU-lwvW8eIwyLaOjmFcGnqPe_5J7BEp0uDtrsQs9KpemLdYVNUGNmHm9LvQTlJ4uVufZt0Z5hbSNq7u36q9aMpI69N8x25DgSEejeK5Lr7tF-Hfu1C7iXBZJ-A3MfvVutymmAz7RHgzRQvywbvRKdmm3Ze_CAmamAu0uAa2Cq6yt_TvNeRG5jMo7CRXv-7bWsPr1lveATJKX9crFSxmXLSH7sSR6NDl3Jhu4DiX5g2V",
    "tfstk": "fV3tczar4pvMv_tm5fthne7N_QOHZVhZTAl5o-2GcvHKNbWgchkDkZhZGSmgIRmdljwUCf2D_qHLiSwffrafOyN715N_1G_QdJH1olD05vDnADJNofvqKv4Z-cb0IdzxGY4vELYkrP578r9kE3-OKrU7MGs1n56BRdEo8LTkrfl1waH5-U00Th88H-abfoZCAJP4Grw_lBeQM7SfCxaX9XwUgZ6_ll6CdSNu1vd2HJ1_nZnuPsBcEFMClZg6uleRzRFUt2Luv8hsWZ_Xg5ETFZwpCnNE6kG4Dq5VkRGs4xPSCO9ubjiKp5Uv-GaS9mM8TVTlBWoiOb2Iws7q1Pn-yPi9LMziB2aI50CflXUTQoFTYOpLFVlIzyZHPQhI8AcZJjfXlWDudfu_kUOzWPw_JWuDLNwxAmggbrW6ElljvvFTPgJnr4ehwT28iGOp9iS4hWYBVa9H_zHc9Wek6EIV0kRU98Ap9iS4fWPLECpO0ireT",
    "isg": "BHd3HG3H0wofxlf6yxVfEbz5BmvBPEuelKK2eMkmrMateJa60QxA7HYeWtgmkCMW"
}
url = "https://www.aliexpress.us/item/1005008178115953.html/_____tmd_____/slide"
slidedata = {
    "a":"X82Y__03fee1fb18362850ebc3559710bac035",
    "t":"548f61517c059ff26fca242d0cb5d22d",
    "n":"231\\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"
}
params = {
    "slidedata": "{\"a\":\"X82Y__03fee1fb18362850ebc3559710bac035\",\"t\":\"548f61517c059ff26fca242d0cb5d22d\",\"n\":\"231\\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\",\"p\":\"{\\\"ncbtn\\\":\\\"127|577|42|30|577|607|127|169\\\",\\\"umidToken\\\":\\\"T2gA-hCBSzQV-OIC0oJQpSM4N05qxmGVD0Xt-QG2F87nB0rs8xkpWg7TpJtlg-bmvxw=\\\",\\\"ncSessionID\\\":\\\"5e701e60cecf\\\",\\\"et\\\":\\\"1\\\"}\",\"scene\":\"register\",\"asyn\":0,\"lang\":\"cn\",\"v\":1}",
    "x5secdata": "xe210045a4d998438c548f61517c059ff26fca242d0cb5d22d1749289597a-1168960602a-782047919abaac3aaaaa__bx__www.aliexpress.us%3A443%2Fitem%2F1005008178115953.html",
    "ppt": "2",
    "_rand": "empty",
    "ts": "1749289606314",
    "v": "006327262074792817"
}
response = requests.get(url, headers=headers, cookies=cookies, params=params)

print(response.text)
print(response)