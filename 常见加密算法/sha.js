// 引用 crypto-js 加密模块
var CryptoJS = require('crypto-js')

function SHA1Encrypt() {
    // var text = "body={\"catalogueId\":\"10292147\",\"cityCode\":440300,\"clp\":true,\"extraFilter\":{\"inStock\":false,\"showIndustryFeatured\":false},\"from\":1,\"fz\":false,\"ifShowNewList\":null,\"keyword\":\"\",\"needClassifiedBrand\":true,\"preview\":false,\"productFilter\":{\"brandIds\":[],\"properties\":{}},\"rangeFilter\":[],\"searchScene\":2,\"searchSceneNo\":\"\",\"searchType\":{\"notNeedCorrect\":false},\"section\":1,\"showType\":\"pic\",\"size\":20,\"sort\":0,\"spuSize\":6,\"suggestModelDTO\":null,\"usePrevPros\":true}&params={\"traceId\":\"384446981726746719875\"}&sign_token=848c28ca4dd8428888cc11f210f24e4f"
    var text ='body={"cityCode":440300,"from":0,"size":5,"skuNo":"AA4547"}&params={"traceId":"296060171727940525676"}&sign_token=6576ed0bda904b3ca07690ce3952f946'
    return CryptoJS.SHA1(text).toString();
}

console.log(SHA1Encrypt())  // 23c02b203bd2e2ca19da911f1d270a06d86719fb
// 7b0ce153c9ffac3efa7672f2ce8541e22401ee0e
