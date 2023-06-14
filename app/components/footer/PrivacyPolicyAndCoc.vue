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
      padding: '4px 0',
      textDecoration: 'none',
      color: '{color.white}',
      fontSize: '18px',
    },
  },
  '@mobile': {
    gap: '24px',
    '.doc-root': {
      'a': {
        fontSize: '14px',
      },
    },
  },
  '@tablet': {
    '.doc-root': {
      'a': {
        textDecoration: 'underline',
      },
    },
  },
})
</style>
