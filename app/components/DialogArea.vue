<template>
  <div class="mask" @click="$emit('on-close')">
    <div class="root" @click="(e) => e.stopPropagation()">
      <slot />
    </div>
  </div>
</template>

<style lang="ts" scoped>
css({
  '.root': {
    position: 'absolute',
    zIndex: '{zindex.dialog}',
    left: '50%',
    top: '50%',
    transform: 'translateX(-50%) translateY(-50%)',
    width: '80%',
    maxWidth: ' 960px',
    transition: '.2s',
    borderRadius: 'calc({space.8} * 1)',
    padding: 'calc({space.8} * 4) calc({space.8} * 8) calc({space.8} * 6)',
    backgroundColor: '#fff',
    boxShadow: '0 calc({space.8} * 0.25) calc({space.8} * 1) rgba(0, 0, 0, 0.33)',
  },
  '.mask': {
    position: 'fixed',
    zIndex: '{zindex.dialog}',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  '@mobile': {
    '.root': {
      padding: 'calc({space.8} * 4) calc({space.8} * 3)',
      width: '90%',
    },
  },
})
</style>
