// array.find(callback[, thisArg])
// 返回大于3的数

const arr = [1, 2, 3, 4, 5];

let num = arr.find((item) => {
    return item > 3;
})

console.log(num) // 4 只返回第一个满足条件的数