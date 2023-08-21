export type Sponsors = 'cloudsign' | 'medpeer' | 'm3'
export type Tracks = Sponsors | 'vue'

export interface Session {
  id?: string
  title: string
  speaker?: string
  subTitle?: string
  isTranslation?: boolean
}

export interface Track {
  track?: string
  colspan?: number
  rowspan?: number
  isClose?: boolean
  sponsorSession?: string
  sessions?: Session[]
}
