if (typeof JSON !== 'object') {
JSON = {}
}; (function() {
function i(C) {
    return C < 10 ? '0' + C: C
}
function p() {
    return this['valueOf']()
}
if (typeof Date['prototype']['toJSON'] !== 'function') {
    Date['prototype']['toJSON'] = function() {
        return isFinite(this['valueOf']()) ? this['getUTCFullYear']() + '-' + i(this['getUTCMonth']() + 1) + '-' + i(this['getUTCDate']()) + 'T' + i(this['getUTCHours']()) + ':' + i(this['getUTCMinutes']()) + ':' + i(this['getUTCSeconds']()) + 'Z': null
    };
    Boolean['prototype']['toJSON'] = p;
    Number['prototype']['toJSON'] = p;
    String['prototype']['toJSON'] = p
};
var g, h, j, k, l, n;
function m(D) {
    h['lastIndex'] = 0;
    return h['test'](D) ? '"' + D['replace'](h,
    function(a) {
        var c = l[a];
        return typeof c === 'string' ? c: '\\u' + ('0000' + a['charCodeAt'](0)['toString'](16))['slice']( - 4)
    }) + '"': '"' + D + '"'
}
function o(A, y) {
    var q, z, B, E, F = j,
    G, t = y[A];
    if (t && typeof t === 'object' && typeof t['toJSON'] === 'function') {
        t = t['toJSON'](A)
    };
    if (typeof n === 'function') {
        t = n['call'](y, A, t)
    };
    switch (typeof t) {
    case 'string':
        return m(t);
    case 'number':
        return isFinite(t) ? String(t) : 'null';
    case 'boolean':
        ;
    case 'null':
        return String(t);
    case 'object':
        if (!t) {
            return 'null'
        };
        j += k;
        G = [];
        if (Object['prototype']['toString']['apply'](t) === '[object Array]') {
            E = t['length'];
            for (q = 0; q < E; q += 1) {
                G[q] = o(q, t) || 'null'
            };
            B = G['length'] === 0 ? '[]': j ? '[\n' + j + G['join'](',\n' + j) + '\n' + F + ']': '[' + G['join'](',') + ']';
            j = F;
            return B
        };
        if (n && typeof n === 'object') {
            E = n['length'];
            for (q = 0; q < E; q += 1) {
                if (typeof n[q] === 'string') {
                    z = n[q];
                    B = o(z, t);
                    if (B) {
                        G['push'](m(z) + (j ? ':': ':') + B)
                    }
                }
            }
        } else {
            for (z in t) {
                if (Object['prototype']['hasOwnProperty']['call'](t, z)) {
                    B = o(z, t);
                    if (B) {
                        G['push'](m(z) + (j ? ':': ':') + B)
                    }
                }
            }
        };
        B = G['length'] === 0 ? '{}': j ? '{\n' + j + G['join'](',\n' + j) + '\n' + F + '}': '{' + G['join'](',') + '}';
        j = F;
        return B
    }
}
if (typeof JSON['stringify'] !== 'function') {
    h = /[\\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
    l = {
        ' ': '\\b',
        '\t': '\\t',
        '\n': '\\n',
        '\f': '\\f',
        '\r': '\\r',
        '"': '\\"',
        '\\': '\\\\'
    };
    JSON['stringify'] = function(t, r, s) {
        var q;
        j = '';
        k = '';
        if (typeof s === 'number') {
            for (q = 0; q < s; q += 1) {
                k += ''
            }
        } else {
            if (typeof s === 'string') {
                k = s
            }
        };
        n = r;
        if (r && typeof r !== 'function' && (typeof r !== 'object' || typeof r['length'] !== 'number')) {
            throw new Error('JSON.stringify')
        };
        return o('', {
            '': t
        })
    }
};
if (typeof JSON['parse'] !== 'function') {
    g = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
    JSON['parse'] = function(w, v) {
        var u;
        function x(y, A) {
            var z, B, t = y[A];
            if (t && typeof t === 'object') {
                for (z in t) {
                    if (Object['prototype']['hasOwnProperty']['call'](t, z)) {
                        B = x(t, z);
                        if (B !== undefined) {
                            t[z] = B
                        } else {
                            delete t[z]
                        }
                    }
                }
            };
            return v['call'](y, A, t)
        }
        w = String(w);
        g['lastIndex'] = 0;
        if (g['test'](w)) {
            w = w['replace'](g,
            function(a) {
                return '\\u' + ('0000' + a['charCodeAt'](0)['toString'](16))['slice']( - 4)
            })
        };
        if (/^[\],:{}\s]*$/ ['test'](w['replace'](/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@')['replace'](/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']')['replace'](/(?:^|:|,)(?:\s*\[)+/g, ''))) {
            u = eval('(' + w + ')');
            return typeof v === 'function' ? x({
                '': u
            },
            '') : u
        };
        throw new SyntaxError('JSON.parse')
    }
}
} ());