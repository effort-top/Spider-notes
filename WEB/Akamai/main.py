import requests
import json


headers = {
    "authority": "www.klm.com.cn",
    "accept": "application/json;charset=utf-8;hashcash=ac2091ed827535a6a1a506922b1d8fb1ced70969d36ddd8b58b9cf99b4cfa940-2",
    "accept-language": "zh-CN",
    "afkl-travel-country": "CN",
    "afkl-travel-experimentationids": "{\"deviceId\":\"0cd80fa3-60d3-4067-b129-76d4407abbe9\"}",
    "afkl-travel-host": "KL",
    "afkl-travel-language": "zh",
    "afkl-travel-market": "CN",
    "content-type": "application/json",
    "country": "CN",
    "language": "zh",
    "origin": "https://www.klm.com.cn",
    "referer": "https://www.klm.com.cn/search/open-dates/0",
    "sec-ch-ua": "\"Chromium\";v=\"122\", \"Not(A:Brand\";v=\"24\", \"Google Chrome\";v=\"122\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.6261.95 Safari/537.36",
    "x-aviato-host": "www.klm.com.cn",
    "x-client-revision": "13d114c34cbaa1d90e9dcc375b39e46355b1f7d5"
}
cookies = {
    "rxVisitorqzfacchq": "1744127988354GF50KINUF9BQ36FOKLVJ9C3MLHPAR1PF",
    "dtSaqzfacchq": "-",
    "dtPCqzfacchq": "-12493$527988352_252h1vLMUALAPPAFFFNHQCUVTUQPPSIKHCAQFR-0e0",
    "rxvtqzfacchq": "1744129828292|1744127988355",
    "bm_mi": "980BF3188DBB5CFBB144E22A22FBC4B7~YAAQThDkeoTzHwuWAQAA27YhFhtDnfv455/VQIixfx+HEIu5P2bYS95IzqHZdKcaU/TdtB71l3QtwA4UBh1igQs8O4t1476zckFqGNeeXwICMGQEYSgUqBvQi5mgGJOUDtTiyQyM465RkUUJPM58IuDi4QWTfzvKKuZ7z3yzXlN8o9Ww4EEK6rSLXotMwZgqf31dkwV3C2emCRRM9AonMx+jnkPGqc8H8j3mtPizW+GikY6FXIM7S3IvnAYN6sjNnUZR8vL3GMREBpRujI+w+iOasQWJE4tCZ0gfW6d3F1o4ypshWBdv3/GsUNVo6w==~1",
    "bm_sz": "A9E0AE37A0ECCE593645AFCC0C33EEE0~YAAQThDkeobzHwuWAQAA27YhFhuPwhew84pQBXNx/MUQ8QwGs87JfBKMQhq/4WcslhbMWF/eI9CLEmT/SZimYzs11wPj3GjiThD2MaaYwagP6mVRH5SprOSVYU/6cOT2wuP2BM471Dw8WXL/hnvWa6AbBe3LscllLtndlFdmrmzC+wWoPW+Rf/fzKVZvttCe5u8L4rXkAR/XHq/PzZc0ySLFlAluwuiCAZ58Wzw2OoUNfJdHRK++v6EP20nMX8rnMeIgLBqzyGF5+iDkLBeuCapoZ/Tl96UmDoPule9ApaFloQ/9go19fGBp4+PD+rvs3Ba4sqmsFKHnvkBoCGKu2gtGPmnhqf9WWZ5o1MjuwLd83zwQTJvrI5zKLuHAuqqhugrkpMvF/DdSP3WNrc5O6rQDVP2w~4338497~4473907",
    "_abck": "6D8DD2FB0348CE1B49D515114E3DBD35~0~YAAQThDkeojzHwuWAQAAdL4hFg0GpcVCQF3r387K2sg0cZzs1wwyivHXusaVkDI/B32moH6HwOzS5mpkwZtG7VrujeRfk/9lTmdcpGAK+N1A1YQAySd24GtAohz7gntfEGF9Jl8bPYFzO1zOx7QBmCWurH3gUSaVTkmyi8jH1Y+QD2cXV+CCAA1ggAOeKdWmwbYztDVWhErC7SXC/9TDkYOgahD5x/6c7bvMqw6FE/FH+bH860wtV2FE2fAm/NipcYVuMuBS7cwBXF/Dg9kXPIfdN8FclBlnEvA8jGosha7zWRVXTI+P7yS25r7OtRnGQwCo7PCnxIGocj0ReBuQYmkwB/d40xk25iLS0ObBqLN36oYvNMGHbR2ZYHVaknMbZZwEerLGzNfXauKwWTWKvtnKO4yn0jqoFAkAEiaP27lSVmU5NDljLbN6AC/C6MHfk+vgcijpPOyFhh9g+OXK3cxFZ0FmHr6kVcUrK7WRBrqwFNF4YjnKAlF4rqaZhSbATi7yYV8NmSINa4U8LVN4xYsSG3ENV6AYDUBDvCmozY7yMVgtFZuq99uuQpMzHEatpQc8~-1~-1~-1",
    "correlation_id": "e762aa96-7dad-4585-adb8-572a657433ad",
    "klm_id": "0cd80fa3-60d3-4067-b129-76d4407abbe9",
    "secure_aviato_id": "s%3A0ec6d30b-3e62-4f91-a348-d25275587590.dvf55KXDwIgmFwi0w07EA3Gv8QJPS81RQ1M5e0%2FMEsI",
    "dtCookieqzfacchq": "v_4_srv_1_sn_KTOGVAQCEF1EKFHIMSNC9LU4712ST6CG_perc_100000_ol_0_mul_1_app-3A6fc91120f93f909b_0_app-3A7d4df0868d9a4610_0_rcs-3Acss_0",
    "ak_bmsc": "F0F834D8677961325405D6D485061C78~000000000000000000000000000000~YAAQThDkeovzHwuWAQAAI8MhFhs4NRl2d38++KjxCSyhtmJZQbVLRU5Zvy1YtiI+iGn//8gLUqiX4aXa7U12UzWtGP8C0cnhoUYg773BbZxu74kcP4whKI6nyGs/1+sEdIcAdfRYU3TOR5YCzOOQ7JIvgo36aNL/Z1jty/NNqs0ceYqAqxknYFiq4KA1T8ESd7UePaNuuhG4IE+V5IrNFuSD9stizghltU9ZQIvyVLPoY3bqT4xY9Y/otLQActPVq94IND0rB2EvbuTGWzQcvpYv/tX6lTWsie7RkvIAUuN92nvpG+PPiJS9fa5LxdwW3gwl8F36Kxkr679fxj76TWlYiGUhu0Lo7tmbfcqv7I9X7Qd+xoumh4Ss2ygb0SKVigLEhXk4et0v+RDlCacLpY3URqGkDFScYG0NvIwFPmUmhceIuHs6HKN18izokMyzgeOgYQTqKE+3yLd12rA5fUfUHcWqvrHnQC8SgtuVtCk=",
    "_svtri": "0cd80fa3-60d3-4067-b129-76d4407abbe9",
    "bw_cookie_banner": "{\"1\":true,\"2\":true,\"3\":true}",
    "_gcl_au": "1.1.679279695.1744128036",
    "_ga": "GA1.1.0cd80fa3-60d3-4067-b129-76d4407abbe9",
    "_scid": "RbsSiGZZncSHgmEfpKwctF7A3gaJuK8p",
    "_scid_r": "RbsSiGZZncSHgmEfpKwctF7A3gaJuK8p",
    "_fbp": "fb.2.1744128039095.445391098311496334",
    "_sctr": "1%7C1744128000000",
    "optimizelySession": "1744128043723",
    "_ga_123456789": "GS1.1.1744128038.1.1.1744128047.0.0.1597967347",
    "_ga_1QEDZ9D8R2": "GS1.1.1744128035.1.1.1744128057.38.0.0",
    "_uetsid": "9c1da910149211f0a285ebedf22737f2|k0bb2o|2|fuw|0|1924",
    "_uetvid": "9c1de890149211f08b136f67133ddd93|l8e3z6|1744128044851|3|1|bat.bing.com/p/insights/c/e",
    "_svs": "%7B%22m%22%3A%7B%22landing%22%3A%7B%22prospecting%22%3A1746720057922%7D%2C%22QualifiedVisit%22%3A%7B%22Landing%22%3A1744214457949%2C%22SecondPage%22%3A1744214442693%7D%7D%2C%22c%22%3A%7B%221%22%3Atrue%2C%222%22%3Atrue%2C%223%22%3Atrue%7D%2C%22ct%22%3A1744128035109%2C%22p%22%3A%7B%227%22%3A1744128057953%2C%2242%22%3A1744128035111%2C%223002%22%3A1744128035119%2C%224242%22%3A1744128035124%7D%7D",
    "_svlet": "1744128057956",
    "bm_sv": "0728024EABB6D41F225160FB9CC50DC7~YAAQThDkepbzHwuWAQAAaikiFhuPqgaOh2GpnsnfIEa//OLHmtotd/gCTZsm/rKTkQp1M5fS4AUPkBDalisRHfkMOSOIbd3kErJ0lg51jliwE75xvHdCqSBfzL7hzihIbJWjZsZp0udn5DPI/Hhyc5Fw4Bqt0Jj7iw2rdz+ea25rMR2BZTzMh7vYWl9CjlEIGR7V/G5+BEZx2FjJPg9We516IW6ejiYoXtlU2IJVIb8YAXuzRDE3C0jJuD5ujW2T~1"
}
url = "https://www.klm.com.cn/gql/v1"
params = {
    "bookingFlow": "LEISURE"
}
data = {
    "operationName": "SharedSearchLowestFareOffersForSearchQuery",
    "variables": {
        "lowestFareOffersRequest": {
            "bookingFlow": "LEISURE",
            "withUpsellCabins": True,
            "passengers": [
                {
                    "id": 1,
                    "type": "ADT"
                }
            ],
            "commercialCabins": [
                "ECONOMY"
            ],
            "fareOption": None,
            "type": "DAY",
            "requestedConnections": [
                {
                    "dateInterval": "2025-04-09/2025-04-30",
                    "origin": {
                        "type": "CITY",
                        "code": "BJS"
                    },
                    "destination": {
                        "type": "CITY",
                        "code": "LON"
                    }
                },
                {
                    "dateInterval": None,
                    "origin": {
                        "type": "CITY",
                        "code": "LON"
                    },
                    "destination": {
                        "type": "CITY",
                        "code": "BJS"
                    }
                }
            ]
        },
        "activeConnection": 0,
        "searchStateUuid": "178884ad-44b6-4555-9dff-65eafb02bcef",
        "bookingFlow": "LEISURE"
    },
    "extensions": {
        "persistedQuery": {
            "version": 1,
            "sha256Hash": "8dc693945bf8eadc1d5c80d2f3c82ce4b3f869b27e04ad356afb22516a1559e6"
        }
    }
}
data = json.dumps(data, separators=(',', ':'))
response = requests.post(url, headers=headers, cookies=cookies, params=params, data=data)

print(response.json())
print(response)