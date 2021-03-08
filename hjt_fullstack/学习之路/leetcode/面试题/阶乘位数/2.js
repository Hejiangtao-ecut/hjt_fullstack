var trailingZeroes = function (n) {
    let num = Math.floor(n / 5);
    num += Math.floor(n / 50);
    let x = Math.sqrt(n);
    while (x >= 5) {
        num++;
        x = Math.sqrt(x);
    }
    return num;
};

console.log(trailingZeroes(100));