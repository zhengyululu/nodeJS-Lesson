var http=require('http');
var fs=require("fs");
var path=require('path');

http.createServer(function(req,res){
    var filePath=path.join(__dirname,'/data.txt');
    var streamReader=fs.createReadStream(filePath);
    streamReader.pipe(res);
}).listen(8081)