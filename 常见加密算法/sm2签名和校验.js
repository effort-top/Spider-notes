const sm2 = require('sm-crypto').sm2

// 获取密钥对
let keypair = sm2.generateKeyPairHex()
let publicKey = keypair.publicKey   // 公钥
let privateKey = keypair.privateKey // 私钥

// 纯签名 + 生成椭圆曲线点
let msgString = "this is the data to be signed"
let sigValueHex = sm2.doSignature(msgString, privateKey)                    // 签名
let verifyResult = sm2.doVerifySignature(msgString, sigValueHex, publicKey) // 验签结果

console.log("sigValueHex: ", sigValueHex)
console.log("verifyResult: ", verifyResult)

// sigValueHex:  924cbb9f2b5adb554ef77129ff1e3a00b2da42017ad3ec2f806d824a77646987ba8c8c4fb94576c38bc11ae69cc98ebbb40b5d47715171ec7dcea913dfc6ccc1

// verifyResult:  true