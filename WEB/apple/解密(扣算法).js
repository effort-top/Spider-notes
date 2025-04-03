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


function N(t, r, e) {
    return r in t ? Object.defineProperty(t, r, {
        value: e,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[r] = e,
        t
}
function na(r) {
    !function (t, r) {
        if (!(t instanceof r))
            throw new TypeError("Cannot call a class as a function")
    }(this, na),
        N(this, "accountName", void 0),
        N(this, "_privateValue", void 0),
        N(this, "_publicValue", void 0),

        // 修改1
        this._privateValue = this.privateValue = get_privateValue()
    this._publicValue = this.publicValue = get_publicValue(this.privateValue)

    this.accountName = r
}
var x = function () {
    return new m((t = 256,
        l.a.crypto.getRandomValues(new Uint8Array(t))));
    var t
}

var m = function () {

    function t(r) {
        function y(t, r, e) {
            return r in t ? Object.defineProperty(t, r, {
                value: e,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[r] = e,
                t
        }
        if (!(this instanceof t))
            throw new TypeError("Cannot call a class as a function");
        y(this, "_bi", void 0);
        y(this, "_buffer", void 0);
        y(this, "_hex", void 0);
        y(this, "_hash", void 0);
        y(this, "_base64", void 0);
        if ("string" == typeof r) {
            this._hex = r;
        } else if (r instanceof ArrayBuffer) {
            this._buffer = new Uint8Array(r);
        } else if (r instanceof Uint8Array) {
            this._buffer = r;
        } else {
            this._bi = r;
        }
    }

    var r, e, n, o, i;
    return r = t,
        e = [{
            key: "bi",
            get: function () {
                if (void 0 === this._bi) {
                    const t = "0x" + this.hex;
                    this._bi = BigInt(t);
                }
                return this._bi;
            }
        }, {
            key: "buffer",
            get: function () {
                if (void 0 === this._buffer) {
                    this._buffer = function (t) {
                        if (t.length % 2 == 1) {
                            t = "0" + t;
                        }
                        const o = t.length / 2;
                        const i = new Uint8Array(o);
                        for (let r = 0; r < o; r++) {
                            const e = t.substr(2 * r, 2);
                            const n = parseInt(e, 16);
                            if (isNaN(n)) {
                                throw new Error(`String contains non hexadecimal value: '${t}'`);
                            }
                            i[r] = n;
                        }
                        return i;
                    }(this.hex);
                }
                return this._buffer;
            }
        }, {
            key: "hex",
            get: function () {
                if (void 0 === this._hex) {
                    if (void 0 !== this._bi) {
                        let t = this._bi.toString(16);
                        if (t.length % 2 != 0) {
                            t = "0" + t;
                        }
                        this._hex = t;
                    } else {
                        this._hex = this._buffer.reduce((t, r) => t + r.toString(16).padStart(2, "0"), "");
                    }
                }
                return this._hex;
            }
        }, {
            key: "getHash",
            value: function () {
                if (!this._hash) {
                    // const hash = CryptoJS.SHA256(CryptoJS.lib.WordArray.create(this.buffer));
                    // this._hash = new t(hash.toString(CryptoJS.enc.Hex));
                    const hashBuffer = crypto.createHash('sha256').update(this.buffer).digest();
                    this._hash = new t(hashBuffer);
                }
                return this._hash;
            }
        }, {
            key: "pad",
            value: function (r) {
                return new t(function (t, r) {
                    const e = new Uint8Array(r);
                    const n = r - t.length;
                    for (let o = 0; o < t.length; o++) {
                        e[o + n] = t[o];
                    }
                    return e;
                }(r.buffer, this.buffer.length));
            }
        }, {
            key: "getBase64",
            value: function () {
                if (!this._base64) {
                    this._base64 = CryptoJS.enc.Base64.stringify(CryptoJS.lib.WordArray.create(this.buffer));
                }
                return this._base64;
            }
        }],
        n = [{
            key: "concat",
            value: function () {
                const buffers = Array.from(arguments).map(t => t.buffer);
                const concatenated = new Uint8Array(buffers.reduce((acc, val) => acc + val.length, 0));
                let offset = 0;
                buffers.forEach(buffer => {
                    concatenated.set(buffer, offset);
                    offset += buffer.length;
                });
                return new t(concatenated);
            }
        }],
        e && g(r.prototype, e),
        n && g(r, n),
        Object.defineProperty(r, "prototype", {
            writable: !1
        }),
        t;
}();

var M = {
    "2048": {
        "N": "AC6BDB41 324A9A9B F166DE5E 1389582F AF72B665 1987EE07 FC319294 3DB56050 A37329CB B4A099ED 8193E075 7767A13D D52312AB 4B03310D CD7F48A9 DA04FD50 E8083969 EDB767B0 CF609517 9A163AB3 661A05FB D5FAAAE8 2918A996 2F0B93B8 55F97993 EC975EEA A80D740A DBF4FF74 7359D041 D5C33EA7 1D281E44 6B14773B CA97B43A 23FB8016 76BD207A 436C6481 F1D2B907 8717461A 5B9D32E6 88F87748 544523B5 24B0D57D 5EA77A27 75D2ECFA 032CFBDB F52FB378 61602790 04E57AE6 AF874E73 03CE5329 9CCC041C 7BC308D8 2A5698F3 A8D0C382 71AE35F8 E9DBFBB6 94B5C803 D89F7AE4 35DE236D 525F5475 9B65E372 FCD68EF2 0FA7111F 9E4AFF73",
        "g": "02"
    }
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

var Dvalue = j.N
var Uvalue = j.g

const CryptoJS = require('crypto-js');
const crypto = require('crypto');
function y(t, r, e) {
    return r in t ? Object.defineProperty(t, r, {
        value: e,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[r] = e,
        t
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


var x = function () {
    const t = 256;
    const randomValues = CryptoJS.lib.WordArray.random(t); // 使用 crypto-js 生成随机数据

    // 将 WordArray 转换为 Uint8Array
    const uint8Array = new Uint8Array(t);
    for (let i = 0; i < t; i++) {
        uint8Array[i] = randomValues.words[Math.floor(i / 4)] >>> (24 - (i % 4) * 8) & 0xff;
    }
    return new m(uint8Array);
};

function get_privateValue() {
    return this._privateValue || (this._privateValue = x()),
        this._privateValue
}

function get_publicValue(privateValue) {
    var t, r, e, n;
    f = function (t, r, e) {
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
    return this._publicValue || (this._publicValue = (t = {
        // a: get_privateValue(),
        a: privateValue,
        N: Dvalue,
        g: Uvalue
    },
        r = t.a,
        e = t.g,
        // fvalue = f(e.bi, r.bi, Dvalue.bi),
        (n = t.N).pad(new m(f(e.bi, r.bi, n.bi))))),
        // (n = t.N).pad(new m(fvalue)))),
        this._publicValue._bi = this._publicValue.bi,
        this._publicValue._hex = this._publicValue.hex,
        this._publicValue
}
// var result = get_publicValue()

function get_a(accountName) {
    c = accountName
    s = '/appleauth/auth/signin/init'
    window.localR = new na(c)
    f = window.localR.publicValue
    // f = get_publicValue()

    // a = btoa(String.fromCharCode.apply(String, o(new Uint8Array(f.buffer))))
    // 将 Uint8Array 转换为 Base64
    buffer = Buffer.from(f.buffer);
    a = buffer.toString('base64');
    return a
}
// var accountName = 'l503115122@gmail.com'
// console.log(get_a(accountName))


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
        // function c(t, r, e) {
        //     if (!(c.TYPED_ARRAY_SUPPORT || this instanceof c))
        //         return new c(t, r, e);
        //     if ("number" == typeof t) {
        //         if ("string" == typeof r)
        //             throw new Error("If encoding is specified then the first argument must be a string");
        //         return h(this, t)
        //     }
        //     return s(this, t, r, e)
        // }
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

function getEvidenceData(r, accountName) {

    function g(t, r) {
        for (var e = 0; e < r.length; e++) {
            var n = r[e];
            n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value" in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
        }
    }
    var i = function (t) {
        return new TextEncoder("utf-8").encode(t)
    }
    var m = function () {
        function t(r) {
            function y(t, r, e) {
                return r in t ? Object.defineProperty(t, r, {
                    value: e,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[r] = e,
                    t
            }
            if (!(this instanceof t))
                throw new TypeError("Cannot call a class as a function");
            y(this, "_bi", void 0);
            y(this, "_buffer", void 0);
            y(this, "_hex", void 0);
            y(this, "_hash", void 0);
            y(this, "_base64", void 0);
            if ("string" == typeof r) {
                this._hex = r;
            } else if (r instanceof ArrayBuffer) {
                this._buffer = new Uint8Array(r);
            } else if (r instanceof Uint8Array) {
                this._buffer = r;
            } else {
                this._bi = r;
            }
        }

        var r, e, n, o, i;
        return r = t,
            e = [{
                key: "bi",
                get: function () {
                    if (void 0 === this._bi) {
                        const t = "0x" + this.hex;
                        this._bi = BigInt(t);
                    }
                    return this._bi;
                }
            }, {
                key: "buffer",
                get: function () {
                    if (void 0 === this._buffer) {
                        this._buffer = function (t) {
                            if (t.length % 2 == 1) {
                                t = "0" + t;
                            }
                            const o = t.length / 2;
                            const i = new Uint8Array(o);
                            for (let r = 0; r < o; r++) {
                                const e = t.substr(2 * r, 2);
                                const n = parseInt(e, 16);
                                if (isNaN(n)) {
                                    throw new Error(`String contains non hexadecimal value: '${t}'`);
                                }
                                i[r] = n;
                            }
                            return i;
                        }(this.hex);
                    }
                    return this._buffer;
                }
            }, {
                key: "hex",
                get: function () {
                    if (void 0 === this._hex) {
                        if (void 0 !== this._bi) {
                            let t = this._bi.toString(16);
                            if (t.length % 2 != 0) {
                                t = "0" + t;
                            }
                            this._hex = t;
                        } else {
                            this._hex = this._buffer.reduce((t, r) => t + r.toString(16).padStart(2, "0"), "");
                        }
                    }
                    return this._hex;
                }
            }, {
                key: "getHash",
                value: function () {
                    if (!this._hash) {
                        // const hash = CryptoJS.SHA256(CryptoJS.lib.WordArray.create(this.buffer));
                        // this._hash = new t(hash.toString(CryptoJS.enc.Hex));
                        const hashBuffer = crypto.createHash('sha256').update(this.buffer).digest();
                        this._hash = new t(hashBuffer);
                    }
                    return this._hash;
                }
            }, {
                key: "pad",
                value: function (r) {
                    return new t(function (t, r) {
                        const e = new Uint8Array(r);
                        const n = r - t.length;
                        for (let o = 0; o < t.length; o++) {
                            e[o + n] = t[o];
                        }
                        return e;
                    }(r.buffer, this.buffer.length));
                }
            }, {
                key: "getBase64",
                value: function () {
                    if (!this._base64) {
                        this._base64 = CryptoJS.enc.Base64.stringify(CryptoJS.lib.WordArray.create(this.buffer));
                    }
                    return this._base64;
                }
            }],
            n = [{
                key: "concat",
                value: function () {
                    const buffers = Array.from(arguments).map(t => t.buffer);
                    const concatenated = new Uint8Array(buffers.reduce((acc, val) => acc + val.length, 0));
                    let offset = 0;
                    buffers.forEach(buffer => {
                        concatenated.set(buffer, offset);
                        offset += buffer.length;
                    });
                    return new t(concatenated);
                }
            }],
            e && g(r.prototype, e),
            n && g(r, n),
            Object.defineProperty(r, "prototype", {
                writable: !1
            }),
            t;
    }();
    function I(r) {
        e = r.password,
            n = r.s,
            o = r.i,
            a = r.protocol,
            u = void 0 === a ? "s2k" : a,
            // c = e.getHash();
            // l.a.crypto.subtle.importKey("raw", "s2k" === u ? c.buffer : i(c.hex), "PBKDF2", !1, ["deriveBits"]);
            // 获取哈希值（假设 e.getHash() 返回一个 Uint8Array(32)）
            c = e.getHash();

        // 根据 u 的值选择密钥数据
        const keyData = (u === "s2k") ?
            CryptoJS.lib.WordArray.create(c.buffer) : // 如果 u === "s2k"，使用 c.buffer
            CryptoJS.enc.Hex.parse(c.hex); // 否则，使用 c.hex 并解析为 WordArray

        // 2. 处理盐值（假设 n 是 ArrayBuffer）
        const saltWordArray = CryptoJS.lib.WordArray.create(n.buffer);

        // 3. 使用 CryptoJS.PBKDF2 派生密钥
        const derivedKey = CryptoJS.PBKDF2(keyData, saltWordArray, {
            keySize: 256 / 32, // 派生密钥长度为 256 位（32 字节），对应 8 Word
            iterations: o,     // 迭代次数
            hasher: CryptoJS.algo.SHA256 // 哈希算法
        });

        // 将派生密钥转换为十六进制字符串（可选）
        const derivedKeyHex = derivedKey.toString(CryptoJS.enc.Hex);

        // 如果需要 ArrayBuffer，可以使用辅助函数转换
        function wordArrayToArrayBuffer(wordArray) {
            const hexString = wordArray.toString(CryptoJS.enc.Hex);
            const byteArray = new Uint8Array(hexString.match(/.{1,2}/g).map(byte => parseInt(byte, 16)));
            return byteArray.buffer;
        }
        const derivedBits = wordArrayToArrayBuffer(derivedKey);

        endresult = new m(derivedBits)
        return endresult
    }
    function A(r) {
        var e = r.s
        var o = r.P
        var i = new m(new Uint8Array([":".charCodeAt(0)]))
        var n = new m("")
        var a = m.concat(n, i, o)
        var u = a.getHash();
        var c = m.concat(e, u)
        return c.getHash()
    }
    function E(t) {
        var r = t.A
            , e = t.B
            , n = t.N;
        return m.concat(n.pad(r), n.pad(e)).getHash()
    }

    function R(t) {
        function u(t, r) {
            return t * r
        }
        function c(t, r) {
            return t + r
        }
        f = function (t, r, e) {
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
        s = function (t, r) {
            var e = function (t, r) {
                return t % r
            }(t, r);
            return function (t) {
                return t < BigInt(0)
            }(e) && (e = c(e, r)),
                e
        }

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
    function S(t) {
        var r = t.S;
        return t.N.pad(r).getHash()
    }
    function T(r) {
        var e = r.I
        var n = r.s
        var o = r.A
        var i = r.B
        var a = r.K
        var u = r.N
        var c = r.g
        var s = u.pad(c).getHash();
        var f = u.getHash()
        var h = new m((p = f.bi,
            v = s.bi,
            p ^ v))
        var l = e.getHash();
        return m.concat(h, l, n, o, i, a).getHash()
    }
    function O(r) {
        var e = r.A
        var n = r.M1
        var o = r.K
        var i = m.concat(e, n, o).getHash();
        return i
    }
    var e = r.iterations
    var n = r.serverPublicValue
    var o = r.salt
    var a = r.password
    var u = r.protocol
    var c = void 0 === u ? "s2k" : u
    // s = this.privateValue,
    // f = this.publicValue,
    var s = window.localR.privateValue
    var f = window.localR.publicValue
    var h = new m(n)
    var l = e
    var p = new m(o)
    var v = new m(i(accountName.toLowerCase()))

    var d = I({
        password: new m(i(a)),
        s: p,
        i: l,
        protocol: c
    });

    var k = (P = {
        N: Dvalue,
        g: Uvalue
    }).N
    var N = P.g
    var g = m.concat(k, k.pad(N)).getHash()

    var y = A({
        s: p,
        I: v,
        P: d
    });

    var b = E({
        A: window.localR.publicValue,
        B: h,
        N: Dvalue
    });

    var w = R({
        B: h,
        k: g,
        x: y,
        a: window.localR.privateValue,
        u: b,
        N: Dvalue,
        g: Uvalue
    })

    var x = S({
        S: w,
        N: Dvalue
    });

    var M = T({
        I: v,
        s: p,
        A: window.localR.publicValue,
        B: h,
        K: x,
        N: Dvalue,
        g: Uvalue
    });

    var _ = O({
        A: window.localR.publicValue,
        M1: M,
        K: x
    });

    var result = {
        M1: M.getBase64(),
        M2: _.getBase64(),
        K: x.getBase64()
    }

    return result
}

function get_m1m2(accountName,h) {
    c = accountName
    a = get_a(accountName)
    
    m = get_m(h)
    result = getEvidenceData(m, accountName)
    console.log(result)
    return result
}

var accountName = '12341231235'
var h = {
    "iterations": 20488,
    "serverPublicValue": "qRA12zprGleFVOe5WMtwePutPm/cv9ffS8vxiSlScNWuVvBZBVY9b1EHLUaP+GJK3u1YGSnNLbOA0OIQcj7wS45yEtcyCqKsRI0/S1zT09a8UEYAx0wXhrhV3ogE49WY8byVyU3eJUhuWe5+pedTDGqGCIziAuZuTqD+qxf9d586MfzhiCZla1PkY8qFW0Q7PixDpFv5irTsc0bCcNoa9Gc5SiaWF+Cl/amU3ij5w9Af6b2zOEeBmr0em8CfGim/2uQ7oKphBgJPmSoiBl7l3UYB/WNHQyolnWdypVrT77MJD+ISBF0KVHrob35hfJ/MF3qLJlbKlku+0e/HV4n9PA==",
    "salt": "/VA76jp5prg1FMJKR8esHQ==",
    "c": "d-67e-1cc78c4a-d254-11ef-8bcc-3960ce7d9dce:PRN",
    "protocol": "s2k",
    "password": "123123213"
}
get_m1m2(accountName,h)

// var h = {
//     "iterations": 20488,
//     "serverPublicValue": "qRA12zprGleFVOe5WMtwePutPm/cv9ffS8vxiSlScNWuVvBZBVY9b1EHLUaP+GJK3u1YGSnNLbOA0OIQcj7wS45yEtcyCqKsRI0/S1zT09a8UEYAx0wXhrhV3ogE49WY8byVyU3eJUhuWe5+pedTDGqGCIziAuZuTqD+qxf9d586MfzhiCZla1PkY8qFW0Q7PixDpFv5irTsc0bCcNoa9Gc5SiaWF+Cl/amU3ij5w9Af6b2zOEeBmr0em8CfGim/2uQ7oKphBgJPmSoiBl7l3UYB/WNHQyolnWdypVrT77MJD+ISBF0KVHrob35hfJ/MF3qLJlbKlku+0e/HV4n9PA==",
//     "salt": "/VA76jp5prg1FMJKR8esHQ==",
//     "c": "d-67e-1cc78c4a-d254-11ef-8bcc-3960ce7d9dce:PRN",
//     "protocol": "s2k",
//     "password": "123123213"
// }
// m = get_m(h)
// console.log(m)





