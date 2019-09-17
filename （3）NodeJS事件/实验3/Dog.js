//原生模块。核心模块
const events=require("events");
const EventEmitter=events.EventEmitter;
function Dog(name,energy){
    //1.执行一遍父构造函数，且this指向是子构造函数的
    EventEmitter.call(this);
    this.name=name;
    this.energy=energy;
}
//2.子构造函数继承父构造函数prototype上面的相关方法
Dog.prototype.__proto__=EventEmitter.prototype;
module.exports=Dog;
