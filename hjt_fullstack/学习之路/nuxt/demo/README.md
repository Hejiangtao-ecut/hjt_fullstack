# demo

## plugin 查件引入
1. plugins 下面建立插件文件
2. 在 plugin 中配制插件文件的路径

### 在 vue 实例中注入
- plugin
```js
plugins: [
    {src: '@/plugins/vueFunc.js'}
  ],
```

- plugins/vueFunc.js
```js
import Vue from 'vue';

Vue.prototype.$injectFunc = data => console.log("这是注入到 Vue 实例的方法", data);
```

### ### 在 context 中注入(服务端)
- plugins/ctxFunc.js
```js
/**
 * @doc 注入到 context 里面
 * @param context 服务端上下文对象，里面包含了我们需要使用的所有方法
 * @param inject 可以同时将方法注入到 context、vue实例 和 store 中
 */
export default ({app}, inject) => {
    // context 里面包含很多属性，我们只需要使用实例对象 app，直接解构
    app.contextFunc = string => console.log("在 context 中注入方法", string);
}
```

### 在 vue、context、vuex 中注入
```js
/**
 * @doc 在 vue、context、vuex 中注入
 */

export default ({ app }, inject) => {
    // 第一个参数：注入名称
    inject('allFunc', string => {
        console.log('在 vue、context、vuex 中注入', string);
    })
}
```