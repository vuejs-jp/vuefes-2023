import all from '~~/app/assets/locales/all'

export default defineI18nLocale(async (locale) => {
  return {
    words: all.en.words,
    top: all.en.top,
  }
})
