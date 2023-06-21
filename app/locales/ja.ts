import all from '~/locales/data/all'

export default defineI18nLocale(async (locale) => {
  return {
    words: all.ja.words,
    top: all.ja.top,
  }
})
