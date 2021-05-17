# nginx
1. nginx解决了哪些
    1. 跨域
    2. 静态资源
2. 安装
3. conf.d 是nginx配置文件的目录
4. default.d nginx默认配置文件
5. nginx.conf
    - worker_connections 1024 最大支持多少个连接
    - 主要配置server里面的东西
6. http配置
http{
    log_format 日志格式
    access_log 日志的存储位置
    keepalive_timeout 60; 连接的超时时间，单位s

    <!-- 最重要的配置 -->
    server{
        listen 80 监听的端口
        server_name 监听的地址

        <!-- 匹配的路径 -->
        location {
            root 资源的根目录（作为静态资源代理时使用）
            expires 过期时间

            proxy_pass 转发到某个服务的地址
        }

        error_page 配置错误页
    }
}