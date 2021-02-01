var a = 10;
var b = a;
b = 20;
console.log(a);

var test = {
    a:'t1'
}

// 复杂数据类型是引用传递，共享内存地址
var test2 = test;
test2.a = 't2';
console.log(test2);