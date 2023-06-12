// import words from '@/assets/locales/words'
// import top from '@/assets/locales/top'

// export default defineI18nLocale(async (locale) => {
//   return {
//     words: words.en,
//     top: top.en,
//   }
// })

import global from '@/assets/locales/global'

export default defineI18nLocale(async (locale) => {
  return {
    words: global.en.words,
    top: global.en.top,
  }
})
