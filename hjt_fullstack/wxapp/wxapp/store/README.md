# 商店小程序
application <- page <- components <- 原子组件
1. 首页设计店面营业/打烊的需求
2. 页面功能
    - 搜索、swiper、列表、组件
    - 轮播图
        - 大项目页面比较长，用组件把他封装出去，就没有那么长了，提高复用性
3. tab切换
    1. 设备数据 tab 状态切换 activTypeId
    2. 多个type 放到数据里
    - CSS flex 1/4
4. 数据库设计
    - fruit-board
    - myClass 0 1 2 3
    - onShow 是否上架
    - swiper 详情页
    - 封装云开发数据
        1. app.js 是公用js的地方