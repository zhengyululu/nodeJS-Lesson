var obj={};
var message=["Name","Email","QQ","Mobile"];
var i=1;
console.log(message[0]+":");
process.stdin.on("data",function(data){
    obj[message[i-1]]=data.toString("utf8");
    if(i==4){
        console.log(obj);
        process.exit();
    }
    else{
        console.log(message[i++]+":");
    }
})