import Vue from 'vue'
import Router from 'vue-router'
import HomeView from '@/components/HomeView'
import DocView from '@/components/DocView'
import AboutView from '@/components/AboutView'
import UserView from '@/components/UserView'

import study from '@/views/study'
import work from '@/views/work'
import hobby from '@/views/hobby'
import side from '@/views/side'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  linkActiveClass: 'is-active',
  scrollBehavior (to, from, savePosition) {
    // 路由记录上一次浏览位置
    // if (savePosition) {
    //   return savePosition
    // } else {
    //   return {x: 0, y: 0}
    // }
    // 通过锚点定位上一次浏览位置
    // if (to.hash) {
    //   return {
    //     selector: to.hash
    //   }
    // }
  },
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
      components: {
        default: DocView,
        side: side
      }
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
          path: 'work',
          name: 'work',
          component: work
        },
        {
          path: 'hobby',
          name: 'hobby',
          component: hobby
        }
      ]
    },
    {
      path: '/user/:uid?',
      component: UserView
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
