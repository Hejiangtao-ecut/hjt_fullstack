# redux
## redux 
1. 什么是redux
    - redux是js状态容器，提供可以预测化的状态管理。相当于vue中vuex，可以跨组件，跨页面推送数据
    - 应用场景，如购物车、登录等跨页面模块
2. 思想
    - redux的基本思想是整个应用的state保持在一个单一的store中。store就是一个简单的JS对象，而改变state的唯一方式就是在应用中触发actions，然后为这些actions编写reducer来修改state。整个state转化是在reducer中完成，并且不应该有任何副作用。
    - 由flux演化而来，避开了flux的复杂性