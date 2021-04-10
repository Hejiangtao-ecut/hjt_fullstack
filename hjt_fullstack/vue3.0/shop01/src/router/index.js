import { createRouter, createWebHistory } from 'vue-router';
// import Login from '../views/Login';

const routes = [
  {
    path: '/login',
    name: 'login',
    component:()=>import('@/views/Login')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
