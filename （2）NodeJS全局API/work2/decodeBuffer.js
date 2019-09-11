var base64Str = 'emhhbmdzYW46MTEx';
var buf1=Buffer.from(base64Str,"base64");
console.log(buf1.toString("utf8"));
console.log("用户名：%s ",buf1.slice(0,8));
console.log("密码：%d",buf1.slice(9));