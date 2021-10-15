# 前端9种跨域

## 跨域问题的产生及其价值意义

1. 数据请求分两种

    1. 同源策略请求

        - 再过去前后端不分离的时候，是没有跨域这一问题的，因为前后端都是部署在同一个机器上，直接获取就可以，那时候前端可以直接ajax 请求到数据。
        - 开发的时候使用 xampp修改本地端口就可以完成跨域请求的问题
        - 后来前端逐渐被剥离出来了，就开始出现前后端分离，这时候也就开始跨域
        - 同源定义：端口、域名、协议相同,有一个不同，就是跨域

    2. 非同源策略请求(也叫跨域)
----------

## 跨域方式

1. jsonp
    1. 请求到的数据格式一般都是 json 格式
        - 在 html 中有一部分标签加载不受跨域请求限制
            1. img
            2. script
            3. link
            4. iframe ...
    2. 原理：利用 script 加载不受域的限制的特点，从远处加载自己需要的数据
        - 客户端利用 script 标签向服务器发送请求带上回调函数，服务器接收到请求同时拿到callback
        - 服务端接收到请求，将数据 JSON 化放入 callback 中，在响应请求的时候将 callback(包含数据) 返回
    3. 缺点：
        - 这些标签都是进行资源文件请求，所以 jsonp 只能 get，不能 post 数据
        - jsonp 是通过 url?cb 进行数据请求，是直接暴露出来的，容易被劫持，返回的数据容易被注入攻击并且执行

---------

2. CORS 跨域资源共享
    1. 需要前后端配合，在 RD 方向设置允许跨域的域名，和请求方式等
    2. 参数
        ```
            //指定允许其他域名访问
            'Access-Control-Allow-Origin:http://172.20.0.206'//一般用法（*，指定域，动态设置），3是因为*不允许携带认证头和cookies
            //是否允许后续请求携带认证信息（cookies）,该值只能是true,否则不返回
            'Access-Control-Allow-Credentials:true'
            //预检结果缓存时间,也就是上面说到的缓存啦
            'Access-Control-Max-Age: 1800'
            //允许的请求类型
            'Access-Control-Allow-Methods:GET,POST,PUT,POST'
            //允许的请求头字段
            'Access-Control-Allow-Headers:x-requested-with,content-type'
        ```

    3. cors 请求在发送请求迁都会进行一个 options 请求，也叫试探性请求
        - 客户端发送 options 请求
        - 服务端接收到请求， 如果允许，就返回一个成功请求
        - 客户端接收到成功的响应后，才开始正式的请求数据
    4. 弊端
        - 虽然 Access-Control-Allow-Origin 可以自由切换单一源或者多源，但是设置为 * 支持多源的时候不能携带 cookie，单一源的时候支持 cookie 但是往往不满足需求
        - 但是 php 写的后端可以支持白名单
-----------------------
3. http proxy
    1. 方法
        - 自己在项目的 webpack 和 webpack-dev-server 配制 proxy 就好了
    2. 现在一般项目开发都用这种方法开发

-----------------------
4. nginx 反向代理
    1. 在服务器配制http_proxy即可

---------------
5. PostMessage
    - 类似于 webworker
    - 利用在 A 页面建立一个 iframe，利用 iframe 去引入获取 B 端，然后利用 postMessage 进行传送信息

----------------
6. scoket.io 

---------------
7. document.domain + iframe
    1. 只能实现同一个主域，不同子域之间的操作
    2. domain 设置成主域

---------------
8. window.name + iframe
    1. 条件
        - 设置三个页面，A、B、proxy 空页面
        - 首先 A 使用 iframe 引入 B
        - B 将数据放入 window.name
        - 然后在将 iframe 的 src 改成 proxy 的(proxy 需要和 A 在同一个子域，不跨域即可)
    2. 原理
        - 第一次加载的时候 A 请求 B 拿到 B 的 window.name
        - 然后修改 iframe 的 src 的时候，解决了跨域产生的报错问题
        - 因为 proxy 页面是一个空页面，不存在 window.name，那么 B 拿过来的 window.name 就会被保留下来
---------------
9.  location.hash
    - 了解不多