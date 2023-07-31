import { match } from 'ts-pattern'
import { Path } from '~/types/app'

export function useLocale(path: Path) {
  const { locale } = useI18n({ useScope: 'global' })

  const docPath = computed(() => {
    return match(path)
      .with('message', () => `/${locale.value}/top/message`)
      .with('form', () => `/${locale.value}/top/contact`)
      .with('sponsor', () => `/${locale.value}/top/sponsors`)
      .with('speaker', () => `/${locale.value}/top/speakers`)
      .with('ticket', () => `/${locale.value}/top/ticket`)
      .with('namecard', () => `/${locale.value}/top/namecard`)
      .with('volunteer', () => `/${locale.value}/top/volunteer`)
      .with('handson', () => `/${locale.value}/top/handson`)
      .with('privacy', () => `/${locale.value}/privacy`)
      .with('code-of-conduct', () => `/${locale.value}/code-of-conduct`)
      .exhaustive()
  })

  return { docPath }
}
