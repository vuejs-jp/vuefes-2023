import { ListMember, Role } from '~/types/app'

export function usePassMarket() {
  function getReceipts(memberData: ListMember[]) {
    const receiptIds: { role: Role; receipt_id: string }[] = []

    for (const member of memberData) {
      if (member.ticketName.indexOf('一般＋アフターパーティーチケット') !== -1) {
        receiptIds.push({
          role: 'attendee + party',
          receipt_id: member.orderId,
        })
      }
      if (member.ticketName.indexOf('一般チケット') !== -1) {
        receiptIds.push({
          role: 'attendee',
          receipt_id: member.orderId,
        })
      }
    }

    return receiptIds
  }

  return { getReceipts }
}
