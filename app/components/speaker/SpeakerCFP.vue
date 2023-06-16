<script lang="ts" setup>
import RoundButton from '~/components/button/RoundButton.vue'
const { locale } = useI18n()
const docPath = computed(() => {
  return `/${locale.value}/top/speakers`
})
</script>

<template>
  <div class="speaker-cfp">
    <ContentDoc v-slot="{ doc }" :path="docPath">
      <ContentRenderer class="speaker-cfp-description" :value="doc" />
    </ContentDoc>
    <div class="speaker-cfp-schedule">
      <h3>{{ $t('top.speakers_schedule_title') }}</h3>
      <!-- 応募期限 -->
      <i18n-t keypath="top.speakers_schedule_limit" tag="p" class="deadline">
        <em>{{ $t('words.application_deadline_date') }}</em>
      </i18n-t>
      <p class="apply-button">
        <RoundButton href="https://forms.gle/Yd5ugvzBBkCMMHa58" target="_blank" rel="noreferrer"
          >{{ $t('words.application_form') }}
        </RoundButton>
      </p>
      <!-- 詳細情報は、Vue Fes Japan の Twitter をご確認ください -->
      <i18n-t keypath="top.sponsors_infolink" tag="p" class="twitter-text">
        <a
          href="https://twitter.com/vuefes"
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
        '::v-deep(p + p)': {
          marginTop: '2em',
        }
    },
    '.speaker-cfp-schedule': {
        display: 'flex',
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
    },
    '@tablet': {
        '.speaker-cfp-description': {
            '::v-deep(p)': {
                fontSize: '18px',
            },
        },
    },
})
</style>
