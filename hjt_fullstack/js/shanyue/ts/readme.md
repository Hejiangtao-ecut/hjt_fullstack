# 山月面试系列

1. type 为何
    - users foreach
    - 数据是users，每个用户数据不一致的话，foreach会产生问题
    - 提前分析js 里容易出错的地方，用接口或者自定义类型来要求
    - 数据源都要给他加上自定义类型
    - unknow ts的关键字
    - 当数据存在有字段不一致的，可以通过定义多个子类型 | 拼接起来，实现类型的二选一或者多选一