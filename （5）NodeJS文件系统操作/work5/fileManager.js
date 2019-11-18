var fs=require("fs");
var path=require("path");

console.log("创建文件夹：");
process.stdin.on("data",function(data){ //接收用户数据
    var cmd=data.toString();
    var cmdArr=cmd.split(" ");
    switch(cmdArr[0]){
        case "mkdir":
            fs.mkdirSync(cmdArr[1].slice(0,-2));
            break;
        case "touch":
            var filePath=path.join(__dirname,"filedir/file.txt");
            fs.writeFileSync(filePath,"hello node");
            break;
        case "delete":
            var filePath=path.join(__dirname,"filedir/file.txt");
            fs.unlinkSync(filePath);
            break;
        default:
            console.log("something error");
            break;
    }
    
})