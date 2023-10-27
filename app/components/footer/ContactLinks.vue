<script setup lang="ts">
import TwitterSvg from '~/assets/logo/twitter_logo.svg'
import NoteSvg from '~/assets/logo/note_logo.svg'
import YouTubeSvg from '~/assets/logo/youtube_logo.svg'
import GitHubSvg from '~/assets/logo/github_logo.svg'
import IconButton from '~/components/social/IconButton.vue'
import { networkLinks } from '~/utils/constants'
</script>

<template>
  <div class="contact-root">
    <IconButton
      v-for="network in networkLinks"
      :key="network.value"
      :url="network.url"
      :title="network.title"
    >
      <template v-if="network.value === 'twitter'">
        <div class="twitter">
          <TwitterSvg />
        </div>
      </template>
      <template v-if="network.value === 'note'">
        <div class="note">
          <NoteSvg />
        </div>
      </template>
      <template v-if="network.value === 'youtube'">
        <div class="youtube">
          <YouTubeSvg />
        </div>
      </template>
      <template v-if="network.value === 'github'">
        <div class="github">
          <GitHubSvg />
        </div>
      </template>
    </IconButton>
  </div>
</template>

<style lang="ts" scoped>
css({
  '.contact-root': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    columnGap: '40px',
    'a': {
      '&:hover': {
        'svg': {
          fill: '{color.vue.green}',
          transition: '.2s',
        },
      },
    },
    'svg': {
      fill: '{color.white}',
    },
  },
  '.twitter,': {
    width: '40px',
    height: '32.5px',
  },
  '.note': {
    width: '60px',
  },
  '.youtube': {
    width: '40px',
    height: '35.46px',
  },
  '.github': {
    width: '40px',
    height: '40px',
  },
  '@mobile': {
    '.contact-root': {
      padding: 'calc({space.8} * 2) 0'
    },
  },
})
</style>
