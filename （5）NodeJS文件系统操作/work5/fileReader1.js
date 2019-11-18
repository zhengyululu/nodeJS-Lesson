const http=require('http');
const path=require("path");
const fs=require("fs");//fs:文件操作
var fileName=process.argv[2];//[0]node安装的可执行路径  【1】当前编译脚本文件的路径

http.createServer(function(req,res){ //req:请求对象  res:响应对象
    if(fileName==undefined){
        var str='hello';
        /**
         * fs.readFile() 是一个异步方法，执行到该句不会等待
         * 文件读取完成，就直接执行后面的语句
         * 回调函数是等到文件读取完成之后才执行
         */
        fs.readFile(process.argv[1],function(err,data){
            if(err){
                console.log(err);
            }
            else{
                str=data.toString();
                res.end(str);
            }
        })
    }
    else{
        var pathName=path.join(__dirname,fileName);
        if(fs.existsSync(pathName)){
            fs.readFile(pathName,function(err,data){
                if(err){
                    console.log(err);
                }
                else{
                    res.end(data.toString());
                }
            })
        }
        else{
            res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
            res.end("文件不存在");
        }
    }

}).listen(8082)

console.log('server is listening 8082');
