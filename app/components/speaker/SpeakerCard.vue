<script lang="ts" setup>
import GithubLogo from '~/assets/logo/github_logo.svg'
import TwitterLogo from '~/assets/logo/twitter_logo.svg'
import MastodonLogo from '~/assets/logo/mastodon_logo.svg'
import { Speaker } from '~/types/app'

const props = defineProps({
  speaker: {
    type: Object as PropType<Speaker>,
    required: true,
  },
})
</script>

<template>
  <div class="speaker-card">
    <img
      width="208"
      height="208"
      :alt="`${speaker.profile.name}の写真`"
      :src="`${urlBasePath}${speaker.profile.image}`"
      loading="lazy"
      decoding="async"
    />
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
    'section': {
        padding: '120px 20px 120px',
    },
    '.speaker-root': {
        display: 'grid',
        gap: '40px',
        maxWidth: '984px',
        margin: '0 auto',
        width: '100%',
        'h2': {
            color: '{color.vue.blue}',
            fontWeight: 700,
            fontSize: '32px',
            margin: '0 auto',
        },
    },
    '.speaker-session': {
        color: '{color.vue.blue}',
        maxWidth: '984px',
        margin: '0 auto',
        width: '100%',
        'h2': {
            fontWeight: 700,
            fontSize: '32px',
        },
    },
    '.speakers': {
        display: 'flex',
        gap: '2em',
    },
    '.speaker-card': {
        color: '{color.vue.blue}',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5em',
        'img': {
            borderRadius: '0.5em',
            width: '208px',
            height: '208px',
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
    '.deadline': {
        color: '{color.vue.blue}',
        fontSize: '24px',
        margin: '0 auto',

        'em': {
            fontStyle: 'normal',
            fontWeight: 700,
        }
    },
    '.apply-button': {
        margin: '0 auto',
    },
    '.twitter-text': {
        fontSize: '18px',
        color: '{color.vue.blue}',
        margin: '0 auto',
    },
    '.twitter-link': {
        color: '{color.vue.green}',
        textDecoration: 'underline',

        '&:hover': {
            transition: '.2s',
        },
    },
    '.subtitle': {
        display: 'grid',
        gap: '40px',
        'p': {
            color: '{color.vue.blue}',
            fontWeight: 500,
            fontSize: '16px',
            lineHeight: '1.8',
            'a': {
                color: '{color.vue.green}',
                textDecoration: 'underline',
                '&:hover': {
                    transition: '.2s',
                },
            },
        },
    },
    '@mobile': {
        '.speaker-card': {
            'img': {
                borderRadius: '0.5em',
                width: '274px',
                height: '274px',
            },
        },
    },
    '@tablet': {
        '.speaker-card': {
            'img': {
                borderRadius: '0.5em',
                width: '308px',
                height: '308px',
            },
        },
    },
})
</style>
