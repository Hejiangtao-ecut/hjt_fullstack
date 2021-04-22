// 构造函数
function User(name, age) {
    let data = { name, age };
    Object.defineProperties(this, {
        name: {
            get() {
                console.log(this);
                return data.name;
            },
            set(value) {
                if (value.length > 10) {
                    throw new Error('用户名错误！')
                }
                this.data.name = value;
            }
        },
        age: {
            get() {
                return data.age;
            },

            set(value) {
                if (typeof value != 'number' || value < 0 || value > 100) {
                    throw new Error('年龄设置错误!');
                }
                this.data.age = value;
            }
        }
    })
}

let user = new User('jianghe', -1);
console.log(user.name);