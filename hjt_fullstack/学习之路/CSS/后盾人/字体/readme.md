# 字体
1. 设置多种字体，防止用户没有单独指定的字体，否则浏览器使用默认的字体
    - 1.html
2. 字重和字号
    - 2.html
    - 字重表示字体线条的大小，加粗变细等
    - 字号表示字体的大小，对字的大小进行缩放
    - 百分比是子元素相对于父元素的大小，如果父元素是20px，那么200%就是父元素字号的两倍
    - 1 em相当于100%
3. 颜色
    1. 插件取色器
    2. rgba
    3. #16进制
4. 行高
    - 3.html
    - line-height
    - 推荐使用em设置行号实现响应式行高，不然会出现字符重叠，影响美观
5. 字体组合定义风格
    - 5.html
    - 可以简写成一行,简写后字号和字体格式是一定要的，否则会出错
         - font:15px/1.5em 'heiti' ....
         -      字号/行高   黑体   加倾斜等等
6. 字符大小写转换几种方案
    - 6.html
    1. font-variant: small-caps;  小型大写，字符变成大写，但是字号相对较小
    2. text-transform: uppercase; 真正变成大写，比较常用的方式
    3. text-transform: capitalize; 首字母大写，空格，逗号等后面都会大写，默认成为新单词
7. 文本线条的控制
    - 7.html
    1. text-decoration: underline; 下划线
    2. text-decoration: overline; 上划线
    3. text-decoration: line-through; 删除线
    4. a标签等默认带有超链接，可以text-decoration:none 进行去掉下划线
8. 文本阴影
    - 8.html
    1. text-shadow:lawngreen 5px 5px 9px ; 颜色，水平偏移量，正值向左，垂直偏移量，正值向下，模糊度，数值越大越模糊
9. 空白和文本溢出处理
    - 9.html
    1. white-space 属性设置如何处理元素内的空白
        - pre 保留文本格式
        - pre-line 合并空白为一个空格，但是保留换行
        - 实现文本溢出省略号
            - white-space:nowrap; 禁止换行
            - overflow: hidden; 溢出则隐藏
            - text-overflow: ellipsis; 触发溢出则添加省略号
    2. 文本浮动
        - text-align
    3. text-indent: 2em; 文本缩进，2个字符
    4. 文本垂直
        - vertical-align  top middle bottom 上中下
    5. letter-spacing 字符间距
    6. word-spacing 单词间距