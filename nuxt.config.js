export default {
  telemetry: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'server',

  buildDir: 'bundle',

  globalName: 'app',

  env: {
    api: {
      url: process.env.API_URL || '0.0.0.0:8080'
    }
  },

  server: {
    port: process.env.PORT || 80,
    host: process.env.HOST || 'localhost'
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Welcome!',
    titleTemplate: '%s - Experimental Players',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/icon.png' }
    ]
  },

  cli: {
    badgeMessages: ['Thank you for being an Experimental Player!'],
    bannerColor: 'magenta'
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/scss/app.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://www.npmjs.com/package/@nuxtjs/google-fonts
    '@nuxtjs/google-fonts',
    // https://www.npmjs.com/package/@nuxtjs/style-resources
    '@nuxtjs/style-resources'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/buefy
    'nuxt-buefy',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      name: 'Experimental Players HUB',
      description: 'Keep yourself updated on the best tools for gamers and developers.',
      short_name: 'Exp Hub',
      display: 'standalone',
      theme_color: '#000000',
      background_color: '#FFFFFF',
      lang: 'en'
    }
  },

  styleResources: {
    scss: [
      '@/assets/scss/_variables.scss',
      '@/assets/scss/_functions.scss'
    ]
  },

  googleFonts: {
    families: {
      Roboto: true,
      'Bebas+Neue': true
    }
  },

  loading: '@/components/Loading',

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend (config, ctx) {
      if (ctx.isDev) {
        config.devtool = ctx.isClient ? 'source-map' : 'inline-source-map'
      }
    }
  }
}
