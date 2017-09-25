module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxtdemo',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'test' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
    'element-ui/lib/theme-default/index.css'
  ],
  babel: {
    plugins: [['component', [{
      libraryName: 'element-ui',
      styleLibraryName: 'theme-default'
    }]]]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    vender:[
      'element-ui','axios'
    ],
  },
  plugins: [
    { src: '~plugins/element-ui.js',ssr: true}
  ],
}