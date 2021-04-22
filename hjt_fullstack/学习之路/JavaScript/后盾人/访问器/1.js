const user = {
    data: {
        name: '江河',
        age:18
    },
    set age(value) {
        console.log('访问器生效了');
        if (typeof value != 'number' || value < 10 || value > 100) {
            throw new Error('格式错误')
        }
        // 格式没问题设置值
        this.data.age = value;
    },
    get age() {
        // 返回值
        return this.data.age +'岁'
    }
}

user.age = 19;
console.log(user.age);

const lessons = {
    lesson: [{ name: 'js', price: 100 }, { name: 'php', price: 80 }, { name: 'css', price: 120 }],
    get total() {
        return this.lesson.reduce((t, item) => {
            return t + item.price;
        },0)
    }
}

console.log(lessons.total);