<script setup lang="ts">
import TextButton from '~/components/forms/TextButton.vue'
</script>

<template>
  <div class="doc-root">
    <TextButton url="/privacy">プライバシーポリシー</TextButton>
    <TextButton url="/code-of-conduct">行動規範</TextButton>
  </div>
</template>

<style lang="ts" scoped>
css({
  '.doc-root': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '36px',
    'a': {
      fontSize: '18px',
    },
  },
  '@media(max-width: 1023px)': {
    gap: '24px',
    '.past-root': {
      'a': {
        fontSize: '14px',
      },
    },
  },
})
</style>
