# vuex
1. 使用vuex的好处
    - 能在vuex中集中管理共享的数据，易于开发和后期维护
    - 能够高效实现组件之间的数据共享，提高开发效率
    - 存储在vuex中的数据都是响应式的，能够实时保持数据与页面的同步

## vuex核心概念
### 1. state
1. state是数据管理中心，所有要管理的数据都放在state里面储存
2. 语法
    - const store = new Vuex.Store({ // 这里可以放多个不同的state进行管理 })
3. 组件访问state数据的方式
    1. this.$store.state...
        - 在template里面可以省略this关键字
    2. 组件按需导入(推荐)
        - 在vuex中导入mapState
            - import { mapState } from 'vuex'
        - 将全局数据映射为当前数据的计算属性
### 2. getter
1. 基于state，返回里面的属性，丰富状态的读操作
2. 用于对state数据进行加工处理返回新数据，类似于computed
3. state的数据变化，getter获取的数据也会响应式改变
4. 获取方式
    1. 原生方式
    2. mapGetter按需加载

### 3. action
1. 处理异步操作，必须通过action处理，不可以在mutation里面进行异步操作，然后触发commit 
2. 间接触发修改的方法，因为vuex不让直接action修改，需要commit到Mutation里面
3. 触发的方式
    1. this.$store.dispatch('方法名') 原生的方法
    2. mapActions 按需加载

### 4. Mutation
1. 只有mutations才可以进行state的写操作，但是需要由Actions触发
2. 通过这种方法操作数据使得比较繁琐，但是可以集中监控数据的修改
3. 组件触发的方式
    1. this.$store.commit('add'，val)  原生方法
        - 一切Mutations操作都是需要commit到mutations的
        - add 为需要调用mutations里面的方法
        - val 为需要传递的参数
    2. mapMutations 从vuex中按需导入的方式
        - import { mapMutations } from 'vuex'
        - 然后映射为组件自己的方法，然后直接当成自己的方法调用就可以
            - ```   methods: {
                        ...mapMutations(['sub', 'subN'])
              ```
4. mutation里面不可以写异步的代码，虽然系统不会出现问题，但是vue的调试工具会出现数据不同步问题，异步放在action里面处理