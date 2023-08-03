import { ListMember, Role } from '~/types/app'

export function usePassMarket() {
  function getReceipts(memberData: ListMember[]) {
    const receiptIds: { role: Role; receipt_id: string }[] = []

    for (const member of memberData) {
      receiptIds.push({
        role:
          member.ticketName.indexOf('一般＋アフターパーティーチケット') !== -1
            ? 'attendee + party'
            : 'attendee',
        receipt_id: member.orderId,
      })
    }

    return receiptIds
  }

  return { getReceipts }
}
