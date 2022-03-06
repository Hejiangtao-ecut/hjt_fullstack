setTimeout(() => {
    console.log('setTimeout1');
}, 10);

new Promise((res, rej) => {
    console.log('new promise');
    setTimeout(() => {
        console.log('setTimeout2');
    }, 0);
    res('ok');
})
    .then(res => {
        console.log(res);
})

console.log('log');