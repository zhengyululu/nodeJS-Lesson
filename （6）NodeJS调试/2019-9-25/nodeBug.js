//语法错误(SyntaxError:)     Unexpected identifier
//va a = 1;

/*引用错误（ReferenceError:）      a is not defined
*在某一个位置上使用了未定义的变量
*/
//console.log(a);   
const http=require("http");

http.createServer(function(req,res){
    req.write("hello");
}).listen(8081)
