<script lang="ts" setup>
import GithubLogo from '~/assets/logo/github_logo.svg'
import TwitterLogo from '~/assets/logo/twitter_logo.svg'
import MastodonLogo from '~/assets/logo/mastodon_logo.svg'
import { useSession } from '~/composables/useSession'
import { Speaker } from '~/types/app'
import { urlBasePath } from '~/utils/constants'

const { showSpeaker } = useSession()

const props = defineProps({
  speaker: {
    type: Object as PropType<Speaker>,
    required: true,
  },
})

const _nuxtLink = computed(() => resolveComponent('NuxtLink'))
</script>

<template>
  <div class="speaker-card">
    <component
      :is="showSpeaker ? _nuxtLink : 'div'"
      :to="showSpeaker ? `/sessions/${speaker.id}` : ''"
    >
      <img
        width="208"
        height="208"
        :alt="`${speaker.profile.name}の写真`"
        :src="`${urlBasePath}${speaker.profile.image}`"
        loading="lazy"
        decoding="async"
      />
    </component>
    <p class="speaker-title">{{ speaker.profile.title }}</p>
    <p class="speaker-name">{{ speaker.profile.name }}</p>
    <div class="speaker-sns">
      <a
        v-if="speaker.profile.githubId"
        :href="`https://github.com/${speaker.profile.githubId}`"
        aria-label="github"
        target="_blank"
        rel="noreferrer"
      >
        <GithubLogo class="flip-horizontal" width="1.5em" height="1.5em" />
      </a>
      <a
        v-if="speaker.profile.twitterId"
        :href="`https://twitter.com/${speaker.profile.twitterId}`"
        aria-label="twitter"
        target="_blank"
        rel="noreferrer"
      >
        <TwitterLogo width="1.5em" height="1.5em" />
      </a>
      <a
        v-if="speaker.profile.mastodonUrl"
        :href="speaker.profile.mastodonUrl"
        aria-label="mastodon"
        target="_blank"
        rel="noreferrer"
      >
        <MastodonLogo width="1.5em" height="1.5em" />
      </a>
    </div>
  </div>
</template>

<style lang="ts" scoped>
css({
  '.speaker-card': {
    '--img-size': '308px',
    color: '{color.vue.blue}',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5em',
    'img': {
      borderRadius: '0.5em',
      width: '{img.size}',
      height: '{img.size}',
    },
  },
  '.speaker-title': {
    fontSize: '14px',
    lineHeight: '14px',
  },
  '.speaker-name': {
    fontSize: '22px',
    fontWeight: 700,
    lineHeight: '22px',
  },
  '.speaker-sns': {
    display: 'flex',
    gap: '1.5em',
    marginTop: '1em',
    'svg': {
      fill: '{color.vue.blue}',
    },
    '.flip-horizontal': {
      transform: 'scale(-1,1)',
    }
  },
  '@tablet': {
    '.speaker-card': {
      '--img-size': '274px',
    },
  },
  '@mobile': {
    '.speaker-card': {
      '--img-size': '208px',
    },
  },
})
</style>
