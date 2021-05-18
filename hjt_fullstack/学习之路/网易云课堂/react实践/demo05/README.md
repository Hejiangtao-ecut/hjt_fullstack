# router
## 引入router
1. 引入路由和配置路由
    - hashRouter
        - 有#号
        - 使用的是hash模式
    - BrowserRouter
        - 没有#号，使用的是history模式
2. exact 完全匹配路由，一般只有首页使用
    - 因为router是从前往后匹配的，首页的'/'不使用精准匹配的话在哪都会被匹配到
3. Redirect
    - 路由重定向，设置后路由会跳转到重定向的页面
## router传值
1. 路径配置
    - <Route path='/My/details/:id/:title' component={Details}></Route>
        - 接收id和title字段
    - <Link to="/My/details/2/demo2">
        - 给路由不同的值
    - <div>这是{props.match.params.id}的{props.match.params.title }</div>
        - 最后通过props取值
2. 缺点，路由写死了，不实用
3. 返回上一页
    - <button onClick={props.history.go.bind(this,-1)}>返回</button>
        - 使用history.go(-1),返回上一页，因为绑定在button上，所以需要绑定this
        - 或者使用goBack函数，goBack函数则不需要传递参数 

## 路由懒加载
1. 自己制作异步函数组件
    - 官方有文档
2. lazy和Suspense实现路由懒加载
    - router.jsx
        - 模块导入的时候使用lazy，然后整个路由配置使用Suspense
    - 缺点，版本限制，只有React16.6之后才有

## 路由嵌套
1. 