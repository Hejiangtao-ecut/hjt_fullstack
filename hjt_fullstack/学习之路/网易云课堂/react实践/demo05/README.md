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

## 路由嵌套 goods
1. 在子页面实现路由嵌套，必须使用在嵌套路由前面加上主路径
    - <Route path="/goods/item" component={Item} />
        - 嵌套进入item页面，然后前面必须加上goods页面
2. 子路由嵌套
    - 使用withRoute进行路由传值，
    - goods/indexNav
3. 路由认证
    - login和user
        - 通过在login页面进行登录验证，登录成功在localStorage里面设置username和islogin字段实现本地存储登录状态，登陆后history回退
        - user页面设置退出功能，点击退出后localStorage.clear();清空数据，然后history回退
    - 缺点，如果没有登录会出现一次闪屏，因为会先渲染不存在的页面
        - 手写一个函数然后根据状态进行渲染
            - routers
            - 思想，从官方文档改版，获取当前准备跳转的路由，然后根据登录状态进行动态选择，登陆了则正常进入页面，没有登录则跳转到登录的页面

## hash和history区别以及环境中的注意点
1. 区别
    1. hash
        - 带#号
        - build后不会存在引入文件失效的问题
    2. history
        - 不带#
        - build会存在引入文件的问题，需要自己配置webpack来解决引入的问题

2. 路由问题
    - 在打包到正式环境中后，因为路径不是本地开发的路径了，需要修改router，这时候在js里面配置一个conf，然后里面把正式环境的根路径放在里面，然后导出，在每一个路由前面都加上导出的就可以了
        - <Route path={config.path+'login'} />
            - coonfig.path是环境的根路径
3. 刷新会出现404错误
    - 
4. 模拟线上环境
    - 在build里面建立一个和线上根路径同名的文件夹，把build里面的文件放到里面，就可以模拟线上环境进行开发