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
4. call apply 借用函数   
    - fn.call(绑定this,参数1,参数2...//或者...arguments)  构造函数式绑定
    - fn.apply(绑定this,参数1,参数2,...)

## 继承的几种方式
1. 构造函数绑定
2. prototype模式
3. 直接继承prototype
4. 利用空对象作为中介


- 2和3，3的优点效率高，不用执行和建立animal的实例，缺点是Cat.prototype和Animal.prototype都指向同一个对象，在理解上不妥，会改变父类的原型对象1
    - Cat.prototype.constructor = Cat
    - 