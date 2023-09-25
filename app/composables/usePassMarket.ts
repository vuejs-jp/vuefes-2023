import { ListMember, Role } from '~/types/app'
import { useUserRole } from '~/composables/useUserRole'

export function usePassMarket() {
  const { getRole } = useUserRole()

  function getReceipts(memberData: ListMember[]) {
    const receiptIds: { role: Role; receipt_id: string }[] = []

    for (const member of memberData) {
      if (member.ticketName.indexOf('一般＋アフターパーティーチケット') !== -1) {
        receiptIds.push({
          role: getRole(member.ticketName),
          receipt_id: member.orderId,
        })
      }
      if (member.ticketName.indexOf('一般チケット') !== -1) {
        receiptIds.push({
          role: getRole(member.ticketName),
          receipt_id: member.orderId,
        })
      }
    }

    return receiptIds
  }

  return { getReceipts }
}
