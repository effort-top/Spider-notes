Java.perform(function () {
    console.log("已开始注入")

    /*
    1.查找 device_token
    搜索关键字 -> urlFactory.setParam(RemoteMessageConst.DEVICE_TOKEN, ApiConfig.getInstance().getMid());
    进入getMid() -> this.mid = UUID.randomUUID().toString();
    device_token 就是 uuid生成
    */

    /*
    2.查找 skey
    搜索关键字 -> treeMap.put(ApiConfig.SKEY, f(context, new String[0]));  可直接Hook f(),查看返回值，发现值一直不变 6692c461c3810ab150c9a980d0c275ec
    进入f() -> KeyInfoFetcher.getInfo(context, ApiConfig.SKEY);
        可直接Hook getInfo(),查看参数以及返回值，发现：
            app_name : shop_android
            vcsp_key : 4d9e524ad536c03ff203787cf0dfcd29
            api_key  : 23e7f28019e8407b98b84cd05b5aef2c
            skey     : 6692c461c3810ab150c9a980d0c275ec
    进入getInfo() ->
            clazz = KeyInfo.class;
            object = KeyInfo.class.newInstance();
            method = clazz.getMethod("getInfo", Context.class, String.class);
    这里是java的反射内容，可以进入KeyInfo类查看getInfo() -> return getNavInfo(context, str); ->
            private static native String getNavInfo(Context context, String str);
    没有函数体，可能需要进so文件查看。可以先Hook试一下（需要清除数据）


    let b = Java.use("b8.b");
    b["f"].implementation = function (context, strArr) {
        console.log(`f函数参数=${context}, strArr=${strArr}`);
        let result = this["f"](context, strArr);
        console.log(`f函数返回值：${result}`);
        return result;
    };

    let KeyInfoFetcher = Java.use("com.vip.vcsp.basesdk.base.keyinfo.KeyInfoFetcher");
    KeyInfoFetcher["getInfo"].implementation = function (context, str) {
        console.log(`getInfo函数参数：${context}, str=${str}`);
        let result = this["getInfo"](context, str);
        console.log(`getInfo函数返回值：${result}`);
        return result;
    };
    */

    /*
     3.查找 authorization，可搜索authorization，也可搜索api_sign ->
         apiProccessModel4.request.addHeader("Authorization", "OAuth api_sign=" + str); -> 查看str的来源
         str = b.b(context2, e10, apiProccessModel3.tokenSecret, apiProccessModel3.url); -> 查看b函数 ->
         return a(context, treeMap, str); -> 查看a函数 ->
         String apiSign = VCSPSecurityBasicService.apiSign(context, treeMap, str); -> 查看apiSign函数 ->
         return VCSPSecurityConfig.getMapParamsSign(context, treeMap, str, false); -> 查看getMapParamsSign函数 ->
         return getSignHash(context, treeMap, str2, z10); -> 查看getSignHash函数 ->
         return gs(context.getApplicationContext(), map, str, z10); -> 查看gs函数 ->
            clazz = KeyInfo.class;
            object = KeyInfo.class.newInstance();
            gsMethod = clazz.getMethod("gs", Context.class, Map.class, String.class, Boolean.TYPE); -> 查看KeyInfo的gs函数 ->
         return gsNav(context, map, str, z10); -> 查看gsNav的gs函数 ->
         private static native String gsNav(Context context, Map<String, String> map, String str, boolean z10);
         没有 gsNav函数体，可能需要进so文件查看。
         private static final String LibName = "keyinfo";
         System.loadLibrary(LibName); -> 进入 libkeyinfo.so文件查看 ->
         Java_com_vip_vcsp_KeyInfo_gsNav -> j_Functions_gs -> Functions_gs ->
            (v59 = (const char *)j_getByteHash(a1, a2, v79, v58, v80, 256)) != 0) )
            v53 = a1->functions->NewStringUTF(a1, v59);
            return v53;  -> 查看j_getByteHash函数 -> 查看getByteHash函数 ->
                j_SHA1Reset(v12);
                j_SHA1Input(v12, a3, a4);
                if ( j_SHA1Result(v12) )  -> 因此猜测参数明文进行了SHA1加密
         到这可以先Hook试一下 getByteHash 内容在另外一个文件的延迟Hook
    */


    /*
    4.破解 getTokenByFP接口，查找vcspKey，在第2步骤中就发现 vcsp_key : 4d9e524ad536c03ff203787cf0dfcd29 与抓包中的数据相同，是不变的
    破解 请求头中的 vcspauthorization	vcspSign=xxxx -> 查找vcspSign ->
    hashMap.put("VCSPAuthorization", "vcspSign=" + str); ->
    str = VCSPSecurityBasicService.apiSignVcspToken(VCSPCommonsUtils.getUrlParams(getContext(), vCSPNetworkParam.url), VCSPCommonsConfig.getIAppInfo().getUserTokenSecret());
    Hook apiSignVcspToken函数：
    得到结果：
        apiSignVcspToken函数参数：{vcspKey=4d9e524ad536c03ff203787cf0dfcd29}, str=null
        apiSignVcspToken函数返回值：05a68135d2bfd322e3a22f95bbc25a24c777f387 -> vcspSign值不变

    let VCSPSecurityBasicService = Java.use("com.vip.vcsp.security.api.VCSPSecurityBasicService");
    VCSPSecurityBasicService["apiSignVcspToken"].implementation = function (treeMap, str) {
        console.log(`apiSignVcspToken函数参数：${treeMap}, str=${str}`);
        let result = this["apiSignVcspToken"](treeMap, str);
        console.log(`apiSignVcspToken函数返回值：${result}`);
        return result;
    };
    */

    /*
    5.破解 generate_token接口，查找edata ->
    treeMap2.put(ApiConfig.EDATA, GobalConfig.encodeStr(context, sb2.toString(), null, null, 0)); -> 查看encodeStr()
    -> return VCSPSecurityConfig.encodeStr(getApplicationContext(context), str, i10); -> 查看encodeStr()
    -> return es(context.getApplicationContext(), str, null, null, i10); -> 查看es()
    -> return (String) esMethod.invoke(object, context, str, str2, str3, Integer.valueOf(i10)); -> 查看invoke()
    -> esMethod = clazz.getMethod("es", Context.class, String.class, String.class, String.class, Integer.TYPE); -> 这是反射，去对应的类中看es函数
    -> return esNav(context, str, str2, str3, i10); -> 查看esNav()
    -> private static native String esNav(Context context, String str, String str2, String str3, int i10);
    需要去so文件查看内容:
        查看so文件可以看到是aes的cbc加密，需要key值和iv值
        破解key：
            v25 = a1->functions->NewStringUTF(a1, "AES");
            v26 = a1->functions->FindClass(a1, "javax/crypto/spec/SecretKeySpec");
            v27 = a1->functions->GetMethodID(a1, v26, "<init>", "([BLjava/lang/String;)V");
            v21 = a1->functions->NewObject((JNIEnv *)a1, v26, v27, v20, v25);
            v20就是key：
                 v20 = a1->functions->NewByteArray(a1, 16);
                 a1->functions->SetByteArrayRegion((JNIEnv *)a1, v20, 0, 16, MD516); -> 查看MD516
                 MD516 = (const jbyte *)j_getMD516(v60, s, v18); -> 查看j_getMD516
                 return getMD516(a1, a2, a3); -> 可直接Hook so文件中的getMD516函数，查看返回值，多次hook值不变就可以确定key值
                 具体内容看 hook-esNav-getMD516-SecretKeySpec.js 文件:
                 key值：cdd17ab29b84b32552ddcfbb4abf0225
        破解iv：
            v34 = a1->functions->FindClass(a1, "javax/crypto/spec/IvParameterSpec");
            v35 = a1->functions->GetMethodID(a1, v34, "<init>", "([B)V");
            v37 = a1->functions->NewObject((JNIEnv *)a1, v36, v35, v32);
            v32就是iv：
                StringByteArray = j_Utils_getStringByteArray(a1, v28);
                v32 = (struct _jobject *)StringByteArray; -> 查看v28
                v28 = a1->functions->NewStringUTF(a1, v59); -> 查看v59
                _QWORD v59[4];
                memset(v59, 0, sizeof(v59));
                j_rand16Str(); -> 查看
                    return rand16Str(); -> Hook一下

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
    */
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

});
// frida -U -f com.achievo.vipshop -l frida_code.js