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
 
window=global;
document={
    location:{
        "ancestorOrigins": {},
        "href": "https://match2025.yuanrenxue.cn/match2025/topic/1",
        "origin": "https://match2025.yuanrenxue.cn",
        "protocol": "https:",
        "host": "match2025.yuanrenxue.cn",
        "hostname": "match2025.yuanrenxue.cn",
        "port": "",
        "pathname": "/match2025/topic/1",
        "search": "",
        "hash": ""
    }
}
navigator={
    cookieEnabled:true
}
location={
    href:'https://match2025.yuanrenxue.cn/match2025/topic/1'
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