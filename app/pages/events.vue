<script setup lang="ts">
import RoundButton from '~/components/button/RoundButton.vue'
import NavPageSection from '~/components/NavPageSection.vue'
import FooterPageSection from '~/components/FooterPageSection.vue'
import PageTitle from '~/components/PageTitle.vue'
import { conferenceTitle, linkUrl, ogDescription } from '~/utils/constants'
import { generalOg, twitterOg } from '~/utils/og.constants'

useHead({
  titleTemplate: (titleChunk) => `関連イベント一覧 | ${conferenceTitle}`,
  meta: [
    ...generalOg({
      title: `関連イベント一覧 | ${conferenceTitle}`,
      description: ogDescription,
      url: `${linkUrl}events`,
    }),
    ...twitterOg({
      title: `関連イベント一覧 | ${conferenceTitle}`,
      description: ogDescription,
      url: `${linkUrl}events`,
    }),
  ],
})
</script>

<template>
  <main>
    <NavPageSection />
    <div class="events-root">
      <PageTitle id="events" color="vue.blue" title="Events" :yamato-title="$t('words.events')" />

      <div class="subtitle">
        <MarkDownText path="related-events" />
      </div>

      <div class="event-menu">
        <EventCard
          src="/event/after-event/medpeer-hacomono-mntsq.png"
          :alt="$t('top.medpeer_hacomono_mntsq_event_title')"
          register-url="https://medpeer.connpass.com/event/297734/"
          :register-text="$t('words.attendee_register')"
        >
          <template #title>
            {{ $t('top.medpeer_hacomono_mntsq_event_title') }}
          </template>
          <template #description>
            {{ $t('top.medpeer_hacomono_mntsq_event_detail') }}
          </template>
        </EventCard>
      </div>

      <div class="back">
        <RoundButton to="../" outline>{{ $t('words.back_top') }}</RoundButton>
      </div>
    </div>
    <FooterPageSection />
  </main>
</template>

<style lang="ts" scoped>
css({
  '.subtitle': {
    display: 'grid',
    placeItems: 'center',
    gap: '40px',
    '::v-deep(p)': {
      color: '{color.vue.blue}',
      fontWeight: 500,
      fontSize: '18px',
      lineHeight: '1.8',
    },
  },
  '.event-menu': {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '2em',
    justifyContent: 'center',
  },
  '.events-root': {
    padding: 'calc({space.8} * 10) 11.53%',
    color: '{color.vue.blue}',
    background: '{color.white}',
    '::v-deep(.title)': {
      marginBottom: 'calc({space.8} * 10)',
    },
    '::v-deep(p)': {
      fontWeight: 500,
      fontSize: '18px',
      lineHeight: '1.8',
      marginBottom: '1.5em',
    },
    '::v-deep(a)': {
      color: '{color.vue.green}',
      textDecoration: 'underline',
      '&:hover': {
        opacity: 0.4,
        transition: '.2s',
      },
    },
    '::v-deep(h2)': {
      fontWeight: 700,
      fontSize: '32px',
      marginTop: '2em',
      marginBottom: '.7em',
    },
  },
  '.back': {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 'calc({space.8} * 10)',
    'a': {
      textDecoration: 'none',
    },
  },
  '@mobile': {
    '.subtitle': {
      '::v-deep(p)': {
        fontSize: '16px',
      },
    },
    '.events-root': {
      padding: 'calc({space.8} * 10) calc({space.8} * 3)',
      '::v-deep(.title)': {
        marginBottom: 'calc({space.8} * 6)',
      },
      '::v-deep(h2)': {
        fontSize: '20px',
      },
      '::v-deep(p), ::v-deep(ol), ::v-deep(ul)': {
        fontSize: '16px',
      },
    },
  },
})
</style>
