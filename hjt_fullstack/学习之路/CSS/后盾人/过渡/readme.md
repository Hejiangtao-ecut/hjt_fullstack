# 过渡
1. 过渡时间
    - transition: 1s; 过度时间1秒
    - 在过度过程有中间值的会进行渐变，如背景颜色改变会进行颜色渐变，没有中间值的会进行突变，如边框样式
    - 使用伪类时候过渡时间会进行继承，可以单独在伪类(如hover)里面复写过渡时间
2. 定制过渡
    - transition-property: background;
        - all 全选
        - 指定渐变的属性，添加后没被指定的属性进行突变
    - transition-duration: 2s;
        - 指定渐变属性的渐变时间
    - 但是如果有transition会默认覆盖上面两个元素
3. js中监听transition事件可以在动画不同的时候进行元素操作
4. transition-timing-function 控制动画过程的快慢
    - 默认linear 线性渐变，没有起伏
        - easy-in
        - easy-out等有起伏
    - step(n,start/end)
        - 步进器函数，定义后动画变成变成N贞动画
        - n 整个过程的帧数
        - start/end 触发的条件 end稍微延迟一点
5. 动画延迟
    - transition-delay: 1s;
    - 延迟一秒再开始动画
6. transtion组合设置
    - transition：1s,2s,linear;
        - 动画事件1s，延迟2s，线性
    - transition：bgc 1s,2s,linear,border 2s 3s linear;
        - 分别设置border和bgc的动画