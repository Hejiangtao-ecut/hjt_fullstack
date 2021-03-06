var nextGreaterElements = function (nums) { 
    let n = nums.concat(nums);
    let num = [];
    for (let i = 0; i < nums.length; i++){
        for (let count = 1; count < nums.length; count++){
            if (nums[i] < n[i + count]) {
                num.push(n[i + count]);
                count = nums.length + 1;
            }
        }
        if (num.length < i + 1) {
            num.push(-1);
        }
    }
    return num;
}

console.log(nextGreaterElements([1, 2, 1]));
console.log(nextGreaterElements([1,2,3,3,2,1]))