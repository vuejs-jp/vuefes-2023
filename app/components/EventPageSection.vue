<script setup lang="ts">
import EventSection from '~/components/event/EventSection.vue'
import StoreSection from '~/components/event/StoreSection.vue'
</script>

<template>
  <section class="event-wrapper">
    <div class="event-root">
      <EventSection />
      <StoreSection />
    </div>
  </section>
</template>

<style lang="ts" scoped>
css({
  '.event-wrapper': {
    padding: '120px 0',
    background: 'linear-gradient(180deg, #F17C67 40.63%, #FFC408 100%)',
    display: 'grid',
    gridTemplateColumns: '1fr min(1280px, calc(100% - 40px)) 1fr',
  },
  '.event-root': {
    gridColumn: '2',
    padding: 'calc({space.8} * 5) 0',
    margin: '0 auto',
    width: '100%',
    fontSize: 'calc(18*{fontSize.base})',
    color: '{color.vue.blue}',
    background: '{color.white}',
    'grid-template-columns': 'minmax(0, 1fr)',
  },
  '@tablet': {
    '.event-root': {
      maxWidth: '888px',
    },
  },
  '@mobile': {
    '.event-root': {
      maxWidth: '730px',
    },
  },
})
</style>
