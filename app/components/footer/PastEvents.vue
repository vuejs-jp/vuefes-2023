<script setup lang="ts">
import TextButton from '~/components/button/TextButton.vue'
import { websiteLinks } from '~/utils/constants'
</script>

<template>
  <div class="past-root">
    <TextButton
      v-for="website in websiteLinks"
      :key="website.value"
      :href="website.url"
      target="_blank"
      underline
    >
      {{ website.title }}
    </TextButton>
  </div>
</template>

<style lang="ts" scoped>
css({
  '.past-root': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    columnGap: '60px',
    'a': {
      padding: '4px 0',
      textDecoration: 'underline',
      color: '{color.white}',
      fontSize: '18px',
    },
  },
  '@mobile': {
    '.past-root': {
      'a': {
        fontSize: '14px',
      },
    },
  },
})
</style>
