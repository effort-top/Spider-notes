// 自定义日志控制对象
const dconsole = {
    _enabled: true, // 控制开关，改为false或注释此行就能禁用所有dconsole日志

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
window.innerWidth = 150
window.innerHeight = 703
window.screenTop = 0
window.screenY = 0
window.screenLeft = 0
window.screenX = 0
window.outerWidth = 1536
window.matchMedia = function (val) {
    console.log("window.matchMedia==>", val);
}
window.webkitRTCPeerConnection = function (val) {
    console.log("window.webkitRTCPeerConnection==>", val);
}
window.Element = function (val) {
    console.log("window.Element==>", val);
}
window.PointerEvent = function (val) {
    console.log("window.PointerEvent==>", val);
}
window.OfflineAudioContext = function (val) {
    console.log("window.OfflineAudioContext==>", val);
}
window.DOMTokenList = function (val) {
    console.log("window.DOMTokenList==>", val);
}
window.PerformanceTiming = function (val) {
    console.log("window.PerformanceTiming==>", val);
}
window.HTMLDocument = function (val) {
    console.log("window.HTMLDocument==>", val);
}
window.HTMLMediaElement = function (val) {
    console.log("window.HTMLMediaElement==>", val);
}
window.isSecureContext = true
window.self = watch({},'window.self==>')
window.clientInformation = watch({},'window.clientInformation==>')
document = {
    hidden : false,
    webkitHidden : false,
    wasDiscarded:false,
    cookie:'language=zh_CN; sid=bb2a6d3f11824176912f672d5a38aad7; _gscu_422057653=467033514qmy4298; _gscbrs_422057653=1; _gcl_au=1.1.379269397.1746703357; isXionganFlag=false; temp_zh=cou%3D0%3Bsegt%3D%E5%8D%95%E7%A8%8B%3Btime%3D2025-05-15%3B%E5%B9%BF%E5%B7%9E-%E9%95%BF%E6%B2%99%3B1%2C0%2C0%3B00%3B%26; WT.al_flight=WT.al_hctype(S)%3AWT.al_adultnum(1)%3AWT.al_childnum(0)%3AWT.al_infantnum(0)%3AWT.al_orgcity1(CAN)%3AWT.al_dstcity1(CSX)%3AWT.al_orgdate1(2025-05-15); acw_sc__v2=6822fcacc7b340b2d15be1ab9865513640671bf2; _gscs_422057653=t47123372s16ev241|pv:1; ssxmod_itna=Yq0OYvqAx+Ozi7jq0KY0Qg6D3qBP01CD+xQ5DODLxnRDGdXDcCS2DCw+=u=DQ2e9DShi=Dl2YI5DSxD6aDA40azFEGDX8Wjgkyhwqj1Gr67DIhbr4WWCm4X+kdHlZkmpomIbbPz+4Y=DCLjxfxdD44DvDBYD74G+DDeDixrDj4GmDGAd=eDFGnb=gebD+4GSGBeDmqGyGeGpCw5YunNagDG2DGURRC5Yx0UbDBL7KzFDGw7wgguQM15DbEYPOpaDtqD9BDRdxeHHIQn==Q8NKG=nZDL4lYIw3wx4FGvuBTxzjODzjbVuOAQViFkEKLLG7xDiOijGPPQYNW=j66UZ=HQeN7wgArSBhRANyeq3DmqC2kmq5e037KbKwejKZPq42qxD; ssxmod_itna2=Yq0OYvqAx+Ozi7jq0KY0Qg6D3qBP01CD+xQ5DODLxnRDGdXDcCS2DCw+=u=DQ2e9DShG5Dighv5m3HIQo2kgCD7I7a+=Ziu6leD',
    currentScript: watch({
        getAttribute: function (val) {
            console.log("currentScript.getAttribute==>", val);
        },
        src:'https://o.alicdn.com/frontend-lib/common-lib/jquery.min.js'
    }, 'document.currentScript==>'),

    getElementsByTagName: function (val) {
        console.log("document.getElementsByTagName==>", val);
    },

    documentElement: watch({
        clientHeight : 703,
        getAttribute:function (val) {
            console.log("documentElement.getAttribute==>", val);
        },
    }, 'document.documentElement==>'),

    readyState : 'loading',
    addEventListener: function (val) {
        console.log("document.addEventListener==>", val);
    },
    createElement: function (val) {
        if(val === "script"){
            return watch({}, 'document.createElement.script==>')
        }
        if(val === "cc"){
            return watch({
                style : watch({
                    zoom : watch({},'document.createElement.cc.style.zoom==>'),
                    resize : watch({},'document.createElement.cc.style.resize==>'),
                    zoom : watch({},'document.createElement.cc.style.zoom==>'),
                }, 'document.createElement.cc.style==>')
            }, 'document.createElement.cc==>')
        }
        if(val === "canvas"){
            return watch({
                getAttributeNames :  watch({},'document.createElement.canvas.getAttributeNames==>'),
                getContext : watch({},'document.createElement.canvas.getContext==>'),
            }, 'document.createElement.canvas==>')
        }
        console.log("document.createElement==>", val);
    },
    head : watch({
        firstChild: watch({},'document.head.firstChild==>'),
        inserbofore : function (val) {
            console.log("head.inserbofore==>", val);
        },
        insertBefore: function (val) {
            console.log("head.insertBefore==>", val);
        },
    }, 'document.head==>'),
    location : watch({
        host : 'b2c.csair.com',
    }, 'document.location==>')

}
navigator = {
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36',
    vendor: 'Google Inc.',
    maxTouchPoints: 0,
    language: 'zh-TW',
    platform : 'Win32',
    hardwareConcurrency : 10,
    plugins : watch({},'navigator.plugins==>'),
    webdriver:false
}
location = {}
localStorage = {
    setItem : function (val) {
        console.log("localStorage.setItem==>", val);
    },
    removeItem : function (val) {
        console.log("localStorage.removeItem==>", val);
    },
    getItem : function (val) {
        console.log("localStorage.getItem==>", val);
    },
}
screen = {
    width:1536,
    height:864,
    colorDepth :24,
    pixelDepth:24,
    availWidth:1536,

}
history = {
    length : 4
}
window = watch(window, "window")
document = watch(document, "document")
navigator = watch(navigator, "navigator")
location = watch(location, "location")
localStorage = watch(localStorage, "localStorage")
screen = watch(screen, "screen")
history = watch(history, "history")

