import { Tracks } from './timetable'

/**
 * for app
 */

export type Color = 'white' | 'vue.blue' | 'vue.green' | 'typescript.blue'

export type Path =
  | 'message'
  | 'form'
  | 'sponsor'
  | 'speaker'
  | 'teams'
  | 'ticket'
  | 'prepare-namecard'
  | 'namecard'
  | 'close-namecard'
  | 'volunteer'
  | 'childcare'
  | 'handson'
  | 'faq'
  | 'personal-sponsors-text1'
  | 'personal-sponsors-caption'
  | 'store'
  | 'pre-order'
  | 'current-day-sales'
  | 'event'
  | 'event-vuejs-clinic'
  | 'event-panel-discussion'
  | 'related-events'
  | 'privacy'
  | 'code-of-conduct'
  | string

export type AuthProvider = 'github' | 'google'

export type Role = 'staff' | 'speaker' | 'sponsor' | 'attendee' | 'attendee + party'

export type Status = 'registered' | 'failed' | 'nouser'

export interface FormUser {
  user_id: string
  full_name: string
  avatar_url: string
  provider: string
  role?: string
  email: string
  display_name: string
  receipt_id: string
  created_at: string
}

export interface User {
  activated_at: string | null
  avatar_url: string
  created_at: string
  display_name: string
  email: string
  full_name: string
  id: string
  provider: string
  receipt_id: string
  role: string | null
  updated_at: string
  user_id: string
}

/**
 * namecard
 */

// addition.csv data
export type AdditionItem = {
  receiptId: string
  applyTime: string
  role: Role
  fullName: string
  email: string
  survey1: string
  survey2: string
  survey3: string
  survey4: string
  survey5: string
  survey6: string
}

// list.xls colums
export type ListRow = {
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
export type ListMember = {
  ticketId: string
  ticketName: string
  userName: string
  applyDate: string
  orderId: string
}

/**
 * speaker
 */

export type Speaker = {
  id: string
  type: 'evan' | 'foreign' | 'domestic'
  session: Session
  profile: SpeakerProfile
}

export type Session = {
  title: string
  titleKey?: string
  type: 'main' | 'lt'
  track?: Tracks
  time: string
  archives?: Archive
}

export type SpeakerProfile = {
  id?: string // SponsorSpeaker に限って id を必須とする
  image: string
  title: string
  titleKey?: string
  name: string
  nameKey?: string
  githubId?: string
  twitterId?: string
  mastodonUrl?: string
}

export interface Archive {
  slide?: string
  youtube?: string
}

/**
 * sponsor
 */

export type SponsorCategory = 'platinum' | 'gold' | 'silver' | 'bronze' | 'individual'

export type OptionCategory =
  | 'session-room-naming-rights'
  | 'special-lunch'
  | 'lunch'
  | 'after-party'
  | 'name-card'
  | 'refreshment'
  | 'simultaneous-interpretation'
  | 'handson'
  | 'media'

export type Sponsor = {
  id: string
  name: string
  nameKey: string
  image: string
  categories: Array<SponsorCategory | OptionCategory>
  url: string
}

export type SponsorSpeaker = {
  id: string
  type: 'evan' | 'foreign' | 'domestic'
  session: Session
  profile: SpeakerProfile[]
  sponsorId: string
}

/**
 * team
 */
export type Team = {
  image: string
  name: string
  snsLink: string
}

export type Volunteer = {
  name: string
}

/**
 * store
 */
export type StoreMenu = {
  imgSrc: string
  nameKey: string
  price: string
  textKey: string
  color?: string
  size: string
}

/**
 * paneler
 */
export type Paneler = {
  image: string
  name: string
  snsLink: string
  title: string
  titleKey?: string
}
