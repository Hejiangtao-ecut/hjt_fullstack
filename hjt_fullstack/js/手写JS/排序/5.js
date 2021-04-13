// 堆排序
var a = [1, 3, 6, 3, 23, 76, 1, 34, 222, 6, 456, 221];
function heap_sort(arr) {
    var len = arr.length
    var k = 0
    function swap(i, j) {
        var temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
    }
    function max_heapify(start, end) {
        var dad = start
        var son = dad * 2 + 1
        if (son >= end) return
        if (son + 1 < end && arr[son] < arr[son + 1]) {
            son++
        }
        if (arr[dad] <= arr[son]) {
            swap(dad, son)
            max_heapify(son, end)
        }
    }
    for (var i = Math.floor(len / 2) - 1; i >= 0; i--) {
        max_heapify(i, len)
    }

    for (var j = len - 1; j > k; j--) {
        swap(0, j)
        max_heapify(0, j)
    }
    return arr
}
heap_sort(a); // [1, 1, 3, 3, 6, 6, 23, 34, 76, 221, 222, 456]