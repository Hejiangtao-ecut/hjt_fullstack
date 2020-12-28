# JS 的灵魂在函数，函数的灵魂在匿名函数

1. 匿名函数
    ```js
        ()=>{}
        function () {}
        <!-- 跟立即执行结合起来 -->
        (function(){

        })();
        <!--通常用作闭包 -->
    ```

2. 作为图书管理系统，写一个书的入库类
    - JS 面向对象 class 关键字来的比较晚，用function来构造类
    - JS 类有点像火车，分成车头和车身
    ```js
        //单独构造函数
        function Book(isbn,title,author){
            this.isbn = isbn;
            this.title = title;
            this.author = author;
        }
    ```

3. 构造函数与普通函数的区别
    - 生产实例 constructor
        1. 构造函数函数名首字母大写
        2. 运行的方式()()  new fn(), new 的时候会把构造函数执行，并且this会指向当前对象
        3. this指向实例
        4. 对象上，原型对象都是Object
        5. Object是顶层对象，也是一个函数
        6. 任何一个函数都会有一个prototype属性，用来添加方法（车身）
        7. 任何一个对象实例都一定有__proto__私有属性，指向原型对象。所以js的面向对象是基于原型的
            > js.__proto__==Book.prototype  //true
            > js.display(); js自己没有这个方法，是基于原型继承父类的方法
            > js.__proto__.__proto__ == Object.prototype  //true
        8. 原型链
        9. js的class关键字只是语法糖，用不用与function无区别