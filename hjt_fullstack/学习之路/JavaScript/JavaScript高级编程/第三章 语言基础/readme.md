# 读书笔记
1. 数值转换
    - 对象，调用valueOf()方法，并按照上述规则转换值返回，如果是NaN则调用toString()方法转换成字符串
2. Number() 和 parseInt() 的区别
    1. Number 方法会将' '转换成0，parseInt会转换成NaN
    2. number方法转换时如果含有字符串返回NaN，parseInt先转换数字，如果遇到非字符则停止，如果第一个就是非数字字符则直接返回NaN
3. 操作符
    - 自增或自减都会进行==操作，先将其转换成数字，在进行操作
4. 标签语句
    - 和break和continue语句配合使用，实现跳出到某个循环或者进行某个循环
5. with
    - 不推荐使用，with(demo)将里面属性默认指向demo的属性