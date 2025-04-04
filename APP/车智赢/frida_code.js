Java.perform(function () {
  console.log("Frida script loaded");

  let UpgradeAppDialog = Java.use("com.che168.autotradercloud.upgradeapp.UpgradeAppDialog");
    UpgradeAppDialog["show"].implementation = function () {
    console.log(`UpgradeAppDialog.show is called`);
    // this["show"]();
  };
  let UserModel = Java.use("com.che168.autotradercloud.user.model.UserModel");
  UserModel["loginByPassword"].implementation = function (str, str2, str3, str4, str5, responseCallback) {
    console.log('--------------------------------------------------登录内容-----------------------------------------------------')
    console.log('--------------------------------------------------------------------------------------------------------------')
    console.log(`UserModel.loginByPassword is called: str=${str}, str2=${str2}, str3=${str3}, str4=${str4}, str5=${str5}, responseCallback=${responseCallback}`);
    let SecurityUtil = Java.use("com.autohome.ahkit.utils.SecurityUtil");
    // 调用静态方法encodeMD5
    let pwd = SecurityUtil.encodeMD5(str3);
    console.log(`-----找到pwd = ${pwd}`);
    this["loginByPassword"](str, str2, str3, str4, str5, responseCallback);
    };
    let AppUtils = Java.use("com.che168.autotradercloud.util.AppUtils");
    AppUtils["getUDID"].implementation = function (context) {
    console.log(`AppUtils.getUDID is called: context=${context}`);
    let result = this["getUDID"](context);
    console.log(`-----找到UDID = ${result}`);
    return result;
    };
    let SignManager = Java.use("com.che168.atclibrary.base.SignManager");
    SignManager["signByType"].implementation = function (signType, paramMap) {
    console.log(`SignManager.signByType is called: signType=${signType}, paramMap=${paramMap}`);
    let result = this["signByType"](signType, paramMap);
    console.log(`-----找到Sign = ${result}`);
    return result;
    };
    AppUtils["getIMEI"].implementation = function (context) {
      console.log(`AppUtils.getIMEI is called: context=${context}`);
      let result = this["getIMEI"](context);
      console.log(`-----找到IMEI = ${result}`);
      return result;
    };
    let SPUtils = Java.use("com.che168.autotradercloud.util.SPUtils");
    SPUtils["getDeviceId"].implementation = function () {
    console.log(`SPUtils.getDeviceId is called`);
    let result = this["getDeviceId"]();
    console.log(`-----找到 DeviceId = ${result}`);
    return result;
};
    let SecurityUtil = Java.use("com.autohome.ahkit.utils.SecurityUtil");
    SecurityUtil["encode3Des"].implementation = function (context, str) {
    console.log(`SecurityUtil.encode3Des is called: context=${context}, str=${str}`);
    let result = this["encode3Des"](context, str);
    console.log(`-----找到encode3Des = ${result}`);
    return result;
};
    let AHAPIHelper = Java.use("com.autohome.ahkit.AHAPIHelper");
    AHAPIHelper["getDesKey"].implementation = function (context) {
    console.log(`AHAPIHelper.getDesKey is called: context=${context}`);
    let result = this["getDesKey"](context);
    console.log(`-----找到DesKey = ${result}`);
    return result;
};

});
