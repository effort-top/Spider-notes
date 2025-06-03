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
 
window=global;
window.fyglobalopt = {
    "MaxMTLog": 300,
    "MTInterval": 4,
    "MinMTDwnLog": 30,
    "MaxKSLog": 14,
    "MaxFocusLog": 6,
    "MaxNGPLog": 200,
    "NGPInterval": 4,
    "Enable": 3,
    "location": "cn",
    "_umopt_npfp": 1,
    "timeout": 2000
}
window.__fyModule = watch({
    ver : 231,
    jsv : 104,
    load : true
},'window.__fyModule ==> ')
appendChild = function(val){
    console.log("appendChild==>", val);
}
window.addEventListener = function (val) {
    console.log("window.addEventListener ==>", val);
}
window.removeEventListener = function (val) {
    console.log("window.removeEventListener ==>", val);
}
 
// window.Image = function (val) {
//     console.log("window.Image ==>", val);
// }
// window.Image = watch({},'window.Image ==>')
window.postMessage = function (val) {
    console.log("window.postMessage ==>", val);
}
window.location = {
    "ancestorOrigins": {},
    "href": "https://www.aliexpress.us//item/1005008396073656.html/_____tmd_____/punish?x5secdata=xcYS3b4aXuCbkkoEu43J89s07YVURq2sbc8ypk9ZSXtHUhqnGnkkJIc%2fQcEn9%2b2D4v1m%2b6vnLHEoZJ1M8%2bJMKDFUff5Se0Qgl%2bzOpQa9c%2bM4ce7C7rpoE0zgMy3OTWqqhVd9iq74cWushWo1TLFhS3EysxvHIOzgq8SBJMGwNfkUQFx8oXlfXZlwAbFYPebUAtr%2brntbuAZV2Lo%2bE%2f2HRUCrthM9d%2bVLhxpIA1NbZfSoEEUH1F8o9U2Gh4EM3ODMTDvDuupMsT5LgMXv%2bAx4l7QTIaERhT23j3UO%2bFtaHBbWo%3d__bx__www.aliexpress.us%2fitem%2f1005008396073656.html&x5step=1",
    "origin": "https://www.aliexpress.us",
    "protocol": "https:",
    "host": "www.aliexpress.us",
    "hostname": "www.aliexpress.us",
    "port": "",
    "pathname": "//item/1005008396073656.html/_____tmd_____/punish",
    "search": "?x5secdata=xcYS3b4aXuCbkkoEu43J89s07YVURq2sbc8ypk9ZSXtHUhqnGnkkJIc%2fQcEn9%2b2D4v1m%2b6vnLHEoZJ1M8%2bJMKDFUff5Se0Qgl%2bzOpQa9c%2bM4ce7C7rpoE0zgMy3OTWqqhVd9iq74cWushWo1TLFhS3EysxvHIOzgq8SBJMGwNfkUQFx8oXlfXZlwAbFYPebUAtr%2brntbuAZV2Lo%2bE%2f2HRUCrthM9d%2bVLhxpIA1NbZfSoEEUH1F8o9U2Gh4EM3ODMTDvDuupMsT5LgMXv%2bAx4l7QTIaERhT23j3UO%2bFtaHBbWo%3d__bx__www.aliexpress.us%2fitem%2f1005008396073656.html&x5step=1",
    "hash": ""
}
window.navigator = watch({},'window.navigator ==>')
window.document = watch({},'window.document ==>')
document={
    getElementsByTagName :  function (val) {
        console.log("document.getElementsByTagName==>", val);
        if (val=='body'){
            return watch({},'document.getElementsByTagName.body==>')
        }
    },
    createElement: function (val) {
        console.log("document.createElement==>", val);
        if (val == 'span') {
            return watch({
                style:watch({},"document.createElement('span').style ==>"),
                offsetWidth: 0,
                offsetHeight: 0
            }, "document.createElement('span') ==>")
        }
    },
}
navigator={
    userAgent:'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36',
}
location={
    "ancestorOrigins": {},
    "href": "https://www.aliexpress.us//item/1005008396073656.html/_____tmd_____/punish?x5secdata=xcYS3b4aXuCbkkoEu43J89s07YVURq2sbc8ypk9ZSXtHUhqnGnkkJIc%2fQcEn9%2b2D4v1m%2b6vnLHEoZJ1M8%2bJMKDFUff5Se0Qgl%2bzOpQa9c%2bM4ce7C7rpoE0zgMy3OTWqqhVd9iq74cWushWo1TLFhS3EysxvHIOzgq8SBJMGwNfkUQFx8oXlfXZlwAbFYPebUAtr%2brntbuAZV2Lo%2bE%2f2HRUCrthM9d%2bVLhxpIA1NbZfSoEEUH1F8o9U2Gh4EM3ODMTDvDuupMsT5LgMXv%2bAx4l7QTIaERhT23j3UO%2bFtaHBbWo%3d__bx__www.aliexpress.us%2fitem%2f1005008396073656.html&x5step=1",
    "origin": "https://www.aliexpress.us",
    "protocol": "https:",
    "host": "www.aliexpress.us",
    "hostname": "www.aliexpress.us",
    "port": "",
    "pathname": "//item/1005008396073656.html/_____tmd_____/punish",
    "search": "?x5secdata=xcYS3b4aXuCbkkoEu43J89s07YVURq2sbc8ypk9ZSXtHUhqnGnkkJIc%2fQcEn9%2b2D4v1m%2b6vnLHEoZJ1M8%2bJMKDFUff5Se0Qgl%2bzOpQa9c%2bM4ce7C7rpoE0zgMy3OTWqqhVd9iq74cWushWo1TLFhS3EysxvHIOzgq8SBJMGwNfkUQFx8oXlfXZlwAbFYPebUAtr%2brntbuAZV2Lo%2bE%2f2HRUCrthM9d%2bVLhxpIA1NbZfSoEEUH1F8o9U2Gh4EM3ODMTDvDuupMsT5LgMXv%2bAx4l7QTIaERhT23j3UO%2bFtaHBbWo%3d__bx__www.aliexpress.us%2fitem%2f1005008396073656.html&x5step=1",
    "hash": ""
}
localStorage={}
screen={}
history={}
window=watch(window,"window")
document=watch(document,"document")
navigator=watch(navigator,"navigator")
location=watch(location,"location")
localStorage=watch(localStorage,"localStorage")
screen=watch(screen,"screen")
history=watch(history,"history")