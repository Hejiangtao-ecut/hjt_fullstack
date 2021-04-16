var trailingZeroes = function (n) { 
    let nums = Math.floor(n / 5);
    if (n / 5 >= 5) {
        nums += trailingZeroes(nums);
    }
    return nums;
}

console.log(trailingZeroes(25));