# vue 基础学习
## 1. el
    挂载点，用于挂载html等，就像react的.app根节点

### 细节点
1. vue实例的作用范围
    - vue数据的作用范围在其挂载点里面，超出挂载点标签范围就会失效
    - 在子元素也有效

2. 是否可以使用其他选择器作为挂载点
    - 默认使用的是id选择器，因为id选择器具有唯一性，其他选择器容易命中多个选择器，造成渲染异常
    - 也可以选择是因为class选择器和标签选择器，但是不可以使用html和body

## 2. data
    数据对象，相当于state，里面的数据都放在这里

## 3. methods
    方法仓库，vue里面方法都放在这里面，也不需要绑定this的操作
<br>


# vue指令
## 基础指令
### v-text 1.html
1. 设置标签的文本值
2. 在文本标签中使用v-text="message"，然后会自动解析将message的值替换到标签中
3. 内部支持写表达式
    - 缺点，无论标签中有什么值，都会被替换掉
    - 改进：使用插值表达式，用{{message}}放进里面，而不使用v-text
    - 细节：在v-text里面额外插入值需要使用单引号

### v-html 2.html
1. 设置标签的innerHTML
2. 添加的数据按照innerHTML解析
    - 普通文本直接解析为文本
    - 带html的解析为html结构，类似于jsx
3. v-text和v-html的区别
    - v-text只会解析为标签
        - 使用插值表达式在网速慢的时候会出现未解析字符，使用v-cloak就可以解决
    - v-html会进行选择解析

### v-on 3.html
1. 为元素绑定事件
    - 在react里面是使用onClick,vue里面使用v-on:click就可以
2. 方法卸载data的method里面
3. 便捷写法
    - @click，使用@符号可以简写v-on:
4. 取值
    - 在方法中使用this关键字就可以获取到data中的值

### demo1
简单实现一个计数器，完成对vue.js的一个实践

## 动态显式指令
### v-show 4.html
根据真假实现切换元素的显式状态
原理是修改display，类似于react的三目运算符操作
指令的值都会被转换成布尔值，true就显式，false就隐藏

### v-if 5.html
根据表达式的真假在切换显式状态
和v-show相似，但是v-show操纵的是display，v-if操纵的是dom
如何选择：频繁操纵的元素用v-show，一次改变一直使用的使用v-if，dom操作很消耗性能
v-if可以配合v-else，v-else-if使用，但是需要为相邻元素

### v-bind 6.html
操纵元素的属性
语法：v-bind：属性名=表达式,可以使用三元运算
简写：直接写一个：就可以
如果操纵class，可以使用类来设置

### demo2 
实现图片点击切换

## 循环指令
### v-for 7.html
根据数据生成列表结构
