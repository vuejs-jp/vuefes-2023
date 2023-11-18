/// <reference types="vite/client" />

type ImportMetaVitest = {
  readonly it: unknown
  readonly expect: unknown
}

type ImportMeta = {
  readonly vitest: ImportMetaVitest
}
