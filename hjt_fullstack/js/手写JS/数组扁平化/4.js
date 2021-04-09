const arr = [1, [2, [3, [4, [5]]]]];
function Flatten(array) {
    // 使用Array.isArray判断数组中是否有数组嵌套
    // 使用some方法进行控制while循环
    while (array.some((item) => Array.isArray(item))) {
        // 将数组展开后再次覆盖
        array = [].concat(...array)
    }
    return array;
}

console.log(Flatten(arr));//[ 1, 2, 3, 4, 5 ]