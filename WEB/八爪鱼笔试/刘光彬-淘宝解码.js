function eP(eu) {
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
    function eT(eu, e_, ew, eS, eT, eP, eM) {
        return eu = em(eu, em(em(ey(e_, ew, eS), eT), eM)),
            em(ep(eu, eP), e_)
    }
    function eP(eu, ey, ew, eS, eT, eP, eM) {
        return eu = em(eu, em(em(e_(ey, ew, eS), eT), eM)),
            em(ep(eu, eP), ey)
    }
    function eM(eu, ey, e_, eS, eT, eP, eM) {
        return eu = em(eu, em(em(ew(ey, e_, eS), eT), eM)),
            em(ep(eu, eP), ey)
    }
    function eE(eu, ey, e_, ew, eT, eP, eM) {
        return eu = em(eu, em(em(eS(ey, e_, ew), eT), eM)),
            em(ep(eu, eP), ey)
    }
    function eI(eu) {
        var ep, em = "", ey = "";
        for (ep = 0; 3 >= ep; ep++)
            em += (ey = "0" + (eu >>> 8 * ep & 255).toString(16)).substr(ey.length - 2, 2);
        return em
    }
    var eC, eO, eA, eN, eL, eR, eD, eB, eU, eF = [], ez = 7, eV = 12, eW = 17, eH = 22, eG = 5, eZ = 9, eX = 14, eJ = 20, eY = 4, eK = 11, eQ = 16, e$ = 23, e0 = 6, e3 = 10, e4 = 15, e5 = 21;
    for (eF = function (eu) {
        for (var ep, em = eu.length, ey = em + 8, e_ = (ey - ey % 64) / 64, ew = 16 * (e_ + 1), eS = Array(ew - 1), eT = 0, eP = 0; em > eP;)
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
    }(eu = function (eu) {
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
        eO = eR,
            eA = eD,
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
            eU = eP(eU, eR, eD, eB, eF[eC + 6], eZ, 3225465664),
            eB = eP(eB, eU, eR, eD, eF[eC + 11], eX, 643717713),
            eD = eP(eD, eB, eU, eR, eF[eC + 0], eJ, 3921069994),
            eR = eP(eR, eD, eB, eU, eF[eC + 5], eG, 3593408605),
            eU = eP(eU, eR, eD, eB, eF[eC + 10], eZ, 38016083),
            eB = eP(eB, eU, eR, eD, eF[eC + 15], eX, 3634488961),
            eD = eP(eD, eB, eU, eR, eF[eC + 4], eJ, 3889429448),
            eR = eP(eR, eD, eB, eU, eF[eC + 9], eG, 568446438),
            eU = eP(eU, eR, eD, eB, eF[eC + 14], eZ, 3275163606),
            eB = eP(eB, eU, eR, eD, eF[eC + 3], eX, 4107603335),
            eD = eP(eD, eB, eU, eR, eF[eC + 8], eJ, 1163531501),
            eR = eP(eR, eD, eB, eU, eF[eC + 13], eG, 2850285829),
            eU = eP(eU, eR, eD, eB, eF[eC + 2], eZ, 4243563512),
            eB = eP(eB, eU, eR, eD, eF[eC + 7], eX, 1735328473),
            eD = eP(eD, eB, eU, eR, eF[eC + 12], eJ, 2368359562),
            eR = eM(eR, eD, eB, eU, eF[eC + 5], eY, 4294588738),
            eU = eM(eU, eR, eD, eB, eF[eC + 8], eK, 2272392833),
            eB = eM(eB, eU, eR, eD, eF[eC + 11], eQ, 1839030562),
            eD = eM(eD, eB, eU, eR, eF[eC + 14], e$, 4259657740),
            eR = eM(eR, eD, eB, eU, eF[eC + 1], eY, 2763975236),
            eU = eM(eU, eR, eD, eB, eF[eC + 4], eK, 1272893353),
            eB = eM(eB, eU, eR, eD, eF[eC + 7], eQ, 4139469664),
            eD = eM(eD, eB, eU, eR, eF[eC + 10], e$, 3200236656),
            eR = eM(eR, eD, eB, eU, eF[eC + 13], eY, 681279174),
            eU = eM(eU, eR, eD, eB, eF[eC + 0], eK, 3936430074),
            eB = eM(eB, eU, eR, eD, eF[eC + 3], eQ, 3572445317),
            eD = eM(eD, eB, eU, eR, eF[eC + 6], e$, 76029189),
            eR = eM(eR, eD, eB, eU, eF[eC + 9], eY, 3654602809),
            eU = eM(eU, eR, eD, eB, eF[eC + 12], eK, 3873151461),
            eB = eM(eB, eU, eR, eD, eF[eC + 15], eQ, 530742520),
            eD = eM(eD, eB, eU, eR, eF[eC + 2], e$, 3299628645),
            eR = eE(eR, eD, eB, eU, eF[eC + 0], e0, 4096336452),
            eU = eE(eU, eR, eD, eB, eF[eC + 7], e3, 1126891415),
            eB = eE(eB, eU, eR, eD, eF[eC + 14], e4, 2878612391),
            eD = eE(eD, eB, eU, eR, eF[eC + 5], e5, 4237533241),
            eR = eE(eR, eD, eB, eU, eF[eC + 12], e0, 1700485571),
            eU = eE(eU, eR, eD, eB, eF[eC + 3], e3, 2399980690),
            eB = eE(eB, eU, eR, eD, eF[eC + 10], e4, 4293915773),
            eD = eE(eD, eB, eU, eR, eF[eC + 1], e5, 2240044497),
            eR = eE(eR, eD, eB, eU, eF[eC + 8], e0, 1873313359),
            eU = eE(eU, eR, eD, eB, eF[eC + 15], e3, 4264355552),
            eB = eE(eB, eU, eR, eD, eF[eC + 6], e4, 2734768916),
            eD = eE(eD, eB, eU, eR, eF[eC + 13], e5, 1309151649),
            eR = eE(eR, eD, eB, eU, eF[eC + 4], e0, 4149444226),
            eU = eE(eU, eR, eD, eB, eF[eC + 11], e3, 3174756917),
            eB = eE(eB, eU, eR, eD, eF[eC + 2], e4, 718787259),
            eD = eE(eD, eB, eU, eR, eF[eC + 9], e5, 3951481745),
            eR = em(eR, eO),
            eD = em(eD, eA),
            eB = em(eB, eN),
            eU = em(eU, eL);
    return (eI(eR) + eI(eD) + eI(eB) + eI(eU)).toLowerCase()
}

function get_sing(token, time, data) {
    sign = eP(token + "&" + time + "&" + "12574478" + "&" + data)
    return sign
}

// token = "397fa37836b1c0c36550b967f1bda366"
time = (new Date).getTime()
var data = '{"id":"701524278938","detail_v":"3.3.2","exParams":"{\\"id\\":\\"701524278938\\",\\"ns\\":\\"1\\",\\"pisk\\":\\"guKrLA4kK0nPwAo1htIFQ6sqaQSRXgcs4H1CKpvhF_flNpXhYIAIe_9nwB-FipLSewG8L8K2_kZSw4p3YMsn1fisfLHRvMc1kj1Nj7BCQTmCt_vDea2xhmisfLp4FTD6nct7yIFAIyqHtabcmT1cETXhtx7cC9j3qwquoSfAKMjhKT4coT6LE9fktSvcdOW3xwqunmXhEMfHtMcPTLv30O_oCgcQ9iroPK5MEsr3bRBPrWAURkZIWt7lsZxLxttVUa5ME3dl946Dcn71lJGfmdLXZtSZ45ByodSlLHHg867e2i52_cqdHUAymw-jpcJf497GxZy3xKSHyCKhjcVVHEvW-3dzLkXJVh_F6Zk3vwsDfNYMaJH9ngXH9NKI6uCkKdK95Goz6T8DQiSyXWBmK9KpzW4FrtBV1xkqWvkUdPQkOw4LJZjO31M5FyUdrtBV1xk4JyQcBt5sFT1..\\",\\"priceTId\\":\\"213e376317284652809945264e711f\\",\\"skuId\\":\\"5066896556929\\",\\"spm\\":\\"a21n57.1.item.1.3468523czh21gV\\",\\"utparam\\":\\"{\\\\\\"aplus_abtest\\\\\\":\\\\\\"35bb32a2f8613eb2503ad91219f02145\\\\\\"}\\",\\"xxc\\":\\"ad_ztc\\",\\"queryParams\\":\\"id=701524278938&ns=1&pisk=guKrLA4kK0nPwAo1htIFQ6sqaQSRXgcs4H1CKpvhF_flNpXhYIAIe_9nwB-FipLSewG8L8K2_kZSw4p3YMsn1fisfLHRvMc1kj1Nj7BCQTmCt_vDea2xhmisfLp4FTD6nct7yIFAIyqHtabcmT1cETXhtx7cC9j3qwquoSfAKMjhKT4coT6LE9fktSvcdOW3xwqunmXhEMfHtMcPTLv30O_oCgcQ9iroPK5MEsr3bRBPrWAURkZIWt7lsZxLxttVUa5ME3dl946Dcn71lJGfmdLXZtSZ45ByodSlLHHg867e2i52_cqdHUAymw-jpcJf497GxZy3xKSHyCKhjcVVHEvW-3dzLkXJVh_F6Zk3vwsDfNYMaJH9ngXH9NKI6uCkKdK95Goz6T8DQiSyXWBmK9KpzW4FrtBV1xkqWvkUdPQkOw4LJZjO31M5FyUdrtBV1xk4JyQcBt5sFT1..&priceTId=213e376317284652809945264e711f&skuId=5066896556929&spm=a21n57.1.item.1.3468523czh21gV&utparam=%7B%22aplus_abtest%22%3A%2235bb32a2f8613eb2503ad91219f02145%22%7D&xxc=ad_ztc\\",\\"domain\\":\\"https://detail.tmall.hk\\",\\"path_name\\":\\"/hk/item.htm\\"}"}'
token = '3c11d7615c377afccdf2feede37a1150'


console.log(get_sing(token, time, data))