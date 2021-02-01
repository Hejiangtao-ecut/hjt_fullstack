// 类和实例
// constructor

function instance_of(L,R) {
    var O = R.prototype;
    L = L.__proto__;
    while (true) {
        if (L === null) {
            return false;
        } else if (L === O) {
            return true;
        }
        L = L.__proto__;
    }
}

function Animal(name) {
    this.name = name;
}
Animal.prototype = {
    Run: function () {
        console.log("running")
    }
}
var dog = new Animal('wangwnag');   //实例化
console.log(dog instanceof Animal); //true



console.log(instance_of(dog,Animal))