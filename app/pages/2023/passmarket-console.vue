<script setup lang="ts">
import RoundButton from '~/components/button/RoundButton.vue'
import { usePassMarket } from '~/composables/usePassMarket'
import { usePassMarketUpload } from '~/composables/usePassMarketUpload'
import { useSupabase } from '~/composables/useSupabase'
import { useArray } from '~/composables/useArray'
import { ListMember, Role } from '~/types/app'

const members = ref<ListMember[]>()
const receiptIds = ref<{ role: Role; receipt_id: string }[]>([])

const { getReceipts } = usePassMarket()
const { fetchMembers } = usePassMarketUpload()
const { updatePMReceipt } = useSupabase()
const { unique } = useArray()

enum FileName {
  // 参加者一覧
  LIST_XLS = 'list.xls',
  // 購入者アンケート情報
  // ADDITION_CSV = 'addition.csv',
}

const checkFiles = async (files: File[]) => {
  if (files.length === 0) return

  const file = files[0]
  const filename = file.name

  if (filename === FileName.LIST_XLS) {
    members.value = await fetchMembers(file)
    const _receiptIds = getReceipts(members.value)
    receiptIds.value = unique<{ role: Role; receipt_id: string }>(_receiptIds, 'receipt_id')
  }
  alert(`this file is not acceptable -> ${filename}`)
}

const onUpdate = () => {
  if (receiptIds.value?.length === 0) return

  updatePMReceipt(receiptIds.value)
}
</script>

<template>
  <main>
    <DragDropArea
      file-name="passmarketdata"
      file-accept="application/vnd.ms-excel,application/zip,text/csv"
      @check-files="checkFiles"
    >
      <p>
        <b>Upload one of them</b><br />
        list.xls
        <!--
        <br />
        addition.csv
        -->
      </p>
    </DragDropArea>
    <div class="update-button">
      <RoundButton @click="onUpdate">レシート情報の取込</RoundButton>
    </div>
    <div class="resultarea">
      <div v-if="receiptIds">
        <ul>
          <li v-for="(receipt, index) in receiptIds" :key="index">
            {{ receipt }}
          </li>
        </ul>
      </div>
      <div v-if="!members" class="noresult">Upload your CSV file from the top</div>
    </div>
  </main>
</template>

<style lang="ts" scoped>
css({
  'main': {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    verticalAlign: 'middle',
  },
  '.resultarea': {
    width: '100%',
    height: 'auto',
  },
  '.resultarea ul ul': {
    display: 'flex',
    gap: '16px',
  },
  '.resultarea .noresult': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    verticalAlign: 'middle',
    height: '100vh',
    color: '{color.vue.blue}',
  },
  '.update-button': {
    display: 'grid',
    placeItems: 'center',
  },
})
</style>
