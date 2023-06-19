<template>
  <div class="container">
    <slot />
  </div>
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
