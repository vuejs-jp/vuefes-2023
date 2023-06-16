import { words } from '~~/locales/words.yaml'
import { DefineLocaleMessage } from 'vue-i18n'
import all from '~~/app/assets/locales/all'

type AllSchema = typeof all

declare module 'vue-i18n' {
  export interface DefineLocaleMessage extends AllSchema {}
}
