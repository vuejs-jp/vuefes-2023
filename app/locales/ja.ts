import all from '~/assets/locale/all'

export default defineI18nLocale(async (locale) => {
  return {
    words: all.ja.words,
    top: all.ja.top,
  }
})