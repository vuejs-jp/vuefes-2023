import { defineI18nConfig } from '#imports'
import top from '~~/locales/top.json'

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'ja',
  messages: {
    en: {
      welcome: 'Welcome',
      top_twitter_update: 'さいしんじょうほう',
      top: top.en,
    },
    ja: {
      welcome: 'うえるかむ',
      top_twitter_update: 'さいしんじょうほう',
      top: top.ja,
    },
  },
}))
