Promise.resolve().then(() => {
    console.log('Promise1')
    setTimeout(() => {
        console.log('setTimeout2')
    }, 0)
});
setTimeout(() => {
    console.log('setTimeout1')
    Promise.resolve().then(() => {
        console.log('Promise2')
    })
}, 0);
console.log('start');