import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'
import Info from '@/components/Info'
import Salary from '@/components/Salary'
import Leave from '@/components/Leave'
import Recruit from '@/components/Recruit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      redirect: '/info',
      name: 'Home',
      component: Home
    },
    {
      path: '/info',
      name: 'Info',
      component: Info
    },
    {
      path: '/salary',
      name: 'Salary',
      component: Salary
    },
    {
      path: '/leave',
      name: 'Leave',
      component: Leave
    },
    {
      path: '/recruit',
      name: 'recruit',
      component: Recruit
    }
  ]
})
