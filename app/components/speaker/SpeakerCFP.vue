<script lang="ts" setup>
import RoundButton from '~/components/button/RoundButton.vue'
import MarkDownText from '~/components/MarkDownText.vue'
import { twitterDomainUrl } from '~/utils/constants'
</script>

<template>
  <div class="speaker-cfp">
    <div class="speaker-cfp-description">
      <MarkDownText path="speaker" />
    </div>
    <div class="speaker-cfp-schedule">
      <h3>{{ $t('top.speakers_schedule_title') }}</h3>
      <!-- 応募期限 -->
      <i18n-t keypath="top.speakers_schedule_limit" tag="p" class="deadline" scope="global">
        <em>{{ $t('words.speakers_deadline_date') }}</em>
      </i18n-t>
      <p class="apply-button">
        <RoundButton href="https://forms.gle/Yd5ugvzBBkCMMHa58" target="_blank" rel="noreferrer"
          >{{ $t('words.application_form') }}
        </RoundButton>
      </p>
      <!-- 詳細情報は、Vue Fes Japan の Twitter をご確認ください -->
      <i18n-t keypath="top.sponsors_infolink" tag="p" class="twitter-text" scope="global">
        <a
          :href="`${twitterDomainUrl}vuefes`"
          target="_blank"
          class="twitter-link"
          rel="noreferrer"
          >{{ $t('words.vuefes_twitter') }}</a
        >
      </i18n-t>
    </div>
  </div>
</template>

<style lang="ts" scoped>
css({
    '.speaker-cfp': {
        display: 'flex',
        flexDirection: 'column',
        gap: '2.5em',
    },
    '.speaker-cfp-description': {
        '::v-deep(p)': {
            color: '{color.vue.blue}',
            fontWeight: 500,
            fontSize: '18px',
            lineHeight: '1.8',

            'a': {
                color: '{color.vue.green}',
                textDecoration: 'underline',
                '&:hover': {
                    transition: '.2s',
                },
            },
        },
        '::v-deep(p + p)': {
          marginTop: '2em',
        }
    },
    '.speaker-cfp-schedule': {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: '1.5em',
        textAlign: 'center',
        'h3': {
            color: '{color.vue.blue}',
            fontWeight: 700,
            fontSize: '32px',
        },
        '.deadline': {
            color: '{color.vue.blue}',
            fontSize: '24px',

            'em': {
                fontStyle: 'normal',
                fontWeight: 700,
            }
        },
        '.apply-button': {
            margin: '0',
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
    },
})
</style>
