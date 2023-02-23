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
  <div class="">
    <div class="flex absolute top-0 justify-center items-center p-px w-full h-full">
      <button type="submit" class="form-button" @click="handleClick">
        {{ titleLabel }}
      </button>
    </div>
  </div>
</template>

<style lang="ts" scoped>
css({
  '.root': {
    //
  },
  '.form-button': {
    //
  },
})
</style>
