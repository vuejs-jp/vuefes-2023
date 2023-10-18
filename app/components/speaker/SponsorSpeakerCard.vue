<script lang="ts" setup>
import GithubLogo from '~/assets/logo/github_logo.svg'
import TwitterLogo from '~/assets/logo/twitter_logo.svg'
import MastodonLogo from '~/assets/logo/mastodon_logo.svg'
import { useSession } from '~/composables/useSession'
import { useLocaleCurrent } from '~/composables/useLocaleCurrent'
import { SpeakerProfile } from '~/types/app'
import { twitterDomainUrl } from '~/utils/constants'

const { locale } = useLocaleCurrent()

const urlBasePath = useRuntimeConfig().app.baseURL
const { showSpeakerInfo } = useSession()

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  profile: {
    type: Object as PropType<SpeakerProfile>,
    required: true,
  },
})

const _nuxtLink = computed(() => resolveComponent('NuxtLink'))
</script>

<template>
  <div class="speaker-card">
    <component
      :is="showSpeakerInfo ? _nuxtLink : 'div'"
      :to="showSpeakerInfo ? `${locale === 'ja' ? '/' : `/${locale}/`}sponsor-sessions/${id}` : ''"
    >
      <img
        width="208"
        height="208"
        :alt="`${profile.name}の写真`"
        :src="`${urlBasePath}${profile.image}`"
        loading="lazy"
        decoding="async"
      />
    </component>
    <p v-if="profile.title" class="speaker-title">{{ profile.title }}</p>
    <p class="speaker-name">{{ profile.name }}</p>
    <div class="speaker-sns">
      <a
        v-if="profile.githubId"
        :href="`https://github.com/${profile.githubId}`"
        aria-label="github"
        target="_blank"
        rel="noreferrer"
      >
        <GithubLogo class="flip-horizontal" width="1.5em" height="1.5em" />
      </a>
      <a
        v-if="profile.twitterId"
        :href="`${twitterDomainUrl}${profile.twitterId}`"
        aria-label="twitter"
        target="_blank"
        rel="noreferrer"
      >
        <TwitterLogo width="1.5em" height="1.5em" />
      </a>
      <a
        v-if="profile.mastodonUrl"
        :href="profile.mastodonUrl"
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
    marginTop: '0.5em',
    fontWeight: 700,
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
