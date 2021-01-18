# Linux + docker + k8s
1. git bash 是一个小型的Linux
    - readme.md文件系统输出到 命令行
        - cat + 文件名.后缀名  文件内容输出
        - cat -n 带行号输出
        - seq 序列
    - 基于996 文件 找到996开头的内容
        - 正则 + linux grep
         -grep -rn '内容'
         - | 管道  \| 转义成||
         - ^ 非    [\^] 转义字符，转译成^
         - grpe -E 查找   -v 反向查找，和^ 作用相同   