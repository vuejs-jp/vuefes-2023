import { match } from 'ts-pattern'
import { Path, Speaker, SpeakerProfile, Sponsor, SponsorSpeaker } from '~/types/app'
import { all } from '~/utils/sponsor.constants'
import { speakers } from '~/utils/speakers.constants'

export function useLocale(path: Path) {
  const { locale } = useI18n({ useScope: 'global' })

  const profiles = ref<SpeakerProfile[]>([])

  for (const s of sponsorSpeakers) {
    for (const p of s.profile) {
      profiles.value.push(p)
    }
  }
  sponsorSpeakers.forEach((s: SponsorSpeaker) => s.profile)

  const docPath = computed(() => {
    let m = match(path)
      .with('message', () => `/${locale.value}/top/message`)
      .with('form', () => `/${locale.value}/top/contact`)
      .with('sponsor', () => `/${locale.value}/top/sponsors`)
      .with('teams', () => `/${locale.value}/top/teams`)
      .with('speaker', () => `/${locale.value}/top/speakers`)
      .with('ticket', () => `/${locale.value}/top/ticket`)
      .with('namecard', () => `/${locale.value}/top/namecard`)
      .with('volunteer', () => `/${locale.value}/top/volunteer`)
      .with('childcare', () => `/${locale.value}/top/childcare`)
      .with('handson', () => `/${locale.value}/top/handson`)
      .with('privacy', () => `/${locale.value}/privacy`)
      .with('code-of-conduct', () => `/${locale.value}/code-of-conduct`)
      .with('personal-sponsors-text1', () => `/${locale.value}/top/personal-sponsors-text1`)
      .with('personal-sponsors-caption', () => `/${locale.value}/top/personal-sponsors-caption`)
      .with('faq', () => `/${locale.value}/top/faq`)

    // set sponsors markdown
    m = all.reduce((prev: any, s: Sponsor) => {
      return prev
        .with(`sponsors/${s.id}/head`, () => `/${locale.value}/sponsors/${s.id}/head`)
        .with(`sponsors/${s.id}/title`, () => `/${locale.value}/sponsors/${s.id}/title`)
    }, m)

    // set sponsor sessions markdown
    m = all.reduce((prev: any, s: Sponsor) => {
      return prev
        .with(
          `sponsor-sessions/${s.id}/head`,
          () => `/${locale.value}/sponsor-sessions/${s.id}/head`,
        )
        .with(
          `sponsor-sessions/${s.id}/profile`,
          () => `/${locale.value}/sponsor-sessions/${s.id}/profile`,
        )
    }, m)

    // set sponsor sessions markdown
    m = profiles.value.reduce((prev: any, p: SpeakerProfile) => {
      return prev.with(`sessions/${p.id}/profile`, () => {
        return `/${locale.value}/sessions/${p.id}/profile`
      })
    }, m)

    // set sessions markdown
    m = speakers.reduce((prev: any, s: Speaker) => {
      return prev
        .with(`sessions/${s.id}/head`, () => `/${locale.value}/sessions/${s.id}/head`)
        .with(`sessions/${s.id}/profile`, () => `/${locale.value}/sessions/${s.id}/profile`)
    }, m)

    return (m as any).exhaustive()
  })

  return { docPath }
}
