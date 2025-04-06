import requests
import json


headers = {
    "Host": "sh-api.shihuo.cn",
    "refer": "shihuo%3A%2F%2Fwww.shihuo.cn%3Froute%3DhomeSearchList%26keywords%3D%25E7%2590%2583%25E9%259E%258B%26user_input%3D%2525E7%252590%252583%2525E9%25259E%25258B%26lspm%3D371e01ea3e5f4369%26auto_spm%3D1%23%257B%2522from%2522%253A%2522shihuo%253A%255C%252F%255C%252Fwww.shihuo.cn%253Froute%253Dhome%2522%252C%2522block%2522%253A%2522search_find%2522%252C%2522extra%2522%253A%2522%2525E7%252590%252583%2525E9%25259E%25258B%2522%252C%2522lspm%2522%253A%2522371e01ea3e5f4369%2522%257D",
    "pid": "homeSearchList_25778C99DB615A49645ED416205F4B5E",
    "platform": "android",
    "timestamp": "1743862790544",
    "app-v": "7.20.2",
    "sh-token": "7KC7LcAutPNjk5MWUwY2M1NjU0YjcxZWI3L/Hvu1VfvHfYaXkr/kniKpqHGTkqhMUsQ/FRNDqAlH9zmTK0dgf9oje+gyQ83iVNvkasDKKXEKa029GLZ7pNDXibQ+b3uTpnukL2Ff4hJKlUU8tcDKQ53UaUV1qzKWaRK1ZHX+RsEGI9Gu21x18OAw==",
    "sh-id": "",
    "sh-sign": "BC9A23E03A362AC1029E3A84FA093935",
    "abtest-control": "r2=2;Oq=15;hm=0;HN=3;r9=2;aJ=0;j4=0;ht=2;zF=1;zH=0;qe=3;QF=11;rK=2;QP=0;af=12;AH=3;18=31;Ya=0;ZE=0;AM=0;shrec_is_gdetail=13;c8=13;kB=12;ay=3;jc=4;search_wf=3;RN=0;JG=1;ZW=12;1O=3;ZZ=1;sU=4;BE=14;1V=12;S8=17;Ah=12;BK=2;SB=0;9h=2;Av=22;cY=1;tK=3;SK=0;tM=0;2O=2;dD=1;Rs=0;cj=1;KS=2;t_s=1743862771798;gdetail_brand_rec=11;dQ=1;KY=0;Br=2;3D=12;CV=16;e9=1;uM=13;v3=0;uR=1;data_community_relate=11;42=3;dc=1;Ss=21;dg=0;tx=17;di=2;LR=2;DO=HN_3;lx=2;UB=0;uc=2;nD=45;Lb=4;w1=1;UU=18;mp=0;ux=1;data_community_personal=89;UZ=1;fL=0;ev=2;5F=0;vh=33;vj=0;vn=12;mainSearchV4=22;nj=2;VR=2;ff=34;nn=0;vw=100;shrec_gdetail_bags=11;O4=0;fl=24;data_gdetail_shoes_personal=11;data_gdetail_clothes_personal=11;G2=5;oZ=12;Vb=2;wd=24;gdetail_shoes_brand_rec=11;G7=3;fx=3;Vi=21;Nc=0;OJ=1;shrec_home_feed=16;gd=11;Fd=0;6V=32;X9=47;xZ=0;ou=3;hS=0;GR=11;shrec_cf_mine_v2=12;hW=3;Wg=11;shrec_gdetail_clothes=13;GZ=12;XK=12;XL=0;Od=13;XQ=0;HC=2;pm=3;hf=45;XW=21",
    "shreqid": "EB5EBFE510678D898400391DDD4F7F37",
    "osv": "12",
    "network": "1",
    "sh_session": "ce4289b30fca4e53ba8104dddabeda66_foreground_19804",
    "sk": "9RM2PN4P8MgOWi4xBtuqed0u9xRh1RkDofA4i4Ec4EdGaOW99RPcbMJGdmkCagGjuZh5rAAhBmwqRcCFH6RvOsLyjX1v",
    "appid": "app",
    "user-agent": "Android 12 {UmVkbWk} CPU_ABI arm64-v8a CPU_ABI2  HARDWARE qcom MODEL {UmVkbWkgSzMwIDVH} network/WIFI shihuo/7.20.2 sc({holder},huawei) minVersion(15719) sh-dv-sign[v1|0a7f047aa5dc2c1170218852e6adec150d2751f79b8da0aa]",
    "daga-ban-personal": "0",
    "content-type": "application/json; charset=UTF-8"
}
cookies = {
    "HWWAFSESTIME": "1743862641958",
    "HWWAFSESID": "cbd2888b7bb97de657"
}
url = "https://sh-api.shihuo.cn/daga/search/goods/v1"
params = {
    "minVersion": "15719",
    "clientCode": "{holder}",
    "v": "7.20.2",
    "channel": "huawei",
    "device": "Redmi K30 5G",
    "platform": "android",
    "timestamp": "1743862790544",
}
data = {

    "keywords": "球鞋",
    "page": "1",
    "pageSize": "20",

}
data = json.dumps(data, separators=(',', ':'))
response = requests.post(url, headers=headers, cookies=cookies, params=params, data=data)

print(response.text)
print(response)