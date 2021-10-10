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
    - 这种方式至少在mounted之后才可以使用，因为父组件mounted之前子组件还没挂载完毕，在mounted之前使用会存在undefined情况导致失败
```js
// parent 通过ref设置属性的值传递
<child ref="demo">

// js
this.$refs.ref.refsData = "data"

// child
// data里面有refsData即可
data() {
      return {
          refsData: 'ref----'
      }
  },
```

3. 子元素方式
    - children里面是自定义组件的子元素
    - 子元素不保证顺序，且不是响应式(vue3中已经将此方法移除)

```js
// parent
this.$children.xxx
```

4. $emit
    - 子元素通过此方法可以触发父元素的指定方法，并且可以向父元素传值
```js
// parent
<emit @sendValue="changeValue"/>

    changeValue(value) {
      this.data1 = value;
    }

// child
this.$emit("sendValue","我是来自子元素的值");
```

5. on,emit
    - vue3 不再支持 
    - 此方法可以实现兄弟组件通信
```js
// bro1 接收，可以在created或者mounted里面一直监听
this.$parent.$on('bromsg', (e)=>{...})

// bro2 发送
this.$parent.$emit('bromsg', data);
```