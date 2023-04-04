<script setup lang="ts">
import TextButton from '~/components/forms/TextButton.vue'
import { websiteLinks } from '~/utils/constants'
</script>

<template>
  <span class="past-root-mobile">
    <TextButton v-for="website in websiteLinks" :key="website.value" :url="website.url">
      {{ website.id }}
    </TextButton>
  </span>
</template>

<style lang="ts" scoped>
css({
  '.past-root-mobile': {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    gap: '24px',
    'a': {
      fontSize: '20px',
    },
  },
})
</style>
