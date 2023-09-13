<script setup lang="ts">
import SectionTitle from '~/components/SectionTitle.vue'
import MarkDownText from '~/components/MarkDownText.vue'
import CommentTitle from '~/components/CommentTitle.vue'
import { experts } from '~/utils/events-vuejs-clinic.constants'
import { panelers } from '~/utils/events-panel-discussion.constants'
</script>

<template>
  <div class="event">
    <SectionTitle id="events" color="vue.blue" :title="'Events'" yamato-title="イベント" />
    <div class="explain">
      <MarkDownText path="event" />
    </div>

    <div class="event-title">
      <CommentTitle color="vue.green" title="エキスパートに聞こう！" />
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
      <CommentTitle color="vue.green" title="なぜVueを選んだのか？" />
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
      <div class="event-card">
        <img
          width="690"
          height="388"
          :alt="`${$t('top.refreshment')} supported by giftee, HENNGE, TAM`"
          :src="'event/refreshment_space.png'"
          decoding="async"
        />
        <div class="title">
          {{ $t('top.refreshment') }}
          <br />
          supported by giftee, HENNGE, TAM
        </div>
        <div class="description">
          {{ $t('top.refreshment_explain') }}
        </div>
      </div>
      <div class="event-card">
        <img
          width="690"
          height="388"
          :alt="$t('top.creative_wall')"
          :src="'event/creative_wall.png'"
          decoding="async"
        />
        <div class="title">
          {{ $t('top.creative_wall') }}
        </div>
        <div class="description">
          {{ $t('top.creative_wall_explain') }}
        </div>
      </div>
      <div class="event-card">
        <img
          width="690"
          height="388"
          :alt="$t('top.events_handson')"
          :src="'event/hands_on.png'"
          decoding="async"
        />
        <div class="title">
          {{ $t('top.events_handson') }}
        </div>
        <i18n-t keypath="top.events_handson_explain" tag="div" class="description">
          <nuxt-link to="/#handson" :title="$t('top.events_handson_about')">
            {{ $t('top.events_handson_about') }}
          </nuxt-link>
        </i18n-t>
      </div>
      <div class="event-card">
        <img
          width="690"
          height="388"
          :alt="$t('top.tattoo_space')"
          :src="'event/tattoo_space.png'"
          decoding="async"
        />
        <div class="title">
          {{ $t('top.tattoo_space') }}
        </div>
        <div class="description">
          {{ $t('top.tattoo_space_explain') }}
        </div>
      </div>
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
  '.event-card': {
    '--img-size': '475px',
    maxWidth: '475px',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.6em',
    '.title': {
      fontWeight: 'bold',
      fontSize: '22px',
      whiteSpace: 'pre-wrap',
      lineHeight: '1.2',
    },
    '.description': {
      fontSize: '16px',
      '::v-deep(a)': {
        textDecoration: 'underline',
        '&:hover': {
          opacity: 0.4,
          transition: '.2s',
        },
      },
    }
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
  '@tablet': {
    '.explain': {
      maxWidth: '730px',
    },
    '.event-card': {
      '--img-size': '368px',
      maxWidth: '368px',
    },
  },
  '@mobile': {
    '.event': {
      padding: '80px 20px',
    },
    '.explain': {
      maxWidth: '690px',
    },
    '.event-card': {
      '--img-size': '690px',
      maxWidth: '690px',
    },
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
});
</style>
