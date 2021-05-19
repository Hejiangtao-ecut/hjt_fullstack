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
            rej('B');
        }, 100);
    })
}

function c() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            console.log('c');
            res('c');
        }, 400);
    })
}

Promise.all([a(), b(), c()])
    .then(res => {
        console.log(res);
    })
    .catch(e => {
        console.log(e);
    })