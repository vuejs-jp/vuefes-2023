import { useFeature } from '~/composables/useFeature'

export function useNamecard() {
  const feature = useFeature()
  const canPurchase = feature.registerTicket === 'true'
  const canRegister = feature.registerNamecard === 'true'

  // 10/4 登録終了
  const closedRegister = true

  return { canPurchase, canRegister, closedRegister }
}
