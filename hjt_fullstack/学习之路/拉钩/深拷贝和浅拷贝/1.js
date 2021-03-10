// 浅拷贝
let target = {};
let source = { a: { b: 2 } };
// 将source浅拷贝进target
Object.assign(target, source);
console.log(target); // { a: { b: 2 } }

// 修改b的值
target.a.b = 10;
console.log(target);  // { a: { b: 10 } }
console.log(source);  // { a: { b: 10 } }
// 成功实现浅拷贝