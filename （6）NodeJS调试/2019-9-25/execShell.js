const cp=require("child_process");
/**
 * 执行shell指令，启动一个子进程
 * 
 * notepad（记事本）  mstsc（远程桌面）
 * 
 * exec(命令，回调函数) 除了可以启动node的进程、
 * 还可以执行shell指令，启动进程
 */

cp.exec("notepad",function(err,stdout,stderr){
    console.log(err);
    console.log(stdout);
    console.log(stderr);
})