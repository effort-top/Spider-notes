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


var S = function (e) {
    return e || (e = "p6fl4gN1brNfflKK"),
        new w({
            key: e,
            mode: "cbc",
            iv: "longrise12345678",
            cipherType: "text"
        })
}

function encode(t) {
    return t.replace(/./g, function (t) {
        var n = t.charCodeAt(0);
        if (8364 == (r = n) || r <= 127 && r >= 0)
            return encodeURIComponent(t);
        var r, i = n.toString(16);
        return 4 != i.length && (i = ("000" + i).match(/....$/)[0]),
            e[i] || t
    })
}

function toGbkBytes(e) {
    e = encode(e);
    for (var t = new Array, n = 0; n < e.length; n++) {
        var r = e.charAt(n);
        if ("%" == r) {
            var i = e.charAt(n + 1) + e.charAt(n + 2);
            i = parseInt(i, 16),
                i |= -256,
                t.push(i),
                n += 2
        } else
            t.push(r.charCodeAt())
    }
    return t
}
function padding(e) {
    if (null === e)
        return null;
    var t = 16 - e.length % 16
        , n = new Uint8Array(e.length + t);
    return n.set(e, 0),
        n.fill(t, e.length),
        n

}

function uint8ToUint32Block(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
        , n = new Uint32Array(4);
    return n[0] = e[t] << 24 | e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3],
        n[1] = e[t + 4] << 24 | e[t + 5] << 16 | e[t + 6] << 8 | e[t + 7],
        n[2] = e[t + 8] << 24 | e[t + 9] << 16 | e[t + 10] << 8 | e[t + 11],
        n[3] = e[t + 12] << 24 | e[t + 13] << 16 | e[t + 14] << 8 | e[t + 15],
        n
}
var m = Uint8Array.from([214, 144, 233, 254, 204, 225, 61, 183, 22, 182, 20, 194, 40, 251, 44, 5, 43, 103, 154, 118, 42, 190, 4, 195, 170, 68, 19, 38, 73, 134, 6, 153, 156, 66, 80, 244, 145, 239, 152, 122, 51, 84, 11, 67, 237, 207, 172, 98, 228, 179, 28, 169, 201, 8, 232, 149, 128, 223, 148, 250, 117, 143, 63, 166, 71, 7, 167, 252, 243, 115, 23, 186, 131, 89, 60, 25, 230, 133, 79, 168, 104, 107, 129, 178, 113, 100, 218, 139, 248, 235, 15, 75, 112, 86, 157, 53, 30, 36, 14, 94, 99, 88, 209, 162, 37, 34, 124, 59, 1, 33, 120, 135, 212, 0, 70, 87, 159, 211, 39, 82, 76, 54, 2, 231, 160, 196, 200, 158, 234, 191, 138, 210, 64, 199, 56, 181, 163, 247, 242, 206, 249, 97, 21, 161, 224, 174, 93, 164, 155, 52, 26, 85, 173, 147, 50, 48, 245, 140, 177, 227, 29, 246, 226, 46, 130, 102, 202, 96, 192, 41, 35, 171, 13, 83, 78, 111, 213, 219, 55, 69, 222, 253, 142, 47, 3, 255, 106, 114, 109, 108, 91, 81, 141, 27, 175, 146, 187, 221, 188, 127, 17, 217, 92, 65, 31, 16, 90, 216, 10, 193, 49, 136, 165, 205, 123, 189, 45, 116, 208, 18, 184, 229, 180, 176, 137, 105, 151, 74, 12, 150, 119, 126, 101, 185, 241, 9, 197, 110, 198, 132, 24, 240, 125, 236, 58, 220, 77, 32, 121, 238, 95, 62, 215, 203, 57, 72])

function tauTransform(e) {
    return m[e >>> 24 & 255] << 24 | m[e >>> 16 & 255] << 16 | m[e >>> 8 & 255] << 8 | m[255 & e]
}

function rotateLeft(e, t) {
    return e << t | e >>> 32 - t
}

function linearTransform1(e) {
    return e ^ rotateLeft(e, 2) ^ rotateLeft(e, 10) ^ rotateLeft(e, 18) ^ rotateLeft(e, 24)
}

function tTransform1(e) {
    var t = tauTransform(e);
    return linearTransform1(t)
}

function doBlockCrypt(e, t) {
    var n = new Uint32Array(36);
    n.set(e, 0);
    for (var r = 0; r < 32; r++)
        n[r + 4] = n[r] ^ tTransform1(n[r + 1] ^ n[r + 2] ^ n[r + 3] ^ t[r]);
    var i = new Uint32Array(4);
    return i[0] = n[35],
        i[1] = n[34],
        i[2] = n[33],
        i[3] = n[32],
        i
}

function fromByteArray(e) {
    function f(e, t, n) {
        for (var i, o, a = [], c = t; c < n; c += 3)
            i = (e[c] << 16 & 16711680) + (e[c + 1] << 8 & 65280) + (255 & e[c + 2]),
            a.push(r[(o = i) >> 18 & 63] + r[o >> 12 & 63] + r[o >> 6 & 63] + r[63 & o]);
        return a.join("")
    }
    var r = [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "+",
        "/"
    ]
    for (var t, n = e.length, i = n % 3, o = [], a = 0, c = n - i; a < c; a += 16383)
        o.push(f(e, a, a + 16383 > c ? c : a + 16383));
    1 === i ? (t = e[n - 1],
    o.push(r[t >> 2] + r[t << 4 & 63] + "==")) : 2 === i && (t = (e[n - 2] << 8) + e[n - 1],
    o.push(r[t >> 10] + r[t >> 4 & 63] + r[t << 2 & 63] + "="));
    return o.join("")
}

function arrayBufferToBase64(e) {
    return fromByteArray(e)
}

function encrypt(e) {
    var iv1 = {
        "0": 108,
        "1": 111,
        "2": 110,
        "3": 103,
        "4": 114,
        "5": 105,
        "6": 115,
        "7": 101,
        "8": 49,
        "9": 50,
        "10": 51,
        "11": 52,
        "12": 53,
        "13": 54,
        "14": 55,
        "15": 56
    }
    const values1 = Object.values(iv1)
    this.iv = new Uint8Array(values1);

    const data = {
        "0": 3227710448,
        "1": 433923506,
        "2": 3870026421,
        "3": 614401821,
        "4": 735760546,
        "5": 2560642097,
        "6": 229707708,
        "7": 1075956489,
        "8": 423845469,
        "9": 1943499182,
        "10": 3135967826,
        "11": 228101437,
        "12": 3646041800,
        "13": 2115104166,
        "14": 1645825424,
        "15": 4207789091,
        "16": 2735131337,
        "17": 2191807018,
        "18": 526461979,
        "19": 842885386,
        "20": 775319120,
        "21": 2218567725,
        "22": 51881770,
        "23": 2378912197,
        "24": 1738010489,
        "25": 3434757575,
        "26": 3705100199,
        "27": 3692549862,
        "28": 4105161378,
        "29": 2428551307,
        "30": 1418021905,
        "31": 3610258994
    };
    const values2 = Object.values(data);
    this.encryptRoundKeys = new Uint32Array(values2);


    var t = toGbkBytes(e)
        , n = padding(t)
        , r = n.length / 16
        , i = new Uint8Array(n.length);
    if (null === this.iv || 16 !== this.iv.length)
        throw new Error("iv error");
    for (var o = uint8ToUint32Block(this.iv), a = 0; a < r; a++) {
        var c = 16 * a
            , s = uint8ToUint32Block(n, c);
        o[0] = o[0] ^ s[0],
            o[1] = o[1] ^ s[1],
            o[2] = o[2] ^ s[2],
            o[3] = o[3] ^ s[3];
        var l = doBlockCrypt(o, this.encryptRoundKeys);
        o = l;
        for (var f = 0; f < 16; f++)
            i[c + f] = l[parseInt(f / 4)] >> (3 - f) % 4 * 8 & 255
    }

    return arrayBufferToBase64(i) 
}

function get_bean(t) {
    bean = encrypt(JSON.stringify(t))
    return bean
}
var t = {
    "pageNum": 3,
    "pageSize": 12,
    "itemtag": "",
    "itemcategory": "",
    "albx0072": "4",
    "albx0072A": null,
    "albx0024": "",
    "albx0004": "",
    "albx0005": "",
    "albx0013": "",
    "albx0021": "000000000000000000",
    "albx0014": "",
    "albx0002": "",
    "albx0009": "",
    "code": "4"
}
console.log(get_bean(t))