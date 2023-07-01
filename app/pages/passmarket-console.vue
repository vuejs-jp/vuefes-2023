<script setup lang="ts">
import { usePassMarketUpload } from '~/composables/usePassMarketUpload'
import { AdditionItem, ListMember } from '~/types/app'

const memberData = ref<ListMember[]>()
const members = ref<AdditionItem[]>()

const { convertMembers, fetchSheet } = usePassMarketUpload()

enum FileName {
  ADDITION_CSV = 'addition.csv',
  LIST_XLS = 'list.xls',
}

const checkFiles = async (files: File[]) => {
  if (files.length === 0) return

  const file = files[0]
  const filename = file.name

  if (filename === FileName.LIST_XLS) {
    memberData.value = await fetchSheet(file)
    console.log('memberData', memberData.value)
  }
  if (filename === FileName.ADDITION_CSV) {
    members.value = await convertMembers(file)
    console.log('members', members.value)
  }
  alert(`this file is not acceptable -> ${filename}`)
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
        <br />
        addition.csv
      </p>
    </DragDropArea>
    <div class="resultarea">
      <div v-if="memberData">
        <ul>
          <li v-for="(member, index) in memberData" :key="index">
            {{ member }}
          </li>
        </ul>
      </div>
      <div v-if="members">
        <ul>
          <li v-for="(member, index) in members" :key="index">
            {{ member }}
          </li>
        </ul>
      </div>
      <div v-if="!memberData && !members" class="noresult">Upload your CSV file from the top</div>
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
})
</style>
