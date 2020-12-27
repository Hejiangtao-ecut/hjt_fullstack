# 阮一峰
1. JS变量的数据类型由值决定，
    - 常量，es6之前没有常量  var
        - 类型不可改变
        - 简单类型的值不可以改变，复杂数据类型的值可以改变
        - 数值，字符串，布尔值，undefined，null，object(数组、函数)，symbol  七大数据类型
2. typeof [1,2,3] 如何知道是数组
    - 区分简单数据类型和复杂数据类型
    - 复杂数据类型： object
    - 可以直接得到的类型：number,string, boolean, undefined, symbol
3. Objece.prototype.toString.call() 核心
    - Object 所有对象的原型对象
    - prototype 
    - call 