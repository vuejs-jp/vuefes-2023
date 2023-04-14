<script lang="ts" setup>
import { computed, ref } from 'vue'
const max = 120
const barsList = Array.from(Array(max)).map((_, index) => {
  return {
    id: index,
    animationDelay: `${Math.random() * 1}s`,
    animationDuration: `${2 + Math.random() * 1}s`,
    height: `${Math.random() * 50}px`,
  }
})
</script>

<template>
  <div class="voice">
    <ul class="bars">
      <li v-for="b in barsList" :key="`bar-${b.id}`" class="bar" :style="{ height: b.height }">
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
    position: 'relative',
    zIndex: 2,
    mixBlendMode: 'multiply',
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
    margin: '0 6px',
    height: '0px',
    width: '5px',
  },
  '.bar p': {
    width: '5px',
    height: '100%',
    backgroundColor: '#eee',
    animation: 'beats infinite alternate',
    position: 'absolute',
    bottom: 0,
    transform: 'translateY(50%)',

  },
  '@keyframes beats': {
    '0%': {
      height: '100%',
    },
    '30%': {
      height: '120%',
    },
    '70%': {
      height: '80%',

    },
    '90%': {
      height: '140%',

    },
    '100%': {
      height: '100%',
    },
  }
})
</style>
