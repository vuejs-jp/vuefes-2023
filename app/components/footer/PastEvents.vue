<script setup lang="ts">
import TextButton from '~/components/forms/TextButton.vue'
import { websiteLinks } from '~/utils/constants'
</script>

<template>
  <div class="past-root">
    <TextButton v-for="website in websiteLinks" :key="website.value" :url="website.url">
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
      fontSize: '18px',
    },
  },
  '@media(max-width: 1023px)': {
    '.past-root': {
      'a': {
        fontSize: '14px',
      },
    },
  },
})
</style>
