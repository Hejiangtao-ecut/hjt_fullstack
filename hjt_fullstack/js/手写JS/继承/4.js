// 寄生式组合继承
// 采用中间空函数完成继承
// 组合继承已经相对完善了，但还是存在问题，它的问题就是调用了 2 次父类构造函数，第一次是在 new Animal() ，第二次是在 Animal.call() 这里。
// 所以解决方案就是不直接调用父类构造函数给子类原型赋值，而是通过创建空函数 F 获取父类原型的副本。

function Animal(name) {
    this.name = name
    this.colors = ['black', 'white']
}
Animal.prototype.getName = function () {
    return this.name
}
function Dog(name, age) {
    Animal.call(this, name)
    this.age = age
}

function F() { }
F.prototype = Animal.prototype
let f = new F()
f.constructor = Dog
Dog.prototype = f

let dog1 = new Dog('奶昔', 2)
dog1.colors.push('brown')
let dog2 = new Dog('哈赤', 1)
console.log(dog2)