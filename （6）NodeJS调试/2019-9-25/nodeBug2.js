const fs=require("fs");
/**
 * try catch只能捕获同步代码中的异常
 * 
 */
try{
    fs.readFileSync(__filename,function(err,data){
        if(errpr){
            console.log("error");
        }
        else{
            console.log(data);
        }

    })
}catch(error){
    console.log(error,message);
}

process.on("uncaughtException",fufnction(err){
    if(err){
        console.log(err);
    }
})