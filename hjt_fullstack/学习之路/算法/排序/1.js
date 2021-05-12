// 冒泡
const arr = [5, 423, 6, 421, 768, 54]

function sort(array) {
    for (let i = 0; i < array.length; i++){
        for (let j = 1; j < array.length - i; j++){
            if (array[j - 1] > array[j]) {
                // 解构赋值
                [array[j - 1], array[j]] = [array[j], array[j - 1]];
            }
        }
    }
    return array;
}

console.log(sort(arr));