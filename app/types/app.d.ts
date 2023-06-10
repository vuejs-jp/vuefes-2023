/**
 * for app
 */

export type Color = 'white' | 'vue.blue' | 'vue.green' | 'typescript.blue'

export type AuthProvider = 'github' | 'google'

/**
 * below
 * experimental
 */

// addition.csv data
type AdditionItem = {
  orderId: string
  applyTime: string
  eventId: string
  eventTitle: string
  ticketId: string
  password: string
}

// list.xls colums
type ListRow = {
  __EMPTY: string // "チケットID"
  __EMPTY_1: string // "参加者名"
  __EMPTY_10: string // "受付状況"
  __EMPTY_11: string // "受付日"
  __EMPTY_12: string // "受付時刻"
  __EMPTY_2: string // "チケット名"
  __EMPTY_3: string // "申込日"
  __EMPTY_4: string // "申込時刻"
  __EMPTY_5: string // "座席番号"
  __EMPTY_6: string // "外部コード"
  __EMPTY_7: string // "割引コード"
  __EMPTY_8: string // "価格"
  __EMPTY_9: string // "注文番号"
}

// list.xls data
type ListMember = {
  ticketId: string
  ticketName: string
  userName: string
  applyDate: string
  orderId: string
}
