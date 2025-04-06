const sm2 = require('sm-crypto').sm2

// 1 - C1C3C2，0 - C1C2C3，默认为1
const cipherMode = 1

// 获取密钥对
let keypair = sm2.generateKeyPairHex()
let publicKey = keypair.publicKey   // 公钥
let privateKey = keypair.privateKey // 私钥

let msgString = "this is the data to be encrypted"
let encryptData = sm2.doEncrypt(msgString, publicKey, cipherMode)    // 加密结果
let decryptData = sm2.doDecrypt(encryptData, privateKey, cipherMode) // 解密结果

console.log("encryptData: ", encryptData)
console.log("decryptData: ", decryptData)

// encryptData:  ddf261103fae06d0efe20ea0fe0d82bcc170e8efd8eeae24e9559b3835993f0ed2acb8ba6782fc21941ee74ca453d77664a5cb7dbb91517e6a3b0c27db7ce587ae7af54f8df48d7fa822b7062e2af66c112aa57de94d12ba28e5ba96bf4439d299b41da4a5282d054696adc64156d248049d1eb1d0af28d76b542fe8a95d427e

// decryptData:  this is the data to be encrypted