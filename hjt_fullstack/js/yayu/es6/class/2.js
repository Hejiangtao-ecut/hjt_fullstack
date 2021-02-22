function Person(name) {
    this.name = name;

}
Person.prototype.sayHello = function () {
    return 'hello, I am ' + this.name;
}

const demo = new Person('demo')

console.log(demo.sayHello());
console.log(Object.keys(Person.prototype))//可枚举属性
console.log(Object.getOwnPropertyNames(Person.prototype))