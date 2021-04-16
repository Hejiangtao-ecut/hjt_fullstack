// /**
// * @param {number[]} nums
// * @return {number[]}
// */
var nextGreaterElements = function (nums) {
    let n = [];
    for (let i = 0, j = 0; i < nums.length; i++){
        let x = 1;
        if (x) {
            for (j = i + 1; j < nums.length; j++){
                if (nums[i] < nums[j]) {
                    n.push(nums[j]);
                    x = 0;
                    break;
                }
            }
        }
        if (x) {
            for (j = 0; j < i; j++){
                if (nums[i] < nums[j]) {
                    n.push(nums[j]);
                    x = 0;
                    break;
                }
            }
        }
        if (x) {
            n.push(-1);
        }
    }
    return n;
};

console.log(nextGreaterElements([1, 2, 1]));
console.log(nextGreaterElements([1,2,3,3,2,1]))
