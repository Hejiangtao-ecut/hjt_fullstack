const createFlow = require('./flow');
const delay = (ms) => new Promise((resolve) =>
    setTimeout(resolve, ms));
const subFlow = createFlow([
    () => delay(1000).then(() => console.log('c'))
])
// 参数为数组
createFlow([
    () => console.log('a'),
    () => console.log('b'),
    subFlow, // 递归不是算法，编程技巧
])
delay(1000)
    .then(data => {
        console.log(data)
    })