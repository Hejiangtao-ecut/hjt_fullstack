# JS中面向对象
1. 操作方法
    1. 点语法
    2. [key]
    3. 遍历
        - for in 键
        - for of 值
2. 解构赋值
    1. {} = {}

3. assign() 合并多个对象的属性，传入几个合并几个，重名的属性会被后面的覆盖
4. 工厂函数创建对象
    - 利用函数快速创建一类对象，实现对象的批量创建
    - 创建的对象更加规范
    - 1.js
5. 对象属性特征
    - getOwnPropertyDescriptor(obj,key)  获取单个属性特征
    - getOwnPropertyDescriptors(obj) 获取所有属性的
    - 控制属性特征
6. 禁止向对象添加属性方法
    - 静态方法 Object.preventExtensions()  进行对象锁定
    - 判断方法
        - Object.isExtensible() 判断是否锁定
            - true 的时候可以添加
            - false 表示不可添加
7. 封锁对象
    - Object.seal() 封锁对象 不允许进行属性操作
    - Object.isSealed() 判断对象是否封锁 false表示未封锁
8. 冻结对象
    - Object.freeze()  冻结后也是不可操作属性，所有操作都不可
    - 