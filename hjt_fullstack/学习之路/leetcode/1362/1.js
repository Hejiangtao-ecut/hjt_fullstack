var closestDivisors = function (num) {
    let nums = [Math.ceil(Math.sqrt(num + 2)), Math.floor(Math.sqrt(num))];
    while (!(nums[0] * nums[1] === (num + 1) || nums[0] * nums[1] === (num + 2))) {
        if (nums[0] * nums[1] > (num + 2)){
            nums[0]--;
        };
        if (nums[0] * nums[1] < (num + 1)){
            nums[1]++;
        };
    };
    return nums;
};

closestDivisors(999);