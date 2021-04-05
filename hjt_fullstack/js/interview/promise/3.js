//1. 完成了executor 执行器的实现
//2. 现在做状态以及状态的转移
// 如何让执行器决定状态转移的处理
// 3. 完成then函数
class Promise {
    constructor(executor) {
        this.state = 'pending'; // 初始化未完成状态
        // 成功的值
        this.value = undefined;
        // 失败的原因
        this.reason = undefined;
        // 异步任务会把结果交给resolve
        this.onRejectedCallbacks = [];
        this.onResolvedCallbacks = [];
        let resolve = (value) => {
            // 加个约束，更加严谨
            if (this.state === 'pengding') {
                console.log(value,'-----------')
                this.value = value;
                this.state = 'fulfilled';
                this.onResolvedCallbacks.forEach(fn => fn());
            }

        };
        let reject = (reason) => {
            if (this.state === 'pengding') {
                this.reason = reason;
                this.state = 'rejected';
                this.onRejectedCallbacks.forEach(fn => fn());
            }
        };
        try {
            executor(resolve, reject);
        } catch (err) {
            reject(err)
        }
    }
    // 当前promise解决了,完成了状态转移，把控制权交出来
    then(onFulfilled, onRejected) {
        // 状态为fulfilled 传入成功后的回调，将执行权转移
        if (this.state == 'fulfilled') {
            onFulfilled(this.value);
        }
        // 当状态为rejected 传入失败的回调
        if (this.state == 'rejected') {
            onRejected(this.reason);
        }

        if (this.state == 'pending') {
            this.onResolvedCallbacks.push(() => {
                onFulfilled(this.value);
            })
            this.onRejectedCallbacks.push(() => {
                onRejected(this.reason);
            })
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
}).then((data) => {
    // 接受两个参数，resolve和reject
    console.log(data);
})