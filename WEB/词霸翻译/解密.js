const CryptoJs = require("crypto-js")

s = function(e) {
    e = decodeURIComponent(e);
    for (var t = String.fromCharCode(e.charCodeAt(0) - e.length), r = 1; r < e.length; r++)
        t += String.fromCharCode(e.charCodeAt(r) - t.charCodeAt(r - 1));
    return t
}
// s(t) L4fBtD5fLC9FQw22
function l(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "%5C%C2%80%C2%9A%C2%A8%C2%B6%C2%B8y%C2%9B%C2%B2%C2%8F%7C%7F%C2%97%C3%88%C2%A9d"
      , r = CryptoJs.enc.Utf8.parse(s(t))
        ,o = CryptoJs.AES.encrypt(e, r, {
        mode: CryptoJs.mode.ECB,
        padding: CryptoJs.pad.Pkcs7
    });
    return o.toString()
}

function get_sign(searchWord){
    let concatSearchParams = '6key_web_new_fanyi' + '6dVjYLFyzfkFkk' + (searchWord.replace(/(^\s*)|(\s*$)/g,""));
    var r = CryptoJs.MD5(concatSearchParams).toString().substring(0, 16);
    console.log(concatSearchParams)
    console.log(CryptoJs.MD5(concatSearchParams))
    r = l(r)
    console.log(r)
    console.log(encodeURIComponent(r))
    return encodeURIComponent(r)
}

function get_content(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "aahc3TfyfCEmER33"
      , r = CryptoJs.enc.Utf8.parse(t)
      , o = CryptoJs.AES.decrypt(e, r, {
        mode: CryptoJs.mode.ECB,
        padding: CryptoJs.pad.Pkcs7
    });
    return o.toString(CryptoJs.enc.Utf8)
}

e = 'nCRjxZwyh/7P3ee74BIU0r+VpYqC1/VewPqzx0un7jw1MDVcSmTZ/is0oxcVJOcfNIX+Hg9hY8TTY31RTBDgmqxpCepwk0Ib325WzmstSpCoUUhK3sWmR6xbjosqTKVBg76GT41gfwfywXZvbhWoFRinXRyHB0AYbYjTG3xwxMe6potSCyQUdk7D3I//0FAdbtnN35grjPtOHbGOKwsiI3J4zJEYo6x8xzoSWJqb52L9BOp28ctbAtdjEl7pt25QLOugMU7suKJ7XRe9Wd7Y1uhfnrF3RmQcq5uLVbT2qUo3ohIC3aZtjSruzA64i1QyyC+pBcYNP8fvnW9Y49zb2C09lthP5KwRwS9jujbLnWE=\n'
// console.log(get_content(e))
get_sign('hello')