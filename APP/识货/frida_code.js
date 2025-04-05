Java.perform(function () {
    // hook 弹窗
    let UpdateDialog = Java.use("com.azhon.appupdate.dialog.UpdateDialog");
    UpdateDialog["show"].implementation = function () {
        console.log(`UpdateDialog.show is called`);
        // this["show"]();
    };

});