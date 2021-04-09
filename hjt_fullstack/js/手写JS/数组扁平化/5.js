let arr = [1, [2, [3, 4]]];

function flatten(arr) {
    return arr.toString().split(',').map(function (item) {
        return +item //+可以快速获得Number类型
    })
}

console.log(flatten(arr));  // [ 1, 2, 3, 4, 5 ]
