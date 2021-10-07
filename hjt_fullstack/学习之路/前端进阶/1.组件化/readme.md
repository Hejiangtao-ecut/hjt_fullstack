## 组件化
组件化是开发的核心思想，主要是为了代码复用性

将具体通用特性的模块抽出来，将整个项目变成简单的搭积木游戏

## 组件通信
将模块抽象成一个个组件，那么就要考虑父子组件的通信，没有通信的组件是没有灵魂的，组件间良好的沟通，才能让各个组件协作，达到良好的交互体验

### 常用的组件通信

1. 属性props

```js
// child
props: { msg: string }

// parent
<child msg="data" />
```

2. 引用refs
```js
// parent 通过ref设置属性的值传递
<child ref="demo">

this.$refs.demo.msg = "data"

// child

```