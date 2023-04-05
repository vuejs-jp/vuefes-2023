<script setup lang="ts">
/* eslint vuejs-accessibility/no-static-element-interactions: 0 */
import { onMounted, ref } from 'vue'
// import Encoding from 'encoding-japanese'
import * as XLSX from 'xlsx'
const isDragEnter = ref(false)

enum FileName {
  ADDITION_CSV = 'addition.csv',
  ADDITION_ZIP = 'addition.zip',
  LIST_XLS = 'list.xls',
}

// list.xls colums data
type ListRow = {
  __EMPTY: string // "チケットID"
  __EMPTY_1: string // "参加者名"
  __EMPTY_10: string // "受付状況"
  __EMPTY_11: string // "受付日"
  __EMPTY_12: string // "受付時刻"
  __EMPTY_2: string // "チケット名"
  __EMPTY_3: string // "申込日"
  __EMPTY_4: string // "申込時刻"
  __EMPTY_5: string // "座席番号"
  __EMPTY_6: string // "外部コード"
  __EMPTY_7: string // "割引コード"
  __EMPTY_8: string // "価格"
  __EMPTY_9: string // "注文番号"
}
type ListMember = {
  ticketId: string
  ticketName: string
  userName: string
  applyDate: string
  orderId: string
}
const createMemberListFromRowJson = async (file: File): Promise<ListMember[]> => {
  const workbook = XLSX.read(await file.arrayBuffer())
  const sheet = workbook.Sheets['Sheet1']
  const rows = XLSX.utils.sheet_to_json(sheet) as ListRow[]
  return rows
    .filter((row: ListRow) => {
      return row.__EMPTY.match(/^[A-Z]-[0-9]+$/)
    })
    .map((row: ListRow) => {
      return {
        ticketId: row.__EMPTY,
        ticketName: row.__EMPTY_2,
        userName: row.__EMPTY_1,
        applyDate: row.__EMPTY_3,
        orderId: row.__EMPTY_9,
      }
    })
}

// addition.csv colums data
type AdditionItem = {
  orderId: string
  applyTime: string
  eventId: string
  eventTitle: string
  ticketId: string
  password: string
}
const createAdditionListFromRowJson = async (file: File): Promise<AdditionItem[]> => {
  console.log('file', file)

  return new Promise((resolve: (items: AdditionItem[]) => void) => {
    const valueFilter = (value: string) => {
      if (!value) return ''
      return value.replace(/^"(.+)"$/, '$1').replace(/'/g, '')
    }
    const reader = new FileReader()
    reader.onerror = () => {
      alert('ファイル読み取りに失敗しました')
    }
    // ファイル読み取りに成功したとき
    reader.onload = () => {
      const rows = (reader.result as string).split('\n')
      const itemRows = rows.slice(1)
      const items = itemRows
        .map((row: string) => {
          const tmp = row.split(',')
          return {
            orderId: valueFilter(tmp[0]),
            applyTime: valueFilter(tmp[1]),
            eventId: valueFilter(tmp[3]),
            eventTitle: valueFilter(tmp[4]),
            ticketId: valueFilter(tmp[5]),
            password: valueFilter(tmp[6]),
          }
        })
        .filter((item: AdditionItem) => {
          return item.orderId
        })
      resolve(items)
    }
    reader.readAsText(file, 'Shift_JIS')
  })
}

const onFileInputChange = (payload: Event) => {
  checkFiles([...payload.target?.files])
}
const onDropFile = (e: DragEvent) => {
  checkFiles([...e.dataTransfer?.files])
}
const checkFiles = async (files: File[]) => {
  if (files.length === 0) return
  const file = files[0]
  const filename = file.name

  if (
    !([FileName.ADDITION_CSV, FileName.ADDITION_ZIP, FileName.LIST_XLS] as string[]).includes(
      file.name,
    )
  ) {
    alert(`this file is not acceptable -> ${file.name}`)
    return
  }
  if (filename === FileName.LIST_XLS) {
    const members = await createMemberListFromRowJson(file)
    console.log('members', members)
  }
  if (filename === FileName.ADDITION_CSV) {
    const items = await createAdditionListFromRowJson(file)
    console.log('items', items)
  }
}
onMounted(() => {
  window.ondrop = (e) => {
    e.preventDefault()
  }
  window.ondragover = (e) => {
    e.preventDefault()
  }
})
</script>

<template>
  <main>
    <label
      for="fileupload"
      draggable="true"
      class="uploadarea"
      :class="{ '-isDragEnter': isDragEnter }"
      @dragenter="() => (isDragEnter = true)"
      @dragleave="() => (isDragEnter = false)"
      @dragover.prevent
      @drop.prevent="onDropFile"
    >
      <p>
        <b>Upload one of them</b><br />
        list.xls
        <br />
        addition.zip
        <br />
        addition.csv
      </p>
      <input
        id="fileupload"
        type="file"
        name="passmarketdata"
        accept="application/vnd.ms-excel,application/zip,text/csv"
        @change="onFileInputChange"
      />
    </label>
  </main>
</template>

<style lang="ts" scoped>
css({
  '.uploadarea': {
    position: 'relative',
    display: 'block',
    margin: '40px auto',
    textAlign: 'center',
    width: '400px',
    height: '400px',
    borderRadius: '12px',
    border: 'dotted 4px #ccc',
    cursor: 'pointer',
    color: '#ccc',
    '&:hover': {
      border: 'dotted 4px var(--color-vue-blue)',
      color: 'var(--color-vue-blue)'
    },
    '&.-isDragEnter': {
      border: 'dotted 4px var(--color-vue-blue)',
      color: 'var(--color-vue-blue)'
    }
  },
  '.uploadarea input': {
    display: 'none',
  },
  '.uploadarea p': {
    position: 'absolute',
    top: '50%',
    left: '0',
    transform: 'translate(0,-50%)',
    fontSize: '20px',
    margin: '0',
    width: '100%',
    textAlign: 'center',
    // pointerEvents: 'none'
  }

})
</style>
