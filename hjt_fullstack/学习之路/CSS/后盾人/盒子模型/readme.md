# 盒子模型
1. 标准盒模型包含margin，border，padding，content
    - 标准盒模型内容只计算content
    - ie盒模型包含border、padding、content
        - 标准切换ie
            - box-sizing: border-box;
2. 边距控制
    1. 可以在父容器使用padding将内部撑开
    2. 可以用margin将父容器撑开
    3. 边距设置
        1. 遵循上右下左顺时针方向定义
            - margin：30px 上下左右都为30px
            - margin：30px 40px 上下为30px，左右为40px
            - margin：auto 上下和作用分别评分四周的空间
3. 边距合并
    1. 两个上下相邻的元素设置上下边距，出现的边距最后不是两边距之和，而是两边距中的最大值
4. 盒子大小限制
    1. box-sizing 设置后固定固定盒子的大小范围，内容盒设置后宽度以内容为准，边框盒设置后宽度大小以边框为准
5. 轮廓线
    - outline：none 清除轮廓线，输入框默认会带，也可以复写：focus伪类来去除
6. 元素消失
    - display: none;实现控制元素出现和隐藏，是真正的去除
    - display：block 将元素变成块级元素，就可以垂直排列
    - display：inline-block 行级块元素，可以让一部分元素独占一行同时不与其他元素
    - 行级元素没有宽高，可以多个在一行
    - 块级元素，有宽高，一个占一行
7. 尺寸控制
    1. width、height 直接把尺寸定死
    2. min-width,min-height 设置最小高宽约束
    2. max-width，max-height 设置最大宽高约束
8. fit-content 根据内容自适应，可以设置在width和height上，实现根据内容自适应宽高