<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import PcBlock from '@/assets/top/pc/block.svg'
import PcTitle from '@/assets/top/pc/title.svg'
import PcBg from '@/assets/top/pc/wave.svg'
import MdBlock from '@/assets/top/md/block.svg'
import MdTitle from '@/assets/top/md/title.svg'
import MdBg from '@/assets/top/md/wave.svg'
import SpBlock from '@/assets/top/sp/block.svg'
import SpTitle from '@/assets/top/sp/title.svg'
import SpBg from '@/assets/top/sp/wave.svg'
import TwitterButton from '~/components/social/TwitterButton.vue'

type Device = 'pc' | 'md' | 'sp'
interface ImageList {
  wave: typeof PcBg
  block: typeof PcBlock
  title: typeof PcTitle
}

const device = ref<Device>('pc')

const getImageListByDevice = (device: Device): ImageList => {
  const imageListMap: Record<Device, ImageList> = {
    pc: {
      wave: PcBg,
      block: PcBlock,
      title: PcTitle,
    },
    md: {
      wave: MdBg,
      block: MdBlock,
      title: MdTitle,
    },
    sp: {
      wave: SpBg,
      block: SpBlock,
      title: SpTitle,
    },
  }

  return imageListMap[device]
}

const updateDevice = () => {
  if (process.client && window.innerWidth >= 1024) {
    device.value = 'pc'
  } else if (process.client && window.innerWidth >= 768) {
    device.value = 'md'
  } else {
    device.value = 'sp'
  }
}

const handleResize = () => {
  updateDevice()
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
  handleResize()
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})

const components = computed<ImageList>(() => getImageListByDevice(device.value))
</script>

<template>
  <div class="top-content">
    <div class="components-wrapper">
      <component :is="components.wave" class="bg" />
      <component :is="components.block" class="components" />
      <div class="title-wrapper">
        <component :is="components.title" class="title" />
      </div>
    </div>
    <div class="twitter-wrapper">
      <TwitterButton />
    </div>
  </div>
  <VoiceAudioSpectrum />
</template>

<style lang="ts" scoped>
css({
  '.top-content': {
    position: 'relative',
    backgroundColor: '{color.vue.blue}',
  },
  '.components': {
    width: '100%',
  },
  '.components-wrapper': {
    display: 'inline-block',
    width: '100%',
    height: '100%',
    position: 'relative',
  },
  '.bg': {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 2,
  },
  '.title-wrapper': {
    position: 'absolute',
    top: '50%',
    left: '40%',
    transform: 'translate(-50%, -50%)',
  },
  '.title': {
    width: '80%',
    height: 'auto',
  },
  '.twitter-wrapper': {
    bottom: '80px',
    right: 0,
    left: 0,
    width: '100%',
    padding: '0 120px',
    position: 'absolute',
    zIndex: 3,
  },
  '@tablet': {
    '.title-wrapper': {
      left: '50%',
    },
    '.title': {
      width: '90vw',
    },
  },
  '@mobile': {
    '.title-wrapper': {
      left: '50%',
    },
    '.components-wrapper': {
      height: '70vh',
    },
    '.components': {
      height: '100%',
    },
    '.twitter-wrapper': {
      bottom: '80px',
      padding: '0 30px',
    },
  },
})
</style>
