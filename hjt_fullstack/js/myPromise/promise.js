const PENDING = 'pending';
const RESOLVED = 'resolved';
const REJECTED = 'rejected';

function MyPromise(fn) {
    const THIS = this;
    THIS.state = PENDING;
    THIS.value = null;
    THIS.resolveCalllbacks = [];
    function resolve(value) {
        if (THIS.state == PENDING) {
            THIS.state = RESOLVED;
            THIS.value = value;
            THIS.resolveCalllbacks.map(cb => {
                cb(THIS.value);
            })
        }
    }
    function reject(value) {
        if (THIS.state == PENDING) {
            THIS.state = REJECTED;
            THIS.value = value;
        }
    }

    try {
        fn(resolve,reject)
    } catch (e) {
        reject(e);
    }
}

MyPromise.prototype.then = function (onFulfilled,onRejected) {
    const THIS = this;
    // 是函数就执行，不是就返回参数
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : v => v;
    onRejected = typeof onRejected === 'function' ? onRejected : v => { throw r };
    if (THIS.state === PENDING) {
        THIS.resolveCalllbacks(onFulfilled);
    }
    if (THIS.state === RESOLVED) {
        onFulfilled();
    }
}

new MyPromise((res, rej) => {
    
})