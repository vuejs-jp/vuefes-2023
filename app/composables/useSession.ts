import { useFeature } from '~/composables/useFeature'

export function useSession() {
  const feature = useFeature()
  const showSpeakerInfo = feature.showSpeakerInfo === 'true'

  return { showSpeakerInfo }
}
