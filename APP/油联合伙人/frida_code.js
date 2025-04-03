Java.perform(function () {
  console.log("Inside java perform function");
  let Md5 = Java.use("com.yltx.oil.partner.utils.Md5");
  Md5["md5"].implementation = function (str) {
    console.log('Md5.md5 is called: str=' + str);
    let result = this["md5"](str);
    console.log('Md5.md5 result=' + result);
    return result;
  };
});
Java.perform(function () {
  console.log("Inside java perform function");
  let Md5 = Java.use("com.yltx.oil.partner.utils.Md5");
  Md5["md5"].implementation = function (str) {
    console.log('Md5.md5 is called: str=' + str);
    let result = this["md5"](str);
    console.log('Md5.md5 result=' + result);
    return result;
  };
});
