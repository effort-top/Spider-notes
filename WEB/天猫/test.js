eP = function(eu) {
    function ep(eu, ep) {
        return eu << ep | eu >>> 32 - ep
    }
    function em(eu, ep) {
        var em, ey, e_, ew, eS;
        return e_ = 2147483648 & eu,
        ew = 2147483648 & ep,
        em = 1073741824 & eu,
        ey = 1073741824 & ep,
        eS = (1073741823 & eu) + (1073741823 & ep),
        em & ey ? 2147483648 ^ eS ^ e_ ^ ew : em | ey ? 1073741824 & eS ? 3221225472 ^ eS ^ e_ ^ ew : 1073741824 ^ eS ^ e_ ^ ew : eS ^ e_ ^ ew
    }
    function ey(eu, ep, em) {
        return eu & ep | ~eu & em
    }
    function e_(eu, ep, em) {
        return eu & em | ep & ~em
    }
    function ew(eu, ep, em) {
        return eu ^ ep ^ em
    }
    function eS(eu, ep, em) {
        return ep ^ (eu | ~em)
    }
    function eT(eu, e_, ew, eS, eT, eP, eE) {
        return eu = em(eu, em(em(ey(e_, ew, eS), eT), eE)),
        em(ep(eu, eP), e_)
    }
    function eP(eu, ey, ew, eS, eT, eP, eE) {
        return eu = em(eu, em(em(e_(ey, ew, eS), eT), eE)),
        em(ep(eu, eP), ey)
    }
    function eE(eu, ey, e_, eS, eT, eP, eE) {
        return eu = em(eu, em(em(ew(ey, e_, eS), eT), eE)),
        em(ep(eu, eP), ey)
    }
    function eM(eu, ey, e_, ew, eT, eP, eE) {
        return eu = em(eu, em(em(eS(ey, e_, ew), eT), eE)),
        em(ep(eu, eP), ey)
    }
    function eI(eu) {
        var ep, em = "", ey = "";
        for (ep = 0; 3 >= ep; ep++)
            em += (ey = "0" + (eu >>> 8 * ep & 255).toString(16)).substr(ey.length - 2, 2);
        return em
    }
    var eC, eA, eO, eN, eL, eR, eD, eB, eU, eF = [], ez = 7, eV = 12, eW = 17, eH = 22, eG = 5, eX = 9, eJ = 14, eY = 20, eZ = 4, eQ = 11, eK = 16, e$ = 23, e0 = 6, e3 = 10, e4 = 15, e5 = 21;
    for (eF = function(eu) {
        for (var ep, em = eu.length, ey = em + 8, e_ = (ey - ey % 64) / 64, ew = 16 * (e_ + 1), eS = Array(ew - 1), eT = 0, eP = 0; em > eP; )
            ep = (eP - eP % 4) / 4,
            eT = eP % 4 * 8,
            eS[ep] = eS[ep] | eu.charCodeAt(eP) << eT,
            eP++;
        return ep = (eP - eP % 4) / 4,
        eT = eP % 4 * 8,
        eS[ep] = eS[ep] | 128 << eT,
        eS[ew - 2] = em << 3,
        eS[ew - 1] = em >>> 29,
        eS
    }(eu = function(eu) {
        eu = eu.replace(/\r\n/g, "\n");
        for (var ep = "", em = 0; em < eu.length; em++) {
            var ey = eu.charCodeAt(em);
            128 > ey ? ep += String.fromCharCode(ey) : ey > 127 && 2048 > ey ? ep += String.fromCharCode(ey >> 6 | 192) + String.fromCharCode(63 & ey | 128) : ep += String.fromCharCode(ey >> 12 | 224) + String.fromCharCode(ey >> 6 & 63 | 128) + String.fromCharCode(63 & ey | 128)
        }
        return ep
    }(eu)),
    eR = 1732584193,
    eD = 4023233417,
    eB = 2562383102,
    eU = 271733878,
    eC = 0; eC < eF.length; eC += 16)
        eA = eR,
        eO = eD,
        eN = eB,
        eL = eU,
        eR = eT(eR, eD, eB, eU, eF[eC + 0], ez, 3614090360),
        eU = eT(eU, eR, eD, eB, eF[eC + 1], eV, 3905402710),
        eB = eT(eB, eU, eR, eD, eF[eC + 2], eW, 606105819),
        eD = eT(eD, eB, eU, eR, eF[eC + 3], eH, 3250441966),
        eR = eT(eR, eD, eB, eU, eF[eC + 4], ez, 4118548399),
        eU = eT(eU, eR, eD, eB, eF[eC + 5], eV, 1200080426),
        eB = eT(eB, eU, eR, eD, eF[eC + 6], eW, 2821735955),
        eD = eT(eD, eB, eU, eR, eF[eC + 7], eH, 4249261313),
        eR = eT(eR, eD, eB, eU, eF[eC + 8], ez, 1770035416),
        eU = eT(eU, eR, eD, eB, eF[eC + 9], eV, 2336552879),
        eB = eT(eB, eU, eR, eD, eF[eC + 10], eW, 4294925233),
        eD = eT(eD, eB, eU, eR, eF[eC + 11], eH, 2304563134),
        eR = eT(eR, eD, eB, eU, eF[eC + 12], ez, 1804603682),
        eU = eT(eU, eR, eD, eB, eF[eC + 13], eV, 4254626195),
        eB = eT(eB, eU, eR, eD, eF[eC + 14], eW, 2792965006),
        eD = eT(eD, eB, eU, eR, eF[eC + 15], eH, 1236535329),
        eR = eP(eR, eD, eB, eU, eF[eC + 1], eG, 4129170786),
        eU = eP(eU, eR, eD, eB, eF[eC + 6], eX, 3225465664),
        eB = eP(eB, eU, eR, eD, eF[eC + 11], eJ, 643717713),
        eD = eP(eD, eB, eU, eR, eF[eC + 0], eY, 3921069994),
        eR = eP(eR, eD, eB, eU, eF[eC + 5], eG, 3593408605),
        eU = eP(eU, eR, eD, eB, eF[eC + 10], eX, 38016083),
        eB = eP(eB, eU, eR, eD, eF[eC + 15], eJ, 3634488961),
        eD = eP(eD, eB, eU, eR, eF[eC + 4], eY, 3889429448),
        eR = eP(eR, eD, eB, eU, eF[eC + 9], eG, 568446438),
        eU = eP(eU, eR, eD, eB, eF[eC + 14], eX, 3275163606),
        eB = eP(eB, eU, eR, eD, eF[eC + 3], eJ, 4107603335),
        eD = eP(eD, eB, eU, eR, eF[eC + 8], eY, 1163531501),
        eR = eP(eR, eD, eB, eU, eF[eC + 13], eG, 2850285829),
        eU = eP(eU, eR, eD, eB, eF[eC + 2], eX, 4243563512),
        eB = eP(eB, eU, eR, eD, eF[eC + 7], eJ, 1735328473),
        eD = eP(eD, eB, eU, eR, eF[eC + 12], eY, 2368359562),
        eR = eE(eR, eD, eB, eU, eF[eC + 5], eZ, 4294588738),
        eU = eE(eU, eR, eD, eB, eF[eC + 8], eQ, 2272392833),
        eB = eE(eB, eU, eR, eD, eF[eC + 11], eK, 1839030562),
        eD = eE(eD, eB, eU, eR, eF[eC + 14], e$, 4259657740),
        eR = eE(eR, eD, eB, eU, eF[eC + 1], eZ, 2763975236),
        eU = eE(eU, eR, eD, eB, eF[eC + 4], eQ, 1272893353),
        eB = eE(eB, eU, eR, eD, eF[eC + 7], eK, 4139469664),
        eD = eE(eD, eB, eU, eR, eF[eC + 10], e$, 3200236656),
        eR = eE(eR, eD, eB, eU, eF[eC + 13], eZ, 681279174),
        eU = eE(eU, eR, eD, eB, eF[eC + 0], eQ, 3936430074),
        eB = eE(eB, eU, eR, eD, eF[eC + 3], eK, 3572445317),
        eD = eE(eD, eB, eU, eR, eF[eC + 6], e$, 76029189),
        eR = eE(eR, eD, eB, eU, eF[eC + 9], eZ, 3654602809),
        eU = eE(eU, eR, eD, eB, eF[eC + 12], eQ, 3873151461),
        eB = eE(eB, eU, eR, eD, eF[eC + 15], eK, 530742520),
        eD = eE(eD, eB, eU, eR, eF[eC + 2], e$, 3299628645),
        eR = eM(eR, eD, eB, eU, eF[eC + 0], e0, 4096336452),
        eU = eM(eU, eR, eD, eB, eF[eC + 7], e3, 1126891415),
        eB = eM(eB, eU, eR, eD, eF[eC + 14], e4, 2878612391),
        eD = eM(eD, eB, eU, eR, eF[eC + 5], e5, 4237533241),
        eR = eM(eR, eD, eB, eU, eF[eC + 12], e0, 1700485571),
        eU = eM(eU, eR, eD, eB, eF[eC + 3], e3, 2399980690),
        eB = eM(eB, eU, eR, eD, eF[eC + 10], e4, 4293915773),
        eD = eM(eD, eB, eU, eR, eF[eC + 1], e5, 2240044497),
        eR = eM(eR, eD, eB, eU, eF[eC + 8], e0, 1873313359),
        eU = eM(eU, eR, eD, eB, eF[eC + 15], e3, 4264355552),
        eB = eM(eB, eU, eR, eD, eF[eC + 6], e4, 2734768916),
        eD = eM(eD, eB, eU, eR, eF[eC + 13], e5, 1309151649),
        eR = eM(eR, eD, eB, eU, eF[eC + 4], e0, 4149444226),
        eU = eM(eU, eR, eD, eB, eF[eC + 11], e3, 3174756917),
        eB = eM(eB, eU, eR, eD, eF[eC + 2], e4, 718787259),
        eD = eM(eD, eB, eU, eR, eF[eC + 9], e5, 3951481745),
        eR = em(eR, eA),
        eD = em(eD, eO),
        eB = em(eB, eN),
        eU = em(eU, eL);
    return (eI(eR) + eI(eD) + eI(eB) + eI(eU)).toLowerCase()
}


function getSign(token,time,data){
    sign = eP(token + "&" + time + "&" + '12574478' + "&" + data)
    return sign
}

token = 'b49c10e8cb900935ef70601fd348d2cb'
time = 1743439678024
// time = (new Date).getTime()
data = '{"id":"832902886875","detail_v":"3.3.2","exParams":"{\\"id\\":\\"832902886875\\",\\"sku_properties\\":\\"122216431:27772\\",\\"queryParams\\":\\"id=832902886875&sku_properties=122216431%3A27772\\",\\"domain\\":\\"https://item.taobao.com\\",\\"path_name\\":\\"/item.htm\\",\\"pcSource\\":\\"pcTaobaoMain\\",\\"appKey\\":\\"3q2+7wX9z8JkLmN1oP5QrStUvWxYzA0B\\",\\"refId\\":\\"uPtEk9F70EmrcA0DHlBYa7iKrK5aO44GwljRtC7BPEw=\\",\\"nonce\\":\\"m9FU7a+pmOcCr/u6tm1H2A==\\"}"}'

sign = getSign(token,time,data)
console.log(sign);
