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
        id="timetable"
        color="vue.blue"
        :title="'Time table'"
        :yamato-title="$t('top.timetable_subtitle')"
      />
      <!-- @vue-expect-error TODO: 何か @nuxtjs/module-device の型がうまく推論されていないので一端回避 -->
      <div v-if="$device.isMobile" class="timetable-wrapper">
        <TimetableViewMobile />
      </div>
      <div v-else class="timetable-wrapper">
        <TimetableView />
      </div>
      <p class="timetable-info">
        {{ $t('top.timetable_caution') }}
      </p>
    </div>
  </section>
  <VoiceAudioSpectrum />
</template>
<style>
.scroll-hint-icon-wrap {
  height: 18%;
}

.scroll-hint.is-right-scrollable {
  background: none;
}

.scroll-hint.is-right-scrollable.is-left-scrollable {
  background: none;
}

.scroll-hint.is-left-scrollable {
  background: none;
}

.is-right-scrollable::before {
  content: '';
  position: absolute;
  right: 0;
  top: 0;
  width: 35%;
  height: 100%;
  background: linear-gradient(to right, rgba(255, 255, 255, 0), #eee);
  transition: width 0.2s ease-out;
  pointer-events: none;
}

.is-left-scrollable::after {
  content: '';
  position: absolute;
  left: 180px;
  top: 0;
  width: 35%;
  height: 100%;
  background: linear-gradient(to left, rgba(255, 255, 255, 0), #eee);
  transition: width 0.2s ease-out;
  pointer-events: none;
}

.is-right-scrollable.is-left-scrollable.timetable-wrapper::before,
.is-right-scrollable.is-left-scrollable.timetable-wrapper::after {
  width: 0;
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
    backgroundColor: '#eee',
  },
  '.timetable-root': {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '1080px',
    margin: '0 auto',
  },
  '.timetable-wrapper': {
    marginTop: '2.5rem',
    width: '100%',
    overflowX: 'scroll',
  },
  '.timetable-info': {
    marginTop: '8px',
    fontSize: 'calc(11*{fontSize.base})',
    lineHeight: '150%',
    fontWeight: '700',
    color: '{color.vue.blue}',
  },
  '.invisible-mobile': {
    display: 'block',
  },
  '.visible-mobile': {
    display: 'none',
  },
  '@mobile': {
    'section': {
      padding: '80px 20px 120px',
    },
    'invisible-mobile': {
      display: 'none',
    },
    'visible-mobile': {
      display: 'block',
    },
  },
})
</style>
