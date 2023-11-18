export type Sponsors = 'cloudsign' | 'medpeer' | 'm3'
export type Tracks = Sponsors | 'vue' | 'all'

export type Session = {
  id?: string
  category?: string
  title: string
  titleKey?: string
  speaker?: string
  speakerKey?: string
  archives?: Archive
  subTitle?: string
  sponsorSession?: string
  isTranslation?: boolean
}

export type Track = {
  track?: string
  colspan?: number
  rowspan?: number
  isClose?: boolean
  sessions?: Session[]
}

export type Archive = {
  slide?: string
  youtube?: string
}
