import all from '~/locales/data/all'

export default defineI18nLocale(async (locale) => {
  return {
    words: all.ja_basic.words,
    top: all.ja_basic.top,
  }
})
