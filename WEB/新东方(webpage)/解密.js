function Qe(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        }
        ))),
        n.push.apply(n, r)
    }
    return n
}
function endian(e) {
    if (e.constructor == Number)
        return 16711935 & rotl(e, 8) | 4278255360 & rotl(e, 24);
    for (var t = 0; t < e.length; t++)
        e[t] = endian(e[t]);
    return e
}
function rotl(e, t) {
    return e << t | e >>> 32 - t
}
function aaa(e, t, r) {
    "use strict";
    function n(e, t, r) {
        return t in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = r,
        e
    }
    r.d(t, "a", (function() {
        return n
    }
    ))
}
function nn(e, t, r) {
        return t in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = r,
        e
    }
function Ge(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? Qe(Object(n), !0).forEach((function(t) {
            Object(nn)(e, t, n[t])
        }
        )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Qe(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
        }
        ))
    }
    return e
}
function wordsToBytes(e) {
    for (var t = [], n = 0; n < 32 * e.length; n += 8)
        t.push(e[n >>> 5] >>> 24 - n % 32 & 255);
    return t
}
function bytesToWords(e) {
    for (var t = [], n = 0, r = 0; n < e.length; n++,
    r += 8)
        t[r >>> 5] |= e[n] << 24 - r % 32;
    return t
}
function hh(e, t, n, r, o, i, a) {
    var u = e + (t & n | ~t & r) + (o >>> 0) + a;
    return (u << i | u >>> 32 - i) + t
}
function yy(e, t, n, r, o, i, a) {
    var u = e + (t & r | n & ~r) + (o >>> 0) + a;
    return (u << i | u >>> 32 - i) + t
}
function vv(e, t, n, r, o, i, a) {
    var u = e + (t ^ n ^ r) + (o >>> 0) + a;
    return (u << i | u >>> 32 - i) + t
}

function mm(e, t, n, r, o, i, a) {
    var u = e + (n ^ (t | ~r)) + (o >>> 0) + a;
    return (u << i | u >>> 32 - i) + t
}
var nnnn = {
    utf8: {
        stringToBytes: function(e) {
            return nnnn.bin.stringToBytes(unescape(encodeURIComponent(e)))
        },
        bytesToString: function(e) {
            return decodeURIComponent(escape(nnnn.bin.bytesToString(e)))
        }
    },
    bin: {
        stringToBytes: function(e) {
            for (var t = [], n = 0; n < e.length; n++)
                t.push(255 & e.charCodeAt(n));
            return t
        },
        bytesToString: function(e) {
            for (var t = [], n = 0; n < e.length; n++)
                t.push(String.fromCharCode(e[n]));
            return t.join("")
        }
    }
};
var r = nnnn.utf8,
a = function (e, n) {
    // e.constructor == String ? e = n && "binary" === n.encoding ? i.stringToBytes(e) : r.stringToBytes(e) : o(e) ? e = Array.prototype.slice.call(e, 0) : Array.isArray(e) || (e = e.toString());
    if (typeof e === 'string') {
        e = r.stringToBytes(e);
    }
    for (var u = bytesToWords(e), s = 8 * e.length, c = 1732584193, f = -271733879, p = -1732584194, l = 271733878, d = 0; d < u.length; d++)
        u[d] = 16711935 & (u[d] << 8 | u[d] >>> 24) | 4278255360 & (u[d] << 24 | u[d] >>> 8);
    u[s >>> 5] |= 128 << s % 32,
    u[14 + (s + 64 >>> 9 << 4)] = s;
    var h = a._ff
      , y = a._gg
      , v = a._hh
      , m = a._ii;
    for (d = 0; d < u.length; d += 16) {
        var b = c
          , g = f
          , w = p
          , x = l;
        c = hh(c, f, p, l, u[d + 0], 7, -680876936),
        l = hh(l, c, f, p, u[d + 1], 12, -389564586),
        p = hh(p, l, c, f, u[d + 2], 17, 606105819),
        f = hh(f, p, l, c, u[d + 3], 22, -1044525330),
        c = hh(c, f, p, l, u[d + 4], 7, -176418897),
        l = hh(l, c, f, p, u[d + 5], 12, 1200080426),
        p = hh(p, l, c, f, u[d + 6], 17, -1473231341),
        f = hh(f, p, l, c, u[d + 7], 22, -45705983),
        c = hh(c, f, p, l, u[d + 8], 7, 1770035416),
        l = hh(l, c, f, p, u[d + 9], 12, -1958414417),
        p = hh(p, l, c, f, u[d + 10], 17, -42063),
        f = hh(f, p, l, c, u[d + 11], 22, -1990404162),
        c = hh(c, f, p, l, u[d + 12], 7, 1804603682),
        l = hh(l, c, f, p, u[d + 13], 12, -40341101),
        p = hh(p, l, c, f, u[d + 14], 17, -1502002290),
        c = yy(c, f = hh(f, p, l, c, u[d + 15], 22, 1236535329), p, l, u[d + 1], 5, -165796510),
        l = yy(l, c, f, p, u[d + 6], 9, -1069501632),
        p = yy(p, l, c, f, u[d + 11], 14, 643717713),
        f = yy(f, p, l, c, u[d + 0], 20, -373897302),
        c = yy(c, f, p, l, u[d + 5], 5, -701558691),
        l = yy(l, c, f, p, u[d + 10], 9, 38016083),
        p = yy(p, l, c, f, u[d + 15], 14, -660478335),
        f = yy(f, p, l, c, u[d + 4], 20, -405537848),
        c = yy(c, f, p, l, u[d + 9], 5, 568446438),
        l = yy(l, c, f, p, u[d + 14], 9, -1019803690),
        p = yy(p, l, c, f, u[d + 3], 14, -187363961),
        f = yy(f, p, l, c, u[d + 8], 20, 1163531501),
        c = yy(c, f, p, l, u[d + 13], 5, -1444681467),
        l = yy(l, c, f, p, u[d + 2], 9, -51403784),
        p = yy(p, l, c, f, u[d + 7], 14, 1735328473),
        c = vv(c, f = yy(f, p, l, c, u[d + 12], 20, -1926607734), p, l, u[d + 5], 4, -378558),
        l = vv(l, c, f, p, u[d + 8], 11, -2022574463),
        p = vv(p, l, c, f, u[d + 11], 16, 1839030562),
        f = vv(f, p, l, c, u[d + 14], 23, -35309556),
        c = vv(c, f, p, l, u[d + 1], 4, -1530992060),
        l = vv(l, c, f, p, u[d + 4], 11, 1272893353),
        p = vv(p, l, c, f, u[d + 7], 16, -155497632),
        f = vv(f, p, l, c, u[d + 10], 23, -1094730640),
        c = vv(c, f, p, l, u[d + 13], 4, 681279174),
        l = vv(l, c, f, p, u[d + 0], 11, -358537222),
        p = vv(p, l, c, f, u[d + 3], 16, -722521979),
        f = vv(f, p, l, c, u[d + 6], 23, 76029189),
        c = vv(c, f, p, l, u[d + 9], 4, -640364487),
        l = vv(l, c, f, p, u[d + 12], 11, -421815835),
        p = vv(p, l, c, f, u[d + 15], 16, 530742520),
        c = mm(c, f = vv(f, p, l, c, u[d + 2], 23, -995338651), p, l, u[d + 0], 6, -198630844),
        l = mm(l, c, f, p, u[d + 7], 10, 1126891415),
        p = mm(p, l, c, f, u[d + 14], 15, -1416354905),
        f = mm(f, p, l, c, u[d + 5], 21, -57434055),
        c = mm(c, f, p, l, u[d + 12], 6, 1700485571),
        l = mm(l, c, f, p, u[d + 3], 10, -1894986606),
        p = mm(p, l, c, f, u[d + 10], 15, -1051523),
        f = mm(f, p, l, c, u[d + 1], 21, -2054922799),
        c = mm(c, f, p, l, u[d + 8], 6, 1873313359),
        l = mm(l, c, f, p, u[d + 15], 10, -30611744),
        p = mm(p, l, c, f, u[d + 6], 15, -1560198380),
        f = mm(f, p, l, c, u[d + 13], 21, 1309151649),
        c = mm(c, f, p, l, u[d + 4], 6, -145523070),
        l = mm(l, c, f, p, u[d + 11], 10, -1120210379),
        p = mm(p, l, c, f, u[d + 2], 15, 718787259),
        f = mm(f, p, l, c, u[d + 9], 21, -343485551),
        c = c + b >>> 0,
        f = f + g >>> 0,
        p = p + w >>> 0,
        l = l + x >>> 0
    }
    return endian([c, f, p, l])
};
function wordsToBytes(e) {
    for (var t = [], n = 0; n < 32 * e.length; n += 8)
        t.push(e[n >>> 5] >>> 24 - n % 32 & 255);
    return t
}
function Je(e, n) {
    if (void 0 === e || null === e)
        throw new Error("Illegal argument " + e);
    var r = wordsToBytes(a(e, n));
    return n && n.asBytes ? r : n && n.asString ? c.bytesToString(r) : bytesToHex(r)
}
function bytesToHex(e) {
    for (var t = [], n = 0; n < e.length; n++)
        t.push((e[n] >>> 4).toString(16)),
        t.push((15 & e[n]).toString(16));
    return t.join("")
}
var Ye = {
    "d": "//dsapi.xdf.cn",
    "c": "//capi.xdf.cn",
    "a": 5053,
    "b": "750F82C2-D8F6-49F6-878C-1E7EBEBC8DA2",
    "e": "https://m.souke.xdf.cn",
    "f": true
}

ot = function(e,time) {
    // var t = "appId=".concat(5053, "&t=").concat((new Date).getTime());
    // var t = "appId=".concat(5053, "&t=").concat("1734577844409");
    var t = "appId=".concat(5053, "&t=").concat(time);
    for (var n in e)
        String(e[n]) && void 0 != e[n] && null != e[n] && "undefined" != e[n] && "null" != e[n] && (t = "".concat(t, "&").concat(n, "=").concat(e[n]));
    return {
        params: t,
        sign: Je("".concat(t).concat(Ye.b))
    }
}
var l = {
    "pageIndex": 1,
    "pageSize": 12,
    "keyword": "12312312",
    "order": "0"
}


function getSign(l,time){
    var s = ot(Ge({cityCode: "430300"}, l),time)
    console.log("sign:",s.sign)
    console.log("params:",s.params)
    return s.sign
}


getSign(l,(new Date).getTime())

