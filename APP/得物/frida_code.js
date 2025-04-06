Java.perform(function () {
    console.log("已开始注入")
    let RequestUtils = Java.use("com.shizhuang.duapp.common.utils.RequestUtils");
    RequestUtils["c"].implementation = function (map, j2) {
        console.log('\n--------c函数 执行----------')
        var Map = Java.use('java.util.HashMap')
        var NewP = Java.cast(map, Map)
        console.log('c函数参数1：', NewP.toString())
        console.log('c函数参数2：', j2)
        let result = this["c"](map, j2);
        console.log(`c函数返回值： ${result}`);
        console.log('--------c函数 结束----------\n\n\n\n')
        return result;
    };

    let AESEncrypt = Java.use("com.duapp.aesjni.AESEncrypt");
    AESEncrypt["encode"].overload('java.lang.Object', 'java.lang.String').implementation = function (obj, str) {
        console.log('encode函数参数1：', obj)
        console.log('encode函数参数2：', str)
        let result = this["encode"](obj, str);
        console.log(`encode函数返回值：${result}`);
        return result;
    };

    AESEncrypt["getByteValues"].implementation = function () {
        let result = this["getByteValues"]();
        console.log(`getByteValues函数返回值：${result}`);
        return result;
    };
    AESEncrypt["encodeByte"].implementation = function (bArr, str) {
        console.log(`encodeByte函数参数1：${bArr}, str=${str}`);
        console.log(`encodeByte函数参数2：${str}`);
        let result = this["encodeByte"](bArr, str);
        console.log(`encodeByt函数返回值：${result}`);
        return result;
    };

    //1  找到那个so文件，libJNIEncrypt.so，第二个参数是要hook的函数名--》返回值是函数的内存地址
    var addr_func = Module.findExportByName("libJNIEncrypt.so", "AES_128_ECB_PKCS5Padding_Encrypt");
    //2 传入要hook的函数内存地址
    Interceptor.attach(addr_func, {
        onEnter: function (args) {
            console.log("--------------------------执行Hook so文件函数--------------------------");
            console.log("参数1-v11：", args[0].readUtf8String());
            console.log("参数2-v8：", args[1].readUtf8String());
        },
        onLeave: function (retValue) {
            console.log("返回值newSign在md5之前的值:", retValue.readUtf8String());
            console.log("--------------------------结束Hook so文件函数--------------------------");
        }
    })

});