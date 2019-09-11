// const http=require("http");
// const fs=require("fs");
// const path=require("path");
// var server=http.createServer(function(req,res){
//     var htmlPath=path.join(__dirname,"\\views\\view.html");
//     var htmlContent=fs.readFileSync(htmlPath);
//     htmlContent=htmlContent.toString("utf8");
//     res.writeHead(200,{"Content-Type":"text/html"});
//     res.write(htmlContent);
//     res.end();
// });
// server.listen(8080);
// // console.log("server is listening 8080");
// console.log(__dirname+'\\views\\view.html');

const http=require("http");
const fs=require("fs");
const path=require("path");
http.createServer(function(req,res){
    var filePath=path.join(__dirname,'/views/view.html');
    console.log(filePath);
    var fileContent=fs.readFileSync(filePath);
    fileContent=fileContent.toString("utf8");
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write(fileContent);
    res.end();
}).listen(8080);
console.log("server is listening 8080");