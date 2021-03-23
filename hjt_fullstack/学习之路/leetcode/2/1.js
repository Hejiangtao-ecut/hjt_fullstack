let l1 = [1, 2, 3];
let l2 = [4, 5, 6];
let demo = l1.reduce((acc, item) => {
    acc.push(item);
    return acc;
}, [])
demo = demo.reverse().join('');
// demo = demo.join('');
demo = Number.parseInt(demo);
console.log(demo+111);