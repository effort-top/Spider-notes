// 引用 crypto-js 加密模块
var CryptoJS = require('crypto-js')

function HMACEncrypt() {
    var text = 'body={"catalogueId":"10292147","cityCode":440300,"clp":true,"extraFilter":{"inStock":false,"showIndustryFeatured":false},"from":1,"fz":false,"ifShowNewList":null,"keyword":"","needClassifiedBrand":true,"preview":false,"productFilter":{"brandIds":[],"properties":{}},"rangeFilter":[],"searchScene":2,"searchSceneNo":"","searchType":{"notNeedCorrect":false},"section":1,"showType":"pic","size":20,"sort":0,"spuSize":6,"suggestModelDTO":null,"usePrevPros":true}&params={"traceId":"384446981726746719875"}&sign_token=848c28ca4dd8428888cc11f210f24e4f'
    // var key = '848c28ca4dd8428888cc11f210f24e4f'
    var key = '3137323637363531333031303731373236373635313330313037313732363736'
    // return CryptoJS.HmacMD5(text, key).toString();
    // return CryptoJS.HmacSHA1(text, key).toString();
    return CryptoJS.HmacSHA256(text, key).toString();
}

console.log(HMACEncrypt())
// 7b0ce153c9ffac3efa7672f2ce8541e22401ee0e
// 6a6fbac543b75af0cbddbee035510776cf60fb3a
