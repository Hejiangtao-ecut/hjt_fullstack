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