// 快排
var a = [1, 3, 6, 3, 23, 76, 1, 34, 222, 6, 456, 221];

function quickSort(nums) {
    if (nums.length < 2) {
        return nums;
    }

    let num = nums.splice(0,1);
    let left = [];
    let right = [];
    nums.forEach(element => {
        if (element > num) {
            right.push(element);
        } else {
            left.push(element);
        }
    });
    return quickSort(left).concat(num,quickSort(right));
}

console.log(quickSort(a));