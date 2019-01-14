import Vue from 'vue'
import VueRouter from 'vue-router'

// 引入路由
import Home from '@/components/home/Home'
import List from '@/components/list/List'
import Cart from '@/components/cart/Cart'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {path: '/', redirect: '/home'},
    {path: '/home',
      component: Home,
      children: [
        {path: '/list', component: List},
        {path: '/cart', component: Cart}

      ]
    },
    {path: '*', redirect: '/home'}

  ]
})

export default router
