<template>
  <div class="container">
    <slot />
  </div>
</template>

<style lang="ts" scoped>
css({
  '.container': {
    '@media(max-width: 767px)': {
      margin: '0 auto',
    },
  },
})
</style>
