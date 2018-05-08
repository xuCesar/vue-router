import Vue from 'vue'
import Router from 'vue-router'
import HomeView from '@/components/HomeView'
import DocView from '@/components/DocView'
import AboutView from '@/components/AboutView'

import study from '@/views/study'
import work from '@/views/work'
import hobby from '@/views/hobby'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  linkActiveClass: 'is-active',
  routes: [
    {
      path: '/',
      component: HomeView
    },
    {
      path: '/home',
      name: 'HomeView',
      component: HomeView,
      alias: '/index'
    },
    {
      path: '/doc',
      name: 'DocView',
      component: DocView
    },
    {
      path: '/about',
      component: AboutView,
      children: [
        {
          path: '',
          name: 'AboutView', // 默认子路由
          component: study
        },
        {
          path: '/work',
          name: 'work',
          component: work
        },
        {
          path: '/hobby',
          name: 'hobby',
          component: hobby
        }
      ]
    },
    {
      path: '*',
      // component: notFound,
      // redirect: '/home',
      // redirect: { path: '/home' }
      // redirect: { name: 'HomeView' }
      redirect: (to) => {
        console.log(to)
        if (to.path === '/123') {
          return '/home'
        } else if (to.path === '/456') {
          return { path: '/doc' }
        } else {
          return { name: 'AboutView' }
        }
      }
    }
  ]
})

export default router
