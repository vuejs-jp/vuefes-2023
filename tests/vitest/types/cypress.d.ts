declare namespace Cypress {
  // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
  interface Chainable<Subject = any> {
    checkPageIdle: (selector: string) => Chainable<JQuery<HTMLElement>>
    debuglog: (selector: string) => Chainable<JQuery<HTMLElement>>
    debugnode: (selector: string) => Chainable<JQuery<HTMLElement>>
  }
}
