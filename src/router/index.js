import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import xq from '@/components/xq'
import sobook from '@/components/sobook'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/xq/:id',
      name:'xq',
      component:xq
    },
    {
      path:'/sobook/:id',
      name:'sobook',
      component:sobook
    }
  ]
})
