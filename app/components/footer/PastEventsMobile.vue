<script setup lang="ts">
import TextButton from '~/components/button/TextButton.vue'
import { websiteLinks } from '~/utils/constants'
</script>

<template>
  <span class="past-root-mobile">
    <TextButton
      v-for="website in websiteLinks"
      :key="website.value"
      :href="website.url"
      target="_blank"
    >
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
      padding: 0,
      margin: 0,
      color: '{color.white}',
      fontSize: '20px',
    },
  },
})
</style>
