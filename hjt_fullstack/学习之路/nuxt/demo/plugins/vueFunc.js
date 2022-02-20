/**
 * @doc 在 vue 中注入
 */

import Vue from 'vue';

// 必须加$符号
Vue.prototype.$injectFunc = function (data) {
     console.log("这是注入到 Vue 实例的方法", data);
}