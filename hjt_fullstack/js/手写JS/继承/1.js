// 原型链继承

// 原型链继承存在的问题
// 1. 原型中包含的引用类型属性将会被所有实例共享
// 2. 子例实例化的时候不能给父类构造函数传参

// 父类函数
function Animal() {
    this.color = ['black', 'white'];
}
// 向原型链添加方法
Animal.prototype.getColor = function(){
    return this.color;
}

// 子类
function Dog() { }
Dog.prototype = new Animal();

let dog1 = new Dog();
dog1.color.push('brown');
let dog2 = new Dog();
console.log(dog2.color); // [ 'black', 'white', 'brown' ]  dog1 添加的brown dog2中也可以被访问

