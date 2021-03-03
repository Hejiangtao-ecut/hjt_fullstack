let a = 0xa; // 这是什么？ 16进制
console.log(typeof a);
var b = 010; //八进制
var c = 0b01; // 二进制
console.log(b);
console.log(c + 1);
// 0.3000000000004
// JS浮点数不精确 0.3
// 1. JS没有浮点数 Number new Number() 不适合计算
// 2. 浮点数在转成二进制的时候 它会无限的循环 32位 会舍弃一些位
// 二进制位相加 不精确
console.log(0.1 + 0.2);
console.log((0.1).toString(2)); // toString 穿进制数
console.log(Number.parseInt('010', 8)); // 8
console.log(Number.parseInt('20', 2)); // 结果是？ NaN  not a number 2进制不会出现2
console.log(Number.parseInt('100', 2)); //  4

// 超过JS number类型的安全运算范围,使用bigint可以运算
console.log(9999999999999999) //100000000000000
console.log(9999999999999999n) //9999999999999999n bigint
console.log(99999999999999999 === 99999999999999998)  // true 不安全
console.log(99999999999999999n === 99999999999999998n)  //false