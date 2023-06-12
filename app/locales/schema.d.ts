import { words } from '~~/locales/words.yaml'
import { DefineLocaleMessage } from 'vue-i18n'
import global from '@/assets/locales/global'

type GlobalSchema = typeof global

declare module 'vue-i18n' {
  export interface DefineLocaleMessage extends GlobalSchema {}
}
