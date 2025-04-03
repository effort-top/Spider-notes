!function() {
    "use strict";
    var e, r, t, _, n, c, i, a, u, o, b, f, p = {}, d = {};
    function __webpack_require__(e) {
        var r = d[e];
        if (void 0 !== r)
            return r.exports;
        var t = d[e] = {
            id: e,
            loaded: !1,
            exports: {}
        }
          , _ = !0;
        try {
            p[e].call(t.exports, t, t.exports, __webpack_require__),
            _ = !1
        } finally {
            _ && delete d[e]
        }
        return t.loaded = !0,
        t.exports
    }
    __webpack_require__.m = p,
    __webpack_require__.amdO = {},
    e = [],
    __webpack_require__.O = function(r, t, _, n) {
        if (t) {
            n = n || 0;
            for (var c = e.length; c > 0 && e[c - 1][2] > n; c--)
                e[c] = e[c - 1];
            e[c] = [t, _, n];
            return
        }
        for (var i = 1 / 0, c = 0; c < e.length; c++) {
            for (var t = e[c][0], _ = e[c][1], n = e[c][2], a = !0, u = 0; u < t.length; u++)
                i >= n && Object.keys(__webpack_require__.O).every(function(e) {
                    return __webpack_require__.O[e](t[u])
                }) ? t.splice(u--, 1) : (a = !1,
                n < i && (i = n));
            if (a) {
                e.splice(c--, 1);
                var o = _()
            }
        }
        return o
    }
    ,
    __webpack_require__.n = function(e) {
        var r = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return __webpack_require__.d(r, {
            a: r
        }),
        r
    }
    ,
    t = Object.getPrototypeOf ? function(e) {
        return Object.getPrototypeOf(e)
    }
    : function(e) {
        return e.__proto__
    }
    ,
    __webpack_require__.t = function(e, _) {
        if (1 & _ && (e = this(e)),
        8 & _ || "object" == typeof e && e && (4 & _ && e.__esModule || 16 & _ && "function" == typeof e.then))
            return e;
        var n = Object.create(null);
        __webpack_require__.r(n);
        var c = {};
        r = r || [null, t({}), t([]), t(t)];
        for (var i = 2 & _ && e; "object" == typeof i && !~r.indexOf(i); i = t(i))
            Object.getOwnPropertyNames(i).forEach(function(r) {
                c[r] = function() {
                    return e[r]
                }
            });
        return c.default = function() {
            return e
        }
        ,
        __webpack_require__.d(n, c),
        n
    }
    ,
    __webpack_require__.d = function(e, r) {
        for (var t in r)
            __webpack_require__.o(r, t) && !__webpack_require__.o(e, t) && Object.defineProperty(e, t, {
                enumerable: !0,
                get: r[t]
            })
    }
    ,
    __webpack_require__.f = {},
    __webpack_require__.e = function(e) {
        return Promise.all(Object.keys(__webpack_require__.f).reduce(function(r, t) {
            return __webpack_require__.f[t](e, r),
            r
        }, []))
    }
    ,
    __webpack_require__.u = function(e) {
        return 1325 === e ? "static/chunks/90addd5a-0d4e8176908c916c.js" : 2794 === e ? "static/chunks/2794-6a4f56f06ba94eb3.js" : "static/chunks/" + (({
            4706: "aa56ecd1",
            5319: "9b96e2f8",
            5922: "dabc9b9a",
            6360: "c81cd164",
            7509: "846792ea"
        })[e] || e) + "." + ({
            468: "a48d9120c67f978c",
            1232: "1005c9b0834bdf8e",
            1255: "51c284a290ba6b26",
            2096: "155bf2957c8ecf74",
            2554: "2b1db44b02177fa1",
            2913: "7c4dd79a3748f467",
            3283: "99f8fe4f75ee394d",
            3536: "b555f10961a14f1a",
            4706: "0bb0baeef8e25a6d",
            5319: "850a0c0927fde37a",
            5771: "f916ae584238e26b",
            5922: "6d8348f4b9ea5046",
            6360: "69fa38f203d0557b",
            6667: "14dc36800081224a",
            7509: "81fba5d5fac1f28f",
            8877: "b081a7e81cf78b13",
            8904: "5211705b50e50c0e",
            9393: "48a75347736575b6",
            9790: "20791aa6dc15f7da",
            9987: "9d5512fb042b848f"
        })[e] + ".js"
    }
    ,
    __webpack_require__.miniCssF = function(e) {
        return "static/css/" + ({
            176: "a0dce7ce9731ddd3",
            897: "7d4ba7e50695ff4b",
            938: "f262ff5c8660dbb7",
            1364: "f262ff5c8660dbb7",
            2020: "f262ff5c8660dbb7",
            2135: "27243445cd5e7ce8",
            2248: "f262ff5c8660dbb7",
            2264: "f262ff5c8660dbb7",
            2888: "8f52185022a10bd5",
            3283: "83a0a2187af081ef",
            4229: "27243445cd5e7ce8",
            4280: "c960c5e0460917b3",
            4548: "15a460f12b20e8b4",
            4570: "f262ff5c8660dbb7",
            5350: "f262ff5c8660dbb7",
            5482: "f262ff5c8660dbb7",
            6667: "c2a527101433f11d",
            6905: "f262ff5c8660dbb7",
            7882: "15a460f12b20e8b4",
            8487: "f262ff5c8660dbb7",
            9795: "f262ff5c8660dbb7"
        })[e] + ".css"
    }
    ,
    __webpack_require__.g = function() {
        if ("object" == typeof globalThis)
            return globalThis;
        try {
            return this || Function("return this")()
        } catch (e) {
            if ("object" == typeof window)
                return window
        }
    }(),
    __webpack_require__.hmd = function(e) {
        return (e = Object.create(e)).children || (e.children = []),
        Object.defineProperty(e, "exports", {
            enumerable: !0,
            set: function() {
                throw Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " + e.id)
            }
        }),
        e
    }
    ,
    __webpack_require__.o = function(e, r) {
        return Object.prototype.hasOwnProperty.call(e, r)
    }
    ,
    _ = {},
    n = "_N_E:",
    __webpack_require__.l = function(e, r, t, c) {
        if (_[e]) {
            _[e].push(r);
            return
        }
        if (void 0 !== t)
            for (var i, a, u = document.getElementsByTagName("script"), o = 0; o < u.length; o++) {
                var b = u[o];
                if (b.getAttribute("src") == e || b.getAttribute("data-webpack") == n + t) {
                    i = b;
                    break
                }
            }
        i || (a = !0,
        (i = document.createElement("script")).charset = "utf-8",
        i.timeout = 120,
        __webpack_require__.nc && i.setAttribute("nonce", __webpack_require__.nc),
        i.setAttribute("data-webpack", n + t),
        i.src = __webpack_require__.tu(e)),
        _[e] = [r];
        var onScriptComplete = function(r, t) {
            i.onerror = i.onload = null,
            clearTimeout(f);
            var n = _[e];
            if (delete _[e],
            i.parentNode && i.parentNode.removeChild(i),
            n && n.forEach(function(e) {
                return e(t)
            }),
            r)
                return r(t)
        }
          , f = setTimeout(onScriptComplete.bind(null, void 0, {
            type: "timeout",
            target: i
        }), 12e4);
        i.onerror = onScriptComplete.bind(null, i.onerror),
        i.onload = onScriptComplete.bind(null, i.onload),
        a && document.head.appendChild(i)
    }
    ,
    __webpack_require__.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    __webpack_require__.nmd = function(e) {
        return e.paths = [],
        e.children || (e.children = []),
        e
    }
    ,
    __webpack_require__.tt = function() {
        return void 0 === c && (c = {
            createScriptURL: function(e) {
                return e
            }
        },
        "undefined" != typeof trustedTypes && trustedTypes.createPolicy && (c = trustedTypes.createPolicy("nextjs#bundler", c))),
        c
    }
    ,
    __webpack_require__.tu = function(e) {
        return __webpack_require__.tt().createScriptURL(e)
    }
    ,
    __webpack_require__.p = "https://static.segmentfault.com/main_site_next/94692dd9/_next/",
    i = function(e, r, t, _) {
        var n = document.createElement("link");
        return n.rel = "stylesheet",
        n.type = "text/css",
        n.onerror = n.onload = function(c) {
            if (n.onerror = n.onload = null,
            "load" === c.type)
                t();
            else {
                var i = c && ("load" === c.type ? "missing" : c.type)
                  , a = c && c.target && c.target.href || r
                  , u = Error("Loading CSS chunk " + e + " failed.\n(" + a + ")");
                u.code = "CSS_CHUNK_LOAD_FAILED",
                u.type = i,
                u.request = a,
                n.parentNode.removeChild(n),
                _(u)
            }
        }
        ,
        n.href = r,
        document.head.appendChild(n),
        n
    }
    ,
    a = function(e, r) {
        for (var t = document.getElementsByTagName("link"), _ = 0; _ < t.length; _++) {
            var n = t[_]
              , c = n.getAttribute("data-href") || n.getAttribute("href");
            if ("stylesheet" === n.rel && (c === e || c === r))
                return n
        }
        for (var i = document.getElementsByTagName("style"), _ = 0; _ < i.length; _++) {
            var n = i[_]
              , c = n.getAttribute("data-href");
            if (c === e || c === r)
                return n
        }
    }
    ,
    u = {
        2272: 0
    },
    __webpack_require__.f.miniCss = function(e, r) {
        u[e] ? r.push(u[e]) : 0 !== u[e] && ({
            3283: 1,
            6667: 1
        })[e] && r.push(u[e] = new Promise(function(r, t) {
            var _ = __webpack_require__.miniCssF(e)
              , n = __webpack_require__.p + _;
            if (a(_, n))
                return r();
            i(e, n, r, t)
        }
        ).then(function() {
            u[e] = 0
        }, function(r) {
            throw delete u[e],
            r
        }))
    }
    ,
    o = {
        2272: 0
    },
    __webpack_require__.f.j = function(e, r) {
        var t = __webpack_require__.o(o, e) ? o[e] : void 0;
        if (0 !== t) {
            if (t)
                r.push(t[2]);
            else if (2272 != e) {
                var _ = new Promise(function(r, _) {
                    t = o[e] = [r, _]
                }
                );
                r.push(t[2] = _);
                var n = __webpack_require__.p + __webpack_require__.u(e)
                  , c = Error();
                __webpack_require__.l(n, function(r) {
                    if (__webpack_require__.o(o, e) && (0 !== (t = o[e]) && (o[e] = void 0),
                    t)) {
                        var _ = r && ("load" === r.type ? "missing" : r.type)
                          , n = r && r.target && r.target.src;
                        c.message = "Loading chunk " + e + " failed.\n(" + _ + ": " + n + ")",
                        c.name = "ChunkLoadError",
                        c.type = _,
                        c.request = n,
                        t[1](c)
                    }
                }, "chunk-" + e, e)
            } else
                o[e] = 0
        }
    }
    ,
    __webpack_require__.O.j = function(e) {
        return 0 === o[e]
    }
    ,
    b = function(e, r) {
        var t, _, n = r[0], c = r[1], i = r[2], a = 0;
        if (n.some(function(e) {
            return 0 !== o[e]
        })) {
            for (t in c)
                __webpack_require__.o(c, t) && (__webpack_require__.m[t] = c[t]);
            if (i)
                var u = i(__webpack_require__)
        }
        for (e && e(r); a < n.length; a++)
            _ = n[a],
            __webpack_require__.o(o, _) && o[_] && o[_][0](),
            o[_] = 0;
        return __webpack_require__.O(u)
    }
    ,
    (f = self.webpackChunk_N_E = self.webpackChunk_N_E || []).forEach(b.bind(null, 0)),
    f.push = b.bind(null, f.push.bind(f))
    window.web = __webpack_require__
}();
