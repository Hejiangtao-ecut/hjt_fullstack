# 动画
1. animation关键帧
    1. 关键帧
        - @keyframes demo{
            /* 起始帧 */
            from{
                background-color: #fff;
            }
            /* 结束帧 */
            to{
                background-color: red;
            }
        - 使用@keyframes name 来定义关键帧动画
        - 也可以使用百分比来替代from to关键字定义多个关键帧动画
        - 默认可以不定义起始和结束帧，会默认还原
    2. animation-name: demo;使用指定动画
        - keyframes 定义完动画后使用该属性来指定关键帧的动画
        - 可以同时接收多个动画
    3. animation-duration: 2s;
        - 动画时间，不设置则动画无效
2. 属性重叠对动画的影响
    1. 多个动画有属性重叠的时候，谁后出现谁的权重大
    2. 后面的干死前面的
3. animation-iteration-count
    - 定义动画执行的次数，默认为1
    - 当定义多个值的时候对对应动画名重复按顺序使用
    - infinite 无限次执行
4. animation-direction 
    - 动画的时间方向
        - normal 从0-100
        - reverse 从100-0
        - alternate 从0-100慢，100-0正常
        - alternate-reverse 从0-100正常，从100-0慢