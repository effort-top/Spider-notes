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

require('regenerator-runtime/runtime');
const CryptoJS = require('crypto-js'); // 引入 crypto-js 库
const crypto = require('crypto'); // 引入 Node.js 的 crypto 模块
const { log } = require('console');
!function (t) {
    var r = {};
    function e(n) {
        if (r[n])
            return r[n].exports;
        var o = r[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return t[n].call(o.exports, o, o.exports, e),
            o.l = !0,
            o.exports
    }
    e.m = t,
        e.c = r,
        e.d = function (t, r, n) {
            e.o(t, r) || Object.defineProperty(t, r, {
                enumerable: !0,
                get: n
            })
        }
        ,
        e.r = function (t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                value: "Module"
            }),
                Object.defineProperty(t, "__esModule", {
                    value: !0
                })
        }
        ,
        e.t = function (t, r) {
            if (1 & r && (t = e(t)),
                8 & r)
                return t;
            if (4 & r && "object" == typeof t && t && t.__esModule)
                return t;
            var n = Object.create(null);
            if (e.r(n),
                Object.defineProperty(n, "default", {
                    enumerable: !0,
                    value: t
                }),
                2 & r && "string" != typeof t)
                for (var o in t)
                    e.d(n, o, function (r) {
                        return t[r]
                    }
                        .bind(null, o));
            return n
        }
        ,
        e.n = function (t) {
            var r = t && t.__esModule ? function () {
                return t.default
            }
                : function () {
                    return t
                }
                ;
            return e.d(r, "a", r),
                r
        }
        ,
        e.o = function (t, r) {
            return Object.prototype.hasOwnProperty.call(t, r)
        }
        ,
        e.p = "",
        // e(e.s = 850)
        window.e = e;
}([
    function (t, r, e) {
        "use strict";
        function n(t, r) {
            var e = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
            console.log(t+"\n"+t[Symbol.iterator])
            if (!e) {
                if (Array.isArray(t) || (e = function (t, r) {
                    if (!t)
                        return;
                    if ("string" == typeof t)
                        return o(t, r);
                    var e = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === e && t.constructor && (e = t.constructor.name);
                    if ("Map" === e || "Set" === e)
                        return Array.from(t);
                    if ("Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))
                        return o(t, r)
                }(t)) || r && t && "number" == typeof t.length) {
                    e && (t = e);
                    var n = 0
                        , i = function () { };
                    return {
                        s: i,
                        n: function () {
                            return n >= t.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: t[n++]
                            }
                        },
                        e: function (t) {
                            throw t
                        },
                        f: i
                    }
                }
                console.log(r)
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var a, u = !0, c = !1;
            return {
                s: function () {
                    e = e.call(t)
                },
                n: function () {
                    var t = e.next();
                    return u = t.done,
                        t
                },
                e: function (t) {
                    c = !0,
                        a = t
                },
                f: function () {
                    try {
                        u || null == e.return || e.return()
                    } finally {
                        if (c)
                            throw a
                    }
                }
            }
        }
        function o(t, r) {
            (null == r || r > t.length) && (r = t.length);
            for (var e = 0, n = new Array(r); e < r; e++)
                n[e] = t[e];
            return n
        }
        var i = function (t) {
            return new TextEncoder("utf-8").encode(t)
        }
            , a = function () {
                for (var t = arguments.length, r = new Array(t), e = 0; e < t; e++)
                    r[e] = arguments[e];
                var o = r.reduce((function (t, r) {
                    return t + r.length
                }
                ), 0)
                    , i = 0;
                return r.reduce((function (t, r) {
                    var e, o = n(r);
                    try {
                        for (o.s(); !(e = o.n()).done;) {
                            var a = e.value;
                            t[i++] = a
                        }
                    } catch (t) {
                        o.e(t)
                    } finally {
                        o.f()
                    }
                    return t
                }
                ), new Uint8Array(o))
            }
            , u = function (t, r) {
                return t * r
            }
            , c = function (t, r) {
                return t + r
            }
            , s = function (t, r) {
                var e = function (t, r) {
                    return t % r
                }(t, r);
                return function (t) {
                    return t < BigInt(0)
                }(e) && (e = c(e, r)),
                    e
            }
            , f = function (t, r, e) {
                return function (t, r, e) {
                    if (e === BigInt(1))
                        return BigInt(0);
                    var n = BigInt(1);
                    for (t %= e; r > BigInt(0);)
                        r % BigInt(2) === BigInt(1) && (n = n * t % e),
                            r >>= BigInt(1),
                            t = t * t % e;
                    return n
                }(t, r, e)
            }
            , h = e(1)
            , l = e.n(h);
        function p(t) {
            return function (t) {
                if (Array.isArray(t))
                    return v(t)
            }(t) || function (t) {
                if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"])
                    return Array.from(t)
            }(t) || function (t, r) {
                if (!t)
                    return;
                if ("string" == typeof t)
                    return v(t, r);
                var e = Object.prototype.toString.call(t).slice(8, -1);
                "Object" === e && t.constructor && (e = t.constructor.name);
                if ("Map" === e || "Set" === e)
                    return Array.from(t);
                if ("Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))
                    return v(t, r)
            }(t) || function () {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function v(t, r) {
            (null == r || r > t.length) && (r = t.length);
            for (var e = 0, n = new Array(r); e < r; e++)
                n[e] = t[e];
            return n
        }
        function d(t, r, e, n, o, i, a) {
            try {
                var u = t[i](a)
                    , c = u.value
            } catch (t) {
                return void e(t)
            }
            u.done ? r(c) : Promise.resolve(c).then(n, o)
        }
        function g(t, r) {
            for (var e = 0; e < r.length; e++) {
                var n = r[e];
                n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value" in n && (n.writable = !0),
                    Object.defineProperty(t, n.key, n)
            }
        }
        function y(t, r, e) {
            return r in t ? Object.defineProperty(t, r, {
                value: e,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[r] = e,
                t
        }
        var m = function () {
            function t(r) {
                !function (t, r) {
                    if (!(t instanceof r))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t),
                    y(this, "_bi", void 0),
                    y(this, "_buffer", void 0),
                    y(this, "_hex", void 0),
                    y(this, "_hash", void 0),
                    y(this, "_base64", void 0),
                    "string" == typeof r ? this._hex = r : r instanceof ArrayBuffer ? this._buffer = new Uint8Array(r) : r instanceof Uint8Array ? this._buffer = r : this._bi = r
            }
            var r, e, n, o, i;
            return r = t,
                e = [{
                    key: "bi",
                    get: function () {
                        var t;
                        return void 0 === this._bi && (this._bi = (t = "0x" + this.hex,
                            BigInt(t))),
                            this._bi
                    }
                }, {
                    key: "buffer",
                    get: function () {
                        return void 0 === this._buffer && (this._buffer = function (t) {
                            t.length % 2 == 1 && (t = "0" + t);
                            var r, e, n, o = t.length / 2, i = new Uint8Array(o);
                            for (r = 0; r < o; r++) {
                                if (e = t.substr(2 * r, 2),
                                    n = parseInt(e, 16),
                                    isNaN(n))
                                    throw new Error("String contains non hexadecimal value: '".concat(t, "'"));
                                i[r] = n
                            }
                            return i
                        }(this.hex)),
                            this._buffer
                    }
                }, {
                    key: "hex",
                    get: function () {
                        if (void 0 === this._hex)
                            if (void 0 !== this._bi) {
                                var t = this._bi.toString(16);
                                t.length % 2 != 0 && (t = "0" + t),
                                    this._hex = t
                            } else
                                this._hex = this._buffer.reduce((function (t, r) {
                                    return t + r.toString(16).padStart(2, "0")
                                }
                                ), "");
                        return this._hex
                    }
                }, {
                    key: "getHash",
                    value: function () {
                        if (!this._hash) {
                            const hash = crypto.createHash('sha256').update(this.buffer).digest();
                            this._hash = new Uint8Array(hash); // 假设 this._hash 需要是 Uint8Array
                        }
                        return this._hash;
                    }
                }, {
                    key: "pad",
                    value: function (r) {
                        return new t(function (t, r) {
                            for (var e = new Uint8Array(r), n = r - t.length, o = 0; o < t.length; o++)
                                e[o + n] = t[o];
                            return e
                        }(r.buffer, this.buffer.length))
                    }
                }, {
                    key: "getBase64",
                    value: function () {
                        return this._base64 || (this._base64 = btoa(String.fromCharCode.apply(String, p(new Uint8Array(this.buffer))))),
                            this._base64
                    }
                }],
                n = [{
                    key: "concat",
                    value: function () {
                        for (var r = arguments.length, e = new Array(r), n = 0; n < r; n++)
                            e[n] = arguments[n];
                        var o = e.map((function (t) {
                            return t.buffer
                        }
                        ));
                        return new t(a.apply(void 0, p(o)))
                    }
                }],
                e && g(r.prototype, e),
                n && g(r, n),
                Object.defineProperty(r, "prototype", {
                    writable: !1
                }),
                t
        }();
        function b(t, r, e, n, o, i, a) {
            try {
                var u = t[i](a)
                    , c = u.value
            } catch (t) {
                return void e(t)
            }
            u.done ? r(c) : Promise.resolve(c).then(n, o)
        }
        function w(t) {
            return function () {
                var r = this
                    , e = arguments;
                return new Promise((function (n, o) {
                    var i = t.apply(r, e);
                    function a(t) {
                        b(i, n, o, a, u, "next", t)
                    }
                    function u(t) {
                        b(i, n, o, a, u, "throw", t)
                    }
                    a(void 0)
                }
                ))
            }
        }
        var x = function () {
            const t = 256; // 定义 t 为 256
            const randomBytes = crypto.randomBytes(t); // 使用 crypto.randomBytes 生成随机字节
            const uint8Array = new Uint8Array(randomBytes); // 将 Buffer 转换为 Uint8Array
            return new m(uint8Array); // 返回一个新的 m 实例
            // var t
        }
            , E = function (t) {
                var r = t.A
                    , e = t.B
                    , n = t.N;
                return m.concat(n.pad(r), n.pad(e)).getHash()
            }
            , A = function () {
                var t = w(regeneratorRuntime.mark((function t(r) {
                    var e, n, o, i, a, u, c;
                    return regeneratorRuntime.wrap((function (t) {
                        for (; ;)
                            switch (t.prev = t.next) {
                                case 0:
                                    return e = r.s,
                                        r.I,
                                        o = r.P,
                                        i = new m(new Uint8Array([":".charCodeAt(0)])),
                                        n = new m(""),
                                        a = m.concat(n, i, o),
                                        t.next = 6,
                                        a.getHash();
                                case 6:
                                    return u = t.sent,
                                        c = m.concat(e, u),
                                        t.abrupt("return", c.getHash());
                                case 9:
                                case "end":
                                    return t.stop()
                            }
                    }
                    ), t)
                }
                )));
                return function (r) {
                    return t.apply(this, arguments)
                }
            }()
            , R = function (t) {
                var r = t.B
                    , e = t.k
                    , n = t.x
                    , o = t.a
                    , i = t.u
                    , a = t.N
                    , h = t.g
                    , l = c(u(i.bi, n.bi), o.bi)
                    , p = s(u(f(h.bi, n.bi, a.bi), e.bi), a.bi)
                    , v = f(s(function (t, r) {
                        return t - r
                    }(r.bi, p), a.bi), l, a.bi);
                return new m(v)
            }
            , S = function (t) {
                var r = t.S;
                return t.N.pad(r).getHash()
            }
            // , I = function() {
            //     var t = w(regeneratorRuntime.mark((function t(r) {
            //         var e, n, o, a, u, c, s, f;
            //         return regeneratorRuntime.wrap((function(t) {
            //             for (; ; )
            //                 switch (t.prev = t.next) {
            //                 case 0:
            //                     return e = r.password,
            //                     n = r.s,
            //                     o = r.i,
            //                     a = r.protocol,
            //                     u = void 0 === a ? "s2k" : a,
            //                     t.next = 3,
            //                     e.getHash();
            //                 case 3:
            //                     return c = t.sent,
            //                     t.next = 6,
            //                     // l.a.crypto.subtle.importKey("raw", "s2k" === u ? c.buffer : i(c.hex), "PBKDF2", !1, ["deriveBits"]);
            //                     l.a.crypto.subtle.importKey("raw", "s2k" === u ? c.buffer : i(c.hex), "PBKDF2", !1, ["deriveBits"]);

            //                 case 6:
            //                     return s = t.sent,
            //                     t.next = 9,
            //                     l.a.crypto.subtle.deriveBits({
            //                         name: "PBKDF2",
            //                         salt: n.buffer,
            //                         iterations: o,
            //                         hash: {
            //                             name: "SHA-256"
            //                         }
            //                     }, s, 256);
            //                 case 9:
            //                     return f = t.sent,
            //                     t.abrupt("return", new m(f));
            //                 case 11:
            //                 case "end":
            //                     return t.stop()
            //                 }
            //         }
            //         ), t)
            //     }
            //     )));
            //     return function(r) {
            //         return t.apply(this, arguments)
            //     }
            // }()
            , I = function () {
                return async function (r) {
                    const e = r.password;
                    const n = r.s;
                    const o = r.i;
                    const a = r.protocol;
                    const u = void 0 === a ? "s2k" : a;

                    // 获取哈希值
                    const c = await e.getHash();

                    // 导入密钥
                    const keyMaterial = crypto.createSecretKey("s2k" === u ? c.buffer : Buffer.from(c.hex, 'hex'));

                    // 从 KeyObject 中提取原始密钥数据
                    const keyData = keyMaterial.export(); // 返回 Buffer

                    // 派生密钥
                    const derivedKey = crypto.pbkdf2Sync(
                        keyData,
                        n.buffer,
                        o,
                        32, // 派生密钥的长度（256 位 = 32 字节）
                        'sha256'
                    );

                    // 将派生密钥转换为 ArrayBuffer
                    const derivedKeyArrayBuffer = derivedKey.buffer;

                    // 返回派生密钥
                    return new m(derivedKeyArrayBuffer);
                };
            }()
            , T = function () {
                var t = w(regeneratorRuntime.mark((function t(r) {
                    var e, n, o, i, a, u, c, s, f, h, l;
                    return regeneratorRuntime.wrap((function (t) {
                        for (; ;)
                            switch (t.prev = t.next) {
                                case 0:
                                    return e = r.I,
                                        n = r.s,
                                        o = r.A,
                                        i = r.B,
                                        a = r.K,
                                        u = r.N,
                                        c = r.g,
                                        t.next = 3,
                                        u.pad(c).getHash();
                                case 3:
                                    return s = t.sent,
                                        t.next = 6,
                                        u.getHash();
                                case 6:
                                    return f = t.sent,
                                        h = new m((p = f.bi,
                                            v = s.bi,
                                            p ^ v)),
                                        t.next = 10,
                                        e.getHash();
                                case 10:
                                    return l = t.sent,
                                        t.abrupt("return", m.concat(h, l, n, o, i, a).getHash());
                                case 12:
                                case "end":
                                    return t.stop()
                            }
                        var p, v
                    }
                    ), t)
                }
                )));
                return function (r) {
                    return t.apply(this, arguments)
                }
            }()
            , O = function () {
                var t = w(regeneratorRuntime.mark((function t(r) {
                    var e, n, o, i;
                    return regeneratorRuntime.wrap((function (t) {
                        for (; ;)
                            switch (t.prev = t.next) {
                                case 0:
                                    return e = r.A,
                                        n = r.M1,
                                        o = r.K,
                                        t.next = 3,
                                        m.concat(e, n, o).getHash();
                                case 3:
                                    return i = t.sent,
                                        t.abrupt("return", i);
                                case 5:
                                case "end":
                                    return t.stop()
                            }
                    }
                    ), t)
                }
                )));
                return function (r) {
                    return t.apply(this, arguments)
                }
            }()
            , M = {
                2048: {
                    N: "AC6BDB41 324A9A9B F166DE5E 1389582F AF72B665 1987EE07 FC319294 3DB56050 A37329CB B4A099ED 8193E075 7767A13D D52312AB 4B03310D CD7F48A9 DA04FD50 E8083969 EDB767B0 CF609517 9A163AB3 661A05FB D5FAAAE8 2918A996 2F0B93B8 55F97993 EC975EEA A80D740A DBF4FF74 7359D041 D5C33EA7 1D281E44 6B14773B CA97B43A 23FB8016 76BD207A 436C6481 F1D2B907 8717461A 5B9D32E6 88F87748 544523B5 24B0D57D 5EA77A27 75D2ECFA 032CFBDB F52FB378 61602790 04E57AE6 AF874E73 03CE5329 9CCC041C 7BC308D8 2A5698F3 A8D0C382 71AE35F8 E9DBFBB6 94B5C803 D89F7AE4 35DE236D 525F5475 9B65E372 FCD68EF2 0FA7111F 9E4AFF73",
                    g: "02"
                }
            };
        function _(t, r, e, n, o, i, a) {
            try {
                var u = t[i](a)
                    , c = u.value
            } catch (t) {
                return void e(t)
            }
            u.done ? r(c) : Promise.resolve(c).then(n, o)
        }
        function P(t) {
            return function () {
                var r = this
                    , e = arguments;
                return new Promise((function (n, o) {
                    var i = t.apply(r, e);
                    function a(t) {
                        _(i, n, o, a, u, "next", t)
                    }
                    function u(t) {
                        _(i, n, o, a, u, "throw", t)
                    }
                    a(void 0)
                }
                ))
            }
        }
        function k(t, r) {
            for (var e = 0; e < r.length; e++) {
                var n = r[e];
                n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value" in n && (n.writable = !0),
                    Object.defineProperty(t, n.key, n)
            }
        }
        function N(t, r, e) {
            return r in t ? Object.defineProperty(t, r, {
                value: e,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[r] = e,
                t
        }
        var j = function (t) {
            if (!M[t])
                throw new Error("group ".concat(t, " not supported."));
            var r, e = M[t], n = e.N, o = e.g;
            return {
                N: new m((r = n,
                    r.split(/\s/).join(""))),
                g: new m(o)
            }
        }("2048")
            , D = j.N
            , U = j.g
            , C = function () {
                function t(r) {
                    !function (t, r) {
                        if (!(t instanceof r))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, t),
                        N(this, "accountName", void 0),
                        N(this, "_privateValue", void 0),
                        N(this, "_publicValue", void 0),
                        this.accountName = r
                }
                var r, e, n, o, a;
                return r = t,
                    (e = [{
                        key: "privateValue",
                        get: function () {
                            return this._privateValue || (this._privateValue = x()),
                                this._privateValue
                        }
                    }, {
                        key: "publicValue",
                        get: function () {
                            var t, r, e, n;
                            return this._publicValue || (this._publicValue = (t = {
                                a: this.privateValue,
                                N: D,
                                g: U
                            },
                                r = t.a,
                                e = t.g,
                                (n = t.N).pad(new m(f(e.bi, r.bi, n.bi))))),
                                this._publicValue
                        }
                    }, {
                        key: "getEvidenceData",
                        value: (a = P(regeneratorRuntime.mark((function t(r) {
                            var e, n, o, a, u, c, s, f, h, l, p, v, d, g, y, b, w, x, M, _;
                            return regeneratorRuntime.wrap((function (t) {
                                for (; ;)
                                    switch (t.prev = t.next) {
                                        case 0:
                                            return e = r.iterations,
                                                n = r.serverPublicValue,
                                                o = r.salt,
                                                a = r.password,
                                                u = r.protocol,
                                                c = void 0 === u ? "s2k" : u,
                                                s = this.privateValue,
                                                f = this.publicValue,
                                                h = new m(n),
                                                l = e,
                                                p = new m(o),
                                                v = new m(i(this.accountName.toLowerCase())),
                                                t.next = 9,
                                                I({
                                                    password: new m(i(a)),
                                                    s: p,
                                                    i: l,
                                                    protocol: c
                                                });
                                        case 9:
                                            return d = t.sent,
                                                t.next = 12,
                                                k = void 0,
                                                N = void 0,
                                                k = (P = {
                                                    N: D,
                                                    g: U
                                                }).N,
                                                N = P.g,
                                                m.concat(k, k.pad(N)).getHash();
                                        case 12:
                                            return g = t.sent,
                                                t.next = 15,
                                                A({
                                                    s: p,
                                                    I: v,
                                                    P: d
                                                });
                                        case 15:
                                            return y = t.sent,
                                                t.next = 18,
                                                E({
                                                    A: f,
                                                    B: h,
                                                    N: D
                                                });
                                        case 18:
                                            return b = t.sent,
                                                w = R({
                                                    B: h,
                                                    k: g,
                                                    x: y,
                                                    a: s,
                                                    u: b,
                                                    N: D,
                                                    g: U
                                                }),
                                                t.next = 22,
                                                S({
                                                    S: w,
                                                    N: D
                                                });
                                        case 22:
                                            return x = t.sent,
                                                t.next = 25,
                                                T({
                                                    I: v,
                                                    s: p,
                                                    A: f,
                                                    B: h,
                                                    K: x,
                                                    N: D,
                                                    g: U
                                                });
                                        case 25:
                                            return M = t.sent,
                                                t.next = 28,
                                                O({
                                                    A: f,
                                                    M1: M,
                                                    K: x
                                                });
                                        case 28:
                                            return _ = t.sent,
                                                t.abrupt("return", {
                                                    M1: M.getBase64(),
                                                    M2: _.getBase64(),
                                                    K: x.getBase64()
                                                });
                                        case 30:
                                        case "end":
                                            return t.stop()
                                    }
                                var P, k, N
                            }
                            ), t, this)
                        }
                        ))),
                            function (t) {
                                return a.apply(this, arguments)
                            }
                        )
                    }, {
                        key: "getEvidenceMessage",
                        value: (o = P(regeneratorRuntime.mark((function t(r) {
                            var e, n, o;
                            return regeneratorRuntime.wrap((function (t) {
                                for (; ;)
                                    switch (t.prev = t.next) {
                                        case 0:
                                            return t.next = 2,
                                                this.getEvidenceData(r);
                                        case 2:
                                            return e = t.sent,
                                                n = e.M1,
                                                o = e.M2,
                                                t.abrupt("return", {
                                                    M1: n,
                                                    M2: o
                                                });
                                        case 6:
                                        case "end":
                                            return t.stop()
                                    }
                            }
                            ), t, this)
                        }
                        ))),
                            function (t) {
                                return o.apply(this, arguments)
                            }
                        )
                    }]) && k(r.prototype, e),
                    n && k(r, n),
                    Object.defineProperty(r, "prototype", {
                        writable: !1
                    }),
                    t
            }();
        e.d(r, "a", (function () {
            return C
        }
        ))
    },
    function (t, r, e) {
        "use strict";
        (function (r) {
            t.exports = "object" == typeof self && self.self === self && self || "object" == typeof r && r.global === r && r || this
        }
        ).call(this, e(2))
    },
    function (t, r) {
        var e;
        e = function () {
            return this
        }();
        try {
            e = e || new Function("return this")()
        } catch (t) {
            "object" == typeof window && (e = window)
        }
        t.exports = e
    }

])
function o(t) {
    return function (t) {
        if (Array.isArray(t))
            return i(t)
    }(t) || function (t) {
        if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"])
            return Array.from(t)
    }(t) || function (t, r) {
        if (!t)
            return;
        if ("string" == typeof t)
            return i(t, r);
        var e = Object.prototype.toString.call(t).slice(8, -1);
        "Object" === e && t.constructor && (e = t.constructor.name);
        if ("Map" === e || "Set" === e)
            return Array.from(t);
        if ("Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))
            return i(t, r)
    }(t) || function () {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }()
}

function getInit(account) {
    var e = window.e
    var n = e(0)
    r = new n.a(account)
    window.RLoader = r
    f = r.publicValue
    var params = {
        name: "initData",
        values: {
            a: Buffer.from(String.fromCharCode.apply(String, o(new Uint8Array(f.buffer)))).toString('base64')
        },
        accountName: account,
        initUrl: "/appleauth/auth/signin/init"
    }
    return params
}
// console.log(getInit('123663123'))



function get_m(h) {
    function s(t, r, e, n) {
        function z(t, r, e, n) {
            for (var o = 0; o < n && !(o + e >= r.length || o >= t.length); ++o)
                r[o + e] = t[o];
            return o
        }
        function A(t, r, e, n) {
            return z(Y(r), t, e, n)
        }
        function Y(t) {
            var n = {}
            n.toByteArray = function (t) {
                function s(t) {
                    var r = t.length;
                    if (r % 4 > 0)
                        throw new Error("Invalid string. Length must be a multiple of 4");
                    var e = t.indexOf("=");
                    return -1 === e && (e = r),
                        [e, e === r ? 0 : 4 - e % 4]
                }
                var o = [
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    62,
                    null,
                    62,
                    null,
                    63,
                    52,
                    53,
                    54,
                    55,
                    56,
                    57,
                    58,
                    59,
                    60,
                    61,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    0,
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9,
                    10,
                    11,
                    12,
                    13,
                    14,
                    15,
                    16,
                    17,
                    18,
                    19,
                    20,
                    21,
                    22,
                    23,
                    24,
                    25,
                    null,
                    null,
                    null,
                    null,
                    63,
                    null,
                    26,
                    27,
                    28,
                    29,
                    30,
                    31,
                    32,
                    33,
                    34,
                    35,
                    36,
                    37,
                    38,
                    39,
                    40,
                    41,
                    42,
                    43,
                    44,
                    45,
                    46,
                    47,
                    48,
                    49,
                    50,
                    51
                ]
                var r, e, n = s(t), a = n[0], u = n[1], c = new Uint8Array(function (t, r, e) {
                    return 3 * (r + e) / 4 - e
                }(0, a, u)), f = 0, h = u > 0 ? a - 4 : a;
                for (e = 0; e < h; e += 4)
                    r = o[t.charCodeAt(e)] << 18 | o[t.charCodeAt(e + 1)] << 12 | o[t.charCodeAt(e + 2)] << 6 | o[t.charCodeAt(e + 3)],
                        c[f++] = r >> 16 & 255,
                        c[f++] = r >> 8 & 255,
                        c[f++] = 255 & r;
                2 === u && (r = o[t.charCodeAt(e)] << 2 | o[t.charCodeAt(e + 1)] >> 4,
                    c[f++] = 255 & r);
                1 === u && (r = o[t.charCodeAt(e)] << 10 | o[t.charCodeAt(e + 1)] << 4 | o[t.charCodeAt(e + 2)] >> 2,
                    c[f++] = r >> 8 & 255,
                    c[f++] = 255 & r);
                return c
            }
            return n.toByteArray(function (t) {
                if ((t = function (t) {
                    return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "")
                }(t).replace(/[^+\/0-9A-Za-z-_]/g, "")).length < 2)
                    return "";
                for (; t.length % 4 != 0;)
                    t += "=";
                return t
            }(t))
        }
        function u(t, r) {
            function a() {
                return true ? 2147483647 : 1073741823
            }
            if (a() < r)
                throw new RangeError("Invalid typed array length");
            return c.TYPED_ARRAY_SUPPORT ? (t = new Uint8Array(r)).__proto__ = c.prototype : (null === t && (t = new c(r)),
                t.length = r),
                t
        }

        var c = Uint8Array
        c.isEncoding = function (t) {
            switch (String(t).toLowerCase()) {
                case "hex":
                case "utf8":
                case "utf-8":
                case "ascii":
                case "latin1":
                case "binary":
                case "base64":
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return !0;
                default:
                    return !1
            }
        }
        c.isBuffer = function (t) {
            return !(null == t || !t._isBuffer)
        }
        c.prototype.write = function (t, r, e, n) {
            if (void 0 === r)
                n = "utf8",
                    e = this.length,
                    r = 0;
            else if (void 0 === e && "string" == typeof r)
                n = r,
                    e = this.length,
                    r = 0;
            else {
                if (!isFinite(r))
                    throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                r |= 0,
                    isFinite(e) ? (e |= 0,
                        void 0 === n && (n = "utf8")) : (n = e,
                            e = void 0)
            }
            var o = this.length - r;
            if ((void 0 === e || e > o) && (e = o),
                t.length > 0 && (e < 0 || r < 0) || r > this.length)
                throw new RangeError("Attempt to write outside buffer bounds");
            n || (n = "utf8");
            for (var i = !1; ;)
                switch (n) {
                    case "hex":
                        return b(this, t, r, e);
                    case "utf8":
                    case "utf-8":
                        return w(this, t, r, e);
                    case "ascii":
                        return x(this, t, r, e);
                    case "latin1":
                    case "binary":
                        return E(this, t, r, e);
                    case "base64":
                        return A(this, t, r, e);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return R(this, t, r, e);
                    default:
                        if (i)
                            throw new TypeError("Unknown encoding: " + n);
                        n = ("" + n).toLowerCase(),
                            i = !0
                }
        }
        function v(t, r) {
            if (c.isBuffer(t))
                return t.length;
            if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(t) || t instanceof ArrayBuffer))
                return t.byteLength;
            "string" != typeof t && (t = "" + t);
            var e = t.length;
            if (0 === e)
                return 0;
            for (var n = !1; ;)
                switch (r) {
                    case "ascii":
                    case "latin1":
                    case "binary":
                        return e;
                    case "utf8":
                    case "utf-8":
                    case void 0:
                        return F(t).length;
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return 2 * e;
                    case "hex":
                        return e >>> 1;
                    case "base64":
                        return Y(t).length;
                    default:
                        if (n)
                            return F(t).length;
                        r = ("" + r).toLowerCase(),
                            n = !0
                }
        }
        if ("number" == typeof r)
            throw new TypeError('"value" argument must not be a number');
        return "undefined" != typeof ArrayBuffer && r instanceof ArrayBuffer ? function (t, r, e, n) {
            if (r.byteLength,
                e < 0 || r.byteLength < e)
                throw new RangeError("'offset' is out of bounds");
            if (r.byteLength < e + (n || 0))
                throw new RangeError("'length' is out of bounds");
            r = void 0 === e && void 0 === n ? new Uint8Array(r) : void 0 === n ? new Uint8Array(r, e) : new Uint8Array(r, e, n);
            c.TYPED_ARRAY_SUPPORT ? (t = r).__proto__ = c.prototype : t = l(t, r);
            return t
        }(t, r, e, n) : "string" == typeof r ? function (t, r, e) {
            "string" == typeof e && "" !== e || (e = "utf8");
            if (!c.isEncoding(e))
                throw new TypeError('"encoding" must be a valid string encoding');
            var n = 0 | v(r, e)
                , o = (t = u(t, n)).write(r, e);
            o !== n && (t = t.slice(0, o));
            return t
        }(t, r, e) : function (t, r) {
            if (c.isBuffer(r)) {
                var e = 0 | p(r.length);
                return 0 === (t = u(t, e)).length || r.copy(t, 0, 0, e),
                    t
            }
            if (r) {
                if ("undefined" != typeof ArrayBuffer && r.buffer instanceof ArrayBuffer || "length" in r)
                    return "number" != typeof r.length || (n = r.length) != n ? u(t, 0) : l(t, r);
                if ("Buffer" === r.type && i(r.data))
                    return l(t, r.data)
            }
            var n;
            throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
        }(t, r)
    }
    // h = a.values,
    l = h.iterations,
        p = h.serverPublicValue,
        v = h.salt,
        d = h.c,
        g = h.password,
        y = h.protocol,
        m = {
            iterations: l,
            serverPublicValue: new Uint8Array(s(null, p, "base64", undefined)),
            salt: new Uint8Array(s(null, v, "base64", undefined)),
            password: g,
            protocol: y
        }
    return m
}
var h = {
    "iterations": 20488,
    "serverPublicValue": "qRA12zprGleFVOe5WMtwePutPm/cv9ffS8vxiSlScNWuVvBZBVY9b1EHLUaP+GJK3u1YGSnNLbOA0OIQcj7wS45yEtcyCqKsRI0/S1zT09a8UEYAx0wXhrhV3ogE49WY8byVyU3eJUhuWe5+pedTDGqGCIziAuZuTqD+qxf9d586MfzhiCZla1PkY8qFW0Q7PixDpFv5irTsc0bCcNoa9Gc5SiaWF+Cl/amU3ij5w9Af6b2zOEeBmr0em8CfGim/2uQ7oKphBgJPmSoiBl7l3UYB/WNHQyolnWdypVrT77MJD+ISBF0KVHrob35hfJ/MF3qLJlbKlku+0e/HV4n9PA==",
    "salt": "/VA76jp5prg1FMJKR8esHQ==",
    "c": "d-67e-1cc78c4a-d254-11ef-8bcc-3960ce7d9dce:PRN",
    "protocol": "s2k",
    "password": "123123213"
}
// console.log(get_m(h))

async function get_m1_m2(account, h) {
    getInit(account)
    var r = window.RLoader
    m = get_m(h)
    console.log(m)
    var result = await r.getEvidenceMessage(m);
    return result
}

var account = '112423412'
get_m1_m2(account, h).then(result => {
    console.log('Result:', result); // 输出结果
})

