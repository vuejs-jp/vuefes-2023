declare let global: typeof globalThis

declare namespace Cypress {
  type Chainable = {
    checkPageIdle(): void
    debuglog(message: string): void
    debugnode(): void
  }
}
