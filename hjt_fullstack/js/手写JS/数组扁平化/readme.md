# 手写实现数组扁平化
1. arr.flat(Infinity)  
    - es6 自动展开数组
    - 优点：容易上手，代码精简
    - 缺点：面试只会这个容易凉凉

2. replace + split
    - let arr3 = str.replace(/(\[|\])/g, '').split(',');
    - 思路：先去除数组的中括号，然后以，为单位生成数组
    - 优点：精简，可以快速实现
    - 缺点：生成的数组里面每一项都是字符串，而非数字，面试官怕是不会满意

3. replace + JSON.parse
    - 思路：先去除所有的中括号，然后在两侧分别加上[和]，再使用JSON.parse实现真正意义上的数组扁平化
    - 优点：算是真正意义上实现了数组扁平化，每一项也都和原来相似
    - 缺点：还是不能达到面试官想考察的地步
4. 递归实现
     - 思路：当存在元素为数组时将其展开