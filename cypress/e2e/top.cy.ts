describe('top', () => {
  describe('header', () => {
    it('header (desktop)', () => {
      cy.visit('/')
      cy.get('nav').within(() => {
        cy.contains('h1', 'Vue Fes Japan 2023')
        cy.contains('a', 'Message').should('be.visible')
        cy.contains('a', 'Sponsors').should('be.visible')
        cy.contains('a', 'Contact').should('be.visible')
        cy.get('a[aria-label="twitter"]').should('be.visible')
      })
    })
    it('header (tablet)', () => {
      cy.viewport(769, 600)
      cy.visit('/')
      cy.get('nav').within(() => {
        cy.contains('h1', 'Vue Fes Japan 2023')
        cy.contains('a', 'Message').should('not.be.visible')
        cy.contains('a', 'Sponsors').should('not.be.visible')
        cy.contains('a', 'Contact').should('not.be.visible')
        cy.get('a[aria-label="twitter"]').should('be.visible')
      })
    })
    it('header (mobile)', () => {
      cy.viewport(375, 600)
      cy.visit('/')
      cy.get('nav').within(() => {
        cy.contains('h1', 'Vue Fes Japan 2023')
        cy.contains('a', 'Message').should('not.be.visible')
        cy.contains('a', 'Sponsors').should('not.be.visible')
        cy.contains('a', 'Contact').should('not.be.visible')
        cy.get('a[aria-label="twitter"]').should('be.visible')
      })
    })
  })
  describe('content', () => {
    beforeEach(() => {
      cy.visit('/')
    })
    it('main visual', () => {
      cy.contains('最新情報はTwitterでCheck!')
      cy.contains('Twitter ー @vuefes #vuefes')
    })
    it('message', () => {
      cy.contains('h2', 'Message')
        .closest('section')
        .within(() => {
          cy.contains('Vue Fes Japan は 2018 年に誕生した日本最大級の Vue.js カンファレンスです。')
        })
    })
    it('sponsors', () => {
      cy.contains('h2', 'Sponsors')
        .closest('section')
        .within(() => {
          cy.contains(
            'Vue.js に関わる人々が集まる Vue Fes Japan 2023 をより良いカンファレンスにするため、スポンサー募集をします',
          )
          cy.contains('a', '申し込みフォーム')
          cy.contains('a', 'スポンサー資料')
          cy.contains(/詳細情報は、Vue Fes Japan の Twitter をご確認ください/)
        })
    })
  })
  describe.only('form', () => {
    it('contact', () => {
      cy.visit('/')
      cy.contains('h2', 'Contact')
        .closest('section')
        .as('section')
        .within(() => {
          cy.contains('button', '送信').as('btn-submit').should('have.attr', 'disabled')
          cy.contains('Vue Fes Japan にご興味をいただき、ありがとうございます')
          cy.contains('label', 'お名前／Name')
            .find('input[placeholder="山田太郎"]')
            .as('input-name')
          cy.contains('label', 'メールアドレス／Mail')
            .find('input[placeholder="hello@vuefes.jp"]')
            .as('input-mail')
          cy.contains('label', 'お問い合わせ内容／Content').find('textarea').as('input-text')
        })

      // validation

      cy.get('@input-name').type('やまだ')
      cy.get('@input-mail').type('mymail@vue.com')
      cy.get('@input-text').type('こめんと')
      cy.get('@btn-submit').should('not.have.attr', 'disabled')
    })
    // it('validation', () => {
    //   cy.get('@input-mail').type('やまだ').type('{selectAll}{backspace}')
    // })
  })
})
