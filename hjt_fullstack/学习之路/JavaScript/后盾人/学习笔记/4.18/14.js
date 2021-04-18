// some 和 every 的操作
// some 有一个为true则返回true
// every 一个为false则为false
// filter 作为一个筛选器，挑出返回值为true的项

const arr = [{ age: 18 }, { age: 16 }, { age: 12 }];
// every
let res = arr.every(item => {
    return item.age>16
})
console.log(res ? '全部大于16' : '没有全部大于16');

// some
let rej = arr.some(item => {
    return item.age>16
})
console.log(rej ? '有大于16' : '没有大于16');

let growth = arr.filter(item => {
    return item.age>=16
})
console.table(growth);