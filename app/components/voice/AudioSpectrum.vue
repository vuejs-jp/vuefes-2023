<script lang="ts" setup>
import { computed, ref } from 'vue'
const props = defineProps({
  isWave: {
    type: Boolean,
    default: false,
  },
})
const max = 120
const isWave = ref(props.isWave)
const barsList = computed(() => {
  return Array.from(Array(max)).map((_, index) => {
    const animationDelay: string = isWave.value ? `${index * 0.05}s` : `${Math.random() * 1}s`
    const animationDuration: string = isWave.value ? '8.0s' : `${2 + Math.random() * 1}s`
    return {
      id: index,
      animationDelay,
      animationDuration,
      height: `${Math.random() * 50}px`,
      peakWave: `${60 + Math.random() * 60}px`,
    }
  })
})
</script>

<template>
  <div class="voice" :class="{ '-wave': isWave }">
    <ul class="bars">
      <li
        v-for="b in barsList"
        :key="`bar-${b.id}`"
        class="bar"
        :style="{
          height: b.height,
          '--height-peakwave': b.peakWave,
        }"
      >
        <p
          :style="{
            'animation-delay': `${b.animationDelay}`,
            'animation-duration': `${b.animationDuration}`,
          }"
        />
      </li>
    </ul>
  </div>
</template>

<style lang="ts" scoped>
css({
  '.voice': {
    '--height-peak1': '120%',
    '--height-peak2': '140%',
    '--height-peakwave': '0%',

    position: 'relative',
    zIndex: 2,
    mixBlendMode: 'multiply',
  },
  '.voice.-wave .bar p': {
    animation: 'wave ease-out infinite',
    height: '0px',
  },
  '.bars': {
    display: 'flex',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
  },
  '.bar': {
    display: 'block',
    margin: '0 3px',
    height: '0px',
    width: '5px',
    mixBlendMode: 'multiply', // for Safari
    flex: '0 0 auto',
  },
  '.bar p': {
    width: '5px',
    height: '100%',
    backgroundColor: '#eee',
    animation: 'beats infinite alternate',
    // transition: 'all 0.5s ease',
    position: 'absolute',
    bottom: 0,
    transform: 'translateY(50%)',
  },
  '@keyframes beats': {
    '0%': {
      height: '100%',
    },
    '30%': {
      height: '{height.peak1}',
    },
    '70%': {
      height: '80%',
    },
    '90%': {
      height: '{height.peak2}',
    },
    '100%': {
      height: '100%',
    },
  },
  '@keyframes wave': {
    '0%': {
      height: '0%',
    },
    '10%': {
      height: '{height.peakwave}',
    },
    '40%': {
      height: '0%',
    },
    '100%': {
      height: '0%',
    },
  },
})
</style>
