// 选择排序
var arr1 = [5, 423, 6, 421, 768, 54];
function sort1(array) {
    var _a;
    for (var i = 0; i < array.length; i++) {
        for (var j = i + 1; j < array.length; j++) {
            if (array[i] > array[j]) {
                _a = [array[j], array[i]], array[i] = _a[0], array[j] = _a[1];
            }
        }
    }
    return array;
}
console.log(sort1(arr1));
