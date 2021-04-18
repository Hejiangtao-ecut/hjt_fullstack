# 2021/4/18
1. 字符串替换

2. 重复函数
    str.repeat(count)  // 次数
3. 应用实现号码部分隐藏
    - String(mobile).slice(0, length * -1) + "*".repeat(length);


4. 数字方法
    1. toFixed(n) 保留n位小数
5. Math方法
    1. max/min 是不允许直接传数组名的
        - console.log(Math.max(arr)) // NaN 不允许直接传键
        1. console.log(Math.max(...arr)) // 5 直接展开
        2. console.log(Math.max.apply(null, arr)) // 5  引用apply方法传递
    2. ceil 向上取整，，翻译为天花板
    3. floor 地板  向下取整
    4. round 取整 四舍五入
    5. random()
        - 取min-max区间的数
        - math.floor(math.random()*(max-min + 1) + min)

6. data时间运算
7. 获取时间戳的4种方式
    1. *1
    2. number()
    3. data.valueOf()
    4. data.getTime
8. 时间戳转成时间1
const newDate = new Date(data1);
console.log(newDate);

9. 时间处理库 moment.js

10. 类转数组
    在类里面设置length属性就可以

11. 封装移动数组元素

12. 清空数组方法
    1. arr = []
    2. arr.length = 0;
    3. arr.splice(0,arr.length)
    4. 函数封装

13. find查找数组的引用类型