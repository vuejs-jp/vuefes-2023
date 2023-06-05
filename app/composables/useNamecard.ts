import { useFeature } from '~/composables/useFeature'

export function useNamecard() {
  const feature = useFeature()
  const canRegister = feature.registerNamecard

  return { canRegister }
}
