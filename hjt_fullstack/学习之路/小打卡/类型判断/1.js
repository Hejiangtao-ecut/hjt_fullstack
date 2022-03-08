// 基于 instanceof 的类型判断
// 原理 基于原型连和构造方法
let person = new Object();
let arr = [1,2,3]; 
console.log(person instanceof Object); //true
console.log(arr instanceof Array); // true