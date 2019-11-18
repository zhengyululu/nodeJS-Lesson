const fs=require('fs');
const path=require('path');
fs.mkdirSync('hello');
var list=fs.readdirSync(__dirname);//读当前目录下文件
console.log(list);

var files=fs.readdirSync(path.join(__dirname,'/node'));

fs.unlinkSync(path.join(__dirname,'/node/'+files[0]));
fs.rmdirSync(path.join(__dirname,'/node'));