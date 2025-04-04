// https://tousu.sina.com.cn/company/view/?couid=1003609&sid=26828
function getEnvs(proxyObjs) {
    for (let i = 0; i < proxyObjs.length; i++) {
        const handler = `{
      get: function(target, property, receiver) {
        console.log("方法:", "get  ", "对象:", "${proxyObjs[i]}", "  属性:", property, "  属性类型：", typeof property, ", 属性值：", target[property], ", 属性值类型：", typeof target[property]);
        return target[property];
      },
      set: function(target, property, value, receiver) {
        console.log("方法:", "set  ", "对象:", "${proxyObjs[i]}", "  属性:", property, "  属性类型：", typeof property, ", 属性值：", value, ", 属性值类型：", typeof target[property]);
        return Reflect.set(...arguments);
      }
    }`;
        eval(`try {
            ${proxyObjs[i]};
            ${proxyObjs[i]} = new Proxy(${proxyObjs[i]}, ${handler});
        } catch (e) {
            ${proxyObjs[i]} = {};
            ${proxyObjs[i]} = new Proxy(${proxyObjs[i]}, ${handler});
        }`);
    }
}

window = global;
document = {};
navigator = {};
location = {};
history = {};
screen = {};
window = new Proxy(window, {
    set(target, property, value, receiver) {
        // console.log("设置属性set window", property, typeof value);
        return Reflect.set(...arguments);
    },
    get(target, property, receiver) {
        // console.log("获取属性get window", property, typeof target[property]);
        return target[property]
    }
});
document = new Proxy(document, {
    set(target, property, value, receiver) {
        // console.log("设置属性set document", property, typeof value);
        return Reflect.set(...arguments);
    },
    get(target, property, receiver) {
        // console.log("获取属性get document", property, typeof target[property]);
        return target[property]
    }
});
navigator = new Proxy(navigator, {
    set(target, property, value, receiver) {
        // console.log("设置属性set navigator", property, typeof value);
        return Reflect.set(...arguments);
    },
    get(target, property, receiver) {
        // console.log("获取属性get navigator", property, typeof target[property]);
        return target[property]
    }
});
location = new Proxy(location, {
    set(target, property, value, receiver) {
        // console.log("设置属性set location", property, typeof value);
        return Reflect.set(...arguments);
    },
    get(target, property, receiver) {
        // console.log("获取属性get location", property, typeof target[property]);
        return target[property]
    }
});
history = new Proxy(history, {
    set(target, property, value, receiver) {
        // console.log("设置属性set history", property, typeof value);
        return Reflect.set(...arguments);
    },
    get(target, property, receiver) {
        // console.log("获取属性get history", property, typeof target[property]);
        return target[property]
    }
});
screen = new Proxy(screen, {
    set(target, property, value, receiver) {
        // console.log("设置属性set screen", property, typeof value);
        return Reflect.set(...arguments);
    },
    get(target, property, receiver) {
        // console.log("获取属性get screen", property, typeof target[property]);
        return target[property]
    }
});

/*-----------吞吐环境-------------*/

// 加载器
!function (e) {
    var t = {};
    function r(i) {
        if (t[i])
            return t[i].exports;
        var n = t[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        console.log(i);
        return e[i].call(n.exports, n, n.exports, r),
            n.l = !0,
            n.exports
    }
    r.m = e,
        r.c = t,
        r.d = function (e, t, i) {
            r.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: i
            })
        }
        ,
        r.r = function (e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }),
                Object.defineProperty(e, "__esModule", {
                    value: !0
                })
        }
        ,
        r.t = function (e, t) {
            if (1 & t && (e = r(e)),
                8 & t)
                return e;
            if (4 & t && "object" == typeof e && e && e.__esModule)
                return e;
            var i = Object.create(null);
            if (r.r(i),
                Object.defineProperty(i, "default", {
                    enumerable: !0,
                    value: e
                }),
                2 & t && "string" != typeof e)
                for (var n in e)
                    r.d(i, n, function (t) {
                        return e[t]
                    }
                        .bind(null, n));
            return i
        }
        ,
        r.n = function (e) {
            var t = e && e.__esModule ? function () {
                return e.default
            }
                : function () {
                    return e
                }
                ;
            return r.d(t, "a", t),
                t
        }
        ,
        r.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }
        ,
        r.p = "//n.sinaimg.cn/finance/blackcat/pc/",
        // r(r.s = 429)
        window.nn = r
}([
    function (e, t, r) {
        var i;
        e.exports = (i = r(1),
            function (e) {
                var t = i
                    , r = t.lib
                    , n = r.WordArray
                    , o = r.Hasher
                    , a = t.algo
                    , s = []
                    , f = [];
                !function () {
                    function t(t) {
                        for (var r = e.sqrt(t), i = 2; i <= r; i++)
                            if (!(t % i))
                                return !1;
                        return !0
                    }
                    function r(e) {
                        return 4294967296 * (e - (0 | e)) | 0
                    }
                    for (var i = 2, n = 0; n < 64;)
                        t(i) && (n < 8 && (s[n] = r(e.pow(i, .5))),
                            f[n] = r(e.pow(i, 1 / 3)),
                            n++),
                            i++
                }();
                var c = []
                    , h = a.SHA256 = o.extend({
                        _doReset: function () {
                            this._hash = new n.init(s.slice(0))
                        },
                        _doProcessBlock: function (e, t) {
                            for (var r = this._hash.words, i = r[0], n = r[1], o = r[2], a = r[3], s = r[4], h = r[5], d = r[6], u = r[7], l = 0; l < 64; l++) {
                                if (l < 16)
                                    c[l] = 0 | e[t + l];
                                else {
                                    var p = c[l - 15]
                                        , b = (p << 25 | p >>> 7) ^ (p << 14 | p >>> 18) ^ p >>> 3
                                        , m = c[l - 2]
                                        , y = (m << 15 | m >>> 17) ^ (m << 13 | m >>> 19) ^ m >>> 10;
                                    c[l] = b + c[l - 7] + y + c[l - 16]
                                }
                                var g = i & n ^ i & o ^ n & o
                                    , v = (i << 30 | i >>> 2) ^ (i << 19 | i >>> 13) ^ (i << 10 | i >>> 22)
                                    , _ = u + ((s << 26 | s >>> 6) ^ (s << 21 | s >>> 11) ^ (s << 7 | s >>> 25)) + (s & h ^ ~s & d) + f[l] + c[l];
                                u = d,
                                    d = h,
                                    h = s,
                                    s = a + _ | 0,
                                    a = o,
                                    o = n,
                                    n = i,
                                    i = _ + (v + g) | 0
                            }
                            r[0] = r[0] + i | 0,
                                r[1] = r[1] + n | 0,
                                r[2] = r[2] + o | 0,
                                r[3] = r[3] + a | 0,
                                r[4] = r[4] + s | 0,
                                r[5] = r[5] + h | 0,
                                r[6] = r[6] + d | 0,
                                r[7] = r[7] + u | 0
                        },
                        _doFinalize: function () {
                            var t = this._data
                                , r = t.words
                                , i = 8 * this._nDataBytes
                                , n = 8 * t.sigBytes;
                            return r[n >>> 5] |= 128 << 24 - n % 32,
                                r[14 + (n + 64 >>> 9 << 4)] = e.floor(i / 4294967296),
                                r[15 + (n + 64 >>> 9 << 4)] = i,
                                t.sigBytes = 4 * r.length,
                                this._process(),
                                this._hash
                        },
                        clone: function () {
                            var e = o.clone.call(this);
                            return e._hash = this._hash.clone(),
                                e
                        }
                    });
                t.SHA256 = o._createHelper(h),
                    t.HmacSHA256 = o._createHmacHelper(h)
            }(Math),
            i.SHA256)
    },
    function (e, t, r) {
        (function (t) {
            var i;
            e.exports = (i = i || function (e, i) {
                var n;
                if ("undefined" != typeof window && window.crypto && (n = window.crypto),
                    !n && "undefined" != typeof window && window.msCrypto && (n = window.msCrypto),
                    !n && void 0 !== t && t.crypto && (n = t.crypto),
                    !n)
                    try {
                        n = r(217)
                    } catch (e) { }
                var o = function () {
                    if (n) {
                        if ("function" == typeof n.getRandomValues)
                            try {
                                return n.getRandomValues(new Uint32Array(1))[0]
                            } catch (e) { }
                        if ("function" == typeof n.randomBytes)
                            try {
                                return n.randomBytes(4).readInt32LE()
                            } catch (e) { }
                    }
                    throw new Error("Native crypto module could not be used to get secure random number.")
                }
                    , a = Object.create || function () {
                        function e() { }
                        return function (t) {
                            var r;
                            return e.prototype = t,
                                r = new e,
                                e.prototype = null,
                                r
                        }
                    }()
                    , s = {}
                    , f = s.lib = {}
                    , c = f.Base = {
                        extend: function (e) {
                            var t = a(this);
                            return e && t.mixIn(e),
                                t.hasOwnProperty("init") && this.init !== t.init || (t.init = function () {
                                    t.$super.init.apply(this, arguments)
                                }
                                ),
                                t.init.prototype = t,
                                t.$super = this,
                                t
                        },
                        create: function () {
                            var e = this.extend();
                            return e.init.apply(e, arguments),
                                e
                        },
                        init: function () { },
                        mixIn: function (e) {
                            for (var t in e)
                                e.hasOwnProperty(t) && (this[t] = e[t]);
                            e.hasOwnProperty("toString") && (this.toString = e.toString)
                        },
                        clone: function () {
                            return this.init.prototype.extend(this)
                        }
                    }
                    , h = f.WordArray = c.extend({
                        init: function (e, t) {
                            e = this.words = e || [],
                                this.sigBytes = null != t ? t : 4 * e.length
                        },
                        toString: function (e) {
                            return (e || u).stringify(this)
                        },
                        concat: function (e) {
                            var t = this.words
                                , r = e.words
                                , i = this.sigBytes
                                , n = e.sigBytes;
                            if (this.clamp(),
                                i % 4)
                                for (var o = 0; o < n; o++) {
                                    var a = r[o >>> 2] >>> 24 - o % 4 * 8 & 255;
                                    t[i + o >>> 2] |= a << 24 - (i + o) % 4 * 8
                                }
                            else
                                for (o = 0; o < n; o += 4)
                                    t[i + o >>> 2] = r[o >>> 2];
                            return this.sigBytes += n,
                                this
                        },
                        clamp: function () {
                            var t = this.words
                                , r = this.sigBytes;
                            t[r >>> 2] &= 4294967295 << 32 - r % 4 * 8,
                                t.length = e.ceil(r / 4)
                        },
                        clone: function () {
                            var e = c.clone.call(this);
                            return e.words = this.words.slice(0),
                                e
                        },
                        random: function (e) {
                            for (var t = [], r = 0; r < e; r += 4)
                                t.push(o());
                            return new h.init(t, e)
                        }
                    })
                    , d = s.enc = {}
                    , u = d.Hex = {
                        stringify: function (e) {
                            for (var t = e.words, r = e.sigBytes, i = [], n = 0; n < r; n++) {
                                var o = t[n >>> 2] >>> 24 - n % 4 * 8 & 255;
                                i.push((o >>> 4).toString(16)),
                                    i.push((15 & o).toString(16))
                            }
                            return i.join("")
                        },
                        parse: function (e) {
                            for (var t = e.length, r = [], i = 0; i < t; i += 2)
                                r[i >>> 3] |= parseInt(e.substr(i, 2), 16) << 24 - i % 8 * 4;
                            return new h.init(r, t / 2)
                        }
                    }
                    , l = d.Latin1 = {
                        stringify: function (e) {
                            for (var t = e.words, r = e.sigBytes, i = [], n = 0; n < r; n++) {
                                var o = t[n >>> 2] >>> 24 - n % 4 * 8 & 255;
                                i.push(String.fromCharCode(o))
                            }
                            return i.join("")
                        },
                        parse: function (e) {
                            for (var t = e.length, r = [], i = 0; i < t; i++)
                                r[i >>> 2] |= (255 & e.charCodeAt(i)) << 24 - i % 4 * 8;
                            return new h.init(r, t)
                        }
                    }
                    , p = d.Utf8 = {
                        stringify: function (e) {
                            try {
                                return decodeURIComponent(escape(l.stringify(e)))
                            } catch (e) {
                                throw new Error("Malformed UTF-8 data")
                            }
                        },
                        parse: function (e) {
                            return l.parse(unescape(encodeURIComponent(e)))
                        }
                    }
                    , b = f.BufferedBlockAlgorithm = c.extend({
                        reset: function () {
                            this._data = new h.init,
                                this._nDataBytes = 0
                        },
                        _append: function (e) {
                            "string" == typeof e && (e = p.parse(e)),
                                this._data.concat(e),
                                this._nDataBytes += e.sigBytes
                        },
                        _process: function (t) {
                            var r, i = this._data, n = i.words, o = i.sigBytes, a = this.blockSize, s = o / (4 * a), f = (s = t ? e.ceil(s) : e.max((0 | s) - this._minBufferSize, 0)) * a, c = e.min(4 * f, o);
                            if (f) {
                                for (var d = 0; d < f; d += a)
                                    this._doProcessBlock(n, d);
                                r = n.splice(0, f),
                                    i.sigBytes -= c
                            }
                            return new h.init(r, c)
                        },
                        clone: function () {
                            var e = c.clone.call(this);
                            return e._data = this._data.clone(),
                                e
                        },
                        _minBufferSize: 0
                    })
                    , m = (f.Hasher = b.extend({
                        cfg: c.extend(),
                        init: function (e) {
                            this.cfg = this.cfg.extend(e),
                                this.reset()
                        },
                        reset: function () {
                            b.reset.call(this),
                                this._doReset()
                        },
                        update: function (e) {
                            return this._append(e),
                                this._process(),
                                this
                        },
                        finalize: function (e) {
                            return e && this._append(e),
                                this._doFinalize()
                        },
                        blockSize: 16,
                        _createHelper: function (e) {
                            return function (t, r) {
                                return new e.init(r).finalize(t)
                            }
                        },
                        _createHmacHelper: function (e) {
                            return function (t, r) {
                                return new m.HMAC.init(e, r).finalize(t)
                            }
                        }
                    }),
                        s.algo = {});
                return s
            }(Math),
                i)
        }
        ).call(this, window)
    }
])

r = window.nn
o = r(0)

h = function (e, t, r) {
    var i = ""
        , n = t
        , o = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    e && (n = Math.round(Math.random() * (r - t)) + t);
    for (var a = 0; a < n; a++) {
        i += o[Math.round(Math.random() * (o.length - 1))]
    }
    return i
}(!1, 16)

function get_signature(time,rs,pageNum) {
    r = o([time, rs, "$d6eb7ff91ee257475%", "26828", 1, 10, pageNum].sort().join("")).toString()
    return r
}

// time = (new Date).getTime
// pageNum = "1"
// console.log(get_signature(time,h,pageNum));




