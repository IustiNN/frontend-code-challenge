import Vue from 'vue'
import VueResource from 'vue-resource'
import Router from 'vue-router'
import List from '@/components/List'
import Detail from '@/components/Detail'

Vue.use(Router)
Vue.use(VueResource)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'list',
      component: List
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: Detail
    }
  ]
})
