//基本函数 对象
// js 类型
const arr = [2,3,4];
console.log(typeof arr); //object
arr.push(5);
console.log(arr);
const obj = {a:1};
obj.b = 2;
let a ; //声明 typeof undefined
a = 1; // 赋值 typeof num
function Cart(){
    this.type="折耳";

}
Cart.prototype.sayHellow = function(){
    console.log('miao~');

}