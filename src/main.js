// vue 和 vue的插件
import Vue from 'vue'
import App from './components/App'// 路由入口
import router from './router'

Vue.config.productionTip = false

Vue.use(router)

const vm = new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

Vue.use({
  vm
})
