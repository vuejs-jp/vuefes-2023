import { words } from '~~/locales/words.yaml'
import { DefineLocaleMessage } from 'vue-i18n'
import words from '@/assets/locales/words'
import top from '@/assets/locales/top'

type TopSchema = typeof top.ja
type WordsSchema = typeof words.ja

declare module 'vue-i18n' {
  export interface DefineLocaleMessage {
    words: WordsSchema
    top: TopSchema
  }
}
