import Vue from 'vue'
import Router from 'vue-router'
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
          path: '',
          component: Index,
          name:'index'
        },
        {
          path: '/pageA',
          component: PageA,
          name:'pageA'
        },
        {
          path: '/pageB',
          component: PageB,
          name:'pageB'
        },
      ]
})
