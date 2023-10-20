import { match } from 'ts-pattern'
import { Tracks } from '~/types/timetable'
import { useFeature } from '~/composables/useFeature'
import { OptionCategory, SponsorCategory } from '~/types/app'

export function useSession() {
  const feature = useFeature()
  const showSpeakerInfo = feature.showSpeakerInfo === 'true'

  const getTrackColor = (track: Tracks) => {
    return match(track)
      .with('all', () => 'vue.blue')
      .with('cloudsign', () => 'timetable.trackA')
      .with('medpeer', () => 'timetable.trackB')
      .with('m3', () => 'timetable.trackC')
      .with('vue', () => 'timetable.trackD')
      .exhaustive()
  }

  const getCategory = (
    category: Extract<SponsorCategory | OptionCategory, 'platinum' | 'special-lunch' | 'lunch'>,
  ) => {
    return `category['${category}']`
  }

  return { showSpeakerInfo, getTrackColor, getCategory }
}
