/// <reference types="vite/client" />

interface ImportMetaVitest {
  readonly it: Function
  readonly expect: Function
}

interface ImportMeta {
  readonly vitest: ImportMetaVitest
}
