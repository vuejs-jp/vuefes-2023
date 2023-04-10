<script setup lang="ts">
const props = defineProps({
  url: {
    type: String,
    required: true,
  },
})

const isExternal = computed(() => props.url.match(/^https?:\/\//) !== null)
</script>

<template>
  <a v-if="isExternal" :href="url" class="anchor-root" target="_blank" rel="noreferrer">
    <slot />
  </a>
  <nuxt-link v-else :to="url" class="anchor-root">
    <slot />
  </nuxt-link>
</template>

<style lang="ts" scoped>
css({
  '.anchor-root': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '&:hover': {
      color: '{color.vue.green}',
      transition: '.2s',
    },
  },
})
</style>
