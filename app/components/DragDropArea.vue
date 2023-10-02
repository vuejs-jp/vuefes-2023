<script setup lang="ts">
interface DragDropAreaProps {
  fileName: string
  fileAccept: string
}

interface DragDropAreaEmit {
  (e: 'check-files', value: File[]): void
}

const props = defineProps<DragDropAreaProps>()
const isDragEnter = ref(false)

const emit = defineEmits<DragDropAreaEmit>()

const onDropFile = (e: DragEvent) => {
  if (e.dataTransfer?.files) {
    emit('check-files', Array.from(e.dataTransfer?.files))
  }
}

const onFileInputChange = (event: Event) => {
  const { target } = event
  if (!(target instanceof HTMLInputElement)) return

  if (target.files) {
    emit('check-files', Array.from(target.files))
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
  <button
    draggable="true"
    :class="{ '-isDragEnter': isDragEnter }"
    @dragenter="() => (isDragEnter = true)"
    @dragleave="() => (isDragEnter = false)"
    @dragover.prevent
    @drop.prevent="onDropFile"
  >
    <label for="fileupload" class="uploadarea">
      <slot />
      <input
        id="fileupload"
        type="file"
        :name="fileName"
        :accept="fileAccept"
        @change="onFileInputChange"
      />
    </label>
  </button>
</template>

<style lang="ts" scoped>
css({
  '.uploadarea': {
    position: 'relative',
    display: 'grid',
    margin: 'calc({space.8} * 5) auto',
    placeItems: 'center',
    width: '100%',
    height: '214px',
    borderRadius: 'calc({space.8} * 1.5)',
    border: 'dotted calc({space.8} * 0.5) {color.vue.blue}',
    cursor: 'pointer',
    color: '{color.vue.blue}',
    '&.-isDragEnter': {
      border: 'dotted calc({space.8} * 0.5) {color.vue.blue}',
      color: '{color.vue.blue}'
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
    fontSize: 'calc(20*{fontSize.base})',
    margin: '0',
    width: '100%',
    textAlign: 'center',
  },
})
</style>
