const http=require("http");
http.createServer(function(res,req){
    var imgPath=path.join(__dirname,"1.jpg");
    var imgBuffer=fs.readFileSync(imgPath);
    var base64Data=imgBuffer.toString("base64");
    console.log(base64Date);
    var imgSrc="data:image/jpg;base64,"+base64Data;
    var htmlStr="<!DOCTYPE html><head></head>" + "<body><img src='"+ imgSrc +"'/></body>"+"</html>"
    res.writeHead(200,{"Content-Type":"textml"});
    res.write(htmlStr);     
    res.end();
}).listen(8081);
console.log("server is listening 8081");