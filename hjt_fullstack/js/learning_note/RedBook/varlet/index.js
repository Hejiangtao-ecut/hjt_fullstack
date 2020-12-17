function foo(){
    var age;//局部变量
    age;//全局变量
    for(let i =0;i<10;i++){//块级变量
        console.log(i);
    }
}
foo();

//使用字面量模板`string`+${}完成插值
let name1 = "he";
let name3 = "tao";

let addName = name1 + "jiang" + name3;//传统插值
console.log(addName);
let addName2 = `${name1}jiang${name3}`;//模板字面量 插值，会保留空格
console.log(addName2);
