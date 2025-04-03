
function a(e) {
    return String(e)
}
function u(e) {
    return Object.keys(e).sort()
}
function s(e) {
    return e.filter((function(e) {
        return e
    }
    )).join("&")
}
function c(e, t) {
    var n = typeof t
      , r = null;
    return t === r ? r = i ? r : "".concat(a(e), "=").concat(r) : /string|number|boolean/.test(n) ? r = "".concat(a(e), "=").concat(a(t)) : Array.isArray(t) ? r = function(e, t) {
        return t.length ? s(t.map((function(t, n) {
            return c("".concat(e, "[").concat(n, "]"), t)
        }
        ))) : a("".concat(e, "[]"))
    }(e, t) : "object" === n && (r = function(e, t) {
        return s(u(t).map((function(n) {
            return c("".concat(e, "[").concat(n, "]"), t[n])
        }
        )))
    }(e, t)),
    r
}
_initState = function(e, t) {
    this._offset = 0;
    var n = new Int32Array(e,t + 320,5);
    n[0] = 1732584193,
    n[1] = -271733879,
    n[2] = -1732584194,
    n[3] = 271733878,
    n[4] = -1009589776
}
rawDigest = function(e) {
    var t = e.byteLength || e.length || e.size || 0;
    this._initState(this._heap, this._padMaxChunkLen);
    var n = 0
      , r = this._maxChunkLen;
    for (n = 0; t > n + r; n += r)
        this._coreCall(e, n, r, t, !1);
    return this._coreCall(e, n, t - n, t, !0),
    c(this._heap, this._padMaxChunkLen)
}
_coreCall = function(e, t, n, r, o) {
    var i = n;
    this._write(e, t, n),
    o && (i = this._padChunk(n, r)),
    this._core.hash(i, this._padMaxChunkLen)
}
function u_write(e, t, i, a, u, s) {
    if ("string" === typeof e)
        return function(e, t, n, r, o, i) {
            var a = void 0
              , u = i % 4
              , s = (o + u) % 4
              , c = o - s;
            switch (u) {
            case 0:
                t[i] = e.charCodeAt(r + 3);
            case 1:
                t[i + 1 - (u << 1) | 0] = e.charCodeAt(r + 2);
            case 2:
                t[i + 2 - (u << 1) | 0] = e.charCodeAt(r + 1);
            case 3:
                t[i + 3 - (u << 1) | 0] = e.charCodeAt(r)
            }
            if (!(o < s + (4 - u))) {
                for (a = 4 - u; a < c; a = a + 4 | 0)
                    n[i + a >> 2] = e.charCodeAt(r + a) << 24 | e.charCodeAt(r + a + 1) << 16 | e.charCodeAt(r + a + 2) << 8 | e.charCodeAt(r + a + 3);
                switch (s) {
                case 3:
                    t[i + c + 1 | 0] = e.charCodeAt(r + c + 2);
                case 2:
                    t[i + c + 2 | 0] = e.charCodeAt(r + c + 1);
                case 1:
                    t[i + c + 3 | 0] = e.charCodeAt(r + c)
                }
            }
        }(e, t, i, a, u, s);
    if (e instanceof Array)
        return o(e, t, i, a, u, s);
    if (n && n.Buffer && n.Buffer.isBuffer(e))
        return o(e, t, i, a, u, s);
    if (e instanceof ArrayBuffer)
        return o(new Uint8Array(e), t, i, a, u, s);
    if (e.buffer instanceof ArrayBuffer)
        return o(new Uint8Array(e.buffer,e.byteOffset,e.byteLength), t, i, a, u, s);
    if (e instanceof Blob)
        return function(e, t, n, o, i, a) {
            var u = void 0
              , s = a % 4
              , c = (i + s) % 4
              , f = i - c
              , p = new Uint8Array(r.readAsArrayBuffer(e.slice(o, o + i)));
            switch (s) {
            case 0:
                t[a] = p[3];
            case 1:
                t[a + 1 - (s << 1) | 0] = p[2];
            case 2:
                t[a + 2 - (s << 1) | 0] = p[1];
            case 3:
                t[a + 3 - (s << 1) | 0] = p[0]
            }
            if (!(i < c + (4 - s))) {
                for (u = 4 - s; u < f; u = u + 4 | 0)
                    n[a + u >> 2 | 0] = p[u] << 24 | p[u + 1] << 16 | p[u + 2] << 8 | p[u + 3];
                switch (c) {
                case 3:
                    t[a + f + 1 | 0] = p[f + 2];
                case 2:
                    t[a + f + 2 | 0] = p[f + 1];
                case 1:
                    t[a + f + 3 | 0] = p[f]
                }
            }
        }(e, t, i, a, u, s);
    throw new Error("Unsupported data type.")
}
_write = function(e, t, n, r) {
    u_write(e, this._h8, this._h32, t, n, r || 0)
}
 function i(e) {
    for (var t = new Uint8Array(e), r = new Array(e.byteLength), o = 0; o < r.length; o++)
        r[o] = n[t[o]];
    return r.join("")
}
 function digest(e) {
    return i(this.rawDigest(e).buffer)
}
function rsync(e) {
    return digest(e)
}
function p(e) {
    var t = e && s(u(e).map((function(t) {
        return c(t, e[t])
    }
    )));
    return t = rsync(t),
    t = o(t)
}
e = {os: 'web', sv: '8.4.6', app: 'CailianpressWeb'}

console.log(p(e))
