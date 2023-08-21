import { match } from 'ts-pattern'
import { Tracks } from '~/types/timetable'
import { useFeature } from '~/composables/useFeature'

export function useSession() {
  const feature = useFeature()
  const showSpeakerInfo = feature.showSpeakerInfo === 'true'

  const getTrackColor = (track: Tracks) => {
    return match(track)
      .with('cloudsign', () => 'timetable.trackA')
      .with('medpeer', () => 'timetable.trackB')
      .with('m3', () => 'timetable.trackC')
      .with('vue', () => 'timetable.trackD')
      .exhaustive()
  }

  return { showSpeakerInfo, getTrackColor }
}
