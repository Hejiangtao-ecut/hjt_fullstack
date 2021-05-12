# react demo02
## button事件
1. button 为什么要绑定this
    - button的第一个this指向的是button自己，直接调用等价于button.chick事件,绑定后等价于App.click事件
2. 为什么不用apply或者call绑定this
    - apply或者call绑定的时候会直接执行，而且是临时绑定，执行完就解开，相当于没有绑定
    - bind绑定后不会立即执行，需要手动调用，而且bind绑定的是长期的this
3. es6 解决方法
    - 把方法写成箭头函数
    - 直接解决this的问题
    - 缺点
        - 无法传参

## 鼠标事件
1. onMouseEnter 鼠标进入元素
2. onMouseOver 鼠标悬浮在元素上
3. onMouseLeave 鼠标离开元素
4. Touch等事件，会获取到坐标等信息

## 文本框事件
1. onChange 文本框的值改变