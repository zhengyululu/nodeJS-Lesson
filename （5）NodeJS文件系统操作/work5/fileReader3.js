const http=require('http');
const path=require("path");
const fs=require("fs");//fs:文件操作
var fileName=process.argv[2];//[0]node安装的可执行路径  【1】当前编译脚本文件的路径

http.createServer(function(req,res){ //req:请求对象  res:响应对象
    if(fileName==undefined){
        var reader=fs.createReadStream(process.argv[1]);
        reader.pipe(res);
    }
    else{
        
    }

}).listen(8082)

console.log('server is listening 8082');
