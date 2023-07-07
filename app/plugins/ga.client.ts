import VueGtag from 'vue-gtag'

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()
  nuxtApp.vueApp.use(
    VueGtag,
    {
      config: {
        id: config.gtagId,
      },
    },
    // @ts-expect-error
    nuxtApp.$router,
  )
})
