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
    position: 'fixed',
    zIndex: 9999,
    left: '50%',
    top: '50%',
    transform: 'translateX(-50%) translateY(-50%)',
    width: ' 960px',
    height: '500px',
    transition: '.2s',
  },
  '.mask': {
    position: 'fixed',
    zIndex: 9999,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    transition: '.2s',
  },
})
</style>
