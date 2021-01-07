// 阮一峰面向对象第二篇
function Animal(name){
    console.log(arguments,'-------')
    this.name = name;
    this.species = '动物';
    // this.Cat()
}
// Animal -> Function
// 函数是一等对象 Object()
// 拿到函数的原型链上的方法
console.log(typeof Animal.__proto__.__proto__);

function Cat(name,color){
    // Animal.call(this);
    // 实现和call一样的效果，继承animal的属性
    // arguments 是所有参数的集合
    Animal.apply(this,arguments); 
    // call需要将传递的参数值展开
    // Animal.call(this,...arguments); 
    // this.name = name;
    this.color = color;
}

var cat1 = new Cat("大猫","橘色");
console.log(cat1.species)