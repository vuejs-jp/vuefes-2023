export type Sponsors = 'cloudsign' | 'medpeer' | 'm3'
export type Tracks = Sponsors | 'vue' | 'all'

export interface Session {
  id?: string
  category?: string
  title: string
  titleKey?: string
  speaker?: string
  speakerKey?: string
  subTitle?: string
  sponsorSession?: string
  isTranslation?: boolean
}

export interface Track {
  track?: string
  colspan?: number
  rowspan?: number
  isClose?: boolean
  sessions?: Session[]
}
