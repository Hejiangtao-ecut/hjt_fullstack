// 组合继承
// 组合继承结合了原型链和盗用构造函数，将两者优点集中了起来。
// 基本思路是使用原型链继承原型上的属性和方法，而通过盗用构造函数继承实例属性。
// 既可以把方法定义在原型上以实现重用，又可以让每个实例都有自己的属性。

function Animal(name) {
    this.name = name;
    this.color = ['black', 'white'];
}
Animal.prototype.getName = () => {
    return this.name;
}
function Dog(name, age) {
    this.age = age;
    Animal.call(this, name);
}
Dog.prototype = new Animal();
Dog.prototype.constructor = Dog;

let dog1 = new Dog('旺旺', 3);
dog1.color.push('brown');
let dog2 = new Dog('哈赤', 1)
console.log(dog2) // Dog { age: 1, name: '哈赤', color: [ 'black', 'white' ] }