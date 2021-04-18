// assert 接收两个参数，只有当第一个为false时候才会输出后面的字符串
console.assert(false, 'demo')

// clear 清空控制台所有输出
// console.clear();

// count 用于计算被调用了多少次，里面可以用字符串设置键名
for (let index = 1; index < 9; index++) {
    if (index % 2) {
        // 偶数
        console.count('偶数');
    } else {
        console.count('基数')
    }
}

// error  输出一个error
console.error('这是一个error');

// group 分层 
console.group('第一层');
console.group('第二层');

console.log('error');
console.error('error');
console.warn('error');

console.groupEnd();
console.groupEnd();

console.groupCollapsed('第一层');
console.groupCollapsed('第二层');

console.log('error');
console.error('error');
console.warn('error');

console.groupEnd();
console.groupEnd();

console.group('Group One');
console.group('Group Two');

// some code

console.groupEnd(); // Group Two 结束
console.groupEnd(); // Group One 结束

// trace 函数调用追踪
function d(a) {
    console.trace();
    return a;
}
function b(a) {
    return c(a);
}
function c(a) {
    return d(a);
}
var a = b('123');

console.warn("警告")