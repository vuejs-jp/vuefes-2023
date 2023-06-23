import svgLoader from 'vite-svg-loader'
import { conferenceTitle } from './app/utils/constants'
import { isProd } from './app/utils/environment.constants'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'app/',
  app: {
    buildAssetsDir: '/_nuxt/',
    baseURL: isProd ? '/2023/' : '/',
    head: {
      title: conferenceTitle,
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no' },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
      htmlAttrs: {
        lang: 'ja',
      },
    },
  },
  css: ['~/assets/main.css', 'vue-toastification/dist/index.css'],
  modules: [
    'pinceau/nuxt',
    '@nuxt/devtools',
    '@nuxtjs/device',
    '@nuxtjs/supabase',
    '@nuxtjs/i18n',
    '@nuxt/content',
  ],
  pinceau: {
    configFileName: 'tokens.config',
    debug: false,
    runtime: true,
  },
  devtools: {
    enabled: true,
    vscode: {},
  },
  vite: {
    plugins: [
      svgLoader({
        svgo: false,
      }),
    ],
  },
  build: {
    transpile: ['vue-toastification'],
  },
  typescript: {
    strict: true,
  },
  i18n: {
    locales: [
      { code: 'ja', iso: 'ja_JP', file: 'ja.ts' },
      { code: 'ja-basic', iso: 'ja_JP', file: 'ja-basic.ts' },
      { code: 'en', iso: 'en-US', file: 'en.ts' },
    ],
    lazy: true,
    defaultLocale: 'ja',
    langDir: 'locales/',
    experimental: {
      jsTsFormatResource: true,
    },
  },
  content: {
    markdown: {
      anchorLinks: {
        depth: 0,
        exclude: [1, 2, 3, 4, 5, 6],
      },
    },
  },
  runtimeConfig: {
    public: {
      gtagId: process.env.NUXT_GTAG_ID,
      newtSpaceUid: process.env.NUXT_NEWT_SPACE_UID,
      newtFormUid: process.env.NUXT_NEWT_FORM_UID,
      reCaptchaWebsiteKey: process.env.NUXT_RECAPTCHA_WEBSITE_KEY,
      inCypress: process.env.IN_CYPRESS === 'true',
      // feature flags
      registerNamecard: process.env.NUXT_ENABLE_REGISTER_NAMECARD,
      // supabase
      supabaseProjectUrl: process.env.SUPABASE_URL,
      supabaseApiKey: process.env.SUPABASE_KEY,
    },
  },
})
