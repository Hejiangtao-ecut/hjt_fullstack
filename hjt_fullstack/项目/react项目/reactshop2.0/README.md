# react shop
## **1. 项目介绍**
1. 这是一个纯前端react项目，基于线上的接口文档进行二次复写自己的项目，数据来源于线上

## **2. 项目架构**
一个好的架构可以让整个项目更加清晰有条理，便于开发和后期再次阅读

### **2.1 目录结构**
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
        - routes
            - private 复写了private路由，router官网的authRouter耦合度过高，我只需要里面最简单的路由认证功能
        - user  个人主页
            - index  主页的首页,由底部导航栏进入

## **3. 项目编写**
1. 最外层交给router管理，负责整个项目的页面导向
2. 路由
    - /home 主页
        - /index 首页
        - /cart 购物车
        - /my 我的
    - 默认重定向去首页  config.path+'home/index'

## 遇见的问题
1. 在最开始配置路由的时候，因为router是4.0版本，使用路由懒加载出现了不兼容问题
    - 解决React路由跳转时出现的红色警告： Warning: Failed prop type: Invalid prop `component` of type `object` supplied to `Route`, expected `function`.
    - 解决方法，讲router-dom更新到最新的5.+就可以解决
    - 原因分析：lazy方法出现的时间不久，对过去比较老的版本兼容有问题
    - 补充:也可以使用官方提供的路由异步加载

2. 多媒体适配办法
    - 在public.css里面进行媒体查询,然后设置不同的字体大小就可以进行媒体适配


## 心得
1. 写项目要大开大合,不能局限自己在项目中使用的变量和方法
    - 在过去进行导航栏切换思维是固定在点击哪个页面要CSS自动判断
    - 现在:设置不同变量记录当前是哪个页面在展示,展示的页面为true
        - 设置点击事件,导航栏三个图标绑定一个点击事件,传入自己下标,根据下标进行批量调用修改样式的函数
        - arr = [setHomeStyle, setCartStyle, setMyStyle].forEach
        - home -> index -> goPage函数