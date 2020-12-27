// new的过程一定会执行Cat
function Cat(name, color){
    this.name = name; //this指向实例
    this.color = color;
    // this.type = "猫科动物";
    // this.eat= () =>{
    //     console.log("老鼠");
    // }
}
Cat.prototype.type = '猫科动物';
Cat.prototype.eat = () =>{
    console.log("老鼠");
};

// 实例化
// new 的执行过程
var cat1 = new Cat("guigui","yellow");
var cat2 = new Cat("huihiui","red")

console.log(cat1.constructor == cat2.constructor); //构造函数
console.log(cat1 instanceof Cat);   //A instanceof B  判断A是否为B的实例
console.log(cat2 instanceof Cat);
cat1.eat();