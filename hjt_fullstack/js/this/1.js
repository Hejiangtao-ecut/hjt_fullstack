'use strict' //阻止foo() 向外调用bar
var obj = { // json object
    bar:1,
    foo:function(){  //obj 属性
        console.log(this.bar)
    }
}

var foo = obj.foo; //foo 函数
var bar = 2;
obj.foo(); //this 会指向obj本身 
foo(); // this 指向普通函数