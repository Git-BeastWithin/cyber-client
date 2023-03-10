import { createRouter, createWebHashHistory } from 'vue-router'

// 路由组件
const Layout = () => import('@/views/Layout')
const Home = () => import('@/views/home/index')

const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      { path: '/', component: Home }
    ]
  }
]

// 创建路由实例
const router = createRouter({
  // 使用hash方式实现路由
  history: createWebHashHistory(),
  // 配置路由规则，写法和之前一样
  routes
})

export default router
