# 选择器
1. 通配符 选择全部的元素
2. 标签 选择指定的标签
    - h1,h2..   可以同时复写多个标签
3. id的值只可以是唯一的，不可重复出现，但是class可以
4. 结构选择器
    1. main aside h1: 表示选择main标签里面的aside里面的所有的h1标签，包括孙级元素级后面
    2. main aside>h1：表示选择main里面的aside的子元素里面的h1标签，孙代及后面不选择
    3. main aside~h1：表示选择main里面aside的兄级h1，不包括子级及以后
    4. main aside+h1：表示选择main里面和aside紧挨着的h1
5. 属性选择器
    1. h1[title] 表示选择h1里面有title属性的h1标签
    2. h1[title] [id] 表示选择h1里面至少包含title和id属性的h1标签
    3. h1[title="demo"] 表示选择h1中有title且值为demo的h1标签
    4. h1[title^/$="demo"] ^表示选择title字段以demo为开始的，$表示选择title字段以demo为结尾的
    5. h1[title*/~="demo"] *表示title中任意位置包含这个值，~表示任意位置包含但是一个独立的字段
    6. h1[title|="demo"] 管道，表示只含该字段或者以该字段开头，然后后面字段以杠连结，如demo—...
6. 伪类选择器
    - a:link 默认样式
    - a:visited 点击之后的样式
    - a:hover 鼠标悬浮的样式
    - a:active 点击的时候
    - :focus 获取焦点的时候
7. 结构伪类选择器
    - h1:first-child 选择h1后代的第一个元素包括及以后的每一代第一个元素 
    - h1>:first-child 加上子代符号，只选择h1子代的第一个元素
    - h1 h2:first-child 选择h1后面第一个子元素且必须为h2
    - h1 h2:first-of-type 选择h1后代第一个类型为h2的元素
    - h1：last-child 选择h1后代中的最后一个元素，包括子代以后的每一个最后一个元素
     - last-child也可以添加其他选择符，和first-child相似
    - only-child 选择后代中唯一元素，只包含一个元素的
    - h1>h2:only-type-of h1后代中只包含唯一一个h2的子代
8. 元素编号选择
    1. :nth-child(1) 表示选择后代的第一个元素
    2. :nth-child(n)  表示选择全部元素，n会随着1，2，3，4自动增长
    3. :nth-child(2n) 表示编号为2n的元素，就是选择偶数项元素，系统提供了even关键字表示选择偶数项
    4. :nth-child(2n-1) 表示选择奇数项元素，系统提供了odd关键字选择奇数项
    5. :nth-child(-n+2) 表示选择前两个
    6. nth-child(n+2) 表示选择从第二个开始的元素
    7. aside h1:nth-of-type(2) 表示选择aside里面的第二个h1
    8. aside h1:nth-last-child(2) 表示选择aside里面倒数第二个h1
9. 排除选择器
    1. nth-child(-n+4):not(:nth-child(2)) 表示选择前四个但是排除掉第2个