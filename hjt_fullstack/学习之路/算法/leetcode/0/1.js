var reverse = function (x) {
    if (Math.abs(x) < 10) {
        return x;
    }
    let y = 1;
    if (x < 0) {
        y = -1;
        x = Math.abs(x);
    }
    x = String(x).split('').reverse().join('');
    return x * y;
};
console.log(reverse(-123));