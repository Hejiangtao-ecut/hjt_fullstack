const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];

// 并集
const bingji = new Set([...arr1,...arr2]); // 只接收一个参数
console.log(bingji); // 1,2,3,4,5,6

// arr1 对 arr2 的差集

let demo = new Set(arr1.filter(item => {
    return !arr2.includes(item);
}))

console.log(demo) // 1,2

// 交集
let demo2 = new Set(arr1.filter(item => {
    return arr2.includes(item);
}))
console.log(demo2)