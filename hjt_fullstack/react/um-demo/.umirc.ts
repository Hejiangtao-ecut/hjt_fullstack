import { defineConfig } from 'umi';
export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      name: '空白页面',
      path: '/demo1',
      component: './Demo1',
    },
    {
      name: '注册页',
      path: '/userregister',
      component: './UserRegister',
    },
    {
      path: '/',
      component: '@/pages/index',
    },
    {
      path: '/about',
      component: '@/pages/about',
    },
  ],
  fastRefresh: {},
  antd: {},
  dva: {},
});
