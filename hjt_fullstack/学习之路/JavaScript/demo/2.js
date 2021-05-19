function a() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            console.log('A');
            res("A");
        }, 300);
    })
}

function b() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            console.log('B');
            res('B');
        }, 100);
    })
}

let result = Promise.all([a(), b()])
    .then(res => {
        console.log(res);
        return res;
    })
console.log(result);