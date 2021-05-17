# SQL基础
1. 创建表
    - create table STUDENT(
        `SID` BIGINT AUTO CREAMENT,
        `NAME` VARCHAR(20),
        `SEX` VARCHAR(2) NOT NULL,
        `AGE` TINYINT DEFAULT'18' COMMENT '年龄',
        PRIMARY KEY(`SID`),
        ENGINE=INNODB DEFAULT CHARSET=UTF-8 MB4;
    )
2. 插入数据
    - INSERT INTO STUDENT (NAME,SEX,AGE) VALUES ('TOM',1,21)
3. 更新数据
    - UPDATE STUDENT SET `SEX`=0 WHERE `NAME` = 'TOM'
4. 删除数据
    - DELETE FROM STUDENT `NAME` = 'TOM'
    - 删除数据库或者表
        - DROP TABLE 'STUDENT'
        - DROP DATABASE 'ECUT'
5. 查询
    - SELECT COUNT FROM STUDENT WHERE SEX = 0
        - SUM 加法
        - count 计数
6. join
    - SELECT A.NAME B.CLASS  B.POINT FROM STUDENT AS A JOIN LESSON AS B ON A.LESSONID = B.ID WHERE AGE = 18

# 数据库事务
1. 什么是事务
    - 事务就是要保证一组数据库操作要么全部成功，要么全部失败
    - 银行取钱同时操作
    - 如果事务中一个操作失败就进行数据回滚
    - 不是所有的数据库引擎都支持事务
        - MyISAM不支持，InnoDB支持
    - 事务的四个性质ACID
        1. A 原子性 要么全部成功，要么全部失败
        2. C 一致性 事务在执行前后状态保持一致
        3. I 隔离性 一个事务在提交前是否能被其他事务可见
            1. 读未提交
            2. 读提交
            3. 可重复度
            4. 串行化
        4. D 持久性 一旦一个事务提交了那就这个改变是永久性
2. 事务隔离提交具有四种
    1. 读未提交
        - 一个事务还没有提交，其他事务能够看到他做的变更
    2. 读提交
        - 一个事务提交之后，其他事务才能看到变更
    3. 可重复读
        - 视图，一个事务在执行过程中看到的数据，总是跟这个事务在启动时看到的数据一致
    4. 串行化
        -  事务不可并行执行，事务必须排队轮流执行
3. 事务的启动方式
    1. 显式启动事务，begin启动，commit提交，rollback回滚
    2. 程序自动提交事务，中间件框架
4. 锁
    1. 全局锁
        - 加在数据库的锁
        - 对业务有影响，不能做其他操作
        - 对数据库做全库备份的时候应用，这种情况只针对没有事务特性的引擎MyISDB
            - INNODB如何备份
                - 导出数据前启动一个事务，拿到一致性视图，这个过程中数据库可以正常更新事务，业务不受影响
    2. 表锁
        - 加在表上的
            - 读锁
                - 在读的过程中限制写操作，防止出现幻读，加了读锁就不能加写锁，但是可以多个事务加多个读锁
            - 写锁
                - 一旦加上写锁其他事务无法加上读锁和写锁，避免同时独写操作
            - 元数据锁
                - 访问一张表的时候自动触发的锁，在事务中
    3. 行锁
        - 行锁可以锁一行或者多行记录
        - INNODB是针对索引加的锁
        - 特性
            - 并发性比较高
            - 会出现死锁
        - 如果出现死锁怎么办
            - 死锁检测，发现有死锁出现时，主动回滚某一个事务，让其他事务继续运行
            - 启用超时机制，事务超时回滚
5. 脏读
    - B读取A未提交的数据
6. 幻读 行增加
    - 同一个事物多次读取，数据总量不一样
    - 可重复读性出现问题
    - 针对insert和delete操作
7. 不可重复读 列的内容发生更改
    - A事务执行的过程中由于A事务比较大，需要长时间读取同一条数据，另一个事务修改后A再次读取后变成最新的数据，导致两次读取的数据不一致且无法读取到之前的数据
    - 针对update操作