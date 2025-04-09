function delay_hook(so_name, hook_func) {
    Java.perform(function () {
        // 查询到哪个so文件进行了闪退，可尝试删除
        var android_dlopen_ext = Module.findExportByName(null, "android_dlopen_ext");

        Interceptor.attach(android_dlopen_ext, {
            onEnter: function (args) {
                var path_ptr = args[0];
                var path = ptr(path_ptr).readCString();
                // console.log("[dlopen_ext:]", path);
                this.path = path
            },
            onLeave: function (retval) {
                if (this.path.indexOf(so_name)!==-1){
                    console.log("[dlopen_ext:]", this.path);
                    hook_func()
                }
            }
        });
    });
}

function so_hook() {
    var getMD516 = Module.findExportByName("libkeyinfo.so", "getMD516");
    Interceptor.attach(getMD516, {
        onEnter: function (args) {
            console.log('getMD516参数:', hexdump(args[1], {length: args[2].toInt32()}), "\n");
        },
        onLeave: function (retval) {
            console.log('getMD516返回值:', hexdump(retval, {length: 16}), "\n");
        }
    })
}

function java_hook() {
    Java.perform(function () {
        let KeyInfo = Java.use("com.vip.vcsp.KeyInfo");
        KeyInfo["esNav"].implementation = function (context, str, str2, str3, i10) {
            console.log("---------------esNav函数执行-------------------")
            console.log(`esNav函数参数: context=${context}`);
            console.log(`esNav函数参数: str=${str}`);
            console.log(`esNav函数参数: str2=${str2}`);
            console.log(`esNav函数参数: str3=${str3}`);
            console.log(`esNav函数参数: i10=${i10}`);
            let result = this["esNav"](context, str, str2, str3, i10);
            console.log(`esNav函数返回值：${result}`);
            console.log("---------------esNav函数结束-------------------")
            return result;
        };

        var SecretKeySpec = Java.use("javax.crypto.spec.SecretKeySpec");
        var ByteString = Java.use("com.android.okhttp.okio.ByteString");
        SecretKeySpec.$init.overload('[B', 'java.lang.String').implementation = function (key, name) {
            if (name === 'AES') {
                console.log("-----------------SecretKeySpec-----------------");
                //console.log("4.key bytes=", JSON.stringify(key));
                console.log("java key hex =", ByteString.of(key).hex());
                //console.log("4.key", ByteString.of(key).utf8());
            }
            var res = this.$init(key, name);
            return res;
        };

    })
}

delay_hook('libkeyinfo.so', so_hook)
java_hook()

/*
---------------esNav函数执行-------------------
esNav函数参数: context=com.achievo.vipshop.common.VipApplicationLike@8ea92df
esNav函数参数: str=app_name=shop_android&app_version=7.83.9&client_type=android&dinfo=%7B%22ah1%22%3A%22%22%2C%22ah2%22%3A%22%22%2C%22ah3%22%3A%22%22%2C%22ah4%22%3A%22wifi%22%2C%22ah5%22%3A%221080_2261%22%2C%22ah6%22%3A1804800%2
C%22ah7%22%3A8%2C%22ah8%22%3A7785779200%2C%22ah9%22%3A%22Redmi+K30+5G%22%2C%22ah10%22%3A%22%22%2C%22ah11%22%3A%22%22%2C%22ah12%22%3A%22%22%2C%22ah13%22%3A%22%22%2C%22as1%22%3A%2212%22%2C%22as2%22%3A%22%22%2C%22as3%22%3A%22%22%2C
%22as4%22%3A%22a289b90b398dcc81%22%2C%22as5%22%3A%22%22%2C%22as6%22%3A%22%22%2C%22as7%22%3A%2231%22%2C%22ac1%22%3A%22eb479aba-ebdc-36ee-a481-75cadbc77666%22%7D&mars_cid=eb479aba-ebdc-36ee-a481-75cadbc77666&phone_model=Redmi+K30+
5G&session_id=eb479aba-ebdc-36ee-a481-75cadbc77666_shop_android_1744189959523&sys_version=31&vcspKey=4d9e524ad536c03ff203787cf0dfcd29&vcspToken=NGQ5ZTUyNGFkNTM2YzAzZmYyMDM3ODdjZjBkZmNkMjl8fHwxNzQ2NzgxOTYwfHx8.201bdcbd90045cfd0aa57b933239afa0
esNav函数参数: str2=null
esNav函数参数: str3=null
esNav函数参数: i10=0
getMD516参数:            0  1  2  3  4  5  6  7  8  9  A  B  C  D  E  F  0123456789ABCDEF
af245660  61 65 65 34 63 34 32 35 64 62 62 32 32 38 38 62  aee4c425dbb2288b
af245670  38 30 63 37 31 33 34 37 63 63 33 37 64 30 34 62  80c71347cc37d04b

getMD516返回值:            0  1  2  3  4  5  6  7  8  9  A  B  C  D  E  F  0123456789ABCDEF
af2455e8  cd d1 7a b2 9b 84 b3 25 52 dd cf bb 4a bf 02 25  ..z....%R...J..%

-----------------SecretKeySpec-----------------
java key hex = cdd17ab29b84b32552ddcfbb4abf0225
esNav函数返回值：MjRlNTQ2ZDJlOGNmZjBlYRoQH08hW27LtsUgzcaEIMzxhqVhN7MPmqdvkJWYzhyHJWk3vLyHmeR414RfeePjFRyF0UXzHyi0uCOmI+4VIsisPvcX0oX2kFV8I9ACKiDmkNa4i7aOSLoJzaQfLd5ne5ivbFrZvIZ/6jo4XYhTntSReYscpMuToOmxJljK71DrQqfQ+VFGcf5EkKz4QuxQTx635QDca4MCFlzG/iuX+b3c7OsxZ5yZqGn10AtZ15UP8Qe4BD/NHO4nwfzYGivunuUI53fPIQB3R+exChtHBgE8wC3+d5vLSUe4gxz6f1dVde6qrnw/WhS/LPECeFybmuHT3QqJCD3MUlhcy0enTuHkXWGnxx6q4yAWXnrz48EneYoE/sETvJDqkmhNkRKryycI7Y3ltMuTZTqhEjBhDB+i2eA5IPD+P5yZqo87uZO95+i8QOXD3szv+qg+OC/S4LdiMc3Og2sGIkjwIP3shdkNeiXBqS37O2dtWV39odaK1TvN3x8JzWNq7mhwmzU6iwozUV3RYL5uYwocnV6XYU1riwSsbj1oZIQ7vwpLP4H8SZE3JYHEbnGmDNQt7vQS6AFZYD+LSLNh435oVcSg9k8VEtB35cf1ir+VIQQuCSUNNC9Q8zQExD+2n3q/0ADfXU6vw0BQcdcAzufs8G9iK1gV54jGOGE7WjN1MelZPt9sEPvUhmenDmtj7EJczNXdFvXBXQ6hohIVv/PPNfxejlh3FA1ALf13T6GHQAgGZbgzWkYR0A2knL45e0FYxy63D60yQwtpDu4bVhcFMzSO7zaO6ub1PzbxbqyZU4zgK5HdovldDFUcHHnSH1fqF8dwmtVIZ07C0yzfRzqaY9QPv1F//aIAOV0O9IkZvlbGYwiHJ5FW2bxCyTNmIkTeIMGpeaxMoBaoVcP+6SxQzJx5Qhzzv2EgsSluae8NiVGFSiNQp/RsRKgZBOViwOfOeOQ0nKvsyFkXpOfUHCxWrnW2yiqcmfkihU9VFi3iIeKI1nJ0qJ0aXZ+SAxrfyC0Exh0sCmtyvot+dXEBVZ5tVpqpgJYzX8wKXXRrcIzOS8uIOwuOvzgB34mHcNAO+5V7TbVIH3ZdqeQf2GVyb3IOKrLLyiAt91v2BArfEQIWBgAoEEEwTUCIcaSCnr8Ib37Yguq0U8sFPOGwxwsHp8OecIpaQy5DZhabWUvgYJ1EWh0PaKQ7H2W9dxPrdWYIknPQ==
---------------esNav函数结束-------------------
*/

// frida -U -f com.achievo.vipshop -l hook-esNav-getMD516-SecretKeySpec.js