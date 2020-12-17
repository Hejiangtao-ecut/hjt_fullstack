//欺骗词法之eval()
function foo(str, a){
    eval(str);
    console.log(a,b);
}

var b = 2;
foo("str",1);//1,2
foo("var b =3;",1)//1,3

//欺骗语法之with（）
var obj = {//定义obj变量
    a : 1,
    b : 2,
    c : 3
}
//单调赋值
obj.a = 2;
obj.b = 3;
obj.c = 4;

//便捷赋值
with(obj){
    a = 2,
    b = 3,
    c = 4
}
function foot(obj){//函数赋值
    with(obj){
        a = 3;
    }
}
var o1 = {
    a : 2
}
var o2 = {
    b : 2
}
console.log(o1.a)//2
foot(o1);
console.log(o1.a)//3

console.log(o2.a)//undefined
foot(o2);
console.log(o2.a)//undefined
console.log(a)//3 变成了全局对象