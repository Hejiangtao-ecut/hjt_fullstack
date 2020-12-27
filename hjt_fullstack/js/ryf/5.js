function Cat(name, color){
    this.name = name; //this指向实例
    this.color = color; 
}

// 实例化
var cat1 = new Cat("guigui","yellow");
var cat2 = new Cat("huihiui","red")

console.log(cat1.constructor == cat2.constructor); //构造函数
console.log(cat1 instanceof Cat);   //A instanceof B  判断A是否为B的实例