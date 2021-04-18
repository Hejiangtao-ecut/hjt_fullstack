# 2021/4/17
1. forin 和 forof 的区别
    - forin 取得是键，forof取得是值
    - const a={name：江河}
    - forin 取到name，需要a[item]来获取‘江河’，forof直接获取‘江河’
    - forof 进行引用类型操作时候改变的是引用类型，当进行简单类型操作时候不会对原来的值改变
        - 相当于引用类型是把地址传进去进行操作，而简单数据类型是将值拷贝进去操作

2. 模板字面量使用
```
详见1.js
```
3. 字符串查找
    - indexOf和includs，第一个参数为查找的字符，第二个为起始的位置
    - indexOf返回index，includs返回true和false