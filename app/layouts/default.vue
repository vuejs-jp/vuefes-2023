<script setup lang="ts">
import Provider from '~/providers/Provider.vue'
</script>

<template>
  <Provider>
    <div class="container">
      <slot />
    </div>
  </Provider>
</template>

<style lang="ts" scoped>
css({
  '.container': {
    '@tablet': {
      margin: '0 auto',
    },
  },
})
</style>
