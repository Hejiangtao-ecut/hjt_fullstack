# 全栈 node+ts
- 数据库
    - 端口通信，3306(默认端口) -> 3000
        - 像node fs http模块，比较复杂
    - MVC
        - 数据库 -> Modul -> Controller -> Router(API) post
        - custom -> http -> req(url) -> router -> controller -> Modul -> mysql2    
    - posts add
        - controller -> restful 路径
            - POST /posts
        - router
        - controller
        - Modul  大项目中叫service

- 单点入口 
    - main -> app ->post  只有一个入口