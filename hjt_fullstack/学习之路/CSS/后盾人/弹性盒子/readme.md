# 弹性盒子
1. 声明弹性盒模型的几种方法
    - 都需要在父元素设置成弹性盒子才可以进行弹性布局
    1. display:flex
        - 子元素都变成块级元素
    2. display:inline-flex
        - 子元素都类似于行级块

2. 弹性盒子的排列方式
    1. flex-direction: row; flex布局默认是行排列
        - row 行排列，默认设置(从左到右排列)
        - row-reverse 反向行排列(元素从右到左排列)
        - column 列排列，垂直从上到下
        - column-reverse 反向列排列
    2. order 排序序号
        - 默认为0，数字越大排列越靠后

3. 弹性元素溢出处理
    1. 默认按比例缩小
    2. 换行(推荐)
        - flex-warp
            - nowarp 不换行
            - warp 换行
            - warp-reverse 反向换行，从下往上折

4. 统一设置元素排列和换行
    - flex-flow：row wrap; 行排列，换行

5. 主轴与交叉轴
    1. 主轴 和排列方式平行的那条轴
    2. 交叉轴 和主轴垂直的轴
    - 主轴和交叉轴不是固定的，根据排列方式的变动而变动
6. 主轴和交叉轴元素的排列方式
    1. justify-content 控制主轴排列
        1. flex-start  默认，从主轴开始排列
        2. center 主轴上居中排列
        3. flex-end 排列在主轴末端
        4. space-between 两侧靠边，中间平均分配
        5. space-around 元素两边空间相等，最边上一倍间距，两个元素间两倍间距(间距叠加)
        6. space-evenly 元素之间完全平均分配
        7. stretch 拉伸，拉伸元素适应
    2. align-items 交叉轴的排列方式
        - 属性和用法参考主轴排列方式
        - 多行用align-content
7. 弹性元素交叉轴控制
    1. align-self 配置选择器选择指定的元素，然后进行定位操作
8. 元素可用空间分配
    1. flex-grow：1 所有元素平均分配剩余空间,各个元素单独设置后会进行按比例分配剩余空间
    2. flex-shirk 当父容器小于子元素时候子元素按比例·缩小的尺寸
    3. flex-basis 控制主轴方向的尺寸
        - 100px 横向  后面元素宽度就为100px，优先级大于宽高
        - 优先级：min/max-width > flex-basis > width
9. 组合规则
    - flex：grow shrink basis；
    - 接收三个参数，依次为增长尺寸，缩小尺寸，主轴方向尺寸
    - flex:1 2 100px 相当于
        - flex-grow:1
        - flex-shrink:2
        - flex-basis:100px
