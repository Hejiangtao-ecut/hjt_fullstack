// 代码片段1

// undefined
// 变量提升
// console.log(a);

// if (1 == 1) {
//     var a = 10;
// }
// console.log(a);

// 代码片段2
// 循环作用域
// es5
// for (var i = 0; i < 3; i++){
//     setTimeout(() => {
//         console.log(i);
//     },0)
// }
// clg 3 3 3

// 解决

// 1. 改成 es6 声明

// 2. 使用立即执行函数包裹,形成闭包

for (var i = 0; i < 3; i++){
    (function (i) {
        setTimeout(() => {
            console.log(i);
        }, 0);
    })(i);
}