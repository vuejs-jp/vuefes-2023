describe('top', () => {
  function loadPage() {
    cy.visit('/')
    cy.checkPageIdle()
    cy.wait(500)
  }
  function loadPageWithAuth() {
    cy.visit('/?forcelogin=true')
    cy.checkPageIdle()
    cy.wait(500)
  }
  function loadPagePrivacy() {
    cy.visit('/privacy')
  }
  function loadPageCodeOfConduct() {
    cy.visit('/code-of-conduct')
  }
  describe('header', () => {
    it('header (desktop)', () => {
      loadPage()
      cy.get('nav').within(() => {
        cy.contains('h1', 'Vue Fes Japan 2023')
        cy.contains('a', 'Message').should('be.visible')
        cy.contains('a', 'Access').should('be.visible')
        cy.contains('a', 'Sponsors').should('be.visible')
        cy.contains('a', 'Contact').should('be.visible')
        cy.get('a[aria-label="twitter"]').should('be.visible')
        cy.get('.hamburger-menu').should('not.be.visible')
      })
    })
    it('header (tablet)', () => {
      cy.viewport(769, 600)
      loadPage()
      cy.get('nav').within(() => {
        cy.contains('h1', 'Vue Fes Japan 2023')
        cy.contains('a', 'Message').should('not.be.visible')
        cy.contains('a', 'Access').should('not.be.visible')
        cy.contains('a', 'Sponsors').should('not.be.visible')
        cy.contains('a', 'Contact').should('not.be.visible')
        cy.get('a[aria-label="twitter"]').should('be.visible')
        cy.get('.hamburger-menu').should('be.visible')
      })
    })
    it('header (mobile)', () => {
      cy.viewport(375, 600)
      loadPage()
      cy.get('nav').within(() => {
        cy.contains('h1', 'Vue Fes Japan 2023')
        cy.contains('a', 'Message').should('not.be.visible')
        cy.contains('a', 'Access').should('not.be.visible')
        cy.contains('a', 'Sponsors').should('not.be.visible')
        cy.contains('a', 'Contact').should('not.be.visible')
        cy.get('a[aria-label="twitter"]').should('be.visible')
        // cy.get('.hamburger-menu').should('be.visible')
      })
    })
    it('header with auth', () => {
      loadPageWithAuth()
      cy.get('nav').within(() => {
        cy.contains('h1', 'Vue Fes Japan 2023')
        cy.contains('a', 'Message').should('be.visible')
        cy.contains('a', 'Access').should('be.visible')
        cy.contains('a', 'Sponsors').should('be.visible')
        cy.contains('a', 'Contact').should('be.visible')
        cy.get('a[aria-label="twitter"]').should('be.visible')
        cy.get('.hamburger-menu').should('not.be.visible')
      })
    })
  })
  describe('header links', () => {
    it('logo', () => {
      cy.visit('/')
      cy.contains('h1', 'Vue Fes Japan 2023').find('a').click()
      cy.url().should('eq', 'http://localhost:3000/')
    })
    it('at top', () => {
      cy.visit('/')
      cy.contains('nav a', 'Message').click()
      cy.url().should('eq', 'http://localhost:3000/#message')

      cy.visit('/')
      cy.contains('nav a', 'Speakers').click()
      cy.url().should('eq', 'http://localhost:3000/#speakers')

      cy.visit('/')
      cy.contains('nav a', 'Access').click()
      cy.url().should('eq', 'http://localhost:3000/#access')

      cy.visit('/')
      cy.contains('nav a', 'Sponsors').click()
      cy.url().should('eq', 'http://localhost:3000/#sponsors')

      cy.visit('/')
      cy.contains('nav a', 'Contact').click()
      cy.url().should('eq', 'http://localhost:3000/#form')
    })
    it('at privacy', () => {
      loadPagePrivacy()
      cy.contains('nav a', 'Message').click()
      cy.url().should('eq', 'http://localhost:3000/#message')

      loadPagePrivacy()
      cy.contains('nav a', 'Speakers').click()
      cy.url().should('eq', 'http://localhost:3000/#speakers')

      loadPagePrivacy()
      cy.contains('nav a', 'Access').click()
      cy.url().should('eq', 'http://localhost:3000/#access')

      loadPagePrivacy()
      cy.contains('nav a', 'Sponsors').click()
      cy.url().should('eq', 'http://localhost:3000/#sponsors')

      loadPagePrivacy()
      cy.contains('nav a', 'Contact').click()
      cy.url().should('eq', 'http://localhost:3000/#form')
    })
    it('at code of conduct', () => {
      loadPageCodeOfConduct()
      cy.contains('nav a', 'Message').click()
      cy.url().should('eq', 'http://localhost:3000/#message')

      loadPageCodeOfConduct()
      cy.contains('nav a', 'Speakers').click()
      cy.url().should('eq', 'http://localhost:3000/#speakers')

      loadPageCodeOfConduct()
      cy.contains('nav a', 'Access').click()
      cy.url().should('eq', 'http://localhost:3000/#access')

      loadPageCodeOfConduct()
      cy.contains('nav a', 'Sponsors').click()
      cy.url().should('eq', 'http://localhost:3000/#sponsors')

      loadPageCodeOfConduct()
      cy.contains('nav a', 'Contact').click()
      cy.url().should('eq', 'http://localhost:3000/#form')
    })
  })

  describe('content', () => {
    it('main visual', () => {
      loadPage()
      cy.contains('a', '最新情報はTwitterでCheck!').should(
        'have.attr',
        'href',
        'https://twitter.com/vuefes',
      )
      cy.contains('Twitter ー @vuefes #vuefes')
    })
    it('message', () => {
      loadPage()
      cy.contains('h2', 'Message')
        .contains('想い')
        .closest('section')
        .within(() => {
          cy.contains('Vue Fes Japan は 2018 年に誕生した日本最大級の Vue.js カンファレンスです。')
        })
    })
    // it('Ticket & Namecard', () => {
    //   loadPage()
    //   cy.contains('h2', 'Ticket & Namecard')
    //     .closest('section')
    //     .within(() => {
    //       cy.contains('h4', 'チケットのご購入')
    //       cy.contains('h4', 'ネームカードの作成')
    //       cy.contains('h3', 'チケット')
    //       cy.contains('チケットの事前販売')
    //       cy.contains('h3', 'ネームカード')
    //       cy.contains('登録期限:')
    //       cy.contains('a', 'ネームカードを作成')
    //       cy.contains(/最新情報は、Vue Fes Japan の Twitter をご確認ください。/)
    //     })
    // })
    it('speakers', () => {
      loadPage()
      cy.contains('h2', 'Speakers')
        .contains('スピーカー')
        .closest('section')
        .within(() => {
          cy.contains('Vue Fes Japan 2023 に登壇してみませんか？')
          cy.contains('h3', '募集スケジュール')
          cy.contains(/応募期限:.*2023\/7\/15（土）23:59:59.*まで/)
          cy.contains('a', '申し込みフォーム')
          cy.contains(/詳細情報は、.*Vue Fes Japan の Twitter.*をご確認ください。/)
          cy.get('.speaker-card').should('have.length', 22)
        })
    })
    it('access', () => {
      loadPage()
      cy.contains('h2', 'Access')
        .contains('アクセス')
        .closest('section')
        .within(() => {
          cy.contains('h3', '会場: 中野セントラルパーク カンファレンス')
          cy.contains('東京都中野区中野 4-10-2 中野セントラルパークサウス 1F、B1F')
          cy.contains('a', 'https://www.nakano-centralpark.jp/conference/').should(
            'have.attr',
            'href',
            'https://www.nakano-centralpark.jp/conference/',
          )
          cy.contains('JR 中央線・総武線、東京メトロ東西線')
          cy.contains('「中野」駅北口より徒歩5分')
          cy.contains('small', '※JR新宿駅から中野駅まで中央線で1駅（約4分）です。')
          cy.contains('a', 'Google マップで見る').should(
            'have.attr',
            'href',
            'https://goo.gl/maps/TBWRVrd3dthoe98s5',
          )
        })
    })
    it('sponsors', () => {
      loadPage()
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
          cy.contains(/詳細情報は、.*Vue Fes Japan の Twitter.*をご確認ください。/)
        })
    })
    it('teams', () => {
      loadPage()
      cy.contains('h2', 'Teams')
        .contains('チーム')
        .closest('section')
        .within(() => {
          cy.contains(
            'Vue Fes Japan 2023 は、Vue.js 日本ユーザーグループのスタッフによって企画・運営されています。',
          )
        })
    })
  })
  describe('form', () => {
    it('contact', () => {
      loadPage()
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

      cy.get('@input-name').type('a', { force: true })
      cy.wait(1000)
      cy.get('@input-name').type('{backspace}', { force: true }).blur()
      cy.contains('名前を入力してください')
      cy.get('@input-mail').type('a', { force: true }).type('{backspace}', { force: true }).blur()
      cy.wait(1000)
      cy.contains('メールアドレスを入力してください')
      cy.get('@input-text').type('t', { force: true }).type('{backspace}', { force: true }).blur()
      cy.wait(1000)
      cy.contains('問い合わせ内容を入力してください')
      cy.get('@btn-submit').should('have.attr', 'disabled')

      // check activated

      cy.wait(1000)
      cy.get('@input-name').type('やまだ', { force: true })
      cy.get('@input-mail').type('mymail@vue.com', { force: true })
      cy.get('@input-text').type('こめんと', { force: true }).blur()
      cy.wait(1000)
      cy.get('@btn-submit').should('not.have.attr', 'disabled')
    })
  })
  describe('footer', () => {
    it('footer', () => {
      loadPage()
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
      loadPage()
      cy.wait(1500)
      cy.get('.hamburger-menu').should('be.visible').click({ force: true })
      cy.get('.mobile-menu')
        .should('be.visible')
        .within(() => {
          cy.contains('a', 'Message').should('have.attr', 'href', '/#message')
          cy.contains('a', 'Access').should('have.attr', 'href', '/#access')
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
    it('render with Auth', () => {
      cy.viewport(769, 600)
      loadPageWithAuth()
      cy.wait(1500)
      cy.get('.hamburger-menu').should('be.visible').click({ force: true })
      cy.get('.mobile-menu')
        .should('be.visible')
        .within(() => {
          cy.contains('a', 'Message').should('have.attr', 'href', '/#message')
          cy.contains('a', 'Access').should('have.attr', 'href', '/#access')
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
