import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,

  typescript: {
    typeCheck: true
  },

  app: {
    head: {
      title: process.env.NUXT_APP_NAME,
      meta: [
        { name: 'viewport', content: 'width=device-width,user-scalable=0,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0' },
        { name: 'application-name', content: 'Fake Store' },
        { name: 'apple-mobile-web-app-title', content: 'Fake Store' },
        { name: 'robots', content: 'noindex, nofollow' }
      ],
      noscript: [
        {
          children: 'We\'re sorry but application doesn\'t work properly without JavaScript enabled. Please enable it to continue.'
        }
      ],
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons' }
      ]
    }
  },

  icon: {
    size: '100px'
  },

  runtimeConfig: {
    public: {
      BASE_URL: process.env.NUXT_PUBLIC_BASE_URL,
      BUILD_VERSION: process.env.APP_BUILD_VERSION
    }
  },

  devtools: { enabled: true },

  css: [
    'vuetify/lib/styles/main.sass',
    '@mdi/font/css/materialdesignicons.css',
    'assets/styles/main.scss'
  ],

  modules: [
    '@pinia/nuxt',
    '@vueuse/nuxt'
  ],

  build: {
    transpile: ['vuetify']
  },

  devServer: {
    port: 8080
  },

  vite: {
    define: {
      'process.env.DEBUG': false
    },
    vue: {
      template: {
        transformAssetUrls
      }
    }
  },

  hooks: {
    'vite:extendConfig': config => {
      return config.plugins.push(
        vuetify({
          autoImport: true,
          styles: {
            configFile: 'assets/styles/settings.scss'
          }
        })
      )
    }
  },

  compatibilityDate: '2025-02-13'
})
