module.exports = {
  /*
  ** Headers of the page
  */
  css: [
    '~/assets/shoelace.css'
  ],

  plugins: [
    { src: '~/plugins/vue-scrollactive'}
  ],

  head: {
    title: 'usableinterface',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Source+Code+Pro:400,700' }
    ],
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#ff5252' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    postcss: {
      plugins: {
      // Customize `postcss-cssnext` default options
      'postcss-cssnext': {
        features: {
          rem: false,
          customProperties: false
          }
        }
      }
    },

    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
