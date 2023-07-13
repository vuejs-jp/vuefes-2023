import VueGtag from 'vue-gtag'
import { useRouter } from '#imports'

type Router = ReturnType<typeof useRouter>

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()
  nuxtApp.vueApp.use(
    VueGtag,
    {
      config: {
        id: config.public.gtagId,
      },
    },
    // NOTE: NuxtAppがエクスポートしている`$router`の型が何か推論されないのでこっち側で明示的に型を指定する
    nuxtApp.$router as Router,
  )
})
