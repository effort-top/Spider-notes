const JSEncrypt = require('node-jsencrypt');

function getPwd(pwd) {
    var key = "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDcV30OSW6Bd8uWyoUzajb7Rwe7NH9J8czQZSgGv9LBk0QZevURdhbME0GbCHS79mOP3+/KgvYZR5NakGd/ZGcagxhoCCY6sDYKA5iTQaXCbg5dhpfviWnj3ck0iGIVCf26QaquJttWsHEU3C0lwkJzGDTC0QjPnV4HwgDd70BcuwIDAQAB";  
    var encrypt = new JSEncrypt();  
    encrypt.setPublicKey(key);  
    return encrypt.encrypt(pwd);  
}  

var env = getPwd("123456");  
console.log(env);