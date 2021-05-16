# react demo02
## button事件 demo 01
1. button 为什么要绑定this
    - button的第一个this指向的是button自己，直接调用等价于button.chick事件,绑定后等价于App.click事件
2. 为什么不用apply或者call绑定this
    - apply或者call绑定的时候会直接执行，而且是临时绑定，执行完就解开，相当于没有绑定
    - bind绑定后不会立即执行，需要手动调用，而且bind绑定的是长期的this
3. es6 解决方法
    - 把方法写成箭头函数
    - 直接解决this的问题
    - 缺点
        - 无法传参

## 鼠标事件 demo02
1. onMouseEnter 鼠标进入元素
2. onMouseOver 鼠标悬浮在元素上
3. onMouseLeave 鼠标离开元素
4. Touch等事件，会获取到坐标等信息

## 文本框事件
1. onChange 文本框的值改变

## 父子组件传值 demo 03
1. 父组件向子组件传值、方法
    - 设置在属性里面，然后子组件用props获取即可
2. 子组件向父组件传值
    - 子组件 onClick={this.props.sendValue.bind(this,'给父组件传值')}>
        - 用父组件给的this.props.sendValue 将需要传递的值传递出去
    - 父组件 
        - <Demo03 isShow={true} sendValue={getChildValue} />
        - 然后父组件用sendValue属性获取子组件给得值
        - 复写getChildValue即可得到值，getChildValue(e)，e就是子组件传递过来的值
## 插槽 demo04
1. 通过在父组件定义html等文本，然后在子组件用this.props.child获取到，然后动态渲染一系列操作
2. 因为组件是在子组件通过插槽渲染出来的，但是点击等事件却作用在父组件上，需要在子组件将监听事件传递出来父组件获取到才可以进行操作
    - 父组件 <Demo04 onClick={del}>增加</Demo04>
        - 子组件不传递onclick事件出来父组件是无法使用的
    - 子组件 <button onClick={this.props.onClick}>
        - 用父子组件传值的方式将onClick传递出去
3. 插槽多用于封装组件，并且动态的渲染组件

## React.lazy() dmeo05
1. react 16.6 版本以后才有
2. lazy方法用来对项目代码分割，懒加载用
    - 只有当组件被加载的时候，内部资源才会导入
3. 为什么要使用lazy
    - react 是用webpack进行打包的，webpack在打包的过程中会直接将import的内容直接合并到一个文件中，当项目比较大的时候，打包初始化的时间就会很久，白屏也的时间就会延长
        - 使用lazy将组件这些代码进行分割，只有在加载的时候才进行组件的加载，进行项目优化
4. 方法
    1. 引入
        - 旧方法
            -  旧方法引入，打包加载慢，消耗性能
            -  import Input from '../components/input'
        - lazy方法
            1. react引入lazy，并且需要引入支持模块Suspense
                - import React, { Component, lazy,Suspense } from 'react';
            2. // React懒加载组件
                - const Input = lazy(() => import('../components/input'))
            3. 实现动态懒加载
                1. 设置变量控制是否显式，实现动态加载
                    - isShow
                2. 支撑模块包裹
                    - <Suspense fallback={<div></div>}><Input /></Suspense>
                3. 懒加载过渡效果
                    - fallback={<div></div>}
                        - fallback里面可以是jsx，也可以是html，支持多语言
                4. {this.state.isShow && <Suspense fallback={<div></div>}><Input /></Suspense>}

## 组件开发 demo06
1. swiper
    1. 注意父级给组件传值的时候的异步问题，在render里面进行第一次将值给临时变量，可以解决这个问题
    2. 控制图片切换和小圆点的位置
        - 图片需要层叠，小圆点不层叠，所以需要分开写，不能写在一个return里面