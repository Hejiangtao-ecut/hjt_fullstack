let arr = new Array(10);
// 创建指定长度的数组
console.log(arr); // [ <10 empty items> ]
// 将数组初始化，使用指定字符填满
arr.fill(1);
console.log(arr);

// 迭代方法
// forEach 不产生新的数组
arr.forEach((item, index) =>{
    console.log(item,index,'-----------')
})

// map 会产生新的数组
let newArr = arr.map((item, index) => {
    return item + 1;
})
console.log(newArr);

// 二维数组,使用fill方法快速创建二位数组

const errArr2 = new Array(3).fill([]);
console.log(errArr2);
errArr2[0][0] = 1;
console.log(errArr2);
// 错误方法,上述使用fill属于浅拷贝,所有fill进去的数组指向同一个空数组

const arr2 = new Array(3);
for (let i = 0; i < 3; i++){
    arr2[i] = [];
}
arr2[0][0] = 1;
console.log(arr2);