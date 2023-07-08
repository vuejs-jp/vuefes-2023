/**
 * for app
 */

export type Color = 'white' | 'vue.blue' | 'vue.green' | 'typescript.blue'

export type Path = 'message' | 'form' | 'sponsor' | 'speaker' | 'privacy' | 'code-of-conduct'

export type AuthProvider = 'github' | 'google'

export type Role = 'staff' | 'speaker' | 'sponsor' | 'attendee' | 'attendee + party'

export type Status = 'registered' | 'failed'

export interface FormUser {
  user_id: string
  full_name: string
  avatar_url: string
  provider: string
  email: string
  created_at: string
}

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

type Speaker = {
  id: string
  type: 'evan' | 'foreign' | 'domestic'
  session: Session
  profile: SpeakerProfile
}

type Session = {
  title: string
  description: string
  type: 'main' | 'lt'
  time: number
}

type SpeakerProfile = {
  image: string
  title: string
  name: string
  description: string
  githubId?: string
  twitterId?: string
  mastodonUrl?: string
}
