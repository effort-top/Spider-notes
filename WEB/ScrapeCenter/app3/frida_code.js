Java.perform(function (){
  console.log("Inside java perform function");
    let ProxyUtils = Java.use("com.goldze.mvvmhabit.utils.ProxyUtils");
    ProxyUtils["isWifiProxy"].implementation = function (context) {
        console.log(`ProxyUtils.isWifiProxy is called: context=${context}`);
        let result = this["isWifiProxy"](context);
        console.log(`ProxyUtils.isWifiProxy result=${result}`);
        return false;
    };

});

