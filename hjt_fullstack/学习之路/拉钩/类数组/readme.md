# 类数组
1. 什么是类数组
    - JS中存在一种类数组对象，不能直接调用数组对象，但是又和数组比较相似
2. 常见的类数组对象
    1. 函数里面的参数arguments
    2. 用 getElementsByTagName/ClassName/Name 获得的 HTMLCollection
    3. 用 querySelector 获得的 NodeList
3. 类数组和数组的区别
    |方法|数组|类数组|
    |:----:|:----:|:----:|
    |自带方法|有|无|
    