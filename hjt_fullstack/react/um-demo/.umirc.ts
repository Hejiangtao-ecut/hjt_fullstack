import { defineConfig } from 'umi';
export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      name: '空白页面',
      path: '/emptypage',
      component: './EmptyPage',
    },
    {
      path: '/',
      component: '@/pages/index',
    },
    {
      path: '/about',
      component: '@/pages/about',
    },
    {
      path: '/login',
      component: '@/pages/login',
    },
  ],
  fastRefresh: {},
  antd: {},
  dva: {},
});
