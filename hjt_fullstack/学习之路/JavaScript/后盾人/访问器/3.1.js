// 类 class
class User{
    constructor(name, age) {
        this.data = { name, age };
    }
    get name() {
        return this.data.name;
    }
    set name(value) {
        if (value.length > 10) {
            throw new Error('用户名错误！')
        }
        this.data.name = value;
    }
    get age() {
        return this.data.age;
    }
    set age(value) {
        if (typeof value != 'number' || value < 0 || value > 100) {
            throw new Error('年龄设置错误!');
        }
        this.data.age = value;
    }
}

let user = new User('jianghe', -1);
console.log(user.name);