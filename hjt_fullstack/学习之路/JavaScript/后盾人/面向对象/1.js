// 工厂函数创建对象
function user(name) {
    return {
        name,
        show: () => {
            console.log(this.name);
        }
    }
}

let zs = user('张三');
console.log(zs)
let ls = user('李四');
console.log(ls)