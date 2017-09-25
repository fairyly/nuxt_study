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
中间件:  
中间件允许您定义一个自定义函数运行在一个页面或一组页面渲染之前。  
每一个中间件应放置在 middleware/ 目录。文件名的名称将成为中间件名称  
中间件可以异步执行,只需要返回一个 Promise 或使用第2个 callback 作为第一个参数：
如：
```
middleware/stats.js

import axios from 'axios'

export default function ({ route }) {
  return axios.post('http://my-stats-api.com', {
    url: route.fullPath
  })
}
然后在你的 nuxt.config.js 、 layouts 或者 pages 中使用中间件:

nuxt.config.js

module.exports = {
  router: {
    middleware: 'stats'
  }  
}
stats 中间件将在每个路由改变时被调用。

中间件demo：https://github.com/nuxt/example-auth0

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

fetch 方法用于在渲染页面前填充应用的状态树（store）数据， 与 asyncData 方法类似，不同的是它不会设置组件的数据
```
export default {
  fetch ({ store, params }) {
    return axios.get('http://my-api/stars')
    .then((res) => {
      store.commit('setStars', res.data)
    })
  }
}
```

## 状态树

根目录新建 store 目录，新建文件 index.js
```
普通方式：

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () => new Vuex.Store({

  state: {
    counter: 0
  },
  mutations: {
    increment (state) {
      state.counter++
    }
  }
})

export default store

组件中使用
<button @click="$store.commit('increment')">{{ $store.state.counter }}</button>

模块方式：
new Vuex.Store({
  state: { counter: 0 },
  mutations: {
    increment (state) {
      state.counter++
    }
  },
  modules: {
    todos: {
      state: {
        list: []
      },
      mutations: {
        add (state, { text }) {
          state.list.push({
            text,
            done: false
          })
        },
        remove (state, { todo }) {
          state.list.splice(state.list.indexOf(todo), 1)
        },
        toggle (state, { todo }) {
          todo.done = !todo.done
        }
      }
    }
  }
})

组件中使用
<template>
  <ul>
    <li v-for="todo in todos">
      <input type="checkbox" :checked="todo.done" @change="toggle(todo)">
      <span :class="{ done: todo.done }">{{ todo.text }}</span>
    </li>
    <li><input placeholder="What needs to be done?" @keyup.enter="addTodo"></li>
  </ul>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  computed: {
    todos () { return this.$store.state.todos.list }
  },
  methods: {
    addTodo (e) {
      this.$store.commit('todos/add', e.target.value)
      e.target.value = ''
    },
    ...mapMutations({
      toggle: 'todos/toggle'
    })
  }
}
</script>

<style>
.done {
  text-decoration: line-through;
}
</style>
```
