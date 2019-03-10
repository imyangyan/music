import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Recommend = resolve => import('cpnts/recommend/recommend').then(module => resolve(module))

const Rank = resolve => import('cpnts/rank/rank').then(module => resolve(module))

const Singer = resolve => import('cpnts/singer/singer').then(module => resolve(module))

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    },
    {
   	  path: '/recommend',
   	  component: Recommend
    },
    {
      path: '/rank',
      component: Rank
    },
    {
      path: '/singer',
      component: Singer
    }
  ]
})
