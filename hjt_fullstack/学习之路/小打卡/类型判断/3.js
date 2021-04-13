// 闭包

function adder(x) {
    return (y) => {
        return x + y;
    }
}

const add5 = adder(5);
console.log(add5(1));
const add10 = adder(10);
console.log(add10(10));