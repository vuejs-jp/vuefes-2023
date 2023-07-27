<script setup lang="ts"></script>

<template>
  <div class="process-root">
    <div class="image">
      <slot name="image" />
    </div>
    <slot />
    <div class="action">
      <slot name="action" />
    </div>
  </div>
</template>

<style lang="ts" scoped>
css({
  '.process-root': {
    position: 'relative',
    display: 'grid',
    placeItems: 'center',
    paddingBottom: 'calc({space.8} * 1)',
    width: '360px',
    background: '{color.white}',
    borderRadius: 'calc({space.8} * 2)',
  },
  '.image': {
    paddingBottom: 'calc({space.8} * 5.25)',
  },
  '.action': {
    position: 'absolute',
    top: '180px',
    left: '50%',
    transform: 'translate(-50%, 0)',
    width: '400px',
    textAlign: 'center',
    '::v-deep(a)': {
      display: 'block',
      width: '300px',
      margin: '0 auto',
      background: '{color.vue.blue}',
      color: '{color.white}',
      padding: 'calc({space.8} * 1) 0',
      borderRadius: 'calc({space.8} * 6.25)',
    },
  },
  '@mobile': {
    '.action': {
      top: '160px',
    },
  },
})
</style>
