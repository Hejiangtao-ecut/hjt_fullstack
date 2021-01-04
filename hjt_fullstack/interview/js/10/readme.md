# 把面试题当成高考点
1. 以题目来检验下当前的js所学
2. 打卡 课后做的任何事情
3. 能力增长点  至少保持线性增长

- null和undefined的区别
    - undefined 意义是类型，当声明了一个变量未初始化时，得到的是undefined
        1. 箭头函数和普通函数不一样
            - 不只是便利，arguments也被干掉了
            - （）=>{}  function 省掉了  arguments也被省掉了
            - 但是es6里提供了... reset 运算符
            - es5 时代里arguments 也是极其有用的
        2. Object的原型对象
            - Object（函数）.prototy.__proto__  null  到顶了，不该有对象