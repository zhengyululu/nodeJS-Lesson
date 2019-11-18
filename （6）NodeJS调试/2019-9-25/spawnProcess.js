const cp=require("child_process");

var childProcess=cp.spawn("node",["childProcess1.js"]);

childProcess.stdout.on("data",function(chunk){
    console.log(chunk);
    result+=chunk;
})

// childProcess.stdin.on("close",function(){
//     console.log(result);
// })