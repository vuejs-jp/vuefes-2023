// import words from '@/assets/locales/words'
// import top from '@/assets/locales/top'

// export default defineI18nLocale(async (locale) => {
//   return {
//     words: words['ja-basic'],
//     top: top['ja-basic'],
//   }
// })

import global from '@/assets/locales/global'

export default defineI18nLocale(async (locale) => {
  return {
    words: global['ja-basic'].words,
    top: global['ja-basic'].top,
  }
})
