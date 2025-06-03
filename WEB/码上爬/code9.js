const CryptoJS = require("crypto-js");

function init(t, e) {
    t = this._hasher = new t.init,
    "string" == typeof e && (e = _.parse(e));
    var r = t.blockSize
      , i = 4 * r;
    e.sigBytes > i && (e = t.finalize(e)),
    e.clamp();
    for (var n = this._oKey = e.clone(), o = this._iKey = e.clone(), s = n.words, c = o.words, a = 0; a < r; a++)
        s[a] ^= 1549556828,
        c[a] ^= 909522486;
    n.sigBytes = o.sigBytes = i,
    this.reset()
}

function get_m(time){
    n = '9527'+time
    e = "xxxooo"
    return new CryptoJS.HMAC.init(r,e).finalize(t)
}
time = 1744219366603
get_m(time)