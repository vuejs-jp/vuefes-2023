import * as XLSX from 'xlsx'
import { useArray } from '~/composables/useArray'
import { AdditionItem, ListMember, ListRow } from '~/types/app'

export function usePassMarketUpload() {
  const { valueFilter } = useArray()

  async function fetchSheet(file: File): Promise<ListMember[]> {
    const workbook = XLSX.read(await file.arrayBuffer())
    const sheet = workbook.Sheets['Sheet1']
    const rows: ListRow[] = XLSX.utils.sheet_to_json(sheet)

    return rows
      .filter((row) => row.__EMPTY.match(/^[A-Z]-[0-9]+$/))
      .map((row) => {
        return {
          ticketId: row.__EMPTY,
          ticketName: row.__EMPTY_2,
          userName: row.__EMPTY_1,
          applyDate: row.__EMPTY_3,
          orderId: row.__EMPTY_9,
        }
      })
  }

  async function convertMembers(file: File) {
    return new Promise(function (resolve: (items: AdditionItem[]) => void) {
      const reader = new FileReader()

      reader.onerror = function () {
        alert(`could not read file -> ${file.name}`)
      }

      reader.onload = function () {
        const rows = reader.result?.toString().split('\n')
        const itemRows = rows?.slice(1) ?? []

        const items = itemRows
          .map((row: string) => {
            const tmp = row.split(',')

            return {
              orderId: valueFilter(tmp[0]),
              applyTime: valueFilter(tmp[1]),
              orderBody: valueFilter(tmp[2]),
              eventId: valueFilter(tmp[3]),
              eventTitle: valueFilter(tmp[4]),
              ticketId: valueFilter(tmp[5]),
              password: valueFilter(tmp[6]),
            }
          })
          .filter((item: AdditionItem) => item.orderId)
        resolve(items)
      }
      reader.readAsText(file, 'Shift_JIS')
    })
  }

  return { fetchSheet, convertMembers }
}
