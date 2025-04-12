/*
    b站视频播放量 https://api.bilibili.com/x/report/click/android2
    请求头：
    buvid	XX22E6B2380F562322AECF8C19AE17343F83A
    device-id	fUx7SHkYfhoqTHlLckQnFFQGYwdqA0h7S345
    fp_local	cc3929df36778330a51d45fc7c2b32b420250412152714823ceaca369bd128e4
    fp_remote	cc3929df36778330a51d45fc7c2b32b420250412152714823ceaca369bd128e4
    session_id	bcf0012c
    请求体： 类似乱码
    1. 查找 click/android2 -> l<String> execute = aVar.reportClick(create).execute(); -> create
    2. 查看 create变量如何来的 -> c0 create = c0.create(w.d(com.hpplay.sdk.source.protocol.h.E), H7); -> H7就是返回结果 -> byte[] H7 = d.this.H7()
    3. 查看 d.this.H7 执行逻辑 ->
        StringBuilder sb = new StringBuilder();
        for (Map.Entry entry : treeMap.entrySet()) {
            String str4 = (String) entry.getKey();
            String str5 = (String) entry.getValue();
            sb.append(str4);
            sb.append('=');
            if (str5 == null) {
                str5 = "";
            }
            sb.append(str5);
            sb.append('&');
        }
        sb.deleteCharAt(sb.length() - 1);
        String sb2 = sb.toString();
        x.h(sb2, "builder.toString()");
        String b2 = t3.a.i.a.a.a.b.e.b(sb2);
        sb.append("&sign=");
        sb.append(b2);
        String sb3 = sb.toString();
        return t3.a.i.a.a.a.b.e.a(sb3);
        将参数转成字符串:遍历字典，获取key和value，用 “=” 连接，最后加上 “&”，然后删除最后一个“&”，
        最后拼接一个“&sign=加密结果”，随后又对sb3加密，得到最后请求体的结果
        因此主要需要看
            t3.a.i.a.a.a.b.e.b 如何签名的  -> 明文+盐 通过sha256签名得到的
            t3.a.i.a.a.a.b.e.a 如何加密的
    4. 破解sign -> 查看b的加密函数 ->
        String g = com.bilibili.commons.m.a.g(bytes, bytes2);   -> 这是签名的生成逻辑，bytes是明文，bytes2是盐,可以根据下面日志猜测是sha256
        x.h(g, "DigestUtils.sha256(param…yteArray(Charsets.UTF_8))");        盐值："9cafa6466a028bfb"

    5. 破解请求体 t3.a.i.a.a.a.b.e.a(sb3); -> 进入a可以发现是aes加密
        "fd6b639dbcff0c2a1b03b389ec763c4b" aes的key
        "77b07a672d57d64c" aes的iv
        byte[] i = com.bilibili.droid.g0.a.i(secretKeySpec, ivParameterSpec, bytes3);

*/

Java.perform(function () {
    console.log("开始注入")
    // hook h7 函数 确定 请求体
    let d = Java.use("tv.danmaku.biliplayerimpl.report.heartbeat.d");
    let ByteString = Java.use("com.android.okhttp.okio.ByteString")
    d["H7"].implementation = function (j2, j4, i, j5, j6, i2, i3, j7, str, i4, str2, str3) {
        console.log("------------开始破解---------------")
        console.log(`d.H7 参数: j2=${j2}, j4=${j4}, i=${i}, j5=${j5}, j6=${j6}, i2=${i2}, i3=${i3}, j7=${j7}, str=${str}, i4=${i4}, str2=${str2}, str3=${str3}`);
        let result = this["H7"](j2, j4, i, j5, j6, i2, i3, j7, str, i4, str2, str3);
        console.log(`d.H7 返回值: ${result}`);
        console.log("十六进制形式：", ByteString.of(result).hex());
        console.log("字符串形式：", ByteString.of(result).utf8());
        console.log("------------结束---------------")
        return result;
    };

    // sign 签名破解 -> String g = com.bilibili.commons.m.a.g(bytes, bytes2); hook g函数
    let a = Java.use("com.bilibili.commons.m.a");
    a["g"].implementation = function (bArr, bArr2) {
        console.log("破解sign签名")
        console.log(`a.g 参数1: bArr(明文)=${bArr}`);
        console.log("a.g 参数1 字符串形式：", ByteString.of(bArr).utf8());
        console.log(`a.g 参数2: bArr2(盐)=${bArr2}`);
        console.log("a.g 参数2 字符串形式：", ByteString.of(bArr2).utf8());
        let result = this["g"](bArr, bArr2);
        console.log(`a.g 返回值: ${result}`);
        return result;
    };

    let b = Java.use("t3.a.i.a.a.a.b");
    b["a"].implementation = function (body) {
        console.log("破解请求体加密")
        console.log(`b.a 参数: ${body}`);
        let result = this["a"](body);
        console.log(`b.a 返回值: ${result}`);
        return result;
    };
    a["i"].implementation = function (secretKey, ivParameterSpec, bArr) {
        console.log(`a.i 参数: secretKey=${secretKey}, ivParameterSpec=${ivParameterSpec}, bArr=${bArr}`);
        let result = this["i"](secretKey, ivParameterSpec, bArr);
        // console.log(`a.i 返回值: ${result}`);
        console.log("---------真正加密结束--------")
        return result;
    };

    var SecretKeySpec = Java.use("javax.crypto.spec.SecretKeySpec");
    SecretKeySpec.$init.overload('[B', 'java.lang.String').implementation = function (key, name) {

        console.log("-----------------SecretKeySpec-----------------");
        console.log("java key bytes=", JSON.stringify(key));
        console.log("java key hex=", ByteString.of(key).hex());
        console.log("java key utf8=", ByteString.of(key).utf8());

        var res = this.$init(key, name);
        return res;
    };
    var IvParameterSpec = Java.use("javax/crypto/spec/IvParameterSpec");
    IvParameterSpec.$init.overload('[B').implementation = function (iv) {
        console.log("-----------------IvParameterSpec-----------------");
        console.log("java iv bytes=", JSON.stringify(iv));
        console.log("java iv hex=", ByteString.of(iv).hex());
        console.log("java iv utf8=", ByteString.of(iv).utf8());

        var res = this.$init(iv);
        return res;
    };

});

// Application(identifier="tv.danmaku.bili", name="哔哩哔哩", pid=13833, parameters={})

// frida -U -f tv.danmaku.bili -l frida_code.js