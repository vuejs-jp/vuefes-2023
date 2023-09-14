<script setup lang="ts"></script>

<template>
  <div class="process-root">
    <div class="image">
      <slot name="image" />
    </div>
    <div class="action">
      <slot name="action" />
    </div>
    <slot />
  </div>
</template>

<style lang="ts" scoped>
css({
  '.process-root': {
    position: 'relative',
    display: 'grid',
    placeItems: 'center',
    paddingBottom: 'calc({space.8} * 3)',
    width: '360px',
    background: '#F2F7FF',
    borderRadius: '0 0 calc({space.8} * 0.5) calc({space.8} * 0.5)',
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
    '.process-root': {
      width: '100%',
    },
    '.image': {
      padding: '0',
    },
    '.action': {
      position: 'static',
      transform: 'none',
      width: 'auto',
      margin: 'calc({space.8} * 2) 0'
    },
  },
})
</style>
