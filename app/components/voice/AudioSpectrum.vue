<script lang="ts" setup>
const max = 120
const barsList = Array.from(Array(max)).map((_, index) => {
  const num = Math.ceil(Math.random() * max)
  return {
    id: index,
    cls: `-type--${num}`,
    animationDelay: `${Math.random() * 3}s`,
    animationDuration: `${2 + Math.random() * 9}s`,
    height: `${10 + Math.random() * 100}px`,
  }
})
</script>

<template>
  <div class="voice">
    <ul class="bars">
      <li
        v-for="b in barsList"
        class="bar"
        :class="{ [b.cls]: true }"
        :style="{ height: b.height }"
        :key="`bar-${b.id}`"
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
    position: 'relative',
    zIndex: 2,
    mixBlendMode: 'multiply'
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
  },
  '.bar p': {
    width: '5px',
    height: '0%',
    backgroundColor: '#eee',
    animation: 'beats infinite ease-in-out alternate',
    position: 'absolute',
    bottom: 0,
    transform: 'translateY(50%)',

  },
  '@keyframes beats': {
    '0%': {
      height: '0%',
    },
    '60%': {
      height: '90%',
    },
    '80%': {
      height: '30%',

    },
    '100%': {
      height: '0%',
    },
  }
})
</style>
