function sayHello(){
    console.log("hello world");
}
function showName(){
    console.log(userName);
}
var userName="zhangsan";
module.exports={
    sayHello:sayHello,
    sowName:showName,
    userName:userName
}