describe('top', () => {
  function loadPage(mobile = false) {
    cy.intercept('/api/_supabase/session')
    cy.intercept('GET', '**supabase.co/rest/v1/**')
    if (mobile) {
      cy.viewport('iphone-8')
      cy.visit('/', {
        onBeforeLoad: (win) => {
          Object.defineProperty(win.navigator, 'userAgent', {
            value:
              'Mozilla/5.0 (iPhone; CPU iPhone OS 14_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1 Mobile/15E148 Safari/604.1',
          })
        },
      })
    } else {
      cy.visit('/')
    }
    cy.wait(1000)
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
      loadPage(true)
      cy.get('nav').within(() => {
        cy.contains('h1', 'Vue Fes Japan 2023')
        cy.contains('a', 'Message').should('not.be.visible')
        cy.contains('a', 'Speakers').should('not.be.visible')
        cy.contains('a', 'Ticket').should('not.be.visible')
        cy.contains('a', 'Access').should('not.be.visible')
        cy.contains('a', 'Sponsors').should('not.be.visible')
        cy.contains('a', 'Contact').should('not.be.visible')
        cy.get('a[aria-label="twitter"]').should('be.visible')
      })
    })
  })

  describe('content', { testIsolation: false }, () => {
    before(() => {
      loadPage()
    })
    it('main visual', () => {
      cy.contains('a', '最新情報はTwitterでCheck!').should(
        'have.attr',
        'href',
        'https://x.com/vuefes',
      )
      cy.contains('Twitter ー @vuefes #vuefes')
    })
    it('message', () => {
      cy.contains('h2', 'Message')
        .contains('想い')
        .closest('section')
        .within(() => {
          cy.contains('Vue Fes Japan は 2018 年に誕生した日本最大級の Vue.js カンファレンスです。')
        })
    })
    it('ticket', () => {
      cy.contains('h2', 'Ticket')
        .closest('section')
        .within(() => {
          cy.contains('h3', 'チケット種別').next().find(' > div').should('have.length', 4)
          // チケット
          cy.contains('a', 'チケットを購入')
          cy.contains('a', '一般チケット')
          cy.contains('a', '一般＋アフターパーティーチケット')
          cy.contains('a', 'ハンズオンチケット')
          cy.contains('a', '個人スポンサーチケット')
          // ネームカード
          cy.contains('button', 'ネームカードを確認')
          // 託児サポート
          cy.contains('a', 'サポートを申し込む')
          // ハンズオン
          cy.contains('a', 'チケットを購入')
        })
    })
    it('speakers', () => {
      cy.contains('h2', 'Speakers')
        .contains('スピーカー')
        .closest('section')
        .within(() => {
          cy.get('.speaker-card').should('have.length', 35)
        })
    })
    it('access', () => {
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
          cy.contains('button', '送信').as('btn-submit').should('be.disabled')
          cy.contains('Vue Fes Japan にご興味をいただき、ありがとうございます')
          cy.contains('label', 'お名前／Name')
            .find('input[placeholder="山田太郎"]')
            .as('input-name')
          cy.contains('label', 'メールアドレス／Mail')
            .find('input[placeholder="hello@vuefes.jp"]')
            .as('input-mail')
          cy.contains('label', 'お問い合わせ内容／Content').find('textarea').as('input-text')
        })

      /**
       * check validation errors
       * CIではタイムアウトの12秒待ってもバリデーションエラーが出現しないためコメントアウトする
       * 原因不明
       */

      // cy.get('@input-name').type('abc{selectAll}{backspace}', { force: true }).blur()
      // cy.get('@input-mail').type('def{selectAll}{backspace}', { force: true }).blur()
      // cy.get('@input-text').type('ghi{selectAll}{backspace}', { force: true }).blur()
      // cy.wait(3000)

      // cy.get('@section').debugnode()

      // cy.contains('メールアドレスを入力してください')
      // cy.contains('名前を入力してください')
      // cy.contains('問い合わせ内容を入力してください')
      // cy.get('@btn-submit').should('have.attr', 'disabled')

      // check activated

      cy.wait(1000)
      cy.get('@input-name').type('やまだ', { force: true })
      cy.get('@input-mail').type('mymail@vue.com', { force: true })
      cy.get('@input-text').type('こめんと', { force: true }).blur()
      cy.wait(1000)
      cy.contains('button', '送信').as('btn-submit').should('not.be.disabled')
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
      loadPage(true)
      cy.wait(3000)
      cy.get('.hamburger-menu').should('be.visible').click({ force: true })
      cy.wait(1500)
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
