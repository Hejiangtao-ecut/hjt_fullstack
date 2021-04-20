# Map类型
1. 什么都可以作为键
2. 采用键值对的方式存储
3. set设置元素，可以支持链式操作
4. map的增删改查
    1. 增加 set(key:value)
    2. 查 get(key)获取值
    3. 删 delete(key)
    4. clear() 清空
    5. has(key) 查询是否包含某个键
5. 遍历
    1. keys() 返回map的所有的键
    2. values 获取所有的值
    3. entries 获取所有的键值对
    4. for of
    5. forEach
6. 类型转换
    1. [...map] 展开成数组
    2. [...map.keys] 单独展开键
    3. [...map.values] 单独展开值

# weakMap
1. 键只能是引用类型
2. 