<script lang="ts" setup>
import GithubLogo from '~/assets/logo/github_logo.svg'
import TwitterLogo from '~/assets/logo/twitter_logo.svg'
import MastodonLogo from '~/assets/logo/mastodon_logo.svg'
import { useSession } from '~/composables/useSession'
import { Speaker } from '~/types/app'
import { twitterDomainUrl } from '~/utils/constants'

const { showSpeakerInfo } = useSession()
const urlBasePath = useRuntimeConfig().app.baseURL
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
      :is="showSpeakerInfo ? _nuxtLink : 'div'"
      :to="showSpeakerInfo ? `/sessions/${speaker.id}` : ''"
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
    <p v-if="speaker.profile.title" class="speaker-title">{{ speaker.profile.title }}</p>
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
        :href="`${twitterDomainUrl}${speaker.profile.twitterId}`"
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
    color: '{color.vue.blue}',
    textAlign: 'left',
    'img': {
      width: '100%',
      borderRadius: '0.5em',
    },
  },
  '.speaker-title': {
    fontSize: 'calc(14*{fontSize.base})',
    marginTop: '0.5em',
    whiteSpace: 'pre-wrap',
  },
  '.speaker-name': {
    fontSize: 'calc(22*{fontSize.base})',
    fontWeight: 700,
    whiteSpace: 'pre-wrap',
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
    },
  },
  '@mobile': {
    '.speaker-card': {
      maxWidth: '80%',
    },
    '.speaker-title': {
      fontSize: 'calc(10*{fontSize.base})',
    },
    '.speaker-name': {
      fontSize: 'calc(18*{fontSize.base})',
    },
  },
})
</style>
