<script setup lang="ts">
import RoundButton from '~/components/button/RoundButton.vue'

const props = defineProps({
  src: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    required: true,
  },
  registerUrl: {
    type: String,
    default: '',
  },
  registerText: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <div class="event-card">
    <div class="img-wrapper">
      <img width="690" height="388" :alt="alt" :src="src" decoding="async" />
    </div>
    <div class="title">
      <slot name="title" />
    </div>
    <div class="description">
      <slot name="description" />
    </div>
    <div v-if="registerUrl && registerText" class="register">
      <RoundButton :href="registerUrl" target="_blank" rel="noreferrer">
        {{ registerText }}
      </RoundButton>
    </div>
  </div>
</template>

<style lang="ts" scoped>
css({
  '.event-card': {
    '--img-size': '475px',
    maxWidth: '475px',
    display: 'grid',
    gap: '0.6em',
    '.img-wrapper': {
      height: '280px',
    },
    '.title': {
      fontWeight: 'bold',
      fontSize: '22px',
      whiteSpace: 'pre-wrap',
      lineHeight: '1.2',
    },
    '.description': {
      fontSize: '16px',
      '::v-deep(a)': {
        color: '{color.vue.green}',
        textDecoration: 'underline',
        '&:hover': {
          opacity: 0.4,
          transition: '.2s',
        },
      },
    },
    '.register': {
      display: 'flex',
      justifyContent: 'center',
      marginTop: 'calc({space.8} * 5)',
      '& a': {
        color: '#fff',
        textDecoration: 'none',
      },
    },
  },
  '@tablet': {
    '.event-card': {
      '--img-size': '368px',
      maxWidth: '368px',
    },
  },
  '@mobile': {
    '.event-card': {
      '--img-size': '690px',
      maxWidth: '690px',
      '.img-wrapper': {
        height: '100%',
      },
      '.title': {
        fontSize: '16px',
      },
    },
  },
})
</style>
