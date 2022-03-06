// js 预编译
// 1. 创建 ao 对象{}
// 2. 寻找形参和变量的声明,作为 ao 对象的属性,值是 undefined
// 3. 形参和实参统一
// 4. 寻找函数声明，如果函数和变量声明统一则进行覆盖

function fn(a, b) {
    console.log(a);  // func a
    var a = 123;
    console.log(a);  // 123
    console.log(c);  // func c
    function a() { };
    if (false) {
        var c = 456;
    }
    console.log(c);  // undefined
    console.log(d);  // undefined
    var d = function () { };
    console.log(d);  // func d
    function b() { };
    console.log(b);  // func b
}

fn(1, 2);

// 1
// AO = {
//           2         3          4
//     a: undefined,  1          ,func
//     b: undefined,  2          ,func
//     c: undefined,  undefined
//     d: undefined   undefined
// }