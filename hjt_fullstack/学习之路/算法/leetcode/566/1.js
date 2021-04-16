var matrixReshape = function (nums, r, c) {
    if (nums.length * nums[0].length == r * c) {
        let n = [].concat.apply([], nums);
        let num = [];
        n.forEach((item,index) => {
            let page = Math.floor(index / c);
            if (!num[page]) {
                num[page] = [];
            }
            num[page].push(item);
        });
        return num;
    } else {
        return nums;
    }
};

matrixReshape([[1, 2], [1, 2], [1, 2]], 2, 3);