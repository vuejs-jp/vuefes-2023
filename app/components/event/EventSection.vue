<script setup lang="ts">
import EventCard from '~/components/event/EventCard.vue'
import SectionTitle from '~/components/SectionTitle.vue'
import MarkDownText from '~/components/MarkDownText.vue'
import CommentTitle from '~/components/CommentTitle.vue'
import { experts } from '~/utils/events-vuejs-clinic.constants'
import { panelers } from '~/utils/events-panel-discussion.constants'
</script>

<template>
  <div class="event">
    <SectionTitle
      id="events"
      color="vue.blue"
      :title="'Events'"
      :yamato-title="$t('top.event_subtitle')"
    />
    <div class="explain">
      <MarkDownText path="event" />
    </div>

    <div class="event-title">
      <CommentTitle color="vue.green" :title="$t('top.lets_listen_to_experts')" />
      <h3 id="events-clinic">{{ $t('top.events_vuejs_clinic') }}</h3>
      <div class="explain"><MarkDownText path="event-vuejs-clinic" /></div>
    </div>
    <h4 class="event-subtitle">
      {{ $t('top.scheduled_experts') }}
    </h4>
    <div class="teams">
      <EventPanelerCard v-for="paneler in experts" :key="paneler.name" :team="paneler" />
    </div>

    <div class="event-title">
      <CommentTitle color="vue.green" :title="$t('top.why_do_you_select_vuejs')" />
      <h3 id="events-panel">
        {{ $t('top.events_panel_discussion') }}
      </h3>
      <div class="explain"><MarkDownText path="event-panel-discussion" /></div>
    </div>
    <h4 class="event-subtitle">
      {{ $t('top.panelist') }}
    </h4>
    <div class="teams">
      <EventPanelerCard v-for="paneler in panelers" :key="paneler.name" :team="paneler" />
    </div>

    <div class="event-title">
      <h3>{{ $t('top.various_other_events') }}</h3>
    </div>
    <div class="event-menu">
      <EventCard
        src="/event/refreshment_space.png"
        :alt="`${$t('top.refreshment')} supported by giftee, HENNGE, TAM`"
      >
        <template #title>
          {{ $t('top.refreshment') }}
          <br />
          supported by giftee, HENNGE, TAM
        </template>
        <template #description>
          {{ $t('top.refreshment_explain') }}
        </template>
      </EventCard>
      <EventCard src="/event/creative_wall.png" :alt="$t('top.creative_wall')">
        <template #title>
          {{ $t('top.creative_wall') }}
        </template>
        <template #description>
          {{ $t('top.creative_wall_explain') }}
        </template>
      </EventCard>
      <EventCard src="/event/hands_on.png" :alt="`${$t('top.events_handson')}`">
        <template #title>
          {{ $t('top.events_handson') }}
        </template>
        <template #description>
          <i18n-t keypath="top.events_handson_explain" tag="div" scope="global">
            <nuxt-link to="/#handson" :title="$t('top.events_handson_about')">
              {{ $t('top.events_handson_about') }}
            </nuxt-link>
          </i18n-t>
        </template>
      </EventCard>
      <EventCard src="/event/tattoo_space.png" :alt="`${$t('top.tattoo_space')}`">
        <template #title>
          {{ $t('top.tattoo_space') }}
        </template>
        <template #description>
          {{ $t('top.tattoo_space_explain') }}
        </template>
      </EventCard>
    </div>
  </div>
</template>

<style lang="ts" scoped>
css({
  '.event': {
    padding: '40px',
    display: 'grid',
    placeItems: 'center',
    gap: '40px',
  },
  '.explain': {
    maxWidth: '760px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'left',
    lineBreak: 'anywhere',
    '::v-deep(p)': {
      lineHeight: '1.8',
      marginBottom: '2em',
    },
    '::v-deep(p:last-child)': {
      marginBottom: '0',
    },
    '::v-deep(a)': {
      color: '{color.vue.green}',
      textDecoration: 'underline',
      '&:hover': {
        opacity: 0.4,
        transition: '.2s',
      },
    },
  },
  '.event-menu': {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '2em',
    justifyContent: 'center',
  },
  '.event-title': {
    display: 'grid',
    gap: 'calc({space.8} * 3)',
    textAlign: 'center',
    marginTop: 'calc({space.8} * 8)',
    '::v-deep(h3)': {
      fontSize: '32px',
      fontWeight: 'bold',
      lineHeight: '1',
    },
  },
  '.event-subtitle': {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  '.teams': {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '32px',
    maxWidth: '988px',
    margin: '0 auto',
    '@tablet': {
      maxWidth: '760px',
    },
    '@mobile': {
      gap: '4vw',
    },
  },
  '@tablet': {
    '.explain': {
      maxWidth: '730px',
    },
    '.teams': {
      maxWidth: '760px',
    },
  },
  '@mobile': {
    '.event': {
      padding: '0px 20px',
    },
    '.event-title': {
      marginTop: 'calc({space.8} * 1)',
      '::v-deep(h3)': {
        fontSize: '24px',
      },
    },
    '.explain': {
      maxWidth: '690px',
    },
    '.teams': {
      gap: '4vw',
    },
  },
})
</style>
