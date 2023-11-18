import all from '~/assets/locale/all'

type AllSchema = typeof all

declare module 'vue-i18n' {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  export type DefineLocaleMessage = AllSchema
}
