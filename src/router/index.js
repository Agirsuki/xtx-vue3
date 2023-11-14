// createRouter 创建路由实例 
// createWebHistory 创建 history 模式路由
import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/views/Layout/index.vue'
import Home from '@/views/Home/index.vue'
import Category from '@/views/Category/index.vue'
import SubCategory from '@/views/SubCategory/index.vue'
import Detail from '@/views/Detail/index.vue'

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
            path: '/',
            component: Layout,
            // redirect: '/home',
            children: [
                { path: '', component: Home },
                { path: '/category/:id', component: Category },
                { path: '/category/sub/:id', component: SubCategory },
                { path: '/detail/:id', component: Detail }
            ]
        },
        {
            path: '/login',
            component: () =>
                import ('@/views/Login/index.vue')
        }
    ],
    scrollBehavior: () => ({
        top: 0
    })
})

export default router