declare let global: typeof globalThis

declare namespace Cypress {
  // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
  interface Chainable {
    checkPageIdle(): void
    debuglog(message: string): void
    debugnode(): void
  }
}
