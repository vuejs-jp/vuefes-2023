import { useFeature } from '~/composables/useFeature'

export function useNamecard() {
  const feature = useFeature()
  const canPurchase = feature.registerTicket === 'true'
  const canRegister = feature.registerNamecard === 'true'

  return { canPurchase, canRegister }
}
