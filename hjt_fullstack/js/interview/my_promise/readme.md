1. Promise 题目
    - const delay = (ms) => new Promise((resolve) =>
        setTimeout(resolve,msg));

- 递归的高级套路
 - 数组的length + shift 操作
 - run 只需要调用这一个API就可以
 - 区分 flow 和普通函数、delay 标志isflow：true