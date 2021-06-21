// 类的继承
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

    getAge(): number{
        return this.age;
    }
    setAge(age: number): void{
        this.age = age;
    }
}

// 创建实例
const person = new Person('鸡毛', 21, 'man');
console.log(person,'person');
// person.setAge(22);
// console.log(person);

// 创建子类
class Student extends Person{
    // 继承的子类不可以使用父类私有的，但是可以设置get和set来操纵
    constructor(name: string, age: number,sex:string) {
        // 父类构造函数有的子类必须声明
        super(name,age,sex);
    }
}

const jianghe = new Student('jianghe', 21, ',man');
console.log(jianghe.name, jianghe.sex);