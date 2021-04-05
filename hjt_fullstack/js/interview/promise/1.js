// 三种状态 Promise 类
class Promise{
    constructor(executor) {
        // 1. cb 意义？ 回调函数
        // 执行器，立即执行
        // 2. resolve 应该是个函数
        // 3. promise 状态只能从一个状态到另一个状态
        // 就像payload  只不过捎带固定格式 获取执行结果
        // 当得到error 报错信息就会得到rejected
        let resolve = () => { };
        let reject = () => { };
        executor(resolve,reject);
    }
}

new Promise((resolve, reject) => {
    // 这是一个回调函数，传递给promise
    // 将花时间比较多的任务封装起来，以实现异步变同步
    setTimeout(() => {
        console.log(0);
        resolve(10);
    },1000)
})