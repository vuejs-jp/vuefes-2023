describe('sessions detail', () => {
  function loadPage(speakerId: string) {
    cy.intercept('/api/_supabase/session')
    cy.visit('/')
    cy.checkPageIdle()
    cy.wait(500)
    cy.get(`.speakers a[href="/sessions/${speakerId}"]`).click({ force: true })
    cy.url().should('eq', `http://localhost:3000/sessions/${speakerId}`)
  }

  describe('yyx990803 sessions', () => {
    it('yyx990803', () => {
      loadPage('yyx990803')
      cy.contains('h2', 'キーノート')
      cy.wait(500)
      cy.contains('p', 'Evan You')
      cy.get('img[alt="Evan Youの写真"]')
    })
  })
  describe('atinux sessions', () => {
    it('atinux', () => {
      loadPage('atinux')
      cy.contains('h2', 'Nuxt to the Edge')
      cy.wait(500)
      cy.contains('p', 'Sebastien Chopin')
      cy.get('img[alt="Sebastien Chopinの写真"]')
    })
  })
  describe('patak-dev sessions', () => {
    it('patak-dev', () => {
      loadPage('patak-dev')
      cy.contains('h2', 'Vite: Stories of collaboration')
      cy.wait(500)
      cy.contains('p', 'Matias Capeletto')
      cy.get('img[alt="Matias Capelettoの写真"]')
    })
  })
  describe('antfu sessions', () => {
    it('antfu', () => {
      loadPage('antfu')
      cy.contains('h2', "Anthony's Roads to Open Source - The Set Theory")
      cy.wait(500)
      cy.contains('p', 'Anthony Fu')
      cy.get('img[alt="Anthony Fuの写真"]')
    })
  })
  describe('daniel-roe sessions', () => {
    it('daniel-roe', () => {
      loadPage('daniel-roe')
      cy.contains('h2', 'A New Nuxt')
      cy.wait(500)
      cy.contains('p', 'Daniel Roe')
      cy.get('img[alt="Daniel Roeの写真"]')
    })
  })
  describe('sapphi-red sessions', () => {
    it('sapphi-red', () => {
      loadPage('sapphi-red')
      cy.contains('h2', 'マルチスレッドフレンドリーなJavaScriptを求めて')
      cy.wait(500)
      cy.contains('p', '翠 / sapphi-red')
      cy.get('img[alt="翠 / sapphi-redの写真"]')
    })
  })
})
