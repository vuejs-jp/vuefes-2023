<script setup lang="ts">
import Arrow3 from '~/assets/namecard/arrow3.svg'
import TicketSection from '~/components/namecard/TicketSection.vue'
import NamecardSection from '~/components/namecard/NamecardSection.vue'
import HandsonSection from '~/components/handson/HandsonSection.vue'
import PersonalSponsorSection from '~/components/sponsor/PersonalSponsorSection.vue'
import FaqSection from '~/components/namecard/FaqSection.vue'
</script>

<template>
  <section>
    <div class="ticket-root">
      <TicketSection />
      <div>
        <Arrow3 class="arrow" />
      </div>
      <NamecardSection />
      <HandsonSection />
      <PersonalSponsorSection />
      <FaqSection />
    </div>
  </section>
  <VoiceAudioSpectrum />
</template>

<style lang="ts" scoped>
css({
  'section': {
    padding: '120px 20px 120px',
    backgroundColor: '#eee'
  },
  '.ticket-root': {
    display: 'grid',
    gap: 'calc({space.8} * 5)',
    maxWidth: '768px',
    margin: '0 auto',
    width: '100%',
    fontSize: 'calc(18*{fontSize.base})',
    color: '{color.vue.blue}',
    'grid-template-columns': 'minmax(0, 1fr)',
    '::v-deep(h3)': {
      textAlign: 'center',
      color: '{color.vue.blue}',
      fontSize: 'calc(32*{fontSize.base})',
      fontWeight: 700,
    },
    '::v-deep(h3 p)': {
      marginBottom: 'calc({space.8} * 1)'
    }
  },
  '.arrow': {
    margin: '0 auto'
  },
})
</style>
