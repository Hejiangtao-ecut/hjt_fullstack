# react demo02
## button事件
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

## 鼠标事件
1. onMouseEnter 鼠标进入元素
2. onMouseOver 鼠标悬浮在元素上
3. onMouseLeave 鼠标离开元素
4. Touch等事件，会获取到坐标等信息

## 文本框事件
1. onChange 文本框的值改变

## 父子组件传值
1. 父组件向子组件传值、方法
    - 设置在属性里面，然后子组件用props获取即可
2. 子组件向父组件传值
    - 子组件 onClick={this.props.sendValue.bind(this,'给父组件传值')}>
        - 用父组件给的this.props.sendValue 将需要传递的值传递出去
    - 父组件 
        - <Demo03 isShow={true} sendValue={getChildValue} />
        - 然后父组件用sendValue属性获取子组件给得值
        - 复写getChildValue即可得到值，getChildValue(e)，e就是子组件传递过来的值
## 插槽
1. 通过在父组件定义html等文本，然后在子组件用this.props.child获取到，然后动态渲染一系列操作
2. 因为组件是在子组件通过插槽渲染出来的，但是点击等事件却作用在父组件上，需要在子组件将监听事件传递出来父组件获取到才可以进行操作
    - 父组件 <Demo04 onClick={del}>增加</Demo04>
        - 子组件不传递onclick事件出来父组件是无法使用的
    - 子组件 <button onClick={this.props.onClick}>
        - 用父子组件传值的方式将onClick传递出去
3. 插槽多用于封装组件，并且动态的渲染组件