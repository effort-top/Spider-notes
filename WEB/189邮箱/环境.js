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
        console.log("获取属性get screen", property, typeof target[property]);
        return target[property]
    }
});