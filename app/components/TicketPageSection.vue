<script setup lang="ts">
import Arrow3 from '~/assets/namecard/arrow3.svg'
import TicketSection from '~/components/namecard/TicketSection.vue'
import NamecardSection from '~/components/namecard/NamecardSection.vue'
import VolunteerSection from '~/components/volunteer/VolunteerSection.vue'
import ChildCareSection from '~/components/childcare/ChildCareSection.vue'
import HandsonSection from '~/components/handson/HandsonSection.vue'
import PersonalSponsorSection from '~/components/sponsor/PersonalSponsorSection.vue'
import FaqSection from '~/components/namecard/FaqSection.vue'
</script>

<template>
  <section>
    <div class="ticket-root">
      <TicketSection />
      <Arrow3 class="arrow" />
      <NamecardSection />
      <VolunteerSection />
      <ChildCareSection />
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
    backgroundColor: '#fff'
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
  },
  '.arrow': {
    margin: '0 auto'
  },
})
</style>
