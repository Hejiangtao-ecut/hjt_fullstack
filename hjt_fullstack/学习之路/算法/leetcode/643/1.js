var findMaxAverage = function (nums, k) {
    let n = 0;
    nums.sort((a, b) => b-a);
    nums.slice(0, k).forEach(element => {
        n += element;
    });
    console.log(n,k)
    return n / k;
};

console.log(findMaxAverage([40, 100, 1, 5, 25, 10], 3));