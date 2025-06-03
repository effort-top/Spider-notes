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
window.outerHeight = 824
window.outerWidth = 1536
window.chrome = {
    "app": {
        "isInstalled": false,
        "InstallState": {
            "DISABLED": "disabled",
            "INSTALLED": "installed",
            "NOT_INSTALLED": "not_installed"
        },
        "RunningState": {
            "CANNOT_RUN": "cannot_run",
            "READY_TO_RUN": "ready_to_run",
            "RUNNING": "running"
        }
    }
}
window.DeviceOrientationEvent = function DeviceOrientationEvent(){
    console.log("window.DeviceOrientationEvent",arguments);
}
window.DeviceMotionEvent = function DeviceMotionEvent(){
    console.log("window.DeviceMotionEvent",arguments);
}


document = {
    getElementById: function getElementById(){
        console.log("document.getElementById",arguments);
    },
    addEventListener: function addEventListener(){
        console.log("document.addEventListener",arguments);
    },
    createElement: function createElement(){
        console.log("document.createElement",arguments);
    },
    referrer:'https://mms.pinduoduo.com/mms-chat/search?msfrom=mms_sidenav',
    cookie:'webp=true; api_uid=CiYE82gbffMxjwBV/EGgAg==; _nano_fp=XpmYn5EqX5gJX0TqnC_a~rPf3MFH1AULKBcwUxd_; mms_b84d1838=3616,150,3523,3614,321,3613,3604,3594,3599,3602,3603,3608,3605,3621,3622,3588,3254,3532,3642,3474,3475,3477,3479,3482,1202,1203,1204,1205,3417; x-visit-time=1746873281190'
};
navigator = {
    webdriver:false,
    plugins:[],
    languages:['zh-CN', 'zh'],
    userAgent:'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36'
};

location = {
    "ancestorOrigins": {},
    "href": "https://mms.pinduoduo.com/mms-chat/search?msfrom=mms_sidenav",
    "origin": "https://mms.pinduoduo.com",
    "protocol": "https:",
    "host": "mms.pinduoduo.com",
    "hostname": "mms.pinduoduo.com",
    "port": "",
    "pathname": "/mms-chat/search",
    "search": "?msfrom=mms_sidenav",
    "hash": ""
}   
history = {
    back : function back(){
        console.log("history.back",arguments);
        
    }
};
screen = {
    availHeight: 824,
    availLeft: 0,
    availTop: 0,
    availWidth: 1536,
    colorDepth: 24,
    height: 864,
    isExtended: false,
    onchange: null,
    pixelDepth: 24,
    width: 1536
}


window = new Proxy(window, {
    set(target, property, value, receiver) {
        console.log("设置属性set window", property, typeof value);
        return Reflect.set(...arguments);
    },
    get(target, property, receiver) {
        console.log("获取属性get window", property, typeof target[property]);
        return target[property]
    }
});
document = new Proxy(document, {
    set(target, property, value, receiver) {
        console.log("设置属性set document", property, typeof value);
        return Reflect.set(...arguments);
    },
    get(target, property, receiver) {
        console.log("获取属性get document", property, typeof target[property]);
        return target[property]
    }
});
navigator = new Proxy(navigator, {
    set(target, property, value, receiver) {
        console.log("设置属性set navigator", property, typeof value);
        return Reflect.set(...arguments);
    },
    get(target, property, receiver) {
        console.log("获取属性get navigator", property, typeof target[property]);
        return target[property]
    }
});
location = new Proxy(location, {
    set(target, property, value, receiver) {
        console.log("设置属性set location", property, typeof value);
        return Reflect.set(...arguments);
    },
    get(target, property, receiver) {
        console.log("获取属性get location", property, typeof target[property]);
        return target[property]
    }
});
history = new Proxy(history, {
    set(target, property, value, receiver) {
        console.log("设置属性set history", property, typeof value);
        return Reflect.set(...arguments);
    },
    get(target, property, receiver) {
        console.log("获取属性get history", property, typeof target[property]);
        return target[property]
    }
});
screen = new Proxy(screen, {
    set(target, property, value, receiver) {
        console.log("设置属性set screen", property, typeof value);
        return Reflect.set(...arguments);
    },
    get(target, property, receiver) {
        console.log("获取属性get screen", property, typeof target[property]);
        return target[property]
    }
});

