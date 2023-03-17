/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly it: Function
  readonly expect: Function
}

interface ImportMeta {
  readonly vitest: ImportMetaEnv
}
