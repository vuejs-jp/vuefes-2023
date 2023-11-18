import * as XLSX from 'xlsx'
import { useArray } from '~/composables/useArray'
import { useUserRole } from '~/composables/useUserRole'
import { AdditionItem, ListMember, ListRow } from '~/types/app'

export function usePassMarketUpload() {
  const { valueFilter } = useArray()
  const { getRole } = useUserRole()

  async function fetchMembers(file: File): Promise<ListMember[]> {
    const workbook = XLSX.read(await file.arrayBuffer())
    const sheet = workbook.Sheets.Sheet1
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

  async function fetchSurveys(file: File) {
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
              receiptId: valueFilter(tmp[0]),
              applyTime: valueFilter(tmp[1]),
              role: getRole(valueFilter(tmp[2])),
              fullName: `${valueFilter(tmp[6])} ${valueFilter(tmp[7])}`,
              email: valueFilter(tmp[10]),
              survey1: valueFilter(tmp[11]),
              survey2: valueFilter(tmp[12]),
              survey3: valueFilter(tmp[13]),
              survey4: valueFilter(tmp[14]),
              survey5: valueFilter(tmp[15]),
              survey6: valueFilter(tmp[16]),
            }
          })
          .filter((item: AdditionItem) => item.receiptId)
        resolve(items)
      }
      reader.readAsText(file, 'Shift_JIS')
    })
  }

  return { fetchMembers, fetchSurveys }
}
