# react shop
## **1. 项目介绍**
1. 这是一个纯前端react项目，基于线上的接口文档进行二次复写自己的项目，数据来源于[简书-电商开源文档](https://www.jianshu.com/p/a5bad5245fa5)

## **2. 项目架构**
一个好的架构可以让整个项目更加清晰有条理，便于开发和后期再次阅读

### **目录结构**
1. src 文件目录
    - assets 静态资源
        - css
            - common 公用CSS
                - public.css 全局CSS
        - js
        - image
    - pages  页面内容
        - home 主页
            - index 只写了一个底部导航,作为整个项目的主路由,这种写法确实以前没有尝试过
            - home 首页
            - cart 购物车
            - goods 商品分类页面
        - routes
            - private 复写了private路由，router官网的authRouter耦合度过高，我只需要里面最简单的路由认证功能
        - user  个人主页
            - index  主页的首页,由底部导航栏进入

## **3. 项目编写**
最外层交给router管理，负责整个项目的页面导向
### 路由
    - /home 主页
        - /index 首页
        - /cart 购物车
        - /my 我的
        - /goods/classify/items 商品分类页面
    - 默认重定向去首页  config.path+'home/index'

## 遇见的问题
1. 在最开始配置路由的时候，因为router是4.0版本，使用路由懒加载出现了不兼容问题
    - 解决React路由跳转时出现的红色警告： Warning: Failed prop type: Invalid prop `component` of type `object` supplied to `Route`, expected `function`.
    - 解决方法，讲router-dom更新到最新的5.+就可以解决
    - 原因分析：lazy方法出现的时间不久，对过去比较老的版本兼容有问题
    - 补充:也可以使用官方提供的路由异步加载

2. 多媒体适配办法
    - 在public.css里面进行媒体查询,然后设置不同的字体大小就可以进行媒体适配

3. 全局样式部分消失
    - 引入antd后出现，应该是antd在后面引入，然后把全局样式给覆盖了
    - 解决：先引入antd，后面引入外部UI框架都要先引入，不然会把自己写的样式覆盖掉

4. 请求外部数据会不间断的调用
    - 问题描述：请求接口中的swiper并且渲染到页面，适应useEffect，结果不停的刷新输出swiper的后台数据
    - 分析：因为最开始swiper是空数组，然后调用了函数进行更新成接口的数据，然后更新接口数据后会再次调用useEffect，然后形成了互相调用的死循环，不停的互相调用
    - 解决：使用useEffect的第二个参数，将调用接口数据的useEffect第个参数为空数组，这样只在第一次页面挂载的时候调用，避免互相调用，形成死循环

5. 封装ajax请求后获取数据部分失效
    - 封装好将地址等都封装进行去了，会出现跨域的问题
    - 在webpack配置proxy解决跨域问题
        - proxy: {
            "/proxy": {
                "target": "http://vueshop.glbuys.com/", //设置需要代理的地址
                "changeOrigin": "true", // 开启跨域
                "pathRewrite": { // 复写本地请求路径，默认会写成下面复写成''  ，这样封装ajax后所有请求都会携带进去
                "^/proxy":""
                }
            }
        },

6. 添加一个监听事件，实现滑动搜索框变色
    - 尝试了很多种获取节点的方法，最后显式一个0后就失效了
    - 分析原因：调用后销毁了该方法，然后没有被再次调用(个人猜想)，如果是这个原因可以使用use
    Effect再次调用才对
    - 解决：社区百度方法
        - useEffect(() => {
            document.addEventListener("scroll", debounce(showTop,80), true);
        },[isScroll]) 
        - 在useEffect里面再次调用
        - let x = window.document.body.scrollTop;
        - showTop里面动态获取顶部距离
    - 附加问题，添加了监听事件后去别的页面会报错
    - 内存溢出
    - 处理方式，离开的时候清除掉就行了
    - // 移除监听事件，解决内存溢出的问题
        - return () => document.removeEventListener("scroll", debounce(showTop, 80));

7. 获取路由参数
    - 路由动态传参都放在props.history.location里面

8. css全局污染
    - 配置css-loader进行CSS模块化，然后将node_module和全局样式剔除出模块化范围
    - 掘金配置记录[点击访问](https://juejin.cn/post/6967621876126318605)

9. 使用redux后发现子组件的history这些路由API不见了
    - 解决
        - 引入React-Router-dom的withRouter，然后在底部用withRouter包裹子组件就行了

10. 封装的search组件，点击后跳转到搜索内容的展示页，但是在搜索内容的展示页再次搜索对的时候搜索功能就会失效了
    - 因为跳转的是在展示页，当在展示页搜索的时候，路由已经指向了目的地，这时候就不会引发路由的刷新机制

11. 对接数据的时候发现请求数据和期待数据不一致，而且得到结果是乱码
    - 在服务器那边储存的是uncode，请求的时候进行编码，获取的时候需要进行解码就行了
        - 编码encodeURIComponent
        - 解码decodeURIComponent

## 心得
1. 写项目要大开大合,不能局限自己在项目中使用的变量和方法
    - 在过去进行导航栏切换思维是固定在点击哪个页面要CSS自动判断
    - 现在:设置不同变量记录当前是哪个页面在展示,展示的页面为true
        - 设置点击事件,导航栏三个图标绑定一个点击事件,传入自己下标,根据下标进行批量调用修改样式的函数
        - arr = [setHomeStyle, setCartStyle, setMyStyle].forEach
        - home -> index -> goPage函数

2. 样式组件在设置的动态设置样式
    - 这样子让一个组件框架可以动态复用，出现框架大致相同，，但是样式不尽相同的效果，实现代码复用，减少代码量和动态渲染

3. 多个地方会使用到搜索
    - 直接将搜索封装成一个components，然后点击的时候调用这个组件
    - 使用到搜索框的地方直接用div盒子模拟输入框，做一个假的样式，然后直接点击调用封装的搜索框

4. 封装多个store，然后用来管理不同的业务仓库

5. reducer存在刷新数据就消失，使用localStorage进行存储，数据更新的时候一起更新localStorage，然后数据初始化的时候从localStorage取出来

6. 多端适配问题
    - 在开发过程中使用的是最基础用rem进行多端适配，只需要根据设计稿自己进行媒体查询设置多种屏幕尺寸的rem就行
    - 进阶：可以使用flexible进行自动换算实现多端适配，最好在项目一开始就确定使用的技术，中途改这些挺麻烦的