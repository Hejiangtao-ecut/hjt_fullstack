function foo() { console.log(this.a); }
var obj = { a: 2, foo: foo };
var bar = obj.foo; // 函数别名！调用后便会出现隐式丢失
var a = "oops, global"; // a 是全局对象的属性 
bar(); // "oops, global";