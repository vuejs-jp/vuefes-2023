export type Sponsors = 'cloudsign' | 'medpeer' | 'm3'
export type Tracks = Sponsors | 'vue'

export interface Session {
  title: string
  speaker?: string
  subTitle?: string
  isTranslation?: boolean
}

export interface Track {
  track: Tracks
  colspan?: number
  rowspan?: number
  isClose?: boolean
  sponsorSession?: Sponsors
  sessions: Session[]
}
