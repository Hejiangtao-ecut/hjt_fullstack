console.log(typeof (123));
console.log(typeof ([]));
console.log(Object.prototype.toString.call(1))

function getType(value) {
    let type = Object.prototype.toString.call(value).split(' ')[1];
    type = type.substring(0, type.length - 1).toLowerCase();
    return type;
}

console.log(getType(1));

//为什么可以实现下面的代码
console.log('1'.toString());
// 包装对象
// 环境自动把'1'的类型修改为对应数据类型的内置对象，然后调用函数，再将其对象删除