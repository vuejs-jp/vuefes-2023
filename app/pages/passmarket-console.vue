<script setup lang="ts">
/* eslint vuejs-accessibility/no-static-element-interactions: 0 */
import { onMounted, ref } from 'vue'
// import Encoding from 'encoding-japanese'
import * as XLSX from 'xlsx'
const isDragEnter = ref(false)

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

const createMemberListFromRowJson = (rows: ListRow[]): ListMember[] => {
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

const onFileInputChange = (payload: Event) => {
  checkFiles([...payload.target?.files])
}
const onDropFile = (e: DragEvent) => {
  checkFiles([...e.dataTransfer?.files])
}
const checkFiles = async (files: File[]) => {
  if (files.length === 0) return
  const file = files[0]

  console.log('file.name', file.name)

  if (!file.name.includes('.xls')) return

  const workbook = XLSX.read(await file.arrayBuffer())
  const sheet = workbook.Sheets['Sheet1']
  const rows = XLSX.utils.sheet_to_json(sheet) as ListRow[]
  const members = createMemberListFromRowJson(rows)
  console.log('members', members)
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
      <span>アップロード<br />（list.xls or addition.zip）</span>
      <input
        id="fileupload"
        type="file"
        name="passmarketdata"
        accept="application/vnd.ms-excel,application/zip"
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
  '.uploadarea span': {
    position: 'absolute',
    top: '45%',
    left: '0',
    transform: 'tranlate(0,-50%)',
    fontSize: '20px',
    margin: '0',
    width: '100%',
    textAlign: 'center',
    // pointerEvents: 'none'
  }

})
</style>
