import requests
import json
from loguru import logger

headers = {
    "accept": "application/json, text/plain, */*",
    "accept-language": "zh-CN,zh;q=0.9",
    "cache-control": "no-cache",
    "content-type": "application/json;charset=UTF-8",
    "dsm-eid": "jdd033ABO6GTB5C2EWAJYINS32JFWC4HXMGHBPUA65RMERXTHWB2HRUWPHLQDZVOGD5PIZKECNT7ZTI5QW2WI762OUFVO4UAAAAMWY6NUTYIAAAAADRTDZIOIVNWC2MX",
    "dsm-file-path": "lineation-price",
    "dsm-lang": "zh-CN",
    "dsm-platform": "pc",
    "dsm-site;": "",
    "dsm-trace-id": "e2c95a60-255a-4eaa-b046-51a2f99a6c36",
    "h5st": "20250513110716486;igdg9wpx9jjpjqq1;0248a;tk03wa2101c3918nGhv4MJhW1JS4fiuEPBqQPlBNDoHlG_mi9SpUKEH4xry3mpd69ZXg-PWkVdlCukVQQdMy-NOTQkx3;075395d0fc8d093388c27acf49db29531d2e7f1795d4db877fccbe4410a939b0;5.1;1747105633486;ri_uxFOm9qXSEtHUEJrQ_RXgHd4VFlsm0msSIlsmOGuj8qrm0mMTLhImOuMsCmcW6eIiLRbV8qLh7KLi9WIh1KLiNp7hIhbh6ObW5Wbi2msm0msSo94VMZ4RMusmk_MmLhrg5aIVMtbg1OLh5OLiLJbhKJ7i2a4h_iog1irh6WLmOGLm7pIRAp4WMusmk_siOGLm6aHWMusmk_Mm72ciAaLRPZoTFV4X5OImOGLm4lsmOGujMmZaLZpQJFHiIxKmOGLmBxoVApISMusmk_Mm8iLTFRJmOGLmItHmOuMsC6nmOGOiOGLm9qbRMlsmOusmk_cgOGLm_qbRMlsmOusmk_sgBuMgMmbi5lImOusmOGujMK5c1R7iPhYgVpLi4GJmOGLmBxoVApISMusmOuMsCurm0msg5lImOusmOGuj_uMgMSbRMlsmOusmk_8i7uMgMWbRMlsmOusmk_siOGLm5aHWMusmOuMsCurm0msh5lImOusmOGuj6erm0m8i5lImOusmOGujMaLj92siMuMgMqbRMlsmOusmk_siOGLmDRHmOusmOGuj5uMgMinTMusmOuMsCurm0msTMusmOuMsCurm0msV3lsmOusmkCnm0msVAZoR2ZImOuMsC6nmOGOm2Obg6KbgaBaYMuMgMmrSMusmOuMsztMgMunSMusmk_Mm6WrQOCrh42YUXt8g_2si9usZgt8S3xoVAJ4ZMuMgMqYR7lsmOG_Q;4000edc3e6d2fd41e8f73545de3c8db725687b83f4ddfc5095d18837afed3311;smORCKnV-lojKJqS_pojFtXW",
    "origin": "https://wares-jdm.jd.com",
    "pragma": "no-cache",
    "priority": "u=1, i",
    "referer": "https://wares-jdm.jd.com/list/OnsaleWare?firstQuery=1",
    "sec-ch-ua": "\"Chromium\";v=\"136\", \"Google Chrome\";v=\"136\", \"Not.A/Brand\";v=\"99\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36",
    "x-requested-with": "XMLHttpRequest"
}
cookies = {
    "__jdv": "168485690|direct|-|none|-|1747105252632",
    "language": "zh_CN",
    "__jdu": "1747105252631609006048",
    "TrackID": "1priAnzs71_UAGdpa2vQFo0jDMcDQDAJcJRaGom7Fv5C5oU3hZ9K-GBtbIYJwmCIXvfa9ywV1tHLnlO9BqmWPrE3egPZz_jMqf0GZVf1YDAE",
    "light_key": "AASBKE7rOxgWQziEhC_QY6yaw2wUO6F1hMw-IvintnNO4O1V0_7OcDFtLQ_yHQvkanoqzcEQ",
    "pinId": "TdcIUR6SrpsLmJu4WZwXtg",
    "pin": "YKT994988",
    "unick": "v59fo00w1shlxl",
    "ceshi3.com": "000",
    "_tp": "2k1ZoEhUQ3UJqT0h9xUiUw%3D%3D",
    "_pst": "YKT994988",
    "__USE_NEW_PAGEFRAME__": "true",
    "__USE_NEW_PAGEFRAME_VERSION__": "v11",
    "_s_vender_": "CIKMQ2MJXM436AX2EYHLXPHZCOQWHXIHCUCEPNPBQAI52B5DFMBQR6MXXJKBMD7NC4ATQ5WJY26U4QNG2MSKMKN5TEFRJUMPYECOAWYHWFCDAG7NYMLGHEBRGDMR2NUDFUF45ISJNUUZRFNEZPUCHKZDQABURELRLZASYOFVRFBXDTCE7GTLZSHBUWH3X2FUP5GJEW7UXYS5EDVZLFU7KHZAPGTE4TJJJAKINPWIIS7CW6G2YUZXINKDTRI52PRSB5CN4VOOYLR5E7NXPX65JTVGFELNMKM23D5YXZAWHQQEVZRBQ2HSQU24KAKEXAUUYE47GYWXHXH65O344KFV7YX6VE",
    "_s_base_": "CIKMQ2MJXM437PY2QNUHYGTYIOTVQCK4A5CV62GZZXUOXZALDIOVKCSACHPID3O4FKBQ6NCPIK34INHFVQ2SERZAVB2EW34ZQS4AYSIDKVQ47XDQKGOWDMTNIEA657VO4CY2NBIP4DAFAZVDF3IMKDFCNUQ5U4V3F6AUOPFM4LSVMMFAWYAA",
    "_base_": "YKH2KDFHMOZBLCUV7NSRBWQUJPBI7JIMU5R3EFJ5UDHJ5LCU7R2NILKK5UJ6GLA2RGYT464UKXAI4Z6HPCTN4UQM3WHVQ4ENFP57OCYR7V4R7KDJ2BTJDQYX2BHYAUI4TCNE6YVKRXISVAJUTK7FARF6W3TPWA3DW2RLWZCSG4SOQWCP5WPWO6EFS7HEHMRWVKBRVHB33TFD562Z37RUUJK3BSOUSNAMEO63UUUPYFGCHJIPTO3T2YOEI4W2UHPJFJ3W4ALLTOBXCKCKRFSXSZNINIG7H7SMMQPEIHTDJKXDEVH7G4OZZZJYSJEAJFZVHAQJFXMZ5K3G4LWSR2P4RAFL767XFLXQUMNDJOFI47KWU4CLWP7LTG6K37J5NCI2",
    "3AB9D23F7A4B3C9B": "3ABO6GTB5C2EWAJYINS32JFWC4HXMGHBPUA65RMERXTHWB2HRUWPHLQDZVOGD5PIZKECNT7ZTI5QW2WI762OUFVO4U",
    "3AB9D23F7A4B3CSS": "jdd033ABO6GTB5C2EWAJYINS32JFWC4HXMGHBPUA65RMERXTHWB2HRUWPHLQDZVOGD5PIZKECNT7ZTI5QW2WI762OUFVO4UAAAAMWY6NUTYIAAAAADRTDZIOIVNWC2MX",
    "_gia_d": "1",
    "thor": "5C602CF7B46A7DAFDF15D1F2F60C3061F3B540CECEA48C76B183AE2B3A7FA4CA8F68C3EAE434C5DE787DF8EAF64FB8B8277B78E56D1E553AE0E80EB926FAD2B59C1EFD760C55F0B17A3FBDCF5F7F67526552CDF45B5D383E7E9AAA45FA8DE996EC28DA27BEA2350A21822A84BE1EA1365CA86D2ED4F970F487E8545E17F0D2EAB9F88C133A3E79264BDA630FCB2A045D",
    "flash": "3_Mc9m_WJPq2yKEM7qn76TzL6ToCIuG2erCMNIWsUnS7uYs6I1S4hqt-8UHFtkenLA0f-wk8pQtxebJUwBDjFco4BmAG1SbVNWgpovvl1oxu5Q8PkS2_jITroTchizr4O-nSCIznLRJMfPOCnYTe**",
    "__jda": "153631422.1747105252631609006048.1747105253.1747105253.1747105253.1",
    "__jdc": "153631422",
    "__jdb": "153631422.22.1747105252631609006048|1.1747105253"
}
url = "https://sff.jd.com/api"
params = {
    "v": "1.0",
    "appId": "3MC69M4R3HFKCQ4S01DN",
    "api": "dsm.wareshopv2.ware.wareListService.queryWareList"
}
data = {
    "accessContext": {
        "belongType": 1,
        "accountType": 1,
        "source": "web",
        "originType": None
    },
    "wareListQuery": {
        "pageNo": 1,
        "pageSize": 10,
        "wareListTab": 2,
        "orderBy": "onsaletime,desc",
        "productName": None,
        "skuIds": None,
        "categoryMemoryIds": None,
        "custom_productId": None,
        "sale": None,
        "jdPrice": None,
        "shopCategoryLevels": None,
        "stockNum": None,
        "brandId": None,
        "itemNum": None,
        "onlineTime": None,
        "productType": None,
        "offlineType": None,
        "onlineTimeStart": None,
        "onlineTimeEnd": None,
        "offlineTimeStart": None,
        "offlineTimeEnd": None,
        "publishTimeStart": None,
        "publishTimeEnd": None,
        "modifyTimeStart": None,
        "modifyTimeEnd": None,
        "shopCategory": None,
        "categoryId": None,
        "multiCategoryId": None,
        "startSaleNum": None,
        "endSaleNum": None,
        "jdPriceMin": None,
        "jdPriceMax": None,
        "stockNumMin": None,
        "stockNumMax": None,
        "productIds": None
    }
}
data = json.dumps(data, separators=(',', ':'))
response = requests.post(url, headers=headers, cookies=cookies, params=params, data=data)
response_json = response.json()
goods = response_json['data']['data']
for good in goods:
    productName = good['productName']
    logger.info(productName)

logger.info(response.text)
logger.info(response)