// import words from '@/assets/locales/words'
// import top from '@/assets/locales/top'

// export default defineI18nLocale(async (locale) => {
//   return {
//     words: words.ja,
//     top: top.ja,
//   }
// })

import global from '@/assets/locales/global'

export default defineI18nLocale(async (locale) => {
  return {
    words: global.ja.words,
    top: global.ja.top,
  }
})
