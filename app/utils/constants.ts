import { isProd } from './environment.constants'

export interface NavLink {
  text: string
  link: string
}

export const navLinks: NavLink[] = [
  { text: 'Speakers', link: '/#speakers' },
  { text: 'Sponsors', link: '/#sponsors' },
  { text: 'Message', link: '/#message' },
  { text: 'Contact', link: '/#form' },
]

export const navFullLinks = (showTimetable: boolean) =>
  [
    ...[showTimetable ? { text: 'Time table', link: '/#timetable' } : undefined],
    { text: 'Speakers', link: '/#speakers' },
    { text: 'Events', link: '/#events' },
    { text: 'Access', link: '/#access' },
    { text: 'Ticket', link: '/#ticket' },
    { text: 'Sponsors', link: '/#sponsors' },
    { text: 'Message', link: '/#message' },
    { text: 'Contact', link: '/#form' },
  ].filter((l) => {
    return l !== undefined
  })

export const conferenceTitle = 'Vue Fes Japan 2023'

export const ogDescription =
  '2023年10月28日（土）に開催される日本最大級の Vue.js カンファレンスです。国内外の著名スピーカーによるセッションの他、LT、初心者向けハンズオン、グッズ販売などのイベントも企画しています。ぜひ一緒に Vue.js を楽しみ、盛り上げていきましょう！'

export const ogCoCDescription =
  'Vue Fes Japan 2023 のすべての参加者、スピーカー、スポンサー、スタッフは、オープンかつ友好的な環境を育むため、以下の行動規範に同意していただく必要があります。'

export const ogPrivacyDescription = 'Vue Fes Japan 2023 のプライバシーポリシーです。'

// replace https://twitter.com/
export const twitterDomainUrl = 'https://x.com/'

export const linkUrl = 'https://vuefes.jp/2023/'

export const ticketUrl = 'https://passmarket.yahoo.co.jp/event/show/detail/02hv5juj2f531.html'

export const volunteerUrl =
  'https://docs.google.com/forms/d/e/1FAIpQLSfLztgJd07h3XxaLe9Bt8RNWOsX2DT3b5vpUSR3nNSoYtZ1qg/viewform'

export const childCareUrl =
  'https://docs.google.com/forms/d/e/1FAIpQLSe_tfFxeSJjOmMGck-HXlKvuwkTjFHQoLzvL1ZPhYkkXuVshQ/viewform'

export const calendarUrl =
  'https://calendar.google.com/calendar/render?action=TEMPLATE&text=Vue%20Fes%20Japan%202023&dates=20231028T003000Z/20231028T103000Z'

export const storeUrl = 'https://vuejs-jp.stores.jp'

export const vuefesTwitterID = '@vuefes'

export const networkLinks = [
  {
    value: 'twitter',
    title: 'Twitter',
    url: 'https://twitter.com/vuefes',
  },
  {
    value: 'note',
    title: 'note',
    url: 'https://note.com/vuejs_jp',
  },
  {
    value: 'youtube',
    title: 'YouTube',
    url: 'https://www.youtube.com/channel/UC6KPwA1kZJtQYdlh8_2hxCA',
  },
  {
    value: 'github',
    title: 'GitHub',
    url: 'https://github.com/vuejs-jp',
  },
]

export const websiteLinks = [
  {
    id: 2022,
    value: 'vuefes2022',
    title: 'Vue Fes Japan Online 2022',
    url: 'https://vuefes.jp/2022',
  },
  {
    id: 2020,
    value: 'vuefes2020',
    title: 'Vue Fes Japan 2020',
    url: 'https://vuefes.jp/2020',
  },
  {
    id: 2019,
    value: 'vuefes2019',
    title: 'Vue Fes Japan 2019',
    url: 'https://vuefes.jp/2019',
  },
  {
    id: 2018,
    value: 'vuefes2018',
    title: 'Vue Fes Japan 2018',
    url: 'https://vuefes.jp/2018',
  },
]
