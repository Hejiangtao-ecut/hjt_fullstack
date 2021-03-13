var canMakeArithmeticProgression = function (arr) {
    arr = arr.sort((a, b) => a - b);
    let num = [];
    for (let i = 0; i < arr.length - 1; i++){
        num.push(arr[i + 1] - arr[i]);
    }
    return num.every(item => item === num[0]);
};

console.log(canMakeArithmeticProgression([3, 5, 1]));