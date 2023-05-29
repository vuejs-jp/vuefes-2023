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
        cy.get('.hamburger-menu').should('not.be.visible')
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
        cy.get('.hamburger-menu').should('be.visible')
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
        cy.get('.hamburger-menu').should('be.visible')
      })
    })
  })
  describe('content', () => {
    it('main visual', () => {
      cy.visit('/')
      cy.contains('a', '最新情報はTwitterでCheck!').should(
        'have.attr',
        'href',
        'https://twitter.com/vuefes',
      )
      cy.contains('Twitter ー @vuefes #vuefes')
    })
    it('message', () => {
      cy.visit('/')
      cy.contains('h2', 'Message')
        .contains('想い')
        .closest('section')
        .within(() => {
          cy.contains('Vue Fes Japan は 2018 年に誕生した日本最大級の Vue.js カンファレンスです。')
        })
    })
    it('sponsors', () => {
      cy.visit('/')
      cy.contains('h2', 'Sponsors')
        .contains('スポンサー')
        .closest('section')
        .within(() => {
          cy.contains(
            'Vue.js に関わる人々が集まる Vue Fes Japan 2023 をより良いカンファレンスにするため、スポンサー募集をします',
          )
          cy.contains('a', '申し込みフォーム')
          cy.contains('a', 'スポンサー資料')
          cy.contains('a', 'Vue Fes Japan の Twitter').should(
            'have.attr',
            'href',
            'https://twitter.com/vuefes',
          )
        })
    })
  })
  describe('form', () => {
    it('contact', () => {
      cy.visit('/')
      cy.wait(2000)
      cy.contains('h2', 'Contact')
        .contains('お問い合わせ')
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

      // check validation errors

      cy.get('@input-name').type('a')
      cy.wait(1000)
      cy.get('@input-name').type('{backspace}').blur()
      cy.contains('名前を入力してください')
      cy.get('@input-mail').type('a').type('{backspace}').blur()
      cy.wait(1000)
      cy.contains('メールアドレスを入力してください')
      cy.get('@input-text').type('t').type('{backspace}').blur()
      cy.wait(1000)
      cy.contains('問い合わせ内容を入力してください')
      cy.get('@btn-submit').should('have.attr', 'disabled')

      // check activated

      cy.wait(1000)
      cy.get('@input-name').type('やまだ')
      cy.get('@input-mail').type('mymail@vue.com')
      cy.get('@input-text').type('こめんと').blur()
      cy.wait(1000)
      cy.get('@btn-submit').should('not.have.attr', 'disabled')
    })
  })
  describe('footer', () => {
    it('footer', () => {
      cy.visit('/')
      cy.get('.footer-section').within(() => {
        cy.get('.footer-vuefes-logo')
        cy.contains('a', 'Vue Fes Japan Online 2022').should(
          'have.attr',
          'href',
          'https://vuefes.jp/2022',
        )
        cy.get('a[title="Twitter"]')
        cy.get('a[title="note"]')
        cy.get('a[title="YouTube"]')
        cy.get('a[title="GitHub"]')
        cy.contains('a', 'Vue Fes Japan 2020').should('have.attr', 'href', 'https://vuefes.jp/2020')
        cy.contains('a', 'Vue Fes Japan 2019').should('have.attr', 'href', 'https://vuefes.jp/2019')
        cy.contains('a', 'Vue Fes Japan 2018').should('have.attr', 'href', 'https://vuefes.jp/2018')
        cy.contains('a', 'プライバシーポリシー').should('have.attr', 'href', '/privacy')
        cy.contains('a', '行動規範').should('have.attr', 'href', '/code-of-conduct')
        cy.contains('© 2018-2023 Vue.js Japan User Group some rights reserved.')
        cy.contains(
          'Vue.js artworks by Evan You is licensed under a Creative Commons Attribution 4.0 International License.',
        )
      })
    })
  })
  describe('menu view', () => {
    it('render', () => {
      cy.viewport(769, 600)
      cy.visit('/')
      cy.wait(2000)
      cy.get('.hamburger-menu').should('be.visible').click()
      cy.get('.mobile-menu')
        .should('be.visible', { timeout: 3000 })
        .within(() => {
          cy.contains('a', 'Message').should('have.attr', 'href', '/#message')
          cy.contains('a', 'Sponsors').should('have.attr', 'href', '/#sponsors')
          cy.contains('a', 'Contact').should('have.attr', 'href', '/#form')
          cy.contains('Vue Fes Japan')
          cy.contains('a', '2022').should('have.attr', 'href', 'https://vuefes.jp/2022')
          cy.contains('a', '2020').should('have.attr', 'href', 'https://vuefes.jp/2020')
          cy.contains('a', '2019').should('have.attr', 'href', 'https://vuefes.jp/2019')
          cy.contains('a', '2018').should('have.attr', 'href', 'https://vuefes.jp/2018')
          cy.contains('a', 'プライバシーポリシー').should('have.attr', 'href', '/privacy')
          cy.contains('a', '行動規範').should('have.attr', 'href', '/code-of-conduct')
          cy.get('button.close').click()
        })
      cy.get('.mobile-menu').should('not.exist')
    })
  })
})
