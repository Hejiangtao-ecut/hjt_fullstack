# class 
- es6 class 与 es5 的构造函数+prototype 有什么关系
1. es6 class 构造函数在construct上
2. 构造函数只能被new，不能作为普通函数运行
3. person.prototype 不可枚举
    - object.keys 输出可枚举对象
    - object.getOwnpropertyNames 输出可调用对象

- Babel 的使命
    - es6 的class 不停的更新， 运行的环境不一致，会有报错的风险，babel负责解决这个问题
    - 手写babel 就是手写一个class的转义代码