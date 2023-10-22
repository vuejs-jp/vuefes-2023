import all from '~/assets/locale/all'

export default defineI18nLocale(async (locale) => {
  return {
    words: all.en.words,
    top: all.en.top,
    category: all.en.category,
    track: all.en.track,
    sessions: all.en.sessions,
    speakers: all.en.speakers,
    panelers: all.en.panelers,
    sponsors: all.en.sponsors,
  }
})
