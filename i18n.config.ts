import { defineI18nConfig } from '#imports'
import top from '~~/locales/top.yaml'

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
        submit: 'Submit',
        application_form: 'Application Form',
        sponsordoc: 'Sponsor Document',
      },
      top: top.en,
    },
  },
}))
