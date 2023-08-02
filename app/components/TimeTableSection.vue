<script setup lang="ts">
import SectionTitle from '~/components/SectionTitle.vue'
import TimetableView from '~/components/timetable/TimetableView.vue'
import ScrollHint from 'scroll-hint'
import 'scroll-hint/css/scroll-hint.css'

onMounted(() => {
  new ScrollHint('.timetable-wrapper', {
    suggestiveShadow: true,
    i18n: {
      scrollable: '左右スクロールできます',
    },
  })
})
</script>
<template>
  <section>
    <div class="timetable-root">
      <SectionTitle
        id="ticket"
        color="vue.blue"
        :title="'Time table'"
        yamato-title="タイムテーブル"
      />
      <div v-if="$device.isMobile" class="timetable-wrapper">
        <TimetableViewMobile />
      </div>
      <div v-else class="timetable-wrapper">
        <TimetableView />
      </div>
    </div>
  </section>
</template>
<style>
.scroll-hint.is-right-scrollable {
  background: linear-gradient(
    270deg,
    rgba(255, 255, 255, 1) 0,
    rgba(255, 255, 255, 0) 248px,
    rgba(0, 0, 0, 0)
  );
}

.scroll-hint.is-right-scrollable.is-left-scrollable {
  background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 1) 0,
      rgba(255, 255, 255, 0) 248px,
      rgba(0, 0, 0, 0)
    ),
    linear-gradient(270deg, rgba(0, 0, 0, 0.15) 0, rgba(0, 0, 0, 0) 16px, rgba(0, 0, 0, 0));
}

.scroll-hint.is-left-scrollable {
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 1) 0,
    rgba(255, 255, 255, 0) 248px,
    rgba(0, 0, 0, 0)
  );
}

.scroll-hint-icon {
  padding: 30px 16px;
  width: unset;
  height: 110px;
  background: rgba(53, 73, 94, 0.8);
}
.scroll-hint-text {
  margin-top: 10px;
  color: #ffffff;
  font-size: 12px;
  line-height: 150%;
  font-weight: 700;
}
.scroll-hint-icon:after {
  top: 20px;
}
</style>
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
