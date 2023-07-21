<script setup lang="ts">
import PcBlock from '@/assets/top/pc/block.svg'
import PcBg from '@/assets/top/pc/wave.svg'
import NamecardTitle1 from '@/assets/namecard/title1.svg'
import NamecardTitle2 from '@/assets/namecard/title2.svg'
import VueFesLogo from '@/assets/namecard/vuefes_logo.svg'
import Sponsor from '@/assets/namecard/sponsor.svg'
import AvatarInfo from './AvatarInfo.vue'
import { FormUser } from '~/types/app'

const props = defineProps({
  signedUser: {
    type: Object as PropType<FormUser>,
    required: true,
  },
})
</script>

<template>
  <div class="root">
    <div class="components-wrapper">
      <component :is="VueFesLogo" class="vuefes" />
      <component :is="PcBg" class="wave-bg" />
      <component :is="NamecardTitle1" class="title-bg1" />
      <component :is="NamecardTitle2" class="title-bg2" />
      <component :is="Sponsor" class="sponsor" />
      <component :is="PcBlock" class="block-bg" />
    </div>
    <div class="avatar-wrapper">
      <h2>Hello!! I am</h2>
      <AvatarInfo :signed-user="props.signedUser" use-share />
    </div>
  </div>
</template>

<style lang="ts" scoped>
css({
  '.root': {
    position: 'relative',
    backgroundColor: '{color.vue.blue}',
    width: '1200px',
    height: '630px',
  },
  '.components': {
    width: '100%',
    height: '100%',
  },
  '.components-wrapper': {
    display: 'inline-block',
    width: '100%',
    height: '100%',
    position: 'relative',
  },
  '.wave-bg': {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 2,
  },
  '.block-bg': {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 2,
    opacity: 0.6,
  },
  '.title-bg1': {
    position: 'absolute',
    bottom: 0,
    left: '50%',
    transform: 'translate(-50%, 0)',
    width: '24%',
    height: '32%',
    zIndex: 3,
  },
  '.title-bg2': {
    position: 'absolute',
    bottom: 0,
    left: '50%',
    transform: 'translate(-50%, 0)',
    width: '8%',
    height: '24%',
    zIndex: 3,
  },
  '.sponsor': {
    position: 'absolute',
    bottom: 0,
    left: '50%',
    transform: 'translate(-50%, 0)',
    width: '60%',
    height: '12%',
    zIndex: 3,
  },
  '.vuefes': {
    position: 'absolute',
    top: '2%',
    left: '50%',
    transform: 'translate(-50%, 0)',
    width: '4%',
    height: '4%',
    zIndex: 2,
  },
  '.avatar-wrapper': {
    display: 'grid',
    placeItems: 'center',
    gap: 'calc({space.8} * 1)',
    top: '80px',
    left: '50%',
    transform: 'translate(-50%, 0)',
    width: '100%',
    position: 'absolute',
    zIndex: 3,
    '::v-deep(h2)': {
      color: '{color.white}',
      fontSize: 'calc(36*{fontSize.base})',
      fontWeight: 700,
      textTransform: 'uppercase',
    },
  },
})
</style>
