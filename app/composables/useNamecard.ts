import { useFeature } from '~/composables/useFeature'

export function useNamecard() {
  const feature = useFeature()
  const canPurchase = feature.registerTicket === 'true'
  const canRegister = feature.registerNamecard === 'true'

  // 登録を終了する際に更新してください
  const closedRegister = false

  return { canPurchase, canRegister, closedRegister }
}
