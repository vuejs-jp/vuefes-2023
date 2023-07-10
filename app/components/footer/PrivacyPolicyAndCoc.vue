<script setup lang="ts">
import TextButton from '~/components/button/TextButton.vue'
</script>

<template>
  <div class="doc-root">
    <TextButton href="/privacy" underline @click.stop="$emit('click')">{{
      $t('words.privacypolicy')
    }}</TextButton>
    <TextButton href="/code-of-conduct" underline @click.stop="$emit('click')">{{
      $t('words.codeofconduct')
    }}</TextButton>
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
      textDecoration: 'underline',
      color: '{color.white}',
      fontSize: '18px',
    },
  },
  '@tablet': {
    gap: '24px',
    '.doc-root': {
      'a': {
        fontSize: '14px',
      },
    },
  },
  '@mobile': {
    '.doc-root': {
      'a': {
        textDecoration: 'none',
      },
    },
  },
})
</style>
