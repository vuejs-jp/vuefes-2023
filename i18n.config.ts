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
        privacypolicy: 'プライバシーポリシー',
        codeofconduct: '行動規範',
      },
      top: top.ja,
    },
    'ja-basic': {
      words: {
        submit: 'そうしん',
        application_form: 'もうしこみフォーム',
        sponsordoc: 'スポンサーしりょう',
        privacypolicy: 'プライバシーポリシー',
        codeofconduct: 'こうどうきはん',
      },
      top: top['ja-basic'],
    },
    en: {
      words: {
        submit: 'Submit',
        application_form: 'Application Form',
        sponsordoc: 'Sponsor Document',
        privacypolicy: 'Privacy Policy',
        codeofconduct: 'Code of Conduct',
      },
      top: top.en,
    },
  },
}))
