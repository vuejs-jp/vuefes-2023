import words from '@/assets/locales/words'
import top from '@/assets/locales/top'

export default defineI18nLocale(async (locale) => {
  return {
    words: words['ja-basic'],
    top: top['ja-basic'],
  }
})
