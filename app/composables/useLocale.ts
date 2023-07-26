import { match } from 'ts-pattern'
import { Path, Sponsor } from '~/types/app'
import { all } from '~/utils/sponsor.constants'

export function useLocale(path: Path) {
  const { locale } = useI18n({ useScope: 'global' })

  const docPath = computed(() => {
    let m = match(path)
      .with('message', () => `/${locale.value}/top/message`)
      .with('form', () => `/${locale.value}/top/contact`)
      .with('sponsor', () => `/${locale.value}/top/sponsors`)
      .with('speaker', () => `/${locale.value}/top/speakers`)
      .with('ticket', () => `/${locale.value}/top/ticket`)
      .with('namecard', () => `/${locale.value}/top/namecard`)
      .with('handson', () => `/${locale.value}/top/handson`)
      .with('privacy', () => `/${locale.value}/privacy`)
      .with('code-of-conduct', () => `/${locale.value}/code-of-conduct`)

    // set sponsors markdown
    m = all.reduce((prev: any, s: Sponsor) => {
      return prev
        .with(`sponsors/${s.id}/head`, () => `/${locale.value}/sponsors/${s.id}/head`)
        .with(`sponsors/${s.id}/title`, () => `/${locale.value}/sponsors/${s.id}/title`)
        .with(`sponsors/${s.id}/body`, () => `/${locale.value}/sponsors/${s.id}/body`)
    }, m)

    return (m as any).exhaustive()
  })

  return { docPath }
}
