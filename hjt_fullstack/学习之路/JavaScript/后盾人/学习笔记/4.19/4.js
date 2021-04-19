let demo1 = Symbol('demo1');
let demo2 = Symbol('demo1');

console.log(demo1 == demo2); // false

let demo3 = Symbol.for('demo3');
let demo4 = Symbol.for('demo3');
console.log(demo3 == demo4); // true