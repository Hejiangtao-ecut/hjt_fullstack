// es6 提供了class 关键字
// 还是原型式继承
class Person{
    // 在低版本的node报错
    state = {
        count:0
    }
    constructor(name) {
        this.name = name;
    };
    // 可访问，不可枚举
    sayHello() {
        return 'hello, i am ' + this.name;
    };
}

// const demo = new Person('demo');
// console.log(demo.sayHello());
// Person(); error
// console.log(Person.prototype); {}
// console.log(demo.__proto__,Person.prototype)
console.log(Object.keys(Person.prototype)) //可枚举属性
console.log(Object.getOwnPropertyNames(Person.prototype))