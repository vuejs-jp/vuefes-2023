declare var global: typeof globalThis

declare namespace Cypress {
  interface Chainable {
    checkPageIdle(): void
  }
}
