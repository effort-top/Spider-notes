Java.perform(function (){
  console.log("Inside java perform function");
    let MovieApiService = Java.use("com.goldze.mvvmhabit.data.source.http.service.MovieApiService");
    MovieApiService["index"].implementation = function (i, i2) {
    console.log(`MovieApiService.index is called: i=${i}, i2=${i2}`);
    let result = this["index"](i, i2);
    console.log(`MovieApiService.index result=${result}`);
    return result;
    };
    let HttpDataSourceImpl = Java.use("com.goldze.mvvmhabit.data.source.HttpDataSourceImpl");
    HttpDataSourceImpl["index"].implementation = function (i, i2) {
        console.log(`HttpDataSourceImpl.index is called: i=${i}, i2=${i2}`);
        let result = this["index"](i, i2);
        console.log(`HttpDataSourceImpl.index result=${result}`);
        return result;
    };
    let RetrofitClient = Java.use("com.goldze.mvvmhabit.utils.RetrofitClient");
    RetrofitClient["$init"].overload('java.lang.String', 'java.util.Map').implementation = function (url, headers) {
        console.log(`RetrofitClient.$init is called: url=${url}, headers=${headers}`);
        this["$init"](url, headers);
    };

    let Builder = Java.use("okhttp3.OkHttpClient$Builder");
    let Proxy = Java.use("java.net.Proxy");
    let InetSocketAddress = Java.use("java.net.InetSocketAddress");
    let ProxyType = Java.use("java.net.Proxy$Type");
    Builder["proxy"].implementation = function (proxy) {
        console.log(`Builder.proxy is called: proxy=${proxy}`);
        let proxyAddress = InetSocketAddress.$new("192.168.2.42", 8999);
        let newProxy = Proxy.$new(ProxyType.HTTP.value, proxyAddress);
        let result = this["proxy"](newProxy);
        console.log(`Builder.proxy result=${result}`);
        return result;
    };

});

