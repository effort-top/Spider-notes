// 自定义日志控制对象
const dconsole = {
    _enabled: false, // 控制开关，改为false或注释此行就能禁用所有dconsole日志

    log(...args) {
        if (this._enabled) {
            console.log(...args);
        }
    }
};

// 修改后的watch函数，使用dconsole替代console.log
function watch(func, name) {
    return new Proxy(func, {
        get(target, p, receiver) {
            if (p === 'Math' || p === 'isNaN' || p === 'encodeURI' || p === 'Uint8Array' || p === 'zzz' || p === 'innerHTML') {
                let val = Reflect.get(...arguments)
                return val
            } else {
                let val = Reflect.get(...arguments)
                // if(name==='document.all'||p==='all')
                // if(p==='_proto_')
                // debugger

                // 修复：处理 Symbol 类型的属性名
                const propName = typeof p === 'symbol' ? p.toString() : p;
                dconsole.log('取值:', `${name}.${propName}`, '=>', val);
                return val
            }
        },
        set(target, p, value, receiver) {
            let val = Reflect.get(...arguments)
            // 修复：处理 Symbol 类型的属性名
            const propName = typeof p === 'symbol' ? p.toString() : p;
            dconsole.log('设置值:', `${name}.${propName}`, val, '=>', value);
            return Reflect.set(...arguments)
        }
    })
}


window = global;
window.innerWidth = 410
window.innerHeight = 703
window.outerWidth = 1536
window.outerHeight = 824
window.screenX = 0
window.screenY = 0
window.pageYOffset = 0
window.sessionStorage = {
    "__tea_session_id_24": "{\"sessionId\":\"7f0e9f6c-8843-43be-adee-bda69d57159d\",\"timestamp\":1747075323083}",
    "tt_scid": "mwDsjbH2hQGDLuW.R0yTUM4tfHY3tDEBuMD1mtpyp44dScCxbLu3RpaBf.LWWIVA08ca",
    "_tea_cache_duration": "{\"duration\":40962,\"page_title\":\"今日头条\"}",
    "_byted_param_sw": "Q4g2xecb+7iY3CZjBNg=",
    "/": "1",
    "__tea_session_id_2018": "{\"sessionId\":\"9788a2c4-1485-4162-ab6d-11e72e2fd3a7\",\"timestamp\":1747074824805}"
}
window.onwheelx = {
    "_Ax": "0X21"
}
window.requestAnimationFrame = function (val) {
    // console.log("requestAnimationFrame==>", val);
}
window.EventSource = function (val) {
    console.log("EventSource==>", val);
}
document = {
    all: watch({}, "all==>"),
    createElement: function (val) {
        // console.log("document.createElement==>", val);
        if (val == 'span') {
            return watch({
                classList: {}
            }, "classList ==>")
        }
    },
    documentElement: function (val) {
        console.log("document.documentElement==>", val);
    },
    createEvent: function (val) {
        console.log("document.createEvent==>", val);
    },
    referrer: '',
    body: watch({
        clientWidth: 109,
        clientHeight: 2530,
    }, 'document.body==>'),

    cookie: '__ac_nonce=068221a1800b40ff4fbdc; __ac_signature=_02B4Z6wo00f01na-BxAAAIDDfJjcumjGN-J2ngOAAPWc77; gfkadpd=24,6457; ttcid=067d3b2d4b2b4f53a6c9a3451616099922; local_city_cache=%E5%B9%BF%E5%B7%9E; csrftoken=95b09f68cd6f9e6777f06e1e5016276b; _ga=GA1.1.1008104280.1747065373; x-web-secsdk-uid=48c27840-d932-4b54-b647-dcafb4b679a1; s_v_web_id=verify_mal9m6rw_1RPLdkG7_ohf8_4LYt_8tbe_n33nR6a0bJct; _ga_QEHZPBE5HH=GS2.1.s1747065373$o1$g1$t1747066372$j0$l0$h0; tt_scid=4z40fmJpnY1-nBAGZvD52SwkujjqDaJWFiq0j..2w.pwa4hp1ZmcQbkaXN00BZZRadf1'
}
navigator = {
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36',
    vendorSubs: {
        "ink": 1747075347366
    },
    platform: 'Win32'
}
location = {}
localStorage = {
    getItem: function (key) {
        // console.log("getItem ==>", key)
        if (key === 'xmst') {
            return 'rHWX3joQjewiWnZO20Rj2K_YAYmE25uR5J49C7cDHpclXGw0aXfDpMh2CpNbLnzNw2n8xCtuXLjXdo4a5KfN1Sotk7IvM-P1fpmh-LkpXg2qPO48RUDHNW8PH5PmBg=='
        }
    },
    removeItem: function (key) {
        console.log("removeItem ==>", key)
    },
}
screen = {
    availHeight: 824,
    availLeft: 0,
    availTop: 0,
    availWidth: 1536,
    colorDepth: 24,
    height: 864,
    isExtended: false,
    pixelDepth: 24,
    width: 1536
}
history = {}

XMLHttpRequest = function (val) {
    console.log("XMLHttpRequest==>", val);
}

window = watch(window, "window")
document = watch(document, "document")
navigator = watch(navigator, "navigator")
location = watch(location, "location")
localStorage = watch(localStorage, "localStorage")
screen = watch(screen, "screen")
history = watch(history, "history")