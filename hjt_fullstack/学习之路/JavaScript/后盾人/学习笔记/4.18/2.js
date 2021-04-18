let [...str] = 'demo';
console.log(str)

// 封装移动数组元素
function moveArr(array, from, to) {
    if (from < 0 || to > array.length) {
        console.error('参数有误！')
    }
    let item = array.splice(from, 1);
    array.splice(to, 0, ...item);
    return array;
}
console.log(moveArr([0, 1, 2, 3, 4, 5], 1, 4));