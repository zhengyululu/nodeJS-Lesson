var Dog=require('./Dog.js');
var dog1=new Dog('teddy',5);

function barkFun(){
    console.log(this.name + ' bark!!!');
    console.log(this.energy)
}
dog1.on('bark',barkFun);
var intervalId=setInterval(() => {
    if(dog1.energy>=0){
        dog1.emit("bark");
    }
    else{
        intervalId.unref();
    }
    dog1.energy=dog1.energy-1;
}, 1000);
dog1.emit("bark");
