import { createRouter,createWebHistory } from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import Layout from '@/layout/index.vue'
const routerWebHistory = createWebHistory()
const router = createRouter({
    history:routerWebHistory,
    routes:[
        {
            path:'/',
            component:HelloWorld
        },
        {
            name: 'home',
            path: '/home',
            component: Layout,
            children: [
              {
                name: 'chatWindow',
                path: '/chatWindow',
                component: () => import('@/views/home/chatWindow.vue'),
                queryParams: {
                  item: {},
                },
              },
            ],
          },
          {
            name: 'LOGIN',
            path: '/login',
            component: () => import('@/views/login/index.vue'),
            meta: {
              title: '登录页',
            },
          },
    ]
});
export default router;