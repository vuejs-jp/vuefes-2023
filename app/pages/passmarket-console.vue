<script setup lang="ts">
import { usePassMarketUpload } from '~/composables/usePassMarketUpload'
import { AdditionItem, ListMember } from '~/types/app'

const memberData = ref<ListMember[]>()
const members = ref<AdditionItem[]>()

const isDragEnter = ref(false)

const { convertMembers, fetchSheet } = usePassMarketUpload()

enum FileName {
  ADDITION_CSV = 'addition.csv',
  LIST_XLS = 'list.xls',
}

const onFileInputChange = (event: Event) => {
  const { target } = event
  if (!(target instanceof HTMLInputElement)) return

  if (target.files) {
    checkFiles(Array.from(target.files))
  }
}
const onDropFile = (e: DragEvent) => {
  if (e.dataTransfer?.files) {
    checkFiles(Array.from(e.dataTransfer?.files))
  }
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
      role="button"
      tabindex="0"
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
  }

})
</style>
