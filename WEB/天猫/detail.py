import json
import time

import execjs
import requests


with open('解码.js', "r", encoding='utf-8') as f:
    js_tamp = f.read()
jsDrive = execjs.compile(js_tamp)
cookies = {
    'thw': 'cn',
    't': '87838c8964128beffe142ef56810de5a',
    '_tb_token_': '3f7a5fe15788e',
    'xlly_s': '1',
    '_samesite_flag_': 'true',
    '3PcFlag': '1743419750164',
    'cookie2': '1997b835b53fe0f4a1b671ab00e5f578',
    'cna': 'XWdxIJ1q3EoCAcuoEQWvD49k',
    'sgcookie': 'E100jN2vbdQl2l%2F6fYvFVz0p4ozGihollswGzmwgoBK4l6cfkFx%2B0ruxVaPoiUkTIfY0ELMFbeQEuf2VWCszMWek3oZ92F2mxBE7I8mHRRPJXas%3D',
    'wk_cookie2': '136ef79d6239ed390df9f0111b223efd',
    'wk_unb': 'UUpgT78V5mzPUz%2Bf0g%3D%3D',
    'unb': '2219041487532',
    'uc1': 'cookie15=WqG3DMC9VAQiUQ%3D%3D&existShop=false&cookie14=UoYaiG3sGIg3rg%3D%3D&pas=0&cookie16=UtASsssmPlP%2Ff1IHDsDaPRu%2BPw%3D%3D&cookie21=W5iHLLyFfoaZ',
    'uc3': 'nk2=F5RAQ159YaaZ3inzT8c%3D&id2=UUpgT78V5mzPUz%2Bf0g%3D%3D&lg2=U%2BGCWk%2F75gdr5Q%3D%3D&vt3=F8dD2EruJRwdB4dVCqQ%3D',
    'csg': 'b4c0ab5c',
    'lgc': 'tb514724667609',
    'cancelledSubSites': 'empty',
    'cookie17': 'UUpgT78V5mzPUz%2Bf0g%3D%3D',
    'dnk': 'tb514724667609',
    'skt': '702c20894aeba788',
    'existShop': 'MTc0MzQxOTc5MA%3D%3D',
    'uc4': 'id4=0%40U2gqwAAps5hqCshulxUBHfnuO%2FcRMbbC&nk4=0%40FY4L7%2F5I4%2FHg9yfxqsHI6zliEz6ePjNjhA%3D%3D',
    'tracknick': 'tb514724667609',
    '_cc_': 'UtASsssmfA%3D%3D',
    '_l_g_': 'Ug%3D%3D',
    'sg': '92b',
    '_nk_': 'tb514724667609',
    'cookie1': 'BYahADcvJZKIjfPEecLF1sBCJX%2FXt%2FzL%2Bn%2F%2FVlaPQQs%3D',
    'isg': 'BIyMWYn8BzVhORNJ71m7LRQtXeq-xTBv4gwXNOZO8DbVcS97DtZv_SOJFXnJPmjH',
    'mtop_partitioned_detect': '1',
    '_m_h5_tk': '24f12793789fcf4f09ff765f6b0bd92e_1743434690724',
    '_m_h5_tk_enc': 'f77243eea74435bb8926bff223dc753f',
    'tfstk': 'gMQjIJ9htxDfnxLt1nVyN9rPyxY157zU5fOOt13q6ELY5CBFFh3amE-65TpPuK52kPOOLTtOQd5qigXF9q74mFu6oFYTLJzU8SfDSFdyM-fpn_Ck67RAUBnYJFYTL8orWn4BS9fEAI1Aw7Ow1j3OBVFW2Cp-kC3v6YFWEL3xDC3x2_dBtdHOBhCJ2C9JBFLOBUFW1LptpBGB1o9cGSpRT1nskL5vFV3OkPxXdtoZWVQkGn_OML1VgaOXcpKo-NvGkT5OuZxudvLGaM61XOqEqE1ODEdFirgWJsIP5Q7a_c9Ana1Ro3GIRFsAhGKhVymHDh9f2ZKS6VCkyiKFftwjmKIVFHAJ2faHa9JRiZI7sYCALKTvw3zLO_KO4Zxhu83XJMf2uGBgY0Yf6iL54iuedyF-f5Ui5Q9UN7iijqIVUd1RU469DQAX47NSHGxvZQ9UN7iijndkGBP7NxIG.',
}

headers = {
    'authority': 'h5api.m.taobao.com',
    'accept': 'application/json',
    'accept-language': 'zh-CN,zh;q=0.9',
    'bx-umidtoken': 'T2gAUr3KgUsTHrkUUEJvwu1x5Dwwdclef_ykd5pKv6ClxOpzcdxb7vwIy_B-U5qMYo8=',
    'content-type': 'application/x-www-form-urlencoded',
    # 'cookie': 'thw=cn; t=87838c8964128beffe142ef56810de5a; _tb_token_=3f7a5fe15788e; xlly_s=1; _samesite_flag_=true; 3PcFlag=1743419750164; cookie2=1997b835b53fe0f4a1b671ab00e5f578; cna=XWdxIJ1q3EoCAcuoEQWvD49k; sgcookie=E100jN2vbdQl2l%2F6fYvFVz0p4ozGihollswGzmwgoBK4l6cfkFx%2B0ruxVaPoiUkTIfY0ELMFbeQEuf2VWCszMWek3oZ92F2mxBE7I8mHRRPJXas%3D; wk_cookie2=136ef79d6239ed390df9f0111b223efd; wk_unb=UUpgT78V5mzPUz%2Bf0g%3D%3D; unb=2219041487532; uc1=cookie15=WqG3DMC9VAQiUQ%3D%3D&existShop=false&cookie14=UoYaiG3sGIg3rg%3D%3D&pas=0&cookie16=UtASsssmPlP%2Ff1IHDsDaPRu%2BPw%3D%3D&cookie21=W5iHLLyFfoaZ; uc3=nk2=F5RAQ159YaaZ3inzT8c%3D&id2=UUpgT78V5mzPUz%2Bf0g%3D%3D&lg2=U%2BGCWk%2F75gdr5Q%3D%3D&vt3=F8dD2EruJRwdB4dVCqQ%3D; csg=b4c0ab5c; lgc=tb514724667609; cancelledSubSites=empty; cookie17=UUpgT78V5mzPUz%2Bf0g%3D%3D; dnk=tb514724667609; skt=702c20894aeba788; existShop=MTc0MzQxOTc5MA%3D%3D; uc4=id4=0%40U2gqwAAps5hqCshulxUBHfnuO%2FcRMbbC&nk4=0%40FY4L7%2F5I4%2FHg9yfxqsHI6zliEz6ePjNjhA%3D%3D; tracknick=tb514724667609; _cc_=UtASsssmfA%3D%3D; _l_g_=Ug%3D%3D; sg=92b; _nk_=tb514724667609; cookie1=BYahADcvJZKIjfPEecLF1sBCJX%2FXt%2FzL%2Bn%2F%2FVlaPQQs%3D; isg=BIyMWYn8BzVhORNJ71m7LRQtXeq-xTBv4gwXNOZO8DbVcS97DtZv_SOJFXnJPmjH; mtop_partitioned_detect=1; _m_h5_tk=24f12793789fcf4f09ff765f6b0bd92e_1743434690724; _m_h5_tk_enc=f77243eea74435bb8926bff223dc753f; tfstk=gMQjIJ9htxDfnxLt1nVyN9rPyxY157zU5fOOt13q6ELY5CBFFh3amE-65TpPuK52kPOOLTtOQd5qigXF9q74mFu6oFYTLJzU8SfDSFdyM-fpn_Ck67RAUBnYJFYTL8orWn4BS9fEAI1Aw7Ow1j3OBVFW2Cp-kC3v6YFWEL3xDC3x2_dBtdHOBhCJ2C9JBFLOBUFW1LptpBGB1o9cGSpRT1nskL5vFV3OkPxXdtoZWVQkGn_OML1VgaOXcpKo-NvGkT5OuZxudvLGaM61XOqEqE1ODEdFirgWJsIP5Q7a_c9Ana1Ro3GIRFsAhGKhVymHDh9f2ZKS6VCkyiKFftwjmKIVFHAJ2faHa9JRiZI7sYCALKTvw3zLO_KO4Zxhu83XJMf2uGBgY0Yf6iL54iuedyF-f5Ui5Q9UN7iijqIVUd1RU469DQAX47NSHGxvZQ9UN7iijndkGBP7NxIG.',
    'origin': 'https://item.taobao.com',
    'referer': 'https://item.taobao.com/item.htm?id=902624896473',
    'sec-ch-ua': '"Chromium";v="122", "Not(A:Brand";v="24", "Google Chrome";v="122"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-site',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.6261.95 Safari/537.36',
    'x-pipu2': "h%7Bdugjzqhoflgzc%7D%3B%20m6(1'180%26.ih%2C7%2F(8.zgo%7Bnjqrwijs%7B",
}


rtime = round(time.time() * 1000)
id = "902624896473"
data_dict = {
    'id': id,
    'detail_v': '3.3.2'
}
exParams_dict = {
    'id': id,
    'queryParams': f'id={id}',
    'domain': "https://detail.tmall.hk",
    'path_name': "/hk/item.htm"
}
# 将 exParams_dict 转换为 JSON 字符串
data_dict['exParams'] = json.dumps(exParams_dict)
# 转换 data_dict 为 JSON 字符串
data = json.dumps(data_dict)
print(data)
token = cookies['_m_h5_tk'].split('_')[0]
sign = jsDrive.call('get_sing', token, rtime,data)

params = {
    'jsv': '2.7.4',
    'appKey': '12574478',
    't': rtime,
    'sign': sign,
    'api': 'mtop.taobao.pcdetail.data.get',
    'v': '1.0',
    'isSec': '0',
    'ecode': '0',
    'timeout': '10000',
    'ttid': '2022@taobao_litepc_9.17.0',
    'AntiFlood': 'true',
    'AntiCreep': 'true',
    'dataType': 'json',
    'valueType': 'string',
    'type': 'json',
    'data': data,
}

response = requests.get(
    'https://h5api.m.tmall.hk/h5/mtop.taobao.pcdetail.data.get/1.0/',
    params=params,
    cookies=cookies,
    headers=headers,
)

print(response.text)