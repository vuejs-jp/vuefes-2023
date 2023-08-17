import { VueReCaptcha, useReCaptcha } from 'vue-recaptcha-v3'

export function useFormReCaptcha() {
  const { vueApp } = useNuxtApp()
  const config = useRuntimeConfig()
  vueApp.use(VueReCaptcha, {
    siteKey: config.public.reCaptchaWebsiteKey,
    loaderOptions: {
      renderParameters: {
        hl: 'ja',
      },
    },
  })

  const reCaptchaInstance = useReCaptcha()

  const hasSiteKey = config.public.reCaptchaWebsiteKey !== ''

  async function execute() {
    await reCaptchaInstance?.recaptchaLoaded()
    return await reCaptchaInstance?.executeRecaptcha('submit')
  }

  return { hasSiteKey, execute }
}
