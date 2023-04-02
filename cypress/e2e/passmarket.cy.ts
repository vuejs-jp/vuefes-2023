/// <reference types="cypress" />
import path from 'path'

const defaultDownloadFolder = 'cypress/downloads'

context('Passmarket', () => {
  it('download member list', () => {
    login()
    // 参加者一覧ダウンロード
    cy.contains('a', '1,000件まで').click()

    const filepath = path.join(defaultDownloadFolder, 'list.xls')
    return cy.readFile(filepath).then((result) => {
      console.log('result', result)
    })
  })
})

function login() {
  const id = Cypress.env('CYPRESS_PASSMARKET_ID')
  const pass = Cypress.env('CYPRESS_PASSMARKET_PASS')

  cy.visit(
    'https://login.yahoo.co.jp/config/login?.src=psm&.lg=jp&.intl=jp&t_cushion=1&.done=https%3A%2F%2Fpassmarket.yahoo.co.jp%2Fmy%2Fevent%2Fmenu%3Fevent_id%3D02kt0gmr16z21%26.scrumb%3D0%26psmscrumb%3DYmU5NDU4NjNlMmE3FP-s_pDZfklHZHRrU5lVC3avuFW-QnRCucAuew',
  )
  cy.get('input[placeholder="ID/携帯電話番号/メールアドレス"]').type(id)
  cy.contains('button', '次へ').click()
  cy.get('input[placeholder="パスワード"]').type(pass)
  cy.contains('button', 'ログイン').click()
}
