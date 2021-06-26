export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  baseUrl: 'https://shobujbazar.com/api',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Shobuj Bazar',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/images/favicon.ico', async: true },
      { hid: 'main', rel: 'stylesheet', href: '/css/bootstrap.min.css', async: true },
      { hid: 'main', rel: 'stylesheet', href: '/css/font-awesome.min.css', async: true },
      { hid: 'main', rel: 'stylesheet', href: '/css/elegent.min.css', async: true },
      { hid: 'main', rel: 'stylesheet', href: '/css/plugins.css', async: true },
      { hid: 'main', rel: 'stylesheet', href: '/css/helper.css', async: true },
      { hid: 'main', rel: 'stylesheet', href: '/css/main.css', async: true },
      { hid: 'main', rel: 'stylesheet', href: '/css/custom.css', async: true },
    ],
    script: [
      { hid: 'main', src: '/js/vendor/modernizr-2.8.3.min.js', async: true },
      { hid: 'main', src: '/js/vendor/jquery.min.js', async: true },
      { hid: 'main', src: '/js/popper.min.js', async: true },
      { hid: 'main', src: '/js/bootstrap.min.js', async: true },
      { hid: 'main', src: '/js/plugins.js', async: true },
      { hid: 'main', src: '/js/main.js', async: true },
      { hid: 'main', src: '/js/custom.js', async: true },
      { hid: 'main', src: 'https://unpkg.com/vue-slick-carousel', async: true },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~assets/css/custom.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    'nuxt-izitoast'    
  ],

  // izitoast 
  izitoast: {
    position: 'bottomRight',
    transitionIn: 'bounceInLeft',
    transitionOut: 'fadeOutRight',
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
