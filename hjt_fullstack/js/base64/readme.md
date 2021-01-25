# base 64
1. 图片性能优化
    - 减少HTTP数 lazyout throttle
    - 编解码 base64格式
        - data:img/jpg;base64

2. 网页性能优化
    - 历史  lazyload  scroll + API,减少执行次数 throttle
    - 现在  base64  无需发送请求    大图适用

3. JS 多线程的苗头 Worker 推出有一点时间了，但是还没成为主流
    - 有了多线程的能力
        - new Worker('JS 文件') 单独运行  不会阻塞主线程
    - 跟DOM 相关的事情不能做
        - worker不可以和主线程去同时操作同一个元素