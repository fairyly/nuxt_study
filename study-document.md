# 学习文档

SSR: 服务端渲染（Server Side Render）

## 使用模板

```
在 components 新建一个模板文件：Logo.vue

在 pages 目录下的文件中引入模板
<template>
  <section class="container">
    <div>
      <logo/>
    </div>
  </section>
</template>
import Logo from '~/components/Logo.vue'
export default {
  components: {
    Logo
  }
}
```

## 路由

<nuxt-link to="/">Back home</nuxt-link>

看 pages 的目录结构，Nuxt.js 自动生成的路由配置；

在 Nuxt.js 里面定义带参数的动态路由，需要创建对应的以 *下划线* 作为前缀的 Vue 文件 或 目录

## 安装使用插件

安装 axios 和 element-ui

```
npm install --save axios
npm install --save element-ui

配置 nuxt.config.js
module.exports = {
  css: [
    'element-ui/lib/theme-default/index.css'
  ],
  build: {
    vender:[
      'element-ui','axios'
    ],
  },
  plugins: [
    { src: '~plugins/element-ui.js',ssr: true}
  ],
}

在根目录新建 plugins 目录，新建文件 element-ui.js
import Vue from 'vue'
import Element from 'element-ui'
Vue.use(Element)

```
