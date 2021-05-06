# 数据库索引
1. 索引类别
    1. 普通索引
        - create index idX_name on tableName(column)
    2. 唯一索引
        - create unique index idX_name on tableName(column)
    3. 主键索引
        - create primary index idX_name on tableName(column)
        - 是不存在的，创建表的时候就指定，或者添加指令
            - alter table tablename add primary key(col)
    4. 联合索引
        - create index idX_name on tableName(col1,col2)
2. 删除索引
    1. drop index idx_name on tablename;
    2. drop unique index idx_name on tablename;
3. 建表
    1. create table tablename(
        s-id:int primary key,
        s-name:varchat(10)
    )
4. 常见索引结构：
    1. 二叉搜索树
        - 时间复杂度 O(logN)
        - 要求是每个节点的左子树小于父节点，右子节点大于父节点，查询效率较高，
    2. 有序序列
        - 可以区间查询，但增加删除记录性能低，需要每次都挪动数据，一般用于静态数据，对静态数据做索引
    3. 哈希表
        1. 键值对方式存储，只适用于等值查询，无法区间查询，比如redis(key-value型数据库)
5. mysql索引类型
    1. innodb
        - b+树
    2. myisam
        - b树
        - 区别
            - B树每个节点都会存储数据，B+树只有叶子节点会有数据
            - B+树每个叶子节点都会通过链表连接，能够很快实现区间查询
            - B树可以在非叶子节点结束查找，最好情况是O(1)，但是B+树的时间复杂度是O(logN)
            - B树的插入性能比B+树更高
6. 三大范式
    1. 1NF 原子性，每一列都不可再分
    2. 2NF 唯一性，每一列都与主键相关
    3. 3NF 独立性，非主键字段互相独立，不能存在可以被其他字段推导出的字段，减少数据冗余