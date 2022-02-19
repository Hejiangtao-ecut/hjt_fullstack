// 解题思路
// 通过翻转规则可以发现不在翻转队列的元素是不受影响的
// 而我们需要进行有序排列，那么最后的一定是最大的
// 那么我们可以发现每次翻转把最大的往最后放即可
// 然后将最后那个最大的剔除就可以进行下一轮翻转

const arr = [2,1,3];
const getMax = Function.prototype.apply.bind(Math.max, null);

function changeIndex(arr, index) {
    let i = 0;
    let j = index;
    while (i <= j) {
        const x = arr[j];
        arr[j] = arr[i];
        arr[i] = x;
        i++;
        j--;
    };
    return arr;
}

var pancakeSort = function (arr) {
    let result = [];
    const getMax = Function.prototype.apply.bind(Math.max, null);
    const maxNum = getMax(arr);
    if (arr.length <= 1) {
        return [];
    }
    const index = arr.indexOf(maxNum);
    const length = arr.length;
    if (index === length - 1) {
        arr.pop();
        console.log(arr);
        length >= 2 ? result = result.concat(pancakeSort(arr)) : '';
        return result;
    }
    result.push(index + 1);
    arr = changeIndex(arr, index);
    result.push(length);
    arr = changeIndex(arr, length - 1);
    arr.pop();
    return result.concat(pancakeSort(arr));
};

console.log(pancakeSort(arr));