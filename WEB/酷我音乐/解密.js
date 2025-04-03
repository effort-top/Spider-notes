function nn(e) {
    var r = e && e.__esModule ? function() {
        return e.default
    }
    : function() {
        return e
    }
    ;
    return f.d(r, "a", r),
    r
}

function a112(e, t, n) {
    var r, o, l = n(147), c = n(148), d = 0, h = 0;
    e.exports = function(e, t, n) {
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
}

var c = a112, l = nn(c)

console.log(l)