## adb相关操作
- 查看已链接设备信息  
adb devices
- 上传下载文件（单设备可以不写 -s 设备id号）  
adb -s 设备id号 push 电脑路径 手机路径  
adb -s 设备id号 oull 手机路径 电脑路径 
- 安装和卸载app  
  abd install 电脑apk文件路径   
  adb uninstall 包名称  
  adb shell pm list packages
- 查看手机处理器    
  adb shell -s 设备id号 getprop ro.product.cpu.abi    
  adb shell getprop ro.product.cpu.abi
- 进入手机内部，类似命令linux  
  adb shell # 进入手机中    
  ls # 查看所有路径

## firda启动
adb shell   
su  
cd ./data/local/tmp 
./frida-server  
电脑端配置：    
adb forward tcp:27042 tcp:27042     
adb forward tcp:27043 tcp:27043  

## frida检测  
- so文件做检测
```javascript
Java.perform(function () {
    // 查询到哪个so文件进行了闪退，可尝试删除
    var android_dlopen_ext = Module.findExportByName(null, "android_dlopen_ext");

    Interceptor.attach(android_dlopen_ext, {
        onEnter: function (args) {
            var path_ptr = args[0];
            var path = ptr(path_ptr).readCString();
            console.log("[dlopen_ext:]", path);
        },
        onLeave: function (retval) {}
    });
});
```
- ptrace占坑
- 检测frida运行特征  
使用frida增强版hluda（使用16.2.1版本最好）

## 代理检测
可以使用SocksDroid

## Hook so文件
```javascript
Java.perform(function () {
    //1  找到那个so文件，libJNIEncrypt.so，第二个参数是要hook的函数名--》返回值是函数的内存地址
    var addr_func = Module.findExportByName("libJNIEncrypt.so", "AES_128_ECB_PKCS5Padding_Encrypt");
    //2 传入要hook的函数内存地址
    Interceptor.attach(addr_func, {
        onEnter: function(args){
            console.log("--------------------------执行函数--------------------------");
            console.log("参数1-v11：", args[0].readUtf8String());
            console.log("参数2-v8：", args[1].readUtf8String());
        },
        onLeave: function(retValue){
            console.log("返回值newSign在md5之前的值:", retValue.readUtf8String());
        }

    })

});
```
## 脱壳
1. 电脑安装 pip install frida-dexdump  
2. 执行脱壳命令
   1. frida-dexdump -U -f 包名
   2. frida-dexdump -U -d -f 包名   #深度脱壳
3. 当前目录下生成一个文件夹，会有很多dex 使用jadx打开即可
