const crypto = require('crypto');
const CryptoJS = require("crypto-js");

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
        console.log("设置属性set window", property, typeof value);
        return Reflect.set(...arguments);
    },
    get(target, property, receiver) {
        console.log("获取属性get window", property, typeof target[property]);
        return target[property]
    }
});
document = new Proxy(document, {
    set(target, property, value, receiver) {
        console.log("设置属性set document", property, typeof value);
        return Reflect.set(...arguments);
    },
    get(target, property, receiver) {
        console.log("获取属性get document", property, typeof target[property]);
        return target[property]
    }
});
navigator = new Proxy(navigator, {
    set(target, property, value, receiver) {
        console.log("设置属性set navigator", property, typeof value);
        return Reflect.set(...arguments);
    },
    get(target, property, receiver) {
        console.log("获取属性get navigator", property, typeof target[property]);
        return target[property]
    }
});
location = new Proxy(location, {
    set(target, property, value, receiver) {
        console.log("设置属性set location", property, typeof value);
        return Reflect.set(...arguments);
    },
    get(target, property, receiver) {
        console.log("获取属性get location", property, typeof target[property]);
        return target[property]
    }
});
history = new Proxy(history, {
    set(target, property, value, receiver) {
        console.log("设置属性set history", property, typeof value);
        return Reflect.set(...arguments);
    },
    get(target, property, receiver) {
        console.log("获取属性get history", property, typeof target[property]);
        return target[property]
    }
});
screen = new Proxy(screen, {
    set(target, property, value, receiver) {
        console.log("设置属性set screen", property, typeof value);
        return Reflect.set(...arguments);
    },
    get(target, property, receiver) {
        console.log("获取属性get screen", property, typeof target[property]);
        return target[property]
    }
});

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
    window.loader = e
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
        e.p = ""
    // e(e.s = 850)
}([
    function (t, r, e) {
        "use strict";
        function n(t, r) {
            var e = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
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
                    value: async function () {
                        if (!this._hash) {
                            const hashBuffer = await crypto.subtle.digest("SHA-256", this.buffer);
                            this._hash = new t(hashBuffer);
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
                        return this._base64 || (this._base64 = Buffer.from(this.buffer).toString('base64')),
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
            return new m((t = 256,
                crypto.getRandomValues(new Uint8Array(t))));
            var t
        }
            , E = function (t) {
                var r = t.A
                    , e = t.B
                    , n = t.N;
                return m.concat(n.pad(r), n.pad(e)).getHash()
            }
            , A = async function (r) {
                const e = r.s;
                r.I;
                const o = r.P;
                const i = new m(new Uint8Array([":".charCodeAt(0)]));
                const n = new m("");
                const a = m.concat(n, i, o);
                const u = await a.getHash();
                const c = m.concat(e, u);
                return c.getHash();
            }
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
            , I = async function (r) {
                const e = r.password;
                const n = r.s;
                const o = r.i;
                const a = r.protocol;
                const u = void 0 === a ? "s2k" : a;
                const c = await e.getHash();
                const s = await crypto.subtle.importKey("raw", "s2k" === u ? c.buffer : i(c.hex), "PBKDF2", !1, ["deriveBits"]);
                const f = await crypto.subtle.deriveBits({
                    name: "PBKDF2",
                    salt: n.buffer,
                    iterations: o,
                    hash: {
                        name: "SHA-256"
                    }
                }, s, 256);
                return new m(f);
            }
            , T = async function (r) {
                const e = r.I;
                const n = r.s;
                const o = r.A;
                const i = r.B;
                const a = r.K;
                const u = r.N;
                const c = r.g;
                const s = await u.pad(c).getHash();
                const f = await u.getHash();
                const h = new m((p = f.bi,
                    v = s.bi,
                    p ^ v));
                const l = await e.getHash();
                return m.concat(h, l, n, o, i, a).getHash();
            }
            , O = async function (r) {
                const e = r.A;
                const n = r.M1;
                const o = r.K;
                const i = await m.concat(e, n, o).getHash();
                return i;
            }
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
                        value: async function (r) {
                            const e = r.iterations;
                            const n = r.serverPublicValue;
                            const o = r.salt;
                            const a = r.password;
                            const u = r.protocol;
                            const c = void 0 === u ? "s2k" : u;
                            const s = this.privateValue;
                            const f = this.publicValue;
                            const h = new m(n);
                            const l = e;
                            const p = new m(o);
                            const v = new m(i(this.accountName.toLowerCase()));
                            const d = await I({
                                password: new m(i(a)),
                                s: p,
                                i: l,
                                protocol: c
                            });
                            const g = await m.concat(D, D.pad(U)).getHash();
                            const y = await A({
                                s: p,
                                I: v,
                                P: d
                            });
                            const b = await E({
                                A: f,
                                B: h,
                                N: D
                            });
                            const w = R({
                                B: h,
                                k: g,
                                x: y,
                                a: s,
                                u: b,
                                N: D,
                                g: U
                            });
                            const x = await S({
                                S: w,
                                N: D
                            });
                            const M = await T({
                                I: v,
                                s: p,
                                A: f,
                                B: h,
                                K: x,
                                N: D,
                                g: U
                            });
                            const _ = await O({
                                A: f,
                                M1: M,
                                K: x
                            });
                            return {
                                M1: M.getBase64(),
                                M2: _.getBase64(),
                                K: x.getBase64()
                            };
                        }
                    }, {
                        key: "getEvidenceMessage",
                        value: async function (r) {
                            const e = await this.getEvidenceData(r);
                            const n = e.M1;
                            const o = e.M2;
                            return {
                                M1: n,
                                M2: o
                            };
                        }
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
    },
    function (t, r, e) {
        "use strict";
        e.r(r),
            function (t) {
                var r, n = e(849);
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
                function i(t, r) {
                    (null == r || r > t.length) && (r = t.length);
                    for (var e = 0, n = new Array(r); e < r; e++)
                        n[e] = t[e];
                    return n
                }
                function a(t, r, e, n, o, i, a) {
                    try {
                        var u = t[i](a)
                            , c = u.value
                    } catch (t) {
                        return void e(t)
                    }
                    u.done ? r(c) : Promise.resolve(c).then(n, o)
                }
                onmessage = function () {
                    var e, i = (e = regeneratorRuntime.mark((function e(i) {
                        var a, u, c, s, f, h, l, p, v, d, g, y, m, b, w, x, E, A, R, S;
                        return regeneratorRuntime.wrap((function (e) {
                            for (; ;)
                                switch (e.prev = e.next) {
                                    case 0:
                                        if ("getInitData" === (a = i.data).name && (u = a.values,
                                            c = u.accountName,
                                            s = u.initUrl,
                                            r = new n.a(c),
                                            f = r.publicValue,
                                            postMessage({
                                                name: "initData",
                                                values: {
                                                    a: btoa(String.fromCharCode.apply(String, o(new Uint8Array(f.buffer))))
                                                },
                                                accountName: c,
                                                initUrl: s
                                            })),
                                            "getCompleteData" !== a.name && "getCompleteERP" !== a.name) {
                                            e.next = 21;
                                            break
                                        }
                                        if (h = a.values,
                                            l = h.iterations,
                                            p = h.serverPublicValue,
                                            v = h.salt,
                                            d = h.c,
                                            g = h.password,
                                            y = h.protocol,
                                            m = {
                                                iterations: l,
                                                serverPublicValue: new Uint8Array(t.from(p, "base64")),
                                                salt: new Uint8Array(t.from(v, "base64")),
                                                password: g,
                                                protocol: y
                                            },
                                            "getCompleteData" !== a.name) {
                                            e.next = 14;
                                            break
                                        }
                                        return e.next = 8,
                                            r.getEvidenceMessage(m);
                                    case 8:
                                        b = e.sent,
                                            w = b.M1,
                                            x = b.M2,
                                            postMessage({
                                                name: "completeData",
                                                values: {
                                                    m1: w,
                                                    m2: x,
                                                    c: d
                                                }
                                            }),
                                            e.next = 21;
                                        break;
                                    case 14:
                                        return e.next = 16,
                                            r.getEvidenceData(m);
                                    case 16:
                                        E = e.sent,
                                            A = E.M1,
                                            R = E.M2,
                                            S = E.K,
                                            postMessage({
                                                name: "completeData",
                                                values: {
                                                    m1: A,
                                                    m2: R,
                                                    c: d,
                                                    k: S
                                                }
                                            });
                                    case 21:
                                    case "end":
                                        return e.stop()
                                }
                        }
                        ), e)
                    }
                    )),
                        function () {
                            var t = this
                                , r = arguments;
                            return new Promise((function (n, o) {
                                var i = e.apply(t, r);
                                function u(t) {
                                    a(i, n, o, u, c, "next", t)
                                }
                                function c(t) {
                                    a(i, n, o, u, c, "throw", t)
                                }
                                u(void 0)
                            }
                            ))
                        }
                    );
                    return function (t) {
                        return i.apply(this, arguments)
                    }
                }()
            }
                .call(this, e(852).Buffer)
    }
])


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

function at(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? it(Object(n), !0).forEach((function (t) {
            st(e, t, n[t])
        }
        )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : it(Object(n)).forEach((function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
        }
        ))
    }
    return e
}

var tfrom = function(t, r, e) {
    return s(null, t, r, e)
}

var c = Uint8Array
c.isEncoding = function(t) {
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
c.isBuffer = function(t) {
    return !(null == t || !t._isBuffer)
}
c.prototype.write = function(t, r, e, n) {
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
    for (var i = !1; ; )
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

var n = {}
n.byteLength = function(t) {
    var r = s(t)
      , e = r[0]
      , n = r[1];
    return 3 * (e + n) / 4 - n
}
,
n.toByteArray = function(t) {
    function s(t) {
        var r = t.length;
        if (r % 4 > 0)
            throw new Error("Invalid string. Length must be a multiple of 4");
        var e = t.indexOf("=");
        return -1 === e && (e = r),
        [e, e === r ? 0 : 4 - e % 4]
    }
    var r, e, n = s(t), a = n[0], u = n[1], c = new Uint8Array(function(t, r, e) {
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
,
n.fromByteArray = function(t) {
    for (var r, e = t.length, o = e % 3, i = [], a = 0, u = e - o; a < u; a += 16383)
        i.push(f(t, a, a + 16383 > u ? u : a + 16383));
    1 === o ? (r = t[e - 1],
    i.push(n[r >> 2] + n[r << 4 & 63] + "==")) : 2 === o && (r = (t[e - 2] << 8) + t[e - 1],
    i.push(n[r >> 10] + n[r >> 4 & 63] + n[r << 2 & 63] + "="));
    return i.join("")
}


function Y(t) {
    var B = /[^+\/0-9A-Za-z-_]/g
    return n.toByteArray(function(t) {
        if ((t = function(t) {
            return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "")
        }(t).replace(B, "")).length < 2)
            return "";
        for (; t.length % 4 != 0; )
            t += "=";
        return t
    }(t))
}

function z(t, r, e, n) {
    for (var o = 0; o < n && !(o + e >= r.length || o >= t.length); ++o)
        r[o + e] = t[o];
    return o
}

function A(t, r, e, n) {
    return z(Y(r), t, e, n)
}

function s(t, r, e, n) {
    function v(t, r) {
        if (c.isBuffer(t))
            return t.length;
        if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(t) || t instanceof ArrayBuffer))
            return t.byteLength;
        "string" != typeof t && (t = "" + t);
        var e = t.length;
        if (0 === e)
            return 0;
        for (var n = !1; ; )
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

    function a() {
        return true ? 2147483647 : 1073741823
    }

    function u(t, r) {
        if (a() < r)
            throw new RangeError("Invalid typed array length");
        return c.TYPED_ARRAY_SUPPORT ? (t = new Uint8Array(r)).__proto__ = c.prototype : (null === t && (t = new Uint8Array(r)),
        t.length = r),
        t
    }

    if ("number" == typeof r)
        throw new TypeError('"value" argument must not be a number');
    return "undefined" != typeof ArrayBuffer && r instanceof ArrayBuffer ? function(t, r, e, n) {
        if (r.byteLength,
        e < 0 || r.byteLength < e)
            throw new RangeError("'offset' is out of bounds");
        if (r.byteLength < e + (n || 0))
            throw new RangeError("'length' is out of bounds");
        r = void 0 === e && void 0 === n ? new Uint8Array(r) : void 0 === n ? new Uint8Array(r,e) : new Uint8Array(r,e,n);
        c.TYPED_ARRAY_SUPPORT ? (t = r).__proto__ = c.prototype : t = l(t, r);
        return t
    }(t, r, e, n) : "string" == typeof r ? function(t, r, e) {
        "string" == typeof e && "" !== e || (e = "utf8");
        if (!c.isEncoding(e))
            throw new TypeError('"encoding" must be a valid string encoding');
        var n = 0 | v(r, e)
          , o = (t = u(t, n)).write(r, e);
        o !== n && (t = t.slice(0, o));
        return t
    }(t, r, e) : function(t, r) {
        if (c.isBuffer(r)) {
            var e = 0 | p(r.length);
            return 0 === (t = u(t, e)).length || r.copy(t, 0, 0, e),
            t
        }
        if (r) {
            if ("undefined" != typeof ArrayBuffer && r.buffer instanceof ArrayBuffer || "length"in r)
                return "number" != typeof r.length || (n = r.length) != n ? u(t, 0) : l(t, r);
            if ("Buffer" === r.type && i(r.data))
                return l(t, r.data)
        }
        var n;
        throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
    }(t, r)
}



function getFullData(h) {
    l = h.iterations,
    p = h.serverPublicValue,
    v = h.salt,
    d = h.c,
    g = h.password,
    y = h.protocol,
    m = {
        iterations: l,
        serverPublicValue: new Uint8Array(tfrom(p, "base64")),
        salt: new Uint8Array(tfrom(v, "base64")),
        password: g,
        protocol: y
    }
    return m
}

module.exports = {getFullData}

// console.log(getFullData({
//     "iterations": 20303,
//     "serverPublicValue": "hKm4RMEoms7NjYasD4NBBZ5ndUCISDR7C2pj0jwFYGXqLa+9Ct2/8rR9JfTPp/Fj/GxEAuk6L+xUZUZhQSK5dWv0+gWPRQ/5H2rurN2BLKHWyGNMXqsyMo52k859xKT8zbvkLXTVgyCu5qV/mlRHGNH3uPlY7r4dLIq15dFWO8VZElxRfj7JsefxXH8ZXHlR6NAT//uoKz0+0SF2GYuLxk7Lpdp4BjS7vGAEEyECn+eXegqcOtdZ00fX/VlAYNlidRp+W41Udg4i0VeeSbHskt8haOzhTSlNsMKcFq5vOE/Ld94Y+C7bA2iiNrv0YBf+4IhVUPe2wIvWhq1QDMEE/w==",
//     "salt": "7b+23u5rESVGZhs50EhgIw==",
//     "c": "d-777-3379847e-d246-11ef-9f1c-2bd5c8187a1e:NC",
//     "protocol": "s2k",
//     "password": "asdasdaihoias"
// }))