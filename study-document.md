# 学习文档

```
npm install --save nuxt

vue init nuxt-community/starter-template <project-name>

cd <project-name>

npm install

npm run dev

http://localhost:3000
```

* [nuxt 教程](https://zh.nuxtjs.org/guide)

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

页面使用：  
<nuxt-link to="/">Back home</nuxt-link>

Nuxt.js 会依据 pages 目录中的所有 *.vue 文件生成应用的路由配置。

看 pages 的目录结构，Nuxt.js 自动生成的路由配置；

在 Nuxt.js 里面定义带参数的动态路由，需要创建对应的以 *下划线* 作为前缀的 Vue 文件 或 目录
```
<ul class="users">
  <li v-for="user in users">
    <nuxt-link :to="'/users/'+user.id">{{ user.name }}</nuxt-link>
  </li>
</ul>

pages 目录中需要新建 users 目录 新建文件 _id.vue

```

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

## 异步数据

asyncData 方法

```
export default {
  async asyncData () {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')
    return { users: data }
  }
}
```
