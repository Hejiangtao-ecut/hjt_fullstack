// 哪些情况会是undefined
// 1. 变量声明时，没有定义
let a;  //声明，没有赋值
// 2. 函数没有返回值
const Fn= () =>{}
// 3. 参数不传值
const fn = (b) =>{
    //  this 一运行就会有 -> 指针对象 指向一个对象
    console.log(typeof b);
}
console.log(typeof a);  //undefined
// 4. 引用对象上不存在的属性
const o = {c:'1'};
console.log(o.d,'4')
// 直接引用未定义的变量，且不是内置对象
// console.log(dd); //直接报错

console.log(null == undefined); //true
console.log(null === undefined); //false