import all from '~/assets/locale/all'

type AllSchema = typeof all

declare module 'vue-i18n' {
  export interface DefineLocaleMessage extends AllSchema {}
}
