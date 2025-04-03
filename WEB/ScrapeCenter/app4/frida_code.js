Java.perform(function (){
  console.log("Inside java perform function");

    let ExceptionHandle = Java.use("me.goldze.mvvmhabit.http.ExceptionHandle");
    ExceptionHandle["handleException"].implementation = function (e) {
        console.log(`ExceptionHandle.handleException is called: e=${e}`);
        let result = this["handleException"](e);
        console.log(`ExceptionHandle.handleException result=${result}`);
        return result;
    };

    let ResponseThrowable = Java.use("me.goldze.mvvmhabit.http.ResponseThrowable");
    ResponseThrowable["$init"].implementation = function (throwable, code) {
        console.log(`ResponseThrowable.$init is called: throwable=${throwable}, code=${code}`);
        this["$init"](throwable, code);
    };

    let ConnectionSpecSelector = Java.use("okhttp3.internal.connection.ConnectionSpecSelector");
    ConnectionSpecSelector["connectionFailed"].implementation = function (e) {
        console.log(`ConnectionSpecSelector.connectionFailed is called: e=${e}`);
        let result = this["connectionFailed"](e);
        console.log(`ConnectionSpecSelector.connectionFailed result=${result}`);
        return result;
    };

    let RetryAndFollowUpInterceptor = Java.use("okhttp3.internal.http.RetryAndFollowUpInterceptor");
    RetryAndFollowUpInterceptor["isRecoverable"].implementation = function (e, requestSendStarted) {
        console.log(`RetryAndFollowUpInterceptor.isRecoverable is called: e=${e}, requestSendStarted=${requestSendStarted}`);
        let result = this["isRecoverable"](e, requestSendStarted);
        console.log(`RetryAndFollowUpInterceptor.isRecoverable result=${result}`);
        return result;
    };

    let HttpsUtils = Java.use("com.goldze.mvvmhabit.utils.HttpsUtils");
    HttpsUtils["getSslSocketFactory"].overload().implementation = function () {
        console.log(`HttpsUtils.getSslSocketFactory is called`);
        let result = this["getSslSocketFactory"]();
        console.log(`HttpsUtils.getSslSocketFactory result=${result}`);
        return result;
    };


    let OkHttpClient = Java.use("okhttp3.OkHttpClient");
    OkHttpClient["sslSocketFactory"].implementation = function () {
        console.log(`OkHttpClient.sslSocketFactory is called`);
        let result = this["sslSocketFactory"]();
        console.log(`OkHttpClient.sslSocketFactory result=${result}`);
        return result;
    };

    OkHttpClient["systemDefaultTrustManager"].implementation = function () {
        // console.log(`OkHttpClient.systemDefaultTrustManager is called`);
        // let result = this["systemDefaultTrustManager"]();
        // console.log(`OkHttpClient.systemDefaultTrustManager result=${result}`);
        // return result;

         console.log("[*] OkHttpClient.systemDefaultTrustManager is called");

        let TrustManager = Java.use("javax.net.ssl.X509TrustManager");
        let TrustManagerImpl = Java.registerClass({
            name: "com.example.TrustManagerImpl",
            implements: [TrustManager],
            methods: {
                checkClientTrusted: function (chain, authType) {
                    console.log("[*] TrustManagerImpl.checkClientTrusted is called");
                },
                checkServerTrusted: function (chain, authType) {
                    console.log("[*] TrustManagerImpl.checkServerTrusted is called");
                },
                getAcceptedIssuers: function () {
                    console.log("[*] TrustManagerImpl.getAcceptedIssuers is called");
                    return [];
                }
            }
        });

        return TrustManagerImpl.$new();
    };

    OkHttpClient["hostnameVerifier"].implementation = function () {
        // console.log(`OkHttpClient.hostnameVerifier is called`);
        // let result = this["hostnameVerifier"]();
        // console.log(`OkHttpClient.hostnameVerifier result=${result}`);
        // return result;
        console.log("[*] OkHttpClient.Builder.hostnameVerifier is called");


        let HostnameVerifier = Java.use("javax.net.ssl.HostnameVerifier");
        let TrustAllHostnameVerifier = Java.registerClass({
            name: "com.example.TrustAllHostnameVerifier",
            implements: [HostnameVerifier],
            methods: {
                verify: function (hostname, session) {
                    console.log("[*] TrustAllHostnameVerifier.verify is called: hostname=" + hostname);
                    return true;
                }
            }
        });


        let result = this["hostnameVerifier"](TrustAllHostnameVerifier.$new());

        console.log("[*] OkHttpClient.Builder.hostnameVerifier result: " + result);
        return result;
    };

});

