# react + ts
1. logo
        - webpack bundler 一切静态资源皆可打包
2. DisplayData
    - ts 展示数据
        - 异步/同步 promise + ts
        - api 模块化
        - ts model
        - menber 数组
            - js [] ts type[]

3. react 项目的目录架构，如何理解
    - 小项目，那么没过多的要求， webpack index.ts -> app -> component
    - 大项目  react 全家桶组织，MVVM -> SPArouter + 数据管理Rudux
        - /api 请求管理
        - /pages 自由级别组件
        - /model ts 独有的，对所有的数据做interface

4. ts + react 
    1. 组件要有数据 生命周期来请求
    2. /api 提供了menbers.fetchMember
    3. 返回then.able的数据
    4. api 定义的时候 promise.resolve() thenable return data
    5. ts 要对api 请求方法做类型的检查 返回值
        - ：promise<MemberEntity>
    6. model 提供了对MemberEntity定义