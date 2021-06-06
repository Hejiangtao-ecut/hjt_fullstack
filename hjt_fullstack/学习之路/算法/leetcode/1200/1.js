var minimumAbsDifference = function (arr) {
    let array = arr.sort((a, b) => a - b);
    let min = array[1] - array[0];
    for (let i = 0; i < array.length - 1; i++) {
        min > array[i + 1] - array[i] ? min = array[i + 1] - array[i] : min;
    }
    let stack = [];
    for (let i = 0; i < array.length - 1; i++) {
        if (min === array[i + 1] - array[i]) {
            stack[stack.length] = [];
            stack[stack.length - 1].push(array[i]);
            stack[stack.length - 1].push(array[i + 1]);
        }
    }
    return stack;
};