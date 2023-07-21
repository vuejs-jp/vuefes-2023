<script setup lang="ts">
const props = defineProps({
  url: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <a :href="props.url" :title="props.title" target="_blank" rel="noreferrer">
    <slot />
  </a>
</template>
