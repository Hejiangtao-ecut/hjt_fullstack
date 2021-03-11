var closestDivisors = function (num) {
    let nums = [Math.ceil(Math.sqrt(num + 2)), Math.ceil(Math.sqrt(num))]
    while ( !(nums[0] * nums[1] === (num + 1) || nums[0] * nums[1] === (num + 2))) {
        console.log('--------');
    }
};

closestDivisors(25);