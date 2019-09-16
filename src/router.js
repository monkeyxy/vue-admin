import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/route/login'
import Home from '@/route/home'
import Basic from '@/route/basic/basic'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'basic',
      component: Basic
    }, {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
