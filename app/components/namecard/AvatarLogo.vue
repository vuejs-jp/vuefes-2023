<script setup lang="ts">
import VueFesLogo from '@/assets/namecard/vuefes_logo.svg'

const props = defineProps({
  name: {
    type: String,
    default: '',
  },
  url: {
    type: String,
    default: '',
  },
  size: {
    type: String as PropType<'small' | 'large'>,
    default: 'small',
  },
})
</script>

<template>
  <template v-if="url">
    <img
      :alt="name"
      :src="url"
      :width="size === 'small' ? 40 : 120"
      :height="size === 'small' ? 40 : 120"
      class="avatar"
      decoding="async"
    />
  </template>
  <template v-else>
    <div class="sample-avatar">
      <VueFesLogo />
    </div>
  </template>
</template>

<style lang="ts" scoped>
css({
  '.avatar': {
    width: (props) => props.size === 'small' ? '40px' : '120px',
    height: (props) => props.size === 'small' ? '40px' : '120px',
    borderRadius: '50%',
    boxShadow: '0px 0px 0px calc({space.8} * 0.25) rgba(255, 255, 255, 1)',
  },
  '.sample-avatar': {
    display: 'grid',
    placeItems: 'center',
    width: (props) => props.size === 'small' ? '40px' : '120px',
    height: (props) => props.size === 'small' ? '40px' : '120px',
    background: 'linear-gradient(#90B44B, #42B983)',
    borderRadius: '50%',
    boxShadow: '0px 0px 0px calc({space.8} * 0.25) rgba(255, 255, 255, 1)',
  },
})
</style>
