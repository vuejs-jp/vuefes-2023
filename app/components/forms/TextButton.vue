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
    padding: '4px 12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'underline',
    '&:hover': {
      color: '{color.vue.green}',
    },
  },
})
</style>
