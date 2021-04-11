import { createRouter, createWebHistory } from 'vue-router';
// import Login from '../views/Login';
import Home from '../views/Home.vue';

const routes = [{
  path: '/',
  redirect:'/Home'
},{
  path: '/home',
  name: 'Home',
  component:Home
},{
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
