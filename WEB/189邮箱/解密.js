require("./环境.js")
var JSEncrypt = require("./JSEncryp.js")
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

!function(e) {
    function t(n) {
        if (a[n])
            return a[n].exports;
        var i = a[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        console.log(n)
        return e[n].call(i.exports, i, i.exports, t),
        i.l = !0,
        i.exports
    }
    window.aa = t
    var a = {};
    t.m = e,
    t.c = a,
    t.d = function(e, a, n) {
        t.o(e, a) || Object.defineProperty(e, a, {
            configurable: !1,
            enumerable: !0,
            get: n
        })
    }
    ,
    t.n = function(e) {
        var a = e && e.__esModule ? function() {
            return e["default"]
        }
        : function() {
            return e
        }
        ;
        return t.d(a, "a", a),
        a
    }
    ,
    t.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    t.p = "https://static.e.189.cn/open/login/page/web/v5.0"
    // t(t.s = 11)
}([
    function(e, t, a) {
        "use strict";
        var n = aaaa(1)
          , i = {
            appId: "",
            rsaPre: "{RSA}",
            mobileNeedRsa: !1,
            pwdNeedRsa: !1,
            encrypt: null,
            getRsaFlag: !1,
            upSmsOn: "1",
            domain: "localhost" == document.domain ? "https://open.e.189.cn" : "//" + document.domain,
            needRsaFunc: function(e, t) {
                return !!t && t.length > 0
            },
            getRsaFuc: function(e, t, a) {
                function i(n) {
                    if (o.getRsaFlag = !0,
                    o.pwdNeedRsa = o.needRsaFunc("pwd", n),
                    o.mobileNeedRsa = o.needRsaFunc("mobile", n),
                    (o.needRsa || o.mobileNeedRsa) && (o.encrypt = new JSEncrypt,
                    o.encrypt.setPublicKey(n)),
                    !e) {
                        var i = o.rsaPre + o.encrypt.encrypt(a);
                        return "mobile" === t ? o.mobileNeedRsa ? i : a : o.pwdNeedRsa ? i : a
                    }
                }
                var o = this;
                $.ajax({
                    url: o.domain + "/api/logbox/config/encryptConf.do",
                    data: {
                        appId: o.appId
                    },
                    sync: !1,
                    type: "POST",
                    dataType: "json",
                    timeout: "10000",
                    success: function(e) {
                        var t = "";
                        return 0 === parseInt(e.result) ? (t = e.data.pubKey,
                        o.rsaPre = e.data.pre,
                        o.upSmsOn = e.data.upSmsOn || "1") : (o.rsaPre = "{RSA}",
                        t = n["a"].initData.pubKey),
                        i(t)
                    },
                    error: function(e) {
                        var t = n["a"].initData.pubKey;
                        return o.rsaPre = "{RSA}",
                        i(t)
                    }
                })
            },
            getRsaStr: function(e, t) {
                var a = this;
                if (a.getRsaFlag) {
                    var n = a.rsaPre + a.encrypt.encrypt(t);
                    return "mobile" === e ? a.mobileNeedRsa ? n : t : a.pwdNeedRsa ? n : t
                }
                return a.getRsaFuc(!1, e, t)
            },
            rsaPwd: function(e) {
                return this.getRsaStr("pwd", e)
            },
            rsaMobile: function(e) {
                return this.getRsaStr("mobile", e)
            },
            init: function(e) {
                var t = this;
                t.appId = e,
                t.getRsaFuc(!0)
            }
        };
        window.RSA_Pwd = i,
        window.JSEncrypt = JSEncrypt,
        t["a"] = i
    },
    function(e, t, a) {
        "use strict";
        var n = {
            initData: {},
            domain: "https://open.e.189.cn",
            isRefresh: !1
        };
        window.config2 = n,
        t["a"] = n
    }
]);


var aaaa = window.aa;
// proxyObjs = ['window', 'document', 'location', 'navigator', 'history', 'screen']
// getEnvs(proxyObjs);
var o = aaaa(0);

console.log("=============环境模块准备完成================")
// var pwd = o["a"].rsaPwd('112233')