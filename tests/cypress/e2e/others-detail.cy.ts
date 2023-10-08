describe('others detail', () => {
  function loadOtherPage(page: 'privacy' | 'code-of-conduct') {
    cy.visit(`/${page}`)
  }

  describe('privacy', () => {
    ;[
      ['Message', 'http://localhost:3000/#message'],
      ['Speakers', 'http://localhost:3000/#speakers'],
      ['Ticket', 'http://localhost:3000/#ticket'],
      ['Access', 'http://localhost:3000/#access'],
      ['Sponsors', 'http://localhost:3000/#sponsors'],
      ['Contact', 'http://localhost:3000/#form'],
    ].forEach(([label, expected]: any) => {
      it(`privacy ${label}`, () => {
        loadOtherPage('privacy')
        cy.contains('nav a', label).click()
        cy.url().should('eq', expected)
      })
    })
  })
  describe('code of conduct', () => {
    ;[
      ['Message', 'http://localhost:3000/#message'],
      ['Speakers', 'http://localhost:3000/#speakers'],
      ['Ticket', 'http://localhost:3000/#ticket'],
      ['Access', 'http://localhost:3000/#access'],
      ['Sponsors', 'http://localhost:3000/#sponsors'],
      ['Contact', 'http://localhost:3000/#form'],
    ].forEach(([label, expected]: any) => {
      it(`code of conduct ${label}`, () => {
        loadOtherPage('code-of-conduct')
        cy.contains('nav a', label).click()
        cy.url().should('eq', expected)
      })
    })
  })
})
