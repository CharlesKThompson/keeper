import Vue from 'vue'
import Router from 'vue-router'
// @ts-ignore
import Login from '@/components/Login'
// @ts-ignore
import Home from '@/components/Home'
// @ts-ignore
import Vault from '@/components/Vault'
// @ts-ignore
import Keep from '@/components/Keep'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/vaults',
      name: 'Vault',
      component: Vault
    },
    {
      path: '/keeps',
      name: 'Keep',
      component: Keep
    }
  ]
})
