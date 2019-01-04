import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/views/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"*",redirect:"/index"
    },
    {
      path: '/',
      name: 'index',
      component: Index
    }
  ]
})
