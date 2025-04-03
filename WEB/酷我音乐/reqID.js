var whl;
!function (e) {
    var n = {}

    function f(r) {
        if (n[r])
            return n[r].exports;
        var t = n[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(t.exports, t, t.exports, f),
            t.l = !0,
            t.exports
    }

    whl = f
    f.n = function (e) {
        var r = e && e.__esModule ? function () {
                    return e.default
                }
                : function () {
                    return e
                }
        ;
        return f.d(r, "a", r),
            r
    },
        f.d = function (e, r, t) {
            f.o(e, r) || Object.defineProperty(e, r, {
                enumerable: !0,
                get: t
            })
        },
        f.o = function (object, e) {
            return Object.prototype.hasOwnProperty.call(object, e)
        }
}(
    {
        112: function (e, t, n) {
            var r, o, l = n(147), c = n(148), d = 0, h = 0;
            e.exports = function (e, t, n) {
                var i = t && n || 0
                    , b = t || []
                    , f = (e = e || {}).node || r
                    , v = void 0 !== e.clockseq ? e.clockseq : o;
                if (null == f || null == v) {
                    var m = l();
                    null == f && (f = r = [1 | m[0], m[1], m[2], m[3], m[4], m[5]]),
                    null == v && (v = o = 16383 & (m[6] << 8 | m[7]))
                }
                var y = void 0 !== e.msecs ? e.msecs : (new Date).getTime()
                    , w = void 0 !== e.nsecs ? e.nsecs : h + 1
                    , dt = y - d + (w - h) / 1e4;
                if (dt < 0 && void 0 === e.clockseq && (v = v + 1 & 16383),
                (dt < 0 || y > d) && void 0 === e.nsecs && (w = 0),
                w >= 1e4)
                    throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
                d = y,
                    h = w,
                    o = v;
                var A = (1e4 * (268435455 & (y += 122192928e5)) + w) % 4294967296;
                b[i++] = A >>> 24 & 255,
                    b[i++] = A >>> 16 & 255,
                    b[i++] = A >>> 8 & 255,
                    b[i++] = 255 & A;
                var x = y / 4294967296 * 1e4 & 268435455;
                b[i++] = x >>> 8 & 255,
                    b[i++] = 255 & x,
                    b[i++] = x >>> 24 & 15 | 16,
                    b[i++] = x >>> 16 & 255,
                    b[i++] = v >>> 8 | 128,
                    b[i++] = 255 & v;
                for (var T = 0; T < 6; ++T)
                    b[i + T] = f[T];
                return t || c(b)
            }
        },
        147: function (e, t) {
            var n = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof window.msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto);
            if (n) {
                var r = new Uint8Array(16);
                e.exports = function () {
                    return n(r),
                        r
                }
            } else {
                var o = new Array(16);
                e.exports = function () {
                    for (var e, i = 0; i < 16; i++)
                        3 & i || (e = 4294967296 * Math.random()),
                            o[i] = e >>> ((3 & i) << 3) & 255;
                    return o
                }
            }
        },
        148: function (e, t) {
            for (var n = [], i = 0; i < 256; ++i)
                n[i] = (i + 256).toString(16).substr(1);
            e.exports = function (e, t) {
                var i = t || 0
                    , r = n;
                return [r[e[i++]], r[e[i++]], r[e[i++]], r[e[i++]], "-", r[e[i++]], r[e[i++]], "-", r[e[i++]], r[e[i++]], "-", r[e[i++]], r[e[i++]], "-", r[e[i++]], r[e[i++]], r[e[i++]], r[e[i++]], r[e[i++]], r[e[i++]]].join("")
            }
        },
    }
);
console.log(whl(112)())