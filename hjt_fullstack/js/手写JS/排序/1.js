// 冒泡排序
var a = [1, 3, 6, 3, 23, 76, 1, 34, 222, 6, 456, 221];

function bubbleSort(arr) {
    const len = arr.length;
    // 边界，数组长度小于2
    if (len < 2) {
        return arr;
    }
    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++){
            if (arr[i] > arr[j]) {
                let num = arr[i];
                arr[i] = arr[j];
                arr[j] = num;
            }
        }
    }
    return arr;
}

console.log(bubbleSort(a));