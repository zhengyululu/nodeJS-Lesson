var timerId=setTimeout(function(){
    console.log("gameover!");
},1000);
//组织延迟至性或者定时执行，回调函数的执行
timerId.unref();
timerId.ref();