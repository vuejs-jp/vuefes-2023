declare let global: typeof globalThis

declare namespace Cypress {
  interface Chainable {
    checkPageIdle(): void
    debuglog(message: string): void
    debugnode(): void
  }
}
