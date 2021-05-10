# 箭头函数
1. 箭头函数没有自己this，arguments，super和new.target
    - 没有this，所以他的指向默认调用它的父级作用域
    - 没有arguments，没有这个，所以多参调用的时候解决办法两种，一种对应设置多个参数，另一种使用点运算收集，然后使用
    - 没有super，所以无法进行继承或用作继承的中间类
    - 没有new.target,所以无法进行new的实例化
        - new.target返回指向构造方法或函数的引用，即new.target指向构造函数