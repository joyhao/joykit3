import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'hash',
  base: __dirname,
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: resolve => void (require(['@/view/home.vue'], resolve)), // 懒加载
      meta: {
        title: 'news',
        keepAlive: true,
        footerShow: true
      }
    },
    {
      path: '*',
      component: resolve => void (require(['@/view/404.vue'], resolve)), // 懒加载
      meta: {
        title: '404',
        keepAlive: true,
        footerShow: false
      }
    }
  ]
})

// document title change
router.afterEach((route) => {
  document.title = route.meta.title || 'joykit'
  if (navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
    // let src = './static/fixrouter.html?' + Math.random()
  }
})
export default router
