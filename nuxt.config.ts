// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'app/',
  app: {
    buildAssetsDir: '/_nuxt/',
  },
  css: ['~/assets/main.css'],
  modules: ['pinceau/nuxt'],
  pinceau: {
    configFileName: 'tokens.config',
    debug: false,
    runtime: true,
  },
  typescript: {
    strict: true,
  },
  runtimeConfig: {
    public: {
      gtagId: process.env.NUXT_GTAG_ID,
    },
  },
})
