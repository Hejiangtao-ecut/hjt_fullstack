// 插入排序
var a = [1, 3, 6, 3, 23, 76, 1, 34, 222, 6, 456, 221];

function insertSort(arr) {
    let fast;
    let slow;
    for (let i = 0; i < arr.length; i++) {
        fast = arr[i];
        slow = i - 1;
        while (slow > 0 && arr[slow] > fast) {
            arr[slow + 1] = arr[slow];
            slow--;
        }
        arr[slow + 1] = fast;
    }
    // return arr;
}
insertSort(a)
console.log(a);