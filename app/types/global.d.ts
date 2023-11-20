declare module '*.svg'

declare module '*.yaml'

// 削除したい、nuxt 3.6.5 内で使用している nitropack のバージョンと不一致のため
declare module 'nitropack' {
  interface NitroRuntimeConfigApp {
    baseURL: string
  }
}
