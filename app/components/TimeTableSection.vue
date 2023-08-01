<script setup lang="ts">
import SectionTitle from '~/components/SectionTitle.vue'
import TimetableView from '~/components/timetable/TimetableView.vue'
import ScrollHint from 'scroll-hint'
import 'scroll-hint/css/scroll-hint.css'

onMounted(() => {
  new ScrollHint('.timetable-wrapper', {
    suggestiveShadow: true
  })
})
</script>
<template>
  <section>
    <div class="timetable-root">
      <SectionTitle id="ticket" color="vue.blue" :title="'Time table'" yamato-title="タイムテーブル" />
      <div v-if="$device.isMobile" class="timetable-wrapper">
        <TimetableViewMobile />
      </div>
      <div v-else class="timetable-wrapper">
        <TimetableView />
      </div>
    </div>
  </section>
</template>
<style lang="ts" scoped>
css({
  'section': {
    padding: '120px 20px 120px',
    backgroundColor: '#eee'
  },
  '.timetable-root': {
    display: 'flex',
    flexDirection: 'column',
    gap: '2.5em',
    maxWidth: '1080px',
    margin: '0 auto',
  },
  '.timetable-wrapper': {
    width: '100%',
    overflowX: 'scroll',
  },
  '.invisible-mobile': {
    display: 'block',
  },
  '.visible-mobile': {
    display: 'none',
  },
  '@mobile': {
    'invisible-mobile': {
      display: 'none',
    },
    'visible-mobile': {
      display: 'block',
    },
  },
})
</style>
