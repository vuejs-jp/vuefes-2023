import all from '~~/app/assets/locales/all'

export default defineI18nLocale(async (locale) => {
  return {
    words: all.ja_basic.words,
    top: all.ja_basic.top,
  }
})
