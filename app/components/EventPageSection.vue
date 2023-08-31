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
    padding: '40px',
    background: 'linear-gradient(180deg, #F17C67 40.63%, #FFC408 100%)',
  },
  '.event-root': {
    padding: 'calc({space.8} * 5) 0',
    display: 'grid',
    gap: 'calc({space.8} * 5)',
    maxWidth: '1280px',
    margin: '0 auto',
    width: '100%',
    fontSize: 'calc(18*{fontSize.base})',
    color: '{color.vue.blue}',
    background: '{color.white}',
    'grid-template-columns': 'minmax(0, 1fr)',
  },
  '@tablet': {
    '.event-wrapper': {
      padding: '40px',
    },
    '.event-root': {
      maxWidth: '888px',
    },
  },
  '@mobile': {
    '.event-wrapper': {
      padding: '20px',
    },
    '.event-root': {
      maxWidth: '730px',
    },
  },
})
</style>
