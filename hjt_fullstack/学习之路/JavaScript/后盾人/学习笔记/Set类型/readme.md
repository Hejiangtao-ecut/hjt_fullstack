# Set 类型学习笔记
1. set和数组类似，里面可以放多个数据，但是set里面不可以放重复数据，但是可以同时存放1和'1',对象里面如果同时存放键名1和'1'会被后声明的那个覆盖
2. new Set([arr]),里面默认接收的是一个数组，如果是字符串会将其打散成字符串
3. set.size 查看元素的数量，has('value')查看元素是否存在
4. .delete('value') 删除set中value元素，返回布尔值，成功为true
5. .clear() 清空set
6. set转数组[...new Set(arr)];
7. Set 遍历
    - for of
    - forEach
    - 大部分数组和对象的方法皆可使用
8. 利用set求两个数组的交集并集和差集

# set和weakSet
1. weakSet 要求传递的必须是引用类型
2. weakSet 的遍历、循环等都不能操作，垃圾回收策略问题，内容清空了weakSet还会默认里面有值