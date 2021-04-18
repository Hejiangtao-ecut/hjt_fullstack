let name = '江河';
let age = 21;
// 使用tag标签
console.log(tag`name:${name}，age:${age}`);
// function tag(strings) {
//     //第一个参数只接收标签里面得字符串，后面的才是变量
//     console.log(strings);  //[ 'name:', '，age:', '' ]
// }
function tag(strings,...vars) {
    //第一个参数只接收标签里面得字符串，后面的才是变量
    console.log(strings);  //[ 'name:', '，age:', '' ]
    console.log(vars);//[ '江河', 21 ]
}

console.log(tab`${name}`);
function tab(strings, ...vars) {
    // 上面是没有传值的，这里可以理解为系统默认为参数两侧使用空格隔开进行区分
    console.log(strings); //[ '', '' ]
    console.log(vars); // [ '江河' ]
}