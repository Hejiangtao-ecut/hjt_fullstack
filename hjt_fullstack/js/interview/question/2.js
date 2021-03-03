// JS 类型转换
// 转换只有三种 转换成数字 转换成布尔值 转换成字符串
// 隐式类型转换
// 显式类型转换
let obj = { name: 'obj' }; //引用类型
console.log(obj.toString());

console.log('1'.toString());
// JS 提供了Number String Boolean 包装类型
// 包装类型区别于复杂类型(引用类型)
//  相当于执行了下面的操作，进行类型转换，形成了一个 Object string
var s = new Object("1");  // 创建包装类型
s.toString();  // 调用实例方法
s = null; //销毁

// s.color = "red"; // 不报错
// console.log(s.color); //underfind  前面已经销毁了