// 选择排序
var a = [1, 3, 6, 3, 23, 76, 1, 34, 222, 6, 456, 221];

function selectSort(array) {
    const len = array.length
    let temp
    let minIndex
    for (let i = 0; i < len - 1; i++) {
        minIndex = i
        for (let j = i + 1; j < len; j++) {
            if (array[j] <= array[minIndex]) {
                minIndex = j
            }
        }
        temp = array[i]
        array[i] = array[minIndex]
        array[minIndex] = temp
    }
    return array
}

console.log(selectSort(a));