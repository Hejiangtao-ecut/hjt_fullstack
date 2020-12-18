1. HTTP协议
    - TCP/IP  HTTP是上层
    - Web Server RestFul

    - JSON 资源 ， HTTP 提供服务  R请求 Q响应
    - HTTP构成：
        - url: http://127.0.0.1/players.json
        - 动作 GET 
        - live-server 静态资源
        - json-server 

        - url -> resources
    
    - 跨域
        - 域名不一样
        - 端口不一样
        - json-server 自带跨域能力
        - js 不允许跨域
        - 解决方案
            - JSON with padding
        
        - 使用DOM 编程， document.createElemt("script")
            > document.body.appendChild(script);
        script.src = "https://www.runoob.com/try/ajax/jsonp.php?jsoncallback=callbackFunction";


- 用前端实现底层
    1. fetch Promised thenable 去服务器端通信
        - HTTP 底层协议
        - 请求响应 url+method
        - 数据格式 JSON
        - 跨域 保护数据-安全
            - json-server 多用于本地 自带跨域
            - JSONP解决方法 fn(data) 在页面端预留一个函数fn（包装）
                - response 来到客户端 
                - script 返回一个 fn（data）
    2. DOM API
        - tree
        - document.createElement（）
        - 父节点.append（字节点）
        - document.createTextNode()
        - 代码有一定的功能区分时，写函数
        - createUserElement = (user) =>{
            const user = createElement;
            return user;
        }
