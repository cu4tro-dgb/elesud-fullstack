// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    pageTransition: true
  },
  runtimeConfig: {
    authUsername: '',
    authPasword: ''
  },
  css: [

  ],
  srcDir: 'src/'
})
