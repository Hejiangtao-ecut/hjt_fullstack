# 词法作用域
## 2.1 词法阶段
1. 查找
    - 作用域查找会在找到第一个匹配的标识符时停止
    - 遮蔽效应 在多层的嵌套作用域中可以定义同名的标识符，可以遮蔽外部的标识符
    - 全局变量会自动变成全局对象，可以间接调用全局对象的属性来调用，否者遮蔽的对象无法访问
## 2.2 欺骗词法
1. eval
    - evel()函数可以接受一个字符串作为参数，并将其转换成代码，使得外部引用转成内部定义
		```
        function foo(str, a){
          eval(str);//欺骗语法，动态插入var b =3
          console.log(a,b);
        }

        var b = 2;
        foo("str",1);//1,2
        foo("var b =3;",1)//1,3
      ```
2. with
	- with 通常被当作重复引用同一个对象中的多个属性的快捷方式，可以不需要重复引用对象本身。
	- 缺点 声明不会限制在使用with的块中，而是被添加到with所处的函数作用域中，容易引起数据泄露和数据交叉
```
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
```