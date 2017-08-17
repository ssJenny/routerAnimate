// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import vueg from 'vueg'
import 'vueg/css/transition-min.css'


Vue.config.productionTip = false

Vue.use(Vuex)
Vue.use(vueg, router, {
  forwardAnim: 'fadeInRight'
})


const store = new Vuex.Store({
  state: {
    page: {
      forwardAnim: 'slideInRight',
      duration: '0.8',
      backAnim: 'slideInLeft'
    }
  },
  mutations: {
    setState(state, val) {
      state[val.key] = val.value
    }
  }
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
