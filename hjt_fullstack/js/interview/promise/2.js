// 完成了executor 执行器的实现
// 现在做状态以及状态的转移
// 如何让执行器决定状态转移的处理
class Promise{
    constructor(executor) {
        this.state = 'pending'; // 初始化未完成状态
        // 成功的值
        this.value = undefined;
        // 失败的原因
        this.reason = undefined;
        // 异步任务会把结果交给resolve
        let resolve = (value) => {
            // 加个约束，更加严谨
            if (this.state === 'pengding') {
                this.value = value;
                this.state = 'fulfilled'
            }
            
        };
        let reject = (reason) => { 
            if (this.state === 'pengding') {
                this.reason = reason;
                this.state = 'rejected'
            }
        };
        try {
            executor(resolve, reject);
        } catch (err) {
            reject(err)
        }
    }
}

new Promise((resolve, reject) => {
    // 这是一个回调函数，传递给promise
    // 将花时间比较多的任务封装起来，以实现异步变同步
    setTimeout(() => {
        console.log(0);
        resolve(10);
        // throw new Error('出错了！')
    }, 1000)
})