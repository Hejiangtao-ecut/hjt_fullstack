# 面试官为什么会问这些
1. JS 异步问题 callback -> promise -> generator -> await
2. 手写体的代表
    - new object.create  clone(深拷贝和浅拷贝)
3. 复杂 容易产生压制性打击、灵魂拷问

- promise有几种状态
    - 三种状态 pending 未完成 fulfilled 完成状态 rejected 失败状态
        - promise的核心就是状态转移的编程
        - 只会从未完成态向完成态或失败态转化
        - promise 状态一旦转化，将不能更改
- promise A+规范
    - 