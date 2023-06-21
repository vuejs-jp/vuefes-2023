import all from '~/locales/data/all'

type AllSchema = typeof all

declare module 'vue-i18n' {
  export interface DefineLocaleMessage extends AllSchema {}
}
