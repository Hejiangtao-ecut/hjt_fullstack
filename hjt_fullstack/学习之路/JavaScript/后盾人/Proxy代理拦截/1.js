"use strict"
let user = {
    name: "江河",
    age:18
}

// 创建代理对象
// 传入需要代理的对象
// 创建代理方法
const proxy = new Proxy(user, {
    get(obj, item) {
        // console.log(obj[item])
        return obj[item]
    },
    set(obj, item, value) {
        obj[item] = value;
        // 严格模式是需要设置为true
        return true;
    }
}); 

// 通过代理获取了属性
console.log(proxy.age)
proxy.name = 'jianghe';
console.log(proxy.name);
