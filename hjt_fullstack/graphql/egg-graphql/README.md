面试用来吹水

后端node API开发
    - restful 一切皆资源，资源状态转换，CRUD 不同的HTTP动词来对应
        - 虽然还是主流，但是已有了代替方案，更适合搞前端数据需求的Graphql来了

1. egg.js + mysql 把一个CRUD 做出来  RESTFUL /user 用户列表拿出来
    - mysql 驱动  plugins
        - mysql2 更方便的驱动MySQL
        - sequelize cli 从生成表到数据迁移->model 合成
2. egg.js + graphql 做的更漂亮


- 以插件及配置的方式，将mysql的操作交给sequelize来处理
    - 数据库创建
    - 数据迁移、建立表格、加数据，都不需要写sql
        - 加速 需要会MySQL，但是还是要交给专业的数据工程师DBA
        - sequelize 可以让我们更加规范数据库的操作流程、且更加简单
- sequelize-cli 规范数据库迁移工作
    - 命令行工具、写命令

- 数据库开发的时候，建表 加假数据 模型定义文件 MVC 
    - sequelize 规范 migrations 一切操作留下痕迹，以后有没有加字段，为什么要加git 一样是为了留下版本

- sequelize 有几步
    - init:config 初始化得到配置文件
    - init:migrations migrations配置文件
    - npx sequelize migration:generate--name=init-users 数据库迁移、加表、加字段
    - npx sequelize db:migrate 执行迁移 只要复制，创建表只要写 JSON就可以