const fs=require('fs');
const path=require('path');
var filePath=path.join(__dirname,'/file.txt');
/*执行到异步方法时，可以注册一个事件，然后把
具体操作交给操作系统内核来完成，不影响后续应
用程序的执行，当操作系统内核完成相应操作，触
发事件，执行回调函数*/
fs.readFile(filePath,function(err,data){
    if(err){
        console.log(err);
    }
    else{
        console.log(data.toString);
    }
})
console.log('read end');