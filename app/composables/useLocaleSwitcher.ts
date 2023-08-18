import { LocaleObject } from '@nuxtjs/i18n/dist/runtime/composables'
import { useFeature } from '~/composables/useFeature'

export function useLocaleSwitcher() {
  const { switchLocale } = useFeature()
  const { locales, locale: currentLocale } = useI18n({ useScope: 'global' })

  const availableLocales = computed(() => {
    return locales.value as unknown as LocaleObject
  })

  const switchLocalePath = useSwitchLocalePath()

  return { switchLocale, currentLocale, availableLocales, switchLocalePath }
}
