# 经典移动电商布局——十等分
- 10%
    1. CSS继承
    2. 如何使盒子占满整个屏幕而不用继承；
        >1. 定位
            /* position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0; */
        >2. 相对视口 vw,vh移动端屏
    3. float:left
    4. 不用浮动使盒子不层叠
        >1. display:inline-block 间隔问题 由换行符产生的
        >2.  间隔符也是一个字符，设置font-size为零消除字符间距
    5. rem是相对单位，相对于HTML根元素，
        只要HTML设置成屏宽的十分之一，1rem=10%屏宽
    6. 动态设置font-size以适应不同宽度的屏幕    
        PC端->移动端 vw vh rem onresize display:inline-block
        定位：弹性（Flex）、浮动（Float）
        