import requests


headers = {
    "accept": "*/*",
    "accept-language": "zh-CN,zh;q=0.9",
    "bx-pp": "78613a63623130643163313537333861356265626366626335343235626464343336313a307c307c617c313734383533313037303433347c6d64357c7177656173647a7863677c317c317c7c427a685a4e687948577263415a56666d7c303a427a685a4e687948577263415a56666d3a303a6437396632666335626262336265663963626138376264663235633236663439313961653239336335313336346662616264656362366364646234666635626236666663323763373134336232313362323662346632626264633662616136373a30",
    "bx_et": "gZOtRgfyUDmg8RdO-Fk3mVDYs6unxvYw8h87iijghHKpPUrGhA-mMSLwlZvGjGvLGEsFfFjm7IKdoZsbCs1bRM_GriZ1fZNQdMK_iOxc1HxHdpoaiFm2xHfwtdVcjc5vl3fxq0coZ1z5TsioqYPeU2C5kN_bmiNCOsbYkKWkOF8NgswkLQsH7rQwzbC1Gn1CdZQPG56XcMTCYZ7bfZNsJ2IFuZw_CiNQAZ_4Gs1XcegduM_1GOtXRxOTWi41DSpkHcy4YjU4MSddWOIYiMFvyCFlCgNCXSFAXNBTIFsLGFOpHipl5GMz-i5GbIQ90bPN1tpyoZKt65tvzB-dR3GYZGTerLXw1xVle1jOHCtxD-Q9EhKVfFZ_CaCOXTO1Lz3W8t9p91As088HJG6RtpDEjtf9XLSPCvoeDeIMcCBQXDjDEeA1p3i39nWvUEbvXfF6VgReZQHMQujRoRgKJ-yVmwk18w2r7_K0JwIo-J2439bFJg0KJ-yVCw7dq2cu3-Wh8",
    "cache-control": "no-cache",
    "pragma": "no-cache",
    "priority": "u=1, i",
    "referer": "https://www.aliexpress.us//item/1005008396073656.html/_____tmd_____/punish?x5secdata=xcOgxHjGMeQrUXriuvBs3OKWx1GV9cKWcQXTqfcw228c3iL70Nkkbv47UnZ4fXrDbslLM%2bMFFRqV5n0ywhOIsqmS3OBubLBjk4U0LMULwrbhuAGOkynOeENJ1mQnViD1mv7phxeEOhNkQr81xxH8EK5TjttSwyVD47e5i6LwfeAOwIWz5X8j0M7YVv41FVOjBLfRVacN4fmTbVDVhVW5L8DD5RToyjW9anA4tl88vARRexsa52U19eYPEP%2bUvc6j4%2fBwqmvFe7ZBinkDBTkNe6HGE0Nfwdl6zvOjcJwqmQNNg%3d__bx__www.aliexpress.us%2fitem%2f1005008396073656.html&x5step=1",
    "sec-ch-ua": "\"Chromium\";v=\"136\", \"Google Chrome\";v=\"136\", \"Not.A/Brand\";v=\"99\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36"
}
cookies = {
    "x_router_us_f": "x_alimid=6379246456",
    "xman_us_t": "x_lid=us1927856056vxeae&sign=y&rmb_pp=503115107@qq.com&x_user=eyUIe1l9tWCHUv88USS0ZkIR3y2ZhlHZKJNmLMvtj9I=&ctoken=qp_3son4zeej&l_source=aliexpress",
    "acs_usuc_t": "acs_rt=0d9281eb8e4b483789754bcc9f7e855e&x_csrf=1dsk1zyuu3lrq",
    "sgcookie": "E100uxOFvHQ/nK3S/LPn1SR3KcMHviw1a4djoeADicVOrSuuuS+vqEmvHCpLwbOKtKq1BJhXJyxXbufxZ4e0gy6T+s/kVimND/CYH53aFCXfeH0=",
    "aep_common_f": "1seEi5TXiEM86GxIH+rawfFMa+7Vq/y0sz9yqerbRdqQ213GGlhWOA==",
    "xman_t": "hzQvcKQvbCnuxOiQP40pHkeTlTflfyQVisfHXqRcqp/uKwaAvby18ZpBEU16vXMjVSzSjBidoi0dpJNv7EAv0W3/fBvsofT6z+L4bZgXQIRu4CgszBSKN6ABcQU9LieSX5HKZI6cRQhkkXCpkPVwR1+eylwr6ZjX0uil1O3AJjEMb6pRL8bgj5DTbX59zkeweOxPAwXI4SJZ78df2VX0bdjn6mbC3+quUVJvb4N02Sg8YBA/FSeaJyGo97En42wDt5zCIBr45RiaQyGLex5+ww8eZWVD/Gb/mRzCS3VixyYw7LQPPN/bomfHqcVcvDf7yCAObCabfzMr5RzrNoQSj5tKr6ztiHLiswiTPHj6BOIwsdYJ3dSyTL8BhYSwvb57ozmPQq4L9EbFltnVjSZ2Ki5TJR7DWkWZHCfdVPqGoyJ/mtwc7Hd1DpoLjLGvSbfD9x6Mc3APScWTAmaq3mZwJGzxJoqP1ro8tKHafIWIUCTbV0pH7IEoXY+MzRUZ6oPewJJQL7HBR+Mq0gmXR8kr4j9NPfpybiITf0emm59mAQRir0cczYAT4EhizC+rIIcBcPnLjyVyPHj6zDNFn/gAWI2g+QpUyjXOaEM4NyA6wuVEC166/VFgqOxtSxujT3kQrr8Mpk3uQsV4RuHZ5RR0e1xfmNKpb7GEEAAiTU8udxdEKPlIwdSRC/TgsNT51EynrEde8LbI1GpQLAtDm0ttA/vS9y3JmIYvLKr0Hgnje4Xzx9TtAj0HbQ==",
    "_ga_save": "yes",
    "xman_f": "vtt4UNzgWow8vPdcmMYQdmxcclcj6YgPLa97RZdTj4AtC0p8X0sbSqr8tyZD9jeVl87UKjZuBAe5wUuWhCIiDJhSJwkHwOilh/EMgvBOQt/SXfCTJJyVDcWGCVRKYfV0NckchjH1jMr9LGTXWM5NSArxwu5rKN2g+NhrvpvjDxpxlhn/PwQgflmNID0IkVG2m+TBvpNveceFj9TNL15lEl3t9Zvd5mJR1soGKOkoG/nC6vpFfnjp00p2j1qV5+Ms4l6+9d+34iBQiLTuFfhOTYZs17DVOFwIrD3OxvdnHb02ZGpoFiwF7fjHaomcWyM8fQ6L8dIx1ihf/N7AKXrVn1r9Mqjo38K3SrfWCfT2c0mTB0Lqn3OpDQJCSOM6pl1pksN8MAmTbQw=",
    "intl_locale": "en_US",
    "xman_us_f": "zero_order=y&x_locale=en_US&x_l=1&x_user=US|503115107|user|ifm|6379246456&x_lid=us1927856056vxeae&x_c_chg=1&acs_rt=6f711bdeb183489ba120d1ffe4e79afc",
    "lwrid": "AgGXHH5La9DHiAFAYFK%2FX39uI1Bs",
    "xlly_s": "1",
    "lwrtk": "AAIEaDjiwH6dq4CXFJplGtPgwEcgRrmQUx3HHQo84j3AF8Ti3O08jq8=",
    "_m_h5_tk": "ad173f24e7f28b8318aedf4356865a3b_1748532070086",
    "_m_h5_tk_enc": "189573eccfbc27a8a805eb99dad58492",
    "cna": "QmC/IMZVojsCAXFUqo1C2Kwq",
    "aep_usuc_f": "site=usa&c_tp=USD&x_alimid=6379246456&isb=y&region=CN&b_locale=en_US&ae_u_p_s=2",
    "_gid": "GA1.2.2027219103.1748529734",
    "_gcl_au": "1.1.1740581417.1748529734",
    "_fbp": "fb.1.1748529753461.252847081628933529",
    "XSRF-TOKEN": "a419ed40-4a36-4acf-88d0-534d1746bb09",
    "aep_history": "keywords%5E%0Akeywords%09%0A%0Aproduct_selloffer%5E%0Aproduct_selloffer%091005008396073656",
    "x5sec": "7b22617365727665722d696e746c3b33223a22307c434e7674346345474550652f304941484b4151773063714c692f332f2f2f2f2f41513d3d222c22733b32223a2233336539376266376436306130353137227d",
    "cto_bundle": "YT5K119ocEFPUDZoSWZyYms4Zm5GayUyRk00QUtLaVVoam1CMFo2NFdVVzFHTXNlWUtiWDF0U05zcSUyRlNHbkdwSWNRVDhpekdKRFF1ZWl6ejg1MUs5TTFiVFclMkZqTFpOUCUyRk43RDlFRGxXUXU1Z3NkTmJLS2VtWEMlMkZNS1h4U0xpQW5SNEZ6cm1tQ0RGYllNWTc4WWl0SFRpV04lMkJGQWJUN0dxdHB2eVllS0JzdnFIZWxYWGslM0Q",
    "__rtbh.uid": "%7B%22eventType%22%3A%22uid%22%2C%22id%22%3A%226379246456%22%2C%22expiryDate%22%3A%222026-05-29T15%3A04%3A21.922Z%22%7D",
    "__rtbh.lid": "%7B%22eventType%22%3A%22lid%22%2C%22id%22%3A%22xgh6pZaFROCFMoohpH9i%22%2C%22expiryDate%22%3A%222026-05-29T15%3A04%3A21.922Z%22%7D",
    "JSESSIONID": "BBC8311714D26ED77D1D075D095C9661",
    "intl_common_forever": "yVGAbRH8orQq51znHhRbZkDAaDZ89h4ShInohF+6LWdc7mJrMsaIcQ==",
    "_ga": "GA1.1.1756303085.1748529699",
    "_gat": "1",
    "_uetsid": "299501e03c9b11f0a8ced36be377f3e4",
    "_uetvid": "299515a03c9b11f09fb5df6a993eef69",
    "_ga_VED1YSGNC7": "GS2.1.s1748529734$o1$g1$t1748531070$j32$l0$h0",
    "epssw": "9*mmCwymAeROZUWcvR3ts6kC0yjGA70Imm3tZ7cohadSZRqttVmmmmmmmmutx72tTtYiJLmrWYSAu00DmhsKzruuwweTzMJVJmIfJR9LL3KcV3MKlHr8lFQV9OJNXjdn1t23ijyev0uiammKR7AzmUxR8aWgA9cpNbW84hEtslMai7-cUhnWTsKn1uuRmm9ND9Vsvut7VuupJ3fwa0gEZrADRS-8TyapKR2ATba-dP_GO38832IaLdYhYrm7cu4tvO35iqLRmmmmHXdimm8pJLTtLOhVfCz1SGH-HE6Imj3cd_vHFsA3pZGuZ40CV25dCTkpJE-tW4Ks64n3mXZp0Fd4FqBK50_I..",
    "tfstk": "fGAqcgwTGjh4A8pG4g1a4fWeeGCAT6nIjCs1SFYGlij0GSZMUhtklKN11OVwSFBghi1D4f8pYtscn1YuZNQgjS2cSUqlSww0IFA1SC-R2mnxMjK5S3tnDmdwW57MSh3AfqHWkECOs4ZHbXTvkXwTzdAVn_Xkyw2coRuGmk5OsDi5R44Fo1K0joZE3U0P5N_gmhjcE47GS1VcIS2uqgQGsGxGITjlJNz0iijGZvmAjMNP8t09x4CqGXecnMYcmETXZbWzHESy-FAluUSHoRFgsQlN3QAMefcFhdYdpIOm_7CX8LflREh4a6Yc8nsWxXVPZUTkf9p-XW6J4CWpit4irgA24ICDcAVeYs-NKIXzS5TDoiCPrB0_pgOPchAVE2NFC_ACKsvSem61gw-MMnzasHYWRIBJ_DrlXK_dZwTxg75HoNjPLlQltLO93l2NnaQPAXlHRrMYdHk396yTBtpRzMgxkReOnaQPA4uzBRBA9aSIkqC..",
    "isg": "BGVlVsm7YVykmoWApbtNKzp_dCGfohk0xk9-YWdIFRyrfoTwL_JZBTBYCOII_jHs"
}
url = "https://www.aliexpress.us/item/1005008396073656.html/_____tmd_____/slide"
params = {
    "slidedata": "{\"a\":\"X82Y__03fee1fb18362850ebc3559710bac035\",\"t\":\"7809b0c75b2ea03fce1323ff06ace2df\",\"n\":\"231\\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\",\"p\":\"{\\\"ncbtn\\\":\\\"91.5999984741211|433|41.60000228881836|29.600000381469727|433|462.6000003814697|91.5999984741211|133.20000076293945\\\",\\\"umidToken\\\":\\\"T2gAmZUDnRQ5N4XTwXRLj6ftD3GACd5lFJ1lSKNTTrjjj9qMmBPLZfqAfXKOp8MVsSo=\\\",\\\"ncSessionID\\\":\\\"895d44aa621\\\",\\\"et\\\":\\\"1\\\"}\",\"scene\":\"register\",\"asyn\":0,\"lang\":\"cn\",\"v\":1}",
    "x5secdata": "xe685e2576348f3eae7809b0c75b2ea03fce1323ff06ace2df1748531070a-1168960602a-782047919abaac3aaaaa__bx__www.aliexpress.us%3A443%2Fitem%2F1005008396073656.html",
    "ppt": "1",
    "_rand": "empty",
    "ts": "1748531100224",
    "v": "006914804103389294"
}
response = requests.get(url, headers=headers, cookies=cookies, params=params)

print(response.text)
print(response)