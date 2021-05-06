# transform
1. 属性
    1. transition：1s 过度时间，1s
    2. transform:  偏移量
        - translateX() X轴偏移量，正数向左
        - translateY() Y轴偏移量，正数向下
        - translateZ() Z轴不可以使用百分比
        - translate(x,y) 同时定义X轴和Y轴的偏移
        - translate3d(x,y,z) 同时控制X,Y,Z三个轴
        - 缩放
            - scaleX() X轴缩放，正数向两侧发散
            - scaleY() Y轴缩放
            - scale(X,Y) 
            - scale(0) 实现元素隐藏
        - 旋转
            - rotate(X,Y) 单位deg
            - rotateX(45deg) X轴旋转45度
            - rotateY(45deg) Y轴旋转45度
            - rotate3d(2,2,6) X和Y放大两倍，z轴放大6
        - 缩放基点
            - transform-origin：left top;
    3. 
2. 元素居中
    1. flex布局
        - display:flex
        - just:center
        - align-items:center
    2. grid布局
        - 三行三列
    3. transform
        - transform: translate(-50%,-50%);
3. transtion放置
    - 那里需要缩放优先放置在哪，放置在伪类会产生结束后的突变