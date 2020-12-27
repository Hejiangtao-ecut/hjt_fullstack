//基本用法
let sym = Symbol();
console.log(typeof sym);//symbol
//传入字符串作为符号描述
let fooSymbol = Symbol('foo');
let otherFooSymblo = Symbol('foo');
console.log(fooSymbol == otherFooSymblo);//false 符号是唯一的
let obsym = Object(sym);
console.log(typeof obsym);//object

//重用符号
let fooGlobalSymbol = Symbol.for('foo');//创建新符号
let reFooGolbalSymbol = Symbol.for('foo');
console.log(fooGlobalSymbol == reFooGolbalSymbol) //ture
console.log(fooGlobalSymbol == fooSymbol) //false 未使用Symbol.for函数

//Symbol.keyFor()
let s = Symbol.for('foo');
console.log(Symbol.keyFor(s));//foo  返回对应的字符串键
console.log(Symbol.keyFor(sym));//undefined  普通符号
//如果传送非符号则返回TypeError
// console.log(Symbol.keyFor(123));//TypeError: 123 is not a symbol