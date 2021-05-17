# react 实践
## webpack
1. 暴露webpack配置
    - npm run eject
    - 在git仓库中需要先将其添加进入仓库才可以进行暴露配置
        - git add .
        - git commit
    - 修改webpack里面的devtool
        - isEnvDevelopment && 'eval-source-map'
        可以暴露错误的行列，方便调试
        但是会暴露源码，有风险

## JSX
1. 什么是JSX
    - JSX是js的一种语法扩展，拥有js的全部功能
2. ref
    - 在JSX中HTML标签上添加ref可以快速获取节点，但是只能在本页面使用，不能跨组件跨页面获取
3. JSX动态设置显示内容
    - 三元运算
        - {this.state.isShow?<div className="box"></div>:''}
        - 根据isShow的状态进行动态修改，可以应用于登录等状态
        - 缺点，会产生一个空字符
        - 改进，如果false状态没有输出则使用&&操作
            - {this.state.isShow && <div className="box"></div>}
4. JSX和HTML的区别
    - React事件是驼峰命名法，不是全部小写
    - 

## 虚拟Dom操作
1. ReactDom.findDOMNode(dom操作)
    - 使用虚拟Dom函数包裹dom操作语句，然后进行虚拟Dom操作即可

2. 虚拟Dom原理
    - 虚拟dom相当于在js和真实dom之间加了一个缓存，将真实的dom转化为json对象，利用dom diff算法避免了没有必要的dom操作，从而提高性能
    

## react
1. setState 修改值
    - 先取到值进行修改
    - 放进setState提交
2. 父子组件传值
    1. 在父级通过属性传值
        - <Header title="首页" />
    2. 在子组件通过props拿到值
        - this.props.title
3. 类型约束
    1. tsx
    2. 使用自带的型类约束方法
        - import propTypes from 'prop-types'; 引入约束
        - 编写约束
            - Header.propTypes = {
                    title: propTypes.string.isRequired
                }
        - 赋默认值
            - Header.defaultProps = {
                    title:"首页1"
                }
4. props和state的区别
    - state和props的区别主要在于props是不可变的，而state可以根据与用户交互来改变。
    - 所以有些容器组件需要定义state来更新和修改数据，而子组件只能通过props来传递数据
    - props的状态是只读，操纵props会报错
5. state
    - 状态是react的核心组件，数据来源，必须尽可能地简单。状态是确定组件呈现和行为的对象。
    - state是可变的，可以通过this.state访问
    - 通过setState可以改变state
        - this.setState({value},callback);
        - setState 相当于一个异步任务，更新后获取的还是原来的状态，但是在callback里面可以获取更新后的状态
6. 生命周期
    1. 构造方法
        - constructor
    2. 页面将要加载
        - componentWillMount
        - 在16版本后要求使用UNSAFE_componentWillMount
        - 一般不进行使用
    3. 页面加载完成
        - componentDidMount
        - 所有页面初始化数据都放在在这里，比如页面的图片等，不需要操作直接显式出来的，都放在这里
    4. shouldComponentUpdate 是否更新组件
        - 返回布尔值，true更新，false不更新
        - 在组件接收到新的props或者state被调用时调用，可以用于组件的优化
        - 两个参数，(newProps,newState)
        - 但是慎用，用多了性能优化页不强
    5. componentDidUpdate 组件更新完成后立即调用
        - 获取的props是更新之前的，有延迟
    6. render()
        - 组件渲染
    7. componentWillUnmount
        - 离开页面时候使用
        - 重要函数
        - 离开页面的时候清除上一个页面的所有任务，否则会造成应用的内存泄露，引发闪退