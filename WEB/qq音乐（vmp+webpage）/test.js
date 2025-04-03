const CryptoJS = require('crypto-js');

// const hash = CryptoJS.SHA1('1234')
const hash = CryptoJS.SHA1('{"comm":{"cv":4747474,"ct":24,"format":"json","inCharset":"utf-8","outCharset":"utf-8","notice":0,"platform":"yqq.json","needNewCode":1,"uin":"1152921505323153005","g_tk_new_20200303":307058214,"g_tk":307058214},"req_1":{"module":"music.musicsearch.HotkeyService","method":"GetHotkeyForQQMusicMobile","param":{"searchid":"23177254186210359","remoteplace":"txt.yqq.top","from":"yqqweb"}},"req_2":{"module":"music.musicsearch.HotkeyService","method":"GetHotkeyForQQMusicMobile","param":{"searchid":"33459723720414265","remoteplace":"txt.yqq.top","from":"yqqweb"}},"req_3":{"module":"yqq.WhiteListServer","method":"Pass","param":{}},"req_4":{"module":"music.paycenterapi.LoginStateVerificationApi","method":"GetChargeAccount","param":{"appid":"mlive"}},"req_5":{"module":"userInfo.VipQueryServer","method":"SRFVipQuery_V2","param":{"uin_list":["1152921505323153005"]}},"req_6":{"module":"userInfo.BaseUserInfoServer","method":"get_user_baseinfo_v2","param":{"vec_uin":["1152921505323153005"]}},"req_7":{"module":"music.lvz.VipIconUiShowSvr","method":"GetVipIconUiV2","param":{"PID":3}},"req_8":{"module":"MessageCenter.MessageCenterServer","method":"GetMessage","param":{"uin":"1152921505323153005","red_dot":[{"msg_type":1}]}},"req_9":{"module":"GlobalComment.GlobalCommentMessageReadServer","method":"GetMessage","param":{"uin":"1152921505323153005","page_num":0,"page_size":1,"last_msg_id":"","type":0}}}')
const hashHex = hash.toString().toUpperCase();
console.log(hashHex); // 这将输出SHA-1加密后的十六进制字符串

var first_list = [23, 14, 6, 36, 16, 40, 7, 19];

// 根据first_list中的索引从hashHex中取出对应的字符
var firstValue = first_list.map(index => {
    // 检查索引是否在hashHex的长度范围内
    if (index < hashHex.length) {
        return hashHex[index];
    } else {
        // 如果索引超出了hashHex的范围，返回null
        return null;
    }
}).filter(value => value !== null); // 过滤掉null值

// 将数组中的字符合并成一个字符串
var firstString = firstValue.join('');
console.log(firstString); // 输出组合后的字符串

var second_list = [16, 1, 32, 12, 19, 27, 8, 5]
// 根据first_list中的索引从hashHex中取出对应的字符
var secondValue = second_list.map(index => {
    // 检查索引是否在hashHex的长度范围内
    if (index < hashHex.length) {
        return hashHex[index];
    } else {
        // 如果索引超出了hashHex的范围，返回null
        return null;
    }
}).filter(value => value !== null); // 过滤掉null值

// 将数组中的字符合并成一个字符串
var secondString = secondValue.join('');
console.log(secondString); // 输出组合后的字符串

var map1 = new Map([
    ["0", 0],
    ["1", 1],
    ["2", 2],
    ["3", 3],
    ["4", 4],
    ["5", 5],
    ["6", 6],
    ["7", 7],
    ["8", 8],
    ["9", 9],
    ["A", 10],
    ["B", 11],
    ["C", 12],
    ["D", 13],
    ["E", 14],
    ["F", 15]
]);
var list_all = [89,39,179,150,218,82,58,252,177,52,186,123,120,64,242,133,143,161,121,179]
// 初始化一个空数组来存储finally_num
var finallyNumList = [];
console.log("----------------------------------------------------------")
for (let i = 0; i < 20; i++) {
    sy_num1 = i * 2
    str1 = hashHex[sy_num1]
    num1 = map1.get(str1)
    mid_num1 = 16 * num1

    sy_num2 = sy_num1 + 1
    str2 = hashHex[sy_num2]
    mid_num2 = map1.get(str2)
    // console.log("索引值为："+hashHex[sy_num2]+"对应的值为："+mid_num2)
    finally_num1 = mid_num1 + mid_num2
    finally_num2 = list_all[i]

    finally_num = finally_num1 ^ finally_num2
    console.log(finally_num1 + " ^ " + finally_num2 + " = " + finally_num)
    finallyNumList.push(finally_num);
    // console.log("----------------------------------------------------------")
}
// 打印finallyNumList
console.log(finallyNumList);

var str2 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='
var jm_sy_list = []
for (let i = 0; i<finallyNumList.length; i=i+3) {
    jm_sy_num1 = finallyNumList[i] >> 2
    jm_sy_list.push(jm_sy_num1);
    jm_sy_num2 = ((finallyNumList[i] & 3) << 4) | (finallyNumList[i+1] >> 4)
    jm_sy_list.push(jm_sy_num2);
    jm_sy_num3 = ((finallyNumList[i+1] & 15) << 2) | (finallyNumList[i+2] >> 6)
    jm_sy_list.push(jm_sy_num3);    
    jm_sy_num4 = (finallyNumList[i+2] & 63)
    jm_sy_list.push(jm_sy_num4); 
}
jm_sy_list.pop();
console.log(jm_sy_list);
// 将jm_sy_list中的数字转换为str2中的字符
var resultStr = jm_sy_list.map(function(num) {
    console.log("值 "+str2[num]+" 由字符串："+str2+"组成"+"索引值："+num)
    return str2[num];
}).join('');
console.log(resultStr);
var finalStr = resultStr.replace(/[\/+]/g, '');
console.log(finalStr);

var sign = ("zzc" + firstString + finalStr + secondString).toLowerCase();
console.log("最终加密参数sign：" + sign);