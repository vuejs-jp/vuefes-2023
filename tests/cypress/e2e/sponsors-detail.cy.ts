describe('sponsors detail', () => {
  function loadPage(sponsorId: string, section: string) {
    cy.intercept('/2023/api/_supabase/session')
    cy.visit('/2023/')
    cy.checkPageIdle()
    cy.get(`.${section}-sponsors a[href="/2023/sponsors/${sponsorId}"]`).click({ force: true })
    cy.url().should('eq', `http://localhost:3000/sponsors/${sponsorId}`)
  }

  describe('platinum sponsors', () => {
    it('cloudsign', () => {
      loadPage('cloudsign', 'platinum')
      cy.contains('h2', 'スポンサー')
      cy.contains('h2', 'クラウドサイン（弁護士ドットコム株式会社）')
      cy.get('img[alt="クラウドサイン（弁護士ドットコム株式会社）のロゴ"]')
    })
  })
  describe('gold sponsors', () => {
    it('yappli', () => {
      loadPage('yappli', 'gold')
      cy.contains('h2', 'スポンサー')
      cy.contains('h2', '株式会社ヤプリ')
      cy.get('img[alt="株式会社ヤプリのロゴ"]')
    })
  })
  describe('silver sponsors', () => {
    it('base', () => {
      loadPage('base', 'silver')
      cy.contains('h2', 'スポンサー')
      cy.contains('h2', 'BASE株式会社')
      cy.get('img[alt="BASE株式会社のロゴ"]')
    })
  })
  describe('silver sponsors', () => {
    it('base', () => {
      loadPage('tanomu', 'bronze')
      cy.contains('h2', 'スポンサー')
      cy.contains('h2', '株式会社タノム')
      cy.get('img[alt="株式会社タノムのロゴ"]')
    })
  })
})
