function add(a) {
    return function (b) {
        return (c) => {
            return a + b + c;
        }
    }
}

console.log(add(1)(2)(3));