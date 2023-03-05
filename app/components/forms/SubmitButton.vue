<script setup lang="ts">
interface IButtonFieldEmit {
  (e: 'on-click'): void
}
const props = defineProps({
  titleLabel: {
    type: String,
    required: true,
  },
})
const emit = defineEmits<IButtonFieldEmit>()
const handleClick = () => {
  emit('on-click')
}
</script>

<template>
  <button type="submit" class="form-button" @click="handleClick">
    {{ titleLabel }}
  </button>
</template>

<style lang="ts" scoped>
css({
  '.form-button': {
    //
  },
})
</style>
