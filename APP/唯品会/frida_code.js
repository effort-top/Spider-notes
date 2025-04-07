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
    进入getInfo() ->
            clazz = KeyInfo.class;
            object = KeyInfo.class.newInstance();
            method = clazz.getMethod("getInfo", Context.class, String.class);
    进入KeyInfo类查看getInfo() -> return getNavInfo(context, str); ->
            private static native String getNavInfo(Context context, String str);
    没有函数体，可能需要进so文件查看。可以先Hook试一下（需要清除数据）


    let b = Java.use("b8.b");
    b["f"].implementation = function (context, strArr) {
        console.log(`f函数参数=${context}, strArr=${strArr}`);
        let result = this["f"](context, strArr);
        console.log(`f函数返回值：${result}`);
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
         到这可以先Hook试一下 getByteHash 另外一个文件的延迟Hook
    */


    var addr_func = Module.findExportByName("libkeyinfo.so", "getByteHash");
    Interceptor.attach(addr_func, {
        onEnter: function(args){
            this.x3 = args[3]
        },
        onLeave: function(retValue){
            console.log("明文：",Memory.readCstring(this.x3))
            console.log("返回值:", retValue.readUtf8String());
        }

    })


});