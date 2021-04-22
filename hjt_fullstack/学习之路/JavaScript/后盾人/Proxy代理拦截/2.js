// 阶乘函数
function demo(n) {
    return n == 1?1:n*demo(n-1)
}

console.time('demo');
demo(10000);
console.timeEnd('demo');

let proxy = new Proxy(demo, {
    // 传入函数、环境、参数
    apply(func, obj, argus) {
        console.time('demo2');
        // console.log(argus);
        func(10000)
        console.timeEnd('demo2');
    }
});

proxy({},[5]);