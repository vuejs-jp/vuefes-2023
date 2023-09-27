describe('top', () => {
  function loadPage() {
    cy.intercept('/api/_supabase/session')
    cy.intercept('GET', '**supabase.co/rest/v1/**')
    cy.visit('/')
    cy.checkPageIdle()
  }
  function loadPageWithAuth() {
    cy.intercept('/api/_supabase/session')
    cy.intercept('GET', '**supabase.co/rest/v1/**')
    cy.visit('/?forcelogin=true')
    cy.checkPageIdle()
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
        cy.contains('a', 'Speakers').should('be.visible')
        cy.contains('a', 'Ticket').should('be.visible')
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
        cy.contains('a', 'Speakers').should('not.be.visible')
        cy.contains('a', 'Ticket').should('not.be.visible')
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
        cy.contains('a', 'Speakers').should('not.be.visible')
        cy.contains('a', 'Ticket').should('not.be.visible')
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
        cy.contains('a', 'Speakers').should('be.visible')
        cy.contains('a', 'Ticket').should('be.visible')
        cy.contains('a', 'Access').should('be.visible')
        cy.contains('a', 'Sponsors').should('be.visible')
        cy.contains('a', 'Contact').should('be.visible')
        cy.get('a[aria-label="twitter"]').should('be.visible')
        cy.get('.hamburger-menu').should('not.be.visible')
      })
    })
  })
  context('header links', () => {
    it('logo', () => {
      loadPage()
      cy.contains('h1', 'Vue Fes Japan 2023').find('a').click()
      cy.url().should('eq', 'http://localhost:3000/')
    })

    describe('at top', () => {
      ;[
        ['Message', 'http://localhost:3000/#message'],
        ['Speakers', 'http://localhost:3000/#speakers'],
        ['Ticket', 'http://localhost:3000/#ticket'],
        ['Access', 'http://localhost:3000/#access'],
        ['Sponsors', 'http://localhost:3000/#sponsors'],
        ['Contact', 'http://localhost:3000/#form'],
      ].forEach(([label, expected]: any) => {
        it(`at top click ${label}`, () => {
          loadPage()
          cy.wait(500)
          cy.contains('main > nav a', label).click()
          cy.url().should('eq', expected)
        })
      })
    })
    describe('at privacy', () => {
      ;[
        ['Message', 'http://localhost:3000/#message'],
        ['Speakers', 'http://localhost:3000/#speakers'],
        ['Ticket', 'http://localhost:3000/#ticket'],
        ['Access', 'http://localhost:3000/#access'],
        ['Sponsors', 'http://localhost:3000/#sponsors'],
        ['Contact', 'http://localhost:3000/#form'],
      ].forEach(([label, expected]: any) => {
        it(`at privacy ${label}`, () => {
          loadPagePrivacy()
          cy.contains('main > nav a', label).click()
          cy.url().should('eq', expected)
        })
      })
    })
    describe('at code of conduct', () => {
      ;[
        ['Message', 'http://localhost:3000/#message'],
        ['Speakers', 'http://localhost:3000/#speakers'],
        ['Ticket', 'http://localhost:3000/#ticket'],
        ['Access', 'http://localhost:3000/#access'],
        ['Sponsors', 'http://localhost:3000/#sponsors'],
        ['Contact', 'http://localhost:3000/#form'],
      ].forEach(([label, expected]: any) => {
        it(`at code of conduct ${label}`, () => {
          loadPageCodeOfConduct()
          cy.contains('main > nav a', label).click()
          cy.url().should('eq', expected)
        })
      })
    })
  })

  describe('content', () => {
    it('main visual', () => {
      loadPage()
      cy.contains('a', '最新情報はTwitterでCheck!').should(
        'have.attr',
        'href',
        'https://x.com/vuefes',
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
    it('ticket', () => {
      loadPage()
      cy.contains('h2', 'Ticket')
        .closest('section')
        .within(() => {
          // チケット
          cy.contains('a', 'チケットを購入')
          cy.contains('a', '一般チケット')
          cy.contains('a', '一般＋アフターパーティチケット')
          cy.contains('a', 'ハンズオンチケット')
          cy.contains('a', '個人スポンサーチケット')
          // ネームカード
          cy.contains('button', 'ネームカードを作成')
          // 託児サポート
          cy.contains('a', 'サポートを申し込む')
          // ハンズオン
          cy.contains('a', 'チケットを購入')
        })
    })
    it('speakers', () => {
      loadPage()
      cy.contains('h2', 'Speakers')
        .contains('スピーカー')
        .closest('section')
        .within(() => {
          cy.get('.speaker-card').should('have.length', 34)
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
          cy.contains('small', '※ JR新宿駅から中野駅まで中央線で1駅（約4分）です。')
          cy.contains('a', 'Googleマップを見る').should(
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
            /スポンサー募集は 2023\/8\/31（木）23:59:59 をもって締め切りました。応募いただいた企業におかれましては感謝申し上げます。/,
          )
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
    it.only('render with Auth', () => {
      cy.viewport(769, 600)
      loadPageWithAuth()
      cy.wait(1000)
      cy.get('.hamburger-menu').should('be.visible').click()
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
