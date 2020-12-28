// 时间执行函数  名字无所谓
// addEventListener('click',( =>{

// }))

// 不适合匿名函数的使用场景
// function(){

// }

// 立即执行函数
(function(){  // 匿名函数
    let foo = 10;
    let bar = 2;
     console.log(foo * bar);
})();
// 传值(20,3)
(function(foo,bar){  // 匿名函数
     console.log(foo * bar);
})(20,3);
// 交给外界 return
let res = (function(foo,bar){  // 匿名函数
    return (foo * bar);
})(20,3);
console.log(res);
