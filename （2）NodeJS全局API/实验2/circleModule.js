
//程序⑤
function circleFun(r){
    function circumference(){
        return 2*Math.PI*r;
    }
    function area(){
        return Math.PI*r*r;
    }
    return {circumference:circumference,area:area}
}

module.exports = {circleFun:circleFun};



//程序⑥
// function circumference(r){
//     var r=r;
//     var circumference=2*Math.PI*r;
//     console.log(circumference);
// }
// function area(r){
//     var r=r;
//     var area=Math.PI*r*r;
//     console.log(area);
// }
// module.exports={
//     circumference:circumference,
//     area:area
// }
