import all from '~/assets/locale/all'

export default defineI18nLocale(async (locale) => {
  return {
    words: all.ja_basic.words,
    top: all.ja_basic.top,
    category: all.ja_basic.category,
    track: all.ja_basic.track,
    sessions: all.ja_basic.sessions,
    speakers: all.ja_basic.speakers,
    panelers: all.ja_basic.panelers,
    sponsors: all.ja_basic.sponsors,
  }
})
