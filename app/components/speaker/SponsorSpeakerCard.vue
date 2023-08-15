<script lang="ts" setup>
import GithubLogo from '~/assets/logo/github_logo.svg'
import TwitterLogo from '~/assets/logo/twitter_logo.svg'
import MastodonLogo from '~/assets/logo/mastodon_logo.svg'
import { useSession } from '~/composables/useSession'
import { SponsorSpeaker } from '~/types/app'
import { urlBasePath } from '~/utils/constants'

const { showSpeakerInfo } = useSession()

const props = defineProps({
  speaker: {
    type: Object as PropType<SponsorSpeaker>,
    required: true,
  },
})

const _nuxtLink = computed(() => resolveComponent('NuxtLink'))
</script>

<template>
  <div class="sponsor-speaker-card">
    <div v-for="(profile, index) in speaker.profile" :key="index">
      <component
        :is="showSpeakerInfo ? _nuxtLink : 'div'"
        :to="showSpeakerInfo ? `/sponsor-sessions/${speaker.id}` : ''"
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
      <p class="speaker-title">{{ profile.title }}</p>
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
          :href="`https://twitter.com/${profile.twitterId}`"
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
  </div>
</template>

<style lang="ts" scoped>
css({
  '.sponsor-speaker-card': {
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
    fontSize: 'calc(14*{fontSize.base})',
    lineHeight: '14px',
    display: 'flex',
    alignItems: 'center',
    width: '308px',
    height: '60px',
  },
  '.speaker-name': {
    fontSize: 'calc(22*{fontSize.base})',
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
    '.speaker-title': {
      width: '274px',
    },
  },
  '@mobile': {
    '.speaker-card': {
      '--img-size': '144px',
    },
    '.speaker-title': {
      fontSize: 'calc(10*{fontSize.base})',
      width: '144px',
    },
    '.speaker-name': {
      fontSize: 'calc(18*{fontSize.base})',
    },
  },
})
</style>
