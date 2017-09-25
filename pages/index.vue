<template>
  <section class="container">
    <div>
      <logo/>
      <h1 class="title">
        nuxtdemo
      </h1>
      <button @click="$store.commit('increment')">{{ $store.state.counter }}</button>
      <img src="~assets/addshow.jpg" alt="">
      <el-button>默认按钮</el-button>
      <el-switch
        v-model="value1"
        on-text=""
        off-text="">
      </el-switch>
      <nuxt-link to="/users/">About page</nuxt-link>
      <h2 class="subtitle">
        test
      </h2>
      <nuxt-child :key="$route.params.id"/>
      <div class="links">
        <a href="https://nuxtjs.org/" target="_blank" class="button--green">Documentation</a>
        <a href="https://github.com/nuxt/nuxt.js" target="_blank" class="button--grey">GitHub</a>
      </div>
    </div>
  </section>
</template>

<script>

import 'element-ui/lib/theme-default/index.css'
import Logo from '~/components/Logo.vue'

export default {
  // layout: 'blog',
  components: {
    Logo
  },
  data () {
    return {
      value1: true
    }
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
