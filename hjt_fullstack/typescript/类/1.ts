// 类(包含属性和方法)
class Person{
    // 不加修饰符默认是public 内外部都可以访问
    name: string;
    // 赋予类型后也可以同时赋值
    // 私有属性，只有当前类可以使用
    private age: number = 21;
    // 保护属性 只有当前类和子类可以使用
    protected sex: string = 'man';

    constructor(name: string, age: number, sex: string) {
        this.name = name;
        this.age = age;
        this.sex = sex;
    }

}

// 创建实例
const person = new Person('鸡毛', 21, 'man');
console.log(person);