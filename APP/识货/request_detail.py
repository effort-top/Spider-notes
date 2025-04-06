import requests


headers = {
    "Host": "sh-gateway.shihuo.cn",
    "refer": "shihuo%3A%2F%2Fwww.shihuo.cn%3Froute%3DgoodsDetail%26detailRouteType%3Dshoe%26id%3D1759416%26lspm%3D371e01ea3e5f4369%26nonPromoCardAssocDiscId%3D30730321%26styleId%3D348076173%26style_id%3D348076173%26style_ids%3D348076173%252C155033321%252C38872800%252C42243428%252C108495961%252C38598574%252C63735504%252C40325768%252C63739375%252C48889283%26topStyleId%3D348076173%26tpExtra%3D%257B%2522sourceTp%2522%253A%2522home%253Asearch%253A%2522%252C%2522sourceTpName%2522%253A%2522%25E7%2590%2583%25E9%259E%258B%2522%252C%2522wsf%2522%253A%2522normal_search_words%2522%252C%2522ast%2522%253A%2522%25E7%2590%2583%25E9%259E%258B%2522%252C%2522imgSource%2522%253A0%252C%2522dgReqId%2522%253A%2522SHSS_CG-TLSJ3PO1S7Q3_VSPU_1%253AR1-L0-G00%2522%252C%2522si%2522%253A%25228001%2522%252C%2522skc%2522%253A%2522348076173%2522%252C%2522layer%2522%253A%25222%2522%252C%2522beltFilterFlag%2522%253A0%252C%2522vspu%2522%253A%2522v1%253A1759416_0%2522%252C%2522assocPrtId%2522%253A%252230730321%2522%257D%26grade%3D4%26from_source%3Dsearch%26dspm%3D94858994887eec28%26auto_spm%3D1%23%257B%2522sort%2522%253A%25221%2522%252C%2522from%2522%253A%2522goodsList%2522%252C%2522extra%2522%253A%2522%255C%255Cu7403%255C%255Cu978b%2522%252C%2522tp%2522%253A%2522searchList%253Alist%253A1%2522%252C%2522si%2522%253A%25228001%2522%252C%2522scene_id%2522%253A%25228001%2522%252C%2522dg_request_id",
    "pid": "goodsDetail_FFBCC9C407DE102F8F89EB24DB36D0FF",
    "platform": "android",
    "timestamp": "1743862892131",
    "app-v": "7.20.2",
    "sh-token": "r0t3x3470OMGM2MmE4OGQ2MDk2YmZkNzlj+xuJsX8HI0gai2d1xQmFeOsj8NI4uU8TUszufYNl06iBPvaqrFbEc+DTs0sYVcGKv2HC+22dgmuLdJXTZLpCNXNl11Fw+q7wgRUijTN0OoHCB0wsMODX0/M6hKZ+hZmZoKcV2T06vwUtLMbE9YAlTA==",
    "sh-id": "",
    "sh-sign": "C8DB5567FFE7D58267A982954919CF15",
    "abtest-control": "r2=2;Oq=15;hm=0;HN=3;r9=2;aJ=0;j4=0;ht=2;zF=1;zH=0;qe=3;QF=11;rK=2;QP=0;af=12;AH=3;18=31;Ya=0;ZE=0;AM=0;shrec_is_gdetail=13;c8=13;kB=12;ay=3;jc=4;search_wf=3;RN=0;JG=1;ZW=12;1O=3;ZZ=1;sU=4;BE=14;1V=12;S8=17;Ah=12;BK=2;SB=0;9h=2;Av=22;cY=1;tK=3;SK=0;tM=0;2O=2;dD=1;Rs=0;cj=1;KS=2;t_s=1743862771798;gdetail_brand_rec=11;dQ=1;KY=0;Br=2;3D=12;CV=16;e9=1;uM=13;v3=0;uR=1;data_community_relate=11;42=3;dc=1;Ss=21;dg=0;tx=17;di=2;LR=2;DO=HN_3;lx=2;UB=0;uc=2;nD=45;Lb=4;w1=1;UU=18;mp=0;ux=1;data_community_personal=89;UZ=1;fL=0;ev=2;5F=0;vh=33;vj=0;vn=12;mainSearchV4=22;nj=2;VR=2;ff=34;nn=0;vw=100;shrec_gdetail_bags=11;O4=0;fl=24;data_gdetail_shoes_personal=11;data_gdetail_clothes_personal=11;G2=5;oZ=12;Vb=2;wd=24;gdetail_shoes_brand_rec=11;G7=3;fx=3;Vi=21;Nc=0;OJ=1;shrec_home_feed=16;gd=11;Fd=0;6V=32;X9=47;xZ=0;ou=3;hS=0;GR=11;shrec_cf_mine_v2=12;hW=3;Wg=11;shrec_gdetail_clothes=13;GZ=12;XK=12;XL=0;Od=13;XQ=0;HC=2;pm=3;hf=45;XW=21",
    "shreqid": "82F458629C046A1DCB0E74B280968F35",
    "osv": "12",
    "network": "1",
    "sh_session": "ce4289b30fca4e53ba8104dddabeda66_foreground_121392",
    "sk": "9RM2PN4P8MgOWi4xBtuqed0u9xRh1RkDofA4i4Ec4EdGaOW99RPcbMJGdmkCagGjuZh5rAAhBmwqRcCFH6RvOsLyjX1v",
    "appid": "app",
    "user-agent": "Android 12 {UmVkbWk} CPU_ABI arm64-v8a CPU_ABI2  HARDWARE qcom MODEL {UmVkbWkgSzMwIDVH} network/WIFI shihuo/7.20.2 sc({holder},huawei) minVersion(15719) sh-dv-sign[v1|0a7f047aa5dc2c1170218852e6adec150d2751f79b8da0aa]",
    "daga-ban-personal": "0"
}
cookies = {
    "HWWAFSESTIME": "1743862641958",
    "HWWAFSESID": "cbd2888b7bb97de657"
}
url = "https://sh-gateway.shihuo.cn/v4/services/sh-goodsapi/app_swoole_shoe/styles/filter"
params = {
    "access_token": "b7EM8Up9VSFJUhkyEJ",
    "color": "",
    "goods_id": "1759416",
    "page": "1",
    "page_size": "18",
    "size": "",
    "minVersion": "15719",
    "clientCode": "{holder}",
    "v": "7.20.2",
    "channel": "huawei",
    "device": "Redmi K30 5G",
    "platform": "android",
    "timestamp": "1743862892131",
    "token": "2be09a2d9dbcabddcc89fe1286a064e7"
}
response = requests.get(url, headers=headers, cookies=cookies, params=params)

print(response.text)
print(response)