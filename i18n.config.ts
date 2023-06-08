import { defineI18nConfig } from '#imports'
import top from '~~/locales/top.json'

console.log('top', top.ja)

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'ja',
  messages: {
    ja: {
      words: {
        submit: '送信',
        application_form: '申し込みフォーム',
        sponsordoc: 'スポンサー資料',
      },
      top: top.ja,
    },
    en: {
      words: {
        submit: 'submit',
        application_form: 'Application form',
        sponsordoc: '',
      },
      top: top.en,
    },
  },
}))
