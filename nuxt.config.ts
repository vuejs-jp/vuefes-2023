import svgLoader from 'vite-svg-loader'

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
  vite: {
    plugins: [
      svgLoader({
        svgo: false,
      }),
    ],
  },
  typescript: {
    strict: true,
  },
  runtimeConfig: {
    public: {
      gtagId: process.env.NUXT_GTAG_ID,
      newtSpaceUid: process.env.NUXT_NEWT_SPACE_UID,
      newtFormUid: process.env.NUXT_NEWT_FORM_UID,
    },
  },
})
