var m = 0;

function r(t) {
    return o(i(a(t)))
}

function o(t) {
    for (var e, n = m ? "0123456789ABCDEF" : "0123456789abcdef", r = "", i = 0; i < t.length; i++)
        e = t.charCodeAt(i),
            r += n.charAt(e >>> 4 & 15) + n.charAt(15 & e);
    return r
}

function i(t) {
    return c(u(s(t), 8 * t.length))
}

function a(t) {
    for (var e, n, r = "", i = -1; ++i < t.length;)
        e = t.charCodeAt(i),
            n = i + 1 < t.length ? t.charCodeAt(i + 1) : 0,
        55296 <= e && e <= 56319 && 56320 <= n && n <= 57343 && (e = 65536 + ((1023 & e) << 10) + (1023 & n),
            i++),
            e <= 127 ? r += String.fromCharCode(e) : e <= 2047 ? r += String.fromCharCode(192 | e >>> 6 & 31, 128 | 63 & e) : e <= 65535 ? r += String.fromCharCode(224 | e >>> 12 & 15, 128 | e >>> 6 & 63, 128 | 63 & e) : e <= 2097151 && (r += String.fromCharCode(240 | e >>> 18 & 7, 128 | e >>> 12 & 63, 128 | e >>> 6 & 63, 128 | 63 & e));
    return r
}

function u(t, e) {
    t[e >> 5] |= 128 << e % 32,
        t[14 + (e + 64 >>> 9 << 4)] = e;
    for (var n = 1732584193, r = -271733879, i = -1732584194, o = 271733878, a = 0; a < t.length; a += 16) {
        var s = n
            , c = r
            , u = i
            , l = o;
        n = d(n, r, i, o, t[a + 0], 7, -680876936),
            o = d(o, n, r, i, t[a + 1], 12, -389564586),
            i = d(i, o, n, r, t[a + 2], 17, 606105819),
            r = d(r, i, o, n, t[a + 3], 22, -1044525330),
            n = d(n, r, i, o, t[a + 4], 7, -176418897),
            o = d(o, n, r, i, t[a + 5], 12, 1200080426),
            i = d(i, o, n, r, t[a + 6], 17, -1473231341),
            r = d(r, i, o, n, t[a + 7], 22, -45705983),
            n = d(n, r, i, o, t[a + 8], 7, 1770035416),
            o = d(o, n, r, i, t[a + 9], 12, -1958414417),
            i = d(i, o, n, r, t[a + 10], 17, -42063),
            r = d(r, i, o, n, t[a + 11], 22, -1990404162),
            n = d(n, r, i, o, t[a + 12], 7, 1804603682),
            o = d(o, n, r, i, t[a + 13], 12, -40341101),
            i = d(i, o, n, r, t[a + 14], 17, -1502002290),
            r = d(r, i, o, n, t[a + 15], 22, 1236535329),
            n = p(n, r, i, o, t[a + 1], 5, -165796510),
            o = p(o, n, r, i, t[a + 6], 9, -1069501632),
            i = p(i, o, n, r, t[a + 11], 14, 643717713),
            r = p(r, i, o, n, t[a + 0], 20, -373897302),
            n = p(n, r, i, o, t[a + 5], 5, -701558691),
            o = p(o, n, r, i, t[a + 10], 9, 38016083),
            i = p(i, o, n, r, t[a + 15], 14, -660478335),
            r = p(r, i, o, n, t[a + 4], 20, -405537848),
            n = p(n, r, i, o, t[a + 9], 5, 568446438),
            o = p(o, n, r, i, t[a + 14], 9, -1019803690),
            i = p(i, o, n, r, t[a + 3], 14, -187363961),
            r = p(r, i, o, n, t[a + 8], 20, 1163531501),
            n = p(n, r, i, o, t[a + 13], 5, -1444681467),
            o = p(o, n, r, i, t[a + 2], 9, -51403784),
            i = p(i, o, n, r, t[a + 7], 14, 1735328473),
            r = p(r, i, o, n, t[a + 12], 20, -1926607734),
            n = f(n, r, i, o, t[a + 5], 4, -378558),
            o = f(o, n, r, i, t[a + 8], 11, -2022574463),
            i = f(i, o, n, r, t[a + 11], 16, 1839030562),
            r = f(r, i, o, n, t[a + 14], 23, -35309556),
            n = f(n, r, i, o, t[a + 1], 4, -1530992060),
            o = f(o, n, r, i, t[a + 4], 11, 1272893353),
            i = f(i, o, n, r, t[a + 7], 16, -155497632),
            r = f(r, i, o, n, t[a + 10], 23, -1094730640),
            n = f(n, r, i, o, t[a + 13], 4, 681279174),
            o = f(o, n, r, i, t[a + 0], 11, -358537222),
            i = f(i, o, n, r, t[a + 3], 16, -722521979),
            r = f(r, i, o, n, t[a + 6], 23, 76029189),
            n = f(n, r, i, o, t[a + 9], 4, -640364487),
            o = f(o, n, r, i, t[a + 12], 11, -421815835),
            i = f(i, o, n, r, t[a + 15], 16, 530742520),
            r = f(r, i, o, n, t[a + 2], 23, -995338651),
            n = h(n, r, i, o, t[a + 0], 6, -198630844),
            o = h(o, n, r, i, t[a + 7], 10, 1126891415),
            i = h(i, o, n, r, t[a + 14], 15, -1416354905),
            r = h(r, i, o, n, t[a + 5], 21, -57434055),
            n = h(n, r, i, o, t[a + 12], 6, 1700485571),
            o = h(o, n, r, i, t[a + 3], 10, -1894986606),
            i = h(i, o, n, r, t[a + 10], 15, -1051523),
            r = h(r, i, o, n, t[a + 1], 21, -2054922799),
            n = h(n, r, i, o, t[a + 8], 6, 1873313359),
            o = h(o, n, r, i, t[a + 15], 10, -30611744),
            i = h(i, o, n, r, t[a + 6], 15, -1560198380),
            r = h(r, i, o, n, t[a + 13], 21, 1309151649),
            n = h(n, r, i, o, t[a + 4], 6, -145523070),
            o = h(o, n, r, i, t[a + 11], 10, -1120210379),
            i = h(i, o, n, r, t[a + 2], 15, 718787259),
            r = h(r, i, o, n, t[a + 9], 21, -343485551),
            n = g(n, s),
            r = g(r, c),
            i = g(i, u),
            o = g(o, l)
    }
    return Array(n, r, i, o)
}

function s(t) {
    for (var e = Array(t.length >> 2), n = 0; n < e.length; n++)
        e[n] = 0;
    for (var n = 0; n < 8 * t.length; n += 8)
        e[n >> 5] |= (255 & t.charCodeAt(n / 8)) << n % 32;
    return e
}

function d(t, e, n, r, i, o, a) {
    return l(e & n | ~e & r, t, e, i, o, a)
}

function c(t) {
    for (var e = "", n = 0; n < 32 * t.length; n += 8)
        e += String.fromCharCode(t[n >> 5] >>> n % 32 & 255);
    return e
}

function v(t, e) {
    return t << e | t >>> 32 - e
}

function g(t, e) {
    var n = (65535 & t) + (65535 & e);
    return (t >> 16) + (e >> 16) + (n >> 16) << 16 | 65535 & n
}

function l(t, e, n, r, i, o) {
    return g(v(g(g(e, t), g(r, o)), i), n)
}

function p(t, e, n, r, i, o, a) {
    return l(e & r | n & ~r, t, e, i, o, a)
}

function f(t, e, n, r, i, o, a) {
    return l(e ^ n ^ r, t, e, i, o, a)
}

function h(t, e, n, r, i, o, a) {
    return l(n ^ (e | ~r), t, e, i, o, a)
}

console.log(r('123456'))