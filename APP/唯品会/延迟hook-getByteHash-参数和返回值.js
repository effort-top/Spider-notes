function do_hook() {
	setTimeout(function(){
        var addr = Module.findExportByName("libkeyinfo.so", "getByteHash");
        Interceptor.attach(addr, {
            onEnter: function (args) {
                this.x1 = args[2];
            },
            onLeave: function (retval) {
                console.log("-------参数和返回值-------------")
                console.log(Memory.readCString(this.x1));
                console.log(Memory.readCString(retval));
            }
        })
     },10);

}

function load_so_and_hook() {
    var dlopen = Module.findExportByName(null, "dlopen");
    var android_dlopen_ext = Module.findExportByName(null, "android_dlopen_ext");

    Interceptor.attach(dlopen, {
        onEnter: function (args) {
            var path_ptr = args[0];
            var path = ptr(path_ptr).readCString();
            // console.log("[dlopen:]", path);
            this.path = path;
        }, onLeave: function (retval) {
            if (this.path.indexOf("libkeyinfo.so") !== -1) {
                console.log("[dlopen:]", this.path);
                do_hook();

            }
        }
    });

    Interceptor.attach(android_dlopen_ext, {
        onEnter: function (args) {
            var path_ptr = args[0];
            var path = ptr(path_ptr).readCString();

            this.path = path;
        }, onLeave: function (retval) {
            if (this.path.indexOf("libkeyinfo.so") !== -1) {
                console.log("\nandroid_dlopen_ext加载：", this.path);
                do_hook();

            }
        }
    });
}

load_so_and_hook();

// spawn方案：frida -U -f com.achievo.vipshop -l 延迟hook-getByteHash-参数和返回值.js
// spawn-->应用重启---》一个个加载so--》当加载到libkeyinfo.so的时候，[延迟10毫秒]执行hook-getByteHash


/*
-------参数和返回值-------------
aee4c425dbb2288b80c71347cc37d04bapp_name=achievo_ad&app_version=7.83.3&channel=oziq7dxw:::&device=Redmi K30 5G&device_token=eb479aba-ebdc-36ee-a481-75cadbc77666&manufacturer=Xiaomi&mf_cid=BCRUVy5JqpRXdkr3Vcy2NUphqZl4e3P6wMiPvJKDYF5q2w1VUwVKk2NAV/ws3Dvp&mf_regPlat=1&os_version=31&regPlat=1&regid=BCRUVy5JqpRXdkr3Vcy2NUphqZl4e3P6wMiPvJKDYF5q2w1VUwVKk2NAV/ws3Dvp&rom=Dalvik/2.1.0 (Linux; U; Android 12; Redmi K30 5G Build/SKQ1.211006.001)&skey=6692c461c3810ab150c9a980d0c275ec&status=1&vipruid=&warehouse=VIP_NH
682cd64dacb451626ac1271334dd760da25f141a
-------参数和返回值-------------
aee4c425dbb2288b80c71347cc37d04b682cd64dacb451626ac1271334dd760da25f141a
d84fb00f32e0c695513cc528d9e86ad5f85fb037




# 猜测：加密逻辑：
请求参数或请求体前加固定盐aee4c425dbb2288b80c71347cc37d04b，使用sha1加密
把加密结果前加固定盐aee4c425dbb2288b80c71347cc37d04b，使用sha1再次加密
才是真正的加密结果

 */