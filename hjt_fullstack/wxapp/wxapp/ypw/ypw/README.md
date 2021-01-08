# 云开发 quickstart

这是云开发的快速启动指引，其中演示了如何上手使用云开发的三大基础能力：

- 数据库：一个既可在小程序前端操作，也能在云函数中读写的 JSON 文档型数据库
- 文件存储：在小程序前端直接上传/下载云端文件，在云开发控制台可视化管理
- 云函数：在云端运行的代码，微信私有协议天然鉴权，开发者只需编写业务逻辑代码

## 参考文档

- [云开发文档](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/basis/getting-started.html)

# 向樱空学习， 技术实力。
1. 框架 
    - weui 让小程序更像原生微信的框架，比vant小一些
2. 导航的自定义
3. 全局引入组件
    - app.js  app.wxss app.json
4. 全局启用下拉更新  onPulldownRefresh  耗时操作 stop  模仿app中的下拉刷新
    - 在列表页面启动，会更好  详情页没必要
5. 图片都放images会使小程序变大，放到cdn下，云储存，云中地址  减小程序包的体积
6. color-ui 随心随性
    - flex justify-center padding
    - text-white text-blue
    - margin-tb-sm  lg text-xl