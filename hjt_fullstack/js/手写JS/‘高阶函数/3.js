const arr = [1, 2, 3, 4, 5];
// 保留奇数项
let nums = arr.filter((item) => { // 高阶函数出现了！
    // 求模,奇数返回1转换成布尔值为true，进行保留
    return item % 2
});

console.log(nums); //[ 1, 3, 5 ]