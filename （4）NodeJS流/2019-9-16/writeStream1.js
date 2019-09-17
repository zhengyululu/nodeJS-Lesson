const fs=require("fs");
const path=require("path");

varfilePath=path.join(__dirname,'/file.txt');
var writeStream=fs.createWriteStream(filePath);
writeStream.write("hello world");
writeStream.end();