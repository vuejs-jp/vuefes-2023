<script setup lang="ts">
import PolygonSvg from '~/assets/sponsor/polygon.svg'

const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  detail: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="merit">
    <div class="merit-card">
      <div class="merit-id">
        {{ id }}
      </div>
      <div class="polygon">
        <PolygonSvg />
      </div>
      <div class="image">
        <slot />
      </div>
    </div>
    <div class="merit-item">
      <h4>{{ title }}</h4>
      <p>{{ detail }}</p>
    </div>
  </div>
</template>

<style lang="ts" scoped>
css({
  '.merit': {
    display: 'grid',
    gridTemplateColumns: 'auto 1fr',
    gap: 'calc({space.8} * 2)',
  },
  '.merit-card': {
    position: 'relative',
    display: 'grid',
    placeItems: 'center',
    paddingBottom: 'calc({space.8} * 1)',
    width: '228px',
    height: '166px',
    background: '{color.white}',
    border: '2.5px solid {color.vue.green}',
  },
  '.merit-id': {
    position: 'absolute',
    top: '2%',
    left: '2%',
    zIndex: 1,
    color: '{color.white}',
    fontSize: 'calc(18*{fontSize.base})',
    fontWeight: 800,
  },
  '.polygon': {
    position: 'absolute',
    top: '0',
    left: '0',
    '::v-deep(svg)': {
      width: '80px',
      height: '80px',
    },
  },
  '.image': {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    '::v-deep(svg)': {
      width: '160px',
    },
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
  '.merit-item': {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    '::v-deep(h4)': {
      fontSize: 'calc(24*{fontSize.base})',
      fontWeight: 800,
    },
    '::v-deep(p)': {
      fontSize: 'calc(18*{fontSize.base})',
      fontWeight: 500,
      whiteSpace: 'pre-wrap',
    },
  },
  '@mobile': {
    '.merit-card': {
      width: '114px',
      height: '83px',
    },
    '.merit-id': {
      fontSize: 'calc(14*{fontSize.base})',
     },
    '.polygon': {
      '::v-deep(svg)': {
        width: '48px',
        height: '48px',
      },
    },
    '.image': {
      '::v-deep(svg)': {
        width: '40px',
      },
    },
    '.merit-item': {
      '::v-deep(h4)': {
        fontSize: 'calc(18*{fontSize.base})',
      },
      '::v-deep(p)': {
        fontSize: 'calc(14*{fontSize.base})',
      },
    },
  },
})
</style>
