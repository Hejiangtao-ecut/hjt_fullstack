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


CREATE TABLE `post` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `content` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `userId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`),
  CONSTRAINT `post_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

- mysql 先建表 再操作
    - mongodb 可以先操作，再建表 nosql 存json

- user 业务
    1. 用user.router.ts 入口 设置POST 
    2. user.controller.ts 用户名或者密码不为空，否则会带来问题数据
        - 用户端管理数据库
        - view层数据是自由的 modul层是核心数据
    3. user.service.ts存数据
    4. user.middleware.ts 检测是否有存在的用户名？ 注册
        - POST/register 