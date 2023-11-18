/// <reference types="vite/client" />

type ImportMetaVitest = {
  readonly it: Function
  readonly expect: Function
}

type ImportMeta = {
  readonly vitest: ImportMetaVitest
}
