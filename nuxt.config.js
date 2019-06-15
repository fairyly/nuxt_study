import pkg from './package'

export default {
  mode: 'spa', // 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content:
          'width=device-width, initial-scale=1.0, maximum-scale=1.0,minimum-scale=1.0,user-scalable=0'
      },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    /* 移动端适配 */
    /* script: [
      {
        src: 'http://g.tbcdn.cn/mtb/lib-flexible/0.3.4/??flexible_css.js,flexible.js',
        type: 'text/javascript',
        charset: 'utf-8'
      }
    ], */
    // 不对<script>标签中内容做转义处理
    __dangerouslyDisableSanitizers: ['script']
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: ['ant-design-vue/dist/antd.css', '~assets/css/base.css'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['@/plugins/antd-ui', '~/plugins/axios'],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios'
    // '@nuxtjs/pwa'
  ],
  /*
   ** Axios module configuration
   */
  axios: {
    baseURL: 'https://cnodejs.org/api/v1'
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    // 移动端适配
    /* postcss:[
      require("postcss-px2rem")({
        remUnit: 75
      })
    ], */
    /* postcss: {
      plugins: {
        'postcss-pxtorem': {
          // 屏幕大小 / 10
          rootValue: 37.5,
          propList: ['*', '!border*']
        },
        autoprefixer: {
          browsers: ['Android >= 4.0', 'iOS >= 7']
        }
      }
    }, */
    vendor: ['axios'] // 为防止重复打包
  }
}
