<script lang="ts" setup>
import VueFesLogo from '~/assets/logo/header_logo.svg'
import TwitterLogo from '~/assets/logo/twitter_logo.svg'
import { navLinks } from '~/utils/constants'
</script>

<template>
  <nav>
    <div class="nav-root">
      <a href="/" aria-label="top">
        <VueFesLogo />
      </a>
      <div class="links">
        <div v-for="l in navLinks" :key="l.link">
          <a :href="l.link">{{ l.text }}</a>
        </div>
        <a href="https://twitter.com/vuefes" aria-label="twitter" target="_blank" rel="noreferrer">
          <TwitterLogo />
        </a>
      </div>
    </div>
  </nav>
</template>

<style lang="ts" scoped>
css({
  'nav': {
    background: '#35495E', // {color.vue-blue}
  },
  '.nav-root': {
    padding: '24px 32px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  '.links': {
    display: 'flex',
    columnGap: '40px',
    'a': {
      color: '#fff',
      '&:hover': {
        color: '#42B983', // {color.vue-green}
      },
    },
  },
})
</style>
