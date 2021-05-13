// 快排

let arr = [1, 4, 7, 9, 5, 3, 7, 4, 3, 2];

sort = (arr) => {
    if (arr.length < 1) {
        return arr;
    }
    let x = arr.pop();
    let right = [], left = [];
    arr.forEach(element => {
        if (element > x) {
            right.push(element);
        } else {
            left.push(element);
        }
    });
    return sort(left).concat(x, sort(right));
}

console.log(sort(arr));