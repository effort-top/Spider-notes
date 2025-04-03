// 注入环境后连接通信
var demo = new Hlclient("ws://127.0.0.1:12080/ws?group=zzz");

demo.regAction("test", function (resolve, param) {
    console.log(param['data']);
    var data = window.PSign.sign(param['data']);
    console.log(data);
    resolve(data);
});

demo.regAction("getSign", function (resolve,param) {
    //这样添加了一个param参数，http接口带上它，这里就能获得
    window.PSign.sign(param).then(
        function(signedParams){
            console.log(signedParams)
            resolve(signedParams.h5st);
        }
    )
})

// hlc = new Hlclient("ws://127.0.0.1:12080/ws?group=zzz&name=hlg");
//
//
// hlc.regAction("hello", function (resolve,param) {
//     var base666 = btoa(param)
//     resolve(base666 + "**" + atob(base666));
//
// })
