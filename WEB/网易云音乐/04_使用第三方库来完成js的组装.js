var window = this;

const {
	setMaxDigits,
	RSAKeyPair,
	encryptedString
} = require("./my_rsa.js");

const wangermazi = require("crypto-js");

!function() {
    function a(a) {
        var d, e, b = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789", c = "";
        for (d = 0; a > d; d += 1)
            e = Math.random() * b.length,
            e = Math.floor(e),
            c += b.charAt(e);
        return c
    }
    function b(a, b) {
        var c = wangermazi.enc.Utf8.parse(b)
          , d = wangermazi.enc.Utf8.parse("0102030405060708")
          , e = wangermazi.enc.Utf8.parse(a)
          , f = wangermazi.AES.encrypt(e, c, {
            iv: d,
            mode:wangermazi.mode.CBC
        });
        return f.toString()
    }
    function c(a, b, c) {
        var d, e;
        return setMaxDigits(131),
        d = new RSAKeyPair(b,"",c),
        e = encryptedString(d, a)
    }
    function d(d, e, f, g) {
        var h = {}
          , i = a(16);
        return h.encText = b(d, g),
        h.encText = b(h.encText, i),
        h.encSecKey = c(i, e, f),
        h
    }
    function e(a, b, d, e) {
        var f = {};
        return f.encText = c(a + e, b, d),
        f
    }
    window.asrsea = d,
    window.ecnonasr = e
}();

var second = '010001';
var third = '00e0b509f6259df8642dbc35662901477df22677ec152b5ff68ace615bb7b725152b3ab17a876aea8a5aa76d2e417629ec4ee341f56135fccf695280104e0312ecbda92557c93870114af6c9d05c4f7f0c3685b7a46bee255932575cce10b424d813cfe4875d3e82047b97ddef52741d546b8e289dc6935b3ece0462db0a22b8e7';
var fouth = '0CoJUm6Qyw8W8jud';



// 封装成函数: python那边调用的时候. 方便.
function fn(params){
    var ret = window.asrsea(JSON.stringify(params), second, third, fouth);
    return ret;
}

