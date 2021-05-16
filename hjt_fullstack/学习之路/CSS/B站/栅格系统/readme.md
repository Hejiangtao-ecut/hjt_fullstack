# 栅格系统
1. 优缺点
    - 栅格系统向下兼容性不友好
    - 隐藏bug偏多，部分机型容易触发各种bug
    - 学习成本高
    - 使用便捷，开发快
2. 栅格基础知识
    1. display:grid  栅格容器声明，将容器设置成栅格布局
    2. grid-template-rows 定义行 可以直接定义每一行得宽度或者使用repeat函数，fr等比例划分
        - minmax(50px,100px) repeat函数中使用，可以设置尺寸得边界值
    3. grid-template-columns 定义列
    4. row-gap 行间距，也可以使用column-gap来设置列间距
        - gap 可以直接组合定义行列间距
3. 栅格放置元素
    1. 根据栅格线编号摆放
        - grid-row-start: 1;
        - grid-row-end: 2;
        - grid-column-start: 1;
        - grid-column-end: 4;
    2. 根据栅格命名放置
        - 命名 [] 括号内名字随便起，相邻两个元素要用空格隔开[r2-end r3-start]
        - 然后根据命名摆放
    3. 根据偏移量进行布局
        - grid-column-end：span 3;  占三列
    4. 组合定位
        - grid-row：2/4  从第二条线开始，到第四条线结束
        - grid-column：1/span 3；从第一条线开始，偏移量为3(占三个格子)
    5. 区域命名放置
        - 3.less
4. 栅格流动
    1. grid-auto-flow：row/column dense
        - row/column 行/列流动
        - dense 自动填满
5. 栅格元素对齐
    - justify-items和align-items:参数参照justify-contents
    - 单个元素 justify-self
    - 组合定义
        - place-content