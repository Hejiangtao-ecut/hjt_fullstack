// 二分查找
let arr = [1, 4, 7, 4, 2, 3, 6, 8];

function sort(arr) {
    let length = arr.length;
    if (length <= 1) return arr;
    for (let i = 1; i < arr.length; i++){
        // 二分查找
        let left = 0, right = i - 1, key = arr[i];
        let index;
        while (left >= right) {
            let middle = parseInt((left + right) / 2);
            if (key < arr[middle]) {
                right = middle-1;
            } else {
                left = middle-1;
            }
            index = middle;
            console.log(middle);
        }
        for (let j = i - 1; j >= left; j++){
            arr[j + 1] = arr[j];
        }
        arr[left] = key;
    }
}

sort(arr);
console.log(arr);