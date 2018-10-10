<template>
  <page :title="'joykit'">
    <div slot="content">
      <good-list-render></good-list-render>
    </div>
  </page>
</template>
<script>
  // import Vue from 'vue'
  // import { mapMutations } from 'vuex'
  // import { mapGetters } from 'vuex'
  // import { mapActions } from 'vuex'
  // import Transform from 'css3transform'
  // import animate from 'animate.css'
  // import BScroll from 'better-scroll'
  import Page from '../components/page/page.vue'
  import GoodListRender from '../page-render/goods-list-render.vue'
  import {addClass} from "../../static/js/dom";

  export default {
    data() {
      return {}
    },
    mounted() {
      const vm = this
      vm.$Lazyload.$on('loaded', function ({bindType, el, naturalHeight, naturalWidth, $parent, src, loading, error}, formCache) {
        // console.log(el, src)
        // console.log(el.parentNode.parentNode)
        addClass(el.parentNode.parentNode,'animated fadeIn')
      })
    },
    methods: {},
    computed: {
      // ...mapGetters({})
    },
    watch: {},
    beforeRouteEnter(to, from, next) {
      // 在渲染该组件的对应路由被 confirm 前调用
      // 不！能！获取组件实例 `this`
      // 因为当守卫执行前，组件实例还没被创建
      next(vm => {

      })
    },
    beforeRouteUpdate(to, from, next) {
      // 在当前路由改变，但是该组件被复用时调用
      // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
      // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
      // 可以访问组件实例 `this`
      next(vm => {

      })
    },
    beforeRouteLeave(to, from, next) {
      // 导航离开该组件的对应路由时调用
      // 可以访问组件实例 `this`
      next(vm => {

      })
    },
    components: {
      Page, GoodListRender
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  /*@import "src"*/

</style>
