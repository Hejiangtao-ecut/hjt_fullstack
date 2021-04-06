function myInstanceof(left, right) {
    // 基本数据类型直接返回false
    if (typeof left !== 'object' || left === null) {
        return false;
    }
    // 非基础数据类型开始实现沿着原型链向上查找
    // 获取当前原型链
    let proto = Object.getPrototypeOf(left);
    // 使用死循环进行原型链爬升
    while (true) {
        // 原型链的顶部是null，如果走到这，说明不存在相同的原型
        if (proto === null) {
            return false;
        }
        // 存在相同的原型，说明是目标对象的实例，返回true
        if (proto === right.prototype) {
            return true;
        }
        // 实现原型链爬升
        proto = Object.getPrototypeOf(proto);
    }
}

// 使用简单数据类型测试
console.log(myInstanceof(111, Number));  // false
// 使用复杂数据类型
console.log(myInstanceof(new Number(111), Number)); // true