var rotate = function (nums, k) {
    let x = nums.splice(-k, k);
    nums = x.concat(nums);
    return nums
};

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));