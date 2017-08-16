import Vue from 'vue'
import Router from 'vue-router'
import Animate from '@/components/animate'
import Index from '@/components/index'
import PageA from '@/components/pageA'
import PageB from '@/components/pageB'

Vue.use(Router)


Router.prototype.goBack = function () {
  this.isBack = true
  window.history.go(-1)
}

export default new Router({
  routes: [
    {
      path: '/',
      component: Animate,
      children: [
        {
          path: '',
          component: Index
        },
        {
          path: 'pageA',
          component: PageA
        },
        {
          path: 'pageB',
          component: PageB
        }
      ]
    }
  ]
})
