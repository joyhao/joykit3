// vue 和 vue的插件
import Vue from 'vue'
import App from './components/App'// 路由入口
import router from './router'
import VueLazyload from 'vue-lazyload'

Vue.config.productionTip = false

Vue.use(router)
Vue.use(VueLazyload, {
  preLoad: 1,
  loading: '../static/image/circles.svg',
  lazyComponent: true,
  attempt: 1
})


const vm = new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

Vue.use({
  vm
})
