<template>
  <section class="container">
    <transition :name="page">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
    </transition>
    <transition :name="page">
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </transition>
  </section>
</template>
<script>

export default {
  data () {
    return {
      page: ''
    }
  },
  methods: {},
  mounted () {
    const vm = this

  },
  computed: {},
  watch: {
    $route (to, from) {
      var fg = to.path.includes('detail') || to.path.includes('projectList')
      var lg = from.path.includes('detail') || from.path.includes('projectList')

      if (fg) {
        this.page = 'fadeIn'
      } else if (lg) {
        this.page = 'fadeIn'
      } else {
        this.page = 'fadeIn'
      }
    }
  },
  components: {

  }
}
</script>
<style lang="scss">
</style>
