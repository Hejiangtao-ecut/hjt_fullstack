# ls

1. ls 是如何运作的，哪些常用的参数？
    - 在Linux里，一切皆文件
        - ls 文件列表  ls/ /path 根路径
    - 理解根目录一些意义
        - /bin binary 二进制命令行、命令文件  PATH ls cat
        - /dev device
        - etc 配置文件 MySQL ngnix
            - host 文件用来配置在哪个场景下引用的
        - /usr 

2. drwxr-xr-x
    - 第一位是文件类型  d 是目录  -普通文件
    - rwx 第二到四位  权限   rwx read write 执行
    - 5-7 表示用户具有的权限
    - 8-10 表示 表示其他用户具有的权限 