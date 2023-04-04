<script setup lang="ts">
/* eslint vuejs-accessibility/no-static-element-interactions: 0 */
import { onMounted, ref } from 'vue'
const isDragEnter = ref(false)
const dropFile = (e: DragEvent) => {
  const files = [...e.dataTransfer?.files]
  if (files.length === 0) return
  const file = files[0]

  if (!file.name.includes('.xls')) return

  const reader = new FileReader()
  reader.onload = (e: ProgressEvent<FileReader>) => {
    const content = e.target?.result // ファイルの中身が取れます。
  }
  reader.readAsText(file)
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
      @drop.prevent="dropFile"
    >
      <span>アップロード</span>
      <input
        id="fileupload"
        type="file"
        name="passmarketdata"
        accept="application/vnd.ms-excel,application/zip"
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
    top: '50%',
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
