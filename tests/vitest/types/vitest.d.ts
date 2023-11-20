/// <reference types="vite/client" />

interface ImportMetaVitest {
  readonly it: unknown
  readonly expect: unknown
}

interface ImportMeta {
  readonly vitest: ImportMetaVitest
}
