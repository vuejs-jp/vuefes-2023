<script setup lang="ts">
import { useHover } from '~/composables/useHover'
import { useLocaleSwitcher } from '~/composables/useLocaleSwitcher'

const props = defineProps({
  locale: {
    type: Object,
    required: true,
  },
  active: {
    type: Boolean,
    required: true,
  },
})

interface LangItemEmit {
  (e: 'on-click'): void
}

const emit = defineEmits<LangItemEmit>()

const hoverRef = ref()

const isHovered = useHover(hoverRef)
const { switchLocalePath } = useLocaleSwitcher()

const onClick = () => {
  emit('on-click')
}
</script>

<template>
  <div ref="hoverRef" :class="active ? 'item active-item' : 'item'">
    <nuxt-link
      :to="switchLocalePath(locale.code)"
      :style="{
        color: isHovered ? '#42B983' : active ? '#ffffff' : '#35495E',
      }"
      class="item-link"
      @click="onClick"
    >
      {{ locale.code === 'ja' ? '日本語' : locale.code === 'en' ? '英語' : 'やさしいにほんご' }}
    </nuxt-link>
  </div>
</template>

<style lang="ts" scoped>
css({
  '.item': {
    padding: 'calc({space.8} * 2.5)',
  },
  '.active-item': {
    background: '{color.vue.green}',
  },
  '.item-link': {
    display: 'grid',
    placeItems: 'center',
  },
})
</style>
