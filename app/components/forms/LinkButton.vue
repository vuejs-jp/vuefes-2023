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
    border: '1px {color.vue.blue} solid',
    borderRadius: '50px',
    background: '{color.white}',
    color: '{color.vue.blue}',
    fontWeight: 'bold',
    fontSize: '1.25rem',
    lineHeight: '1.75rem',
    boxShadow: '0px 10px 20px rgba(53, 73, 94, 0.1)',
    transitionProperty: 'color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter',
    transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
    transitionDuration: '150ms',
    cursor: 'pointer',
    '&:hover': {
      boxShadow: '0 0 0 rgba(#000000, 0.2)',
    },
  },
  '@media(max-width: 1023px)': {
    '.anchor-root': {
      padding: '18px 72px',
    },
  },
})
</style>
