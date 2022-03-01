# gulp
浅浅复习一下 gulp，准备开启自己项目的自动化脚本构建之路

## 启航
1. 安装依赖
    - npm 安装 gulp 进行项目支持
2. 创建 gulp 脚本文件
    - gulpfile.js
3. 创建 default task
    - 这个任务分支会作为执行分支
4. 每个任务结束需要进行结束回调
    - 分支的回调会接受一个 done。调用即可，异步任务可以不需要调用，同步任务需要调用否则无法判断 task 是否结束
5. 配制任务
    - 在 package.json 里面 scripts 添加自己需要的 gulp 脚本名字 