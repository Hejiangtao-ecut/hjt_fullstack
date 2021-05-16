# 背景
1. 背景
    - background-color: red; 设置背景色
    - background-image: url(); 设置背景图片，利用url链接图片
    - bgc-repeat: no-repeat  将背景图片设置为不重复
        - repeat 默认重复
        - repeat-x x轴重复
        - repeat-y y轴重复
        - space 平均分配，不会出现半个的情况
    - bgc-attachment 背景图片位置
        - fixed  固定铺满整个框
        - scoll 不自动铺满，滚动后消失
    - bgc-position  背景图片定位
        - center 设置为垂直居中，可以设置两个定位来进行水平和垂直位置定位
    - bgc-size
        - 100% 100% 宽度百分百，高度百分百
        - contain 默认百分比显式，宽高比不对会有留白

2. 盒子阴影
    - box-shadow：水平，垂直，模糊度，颜色
        - 水平垂直都为0的时候设置模糊度阴影会出现在盒子四周
3. 线性渐变
    - linear-gradient 线性渐变
    - background:linear-gradient(0deg, red,blue,green); 添加度数后按照指定的角度进行线性渐变
    - 角度也可以写成 to
        - to right  向右渐变
        - to left 向左渐变
        - to top right 向右上角度渐变
4. 径向渐变
    - 中心向外发散，圆形渐变
    - radial-gradient(100px 100px,red,blue); 宽100px，高100px 的发散性渐变，外部为外层颜色填充
    - 定位
        - 垂直，水平 模式
            - 0% 50%  垂直距离顶部0，水平为50%的位置(水平居中)
5. 渐变标识位
    - 渐变的过渡点
    - background:linear-gradient(0deg, red 30%,blue 40%,green 60%);
    - 前面30%全部为红色不进行渐变，60%后全部为绿色
6. 重复渐变
    - repeat-linear/radial-gradient 实现重复渐变效果，加上动画效果可以实现进度条的滚动