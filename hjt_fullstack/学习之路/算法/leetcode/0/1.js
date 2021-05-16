function add(x) {
    let num = x;
    return function (y) {
        return num += y;
    }
}

const a = add(1);
console.log(a(2),add(1));
console.log(a(3));
add = null;
console.log(a(4),add(1));