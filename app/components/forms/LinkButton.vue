<script setup lang="ts">
const props = defineProps({
  url: {
    type: String,
    required: true,
  },
})

const isExternal = computed(() => props.url.match(/^https?:\/\//))
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
    padding: '36px 144px',
    display: 'grid',
    placeItems: 'center',
    border: '2px solid {color.vue.blue}',
    borderRadius: '50px',
    background: '{color.white}',
    color: '{color.vue.blue}',
    fontWeight: 'bold',
    fontSize: '20px',
    cursor: 'pointer',
    '&:hover': {
      background: 'rgba(53, 73, 94, 0.2)',
      transition: '.2s',
    },
  },
  '@mobile': {
    '.anchor-root': {
      padding: '18px 72px',
    },
  },
})
</style>
