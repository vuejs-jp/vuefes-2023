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
  <a :href="url" :title="title" target="_blank" rel="noreferrer">
    <slot />
  </a>
</template>
