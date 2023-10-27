<script setup lang="ts">
import NavPageSectionContainer from '~/container/NavPageSectionContainer.vue'
import AccessSection from '~/components/venue/AccessSection.vue'
import { useNamecard } from '~/composables/useNamecard'
import { useFeature } from '~/composables/useFeature'
import { conferenceTitle } from '~/utils/constants'
import { generalOg, twitterOg } from '~/utils/og.constants'
import TimetablePageSection from '~/components/TimetablePageSection.vue'

const { canPurchase } = useNamecard()
const { showTimetable } = useFeature()

useHead({
  titleTemplate: (titleChunk) => `${conferenceTitle}`,
  meta: [...generalOg(), ...twitterOg()],
})
</script>

<template>
  <main>
    <NavPageSectionContainer />
    <TopPageSection />
    <template v-if="showTimetable">
      <TimetablePageSection />
    </template>
    <SpeakerPageSection />
    <EventPageSection />
    <template v-if="canPurchase">
      <AccessSection />
      <TicketPageSection />
    </template>
    <SponsorPageSection />
    <MessagePageSection />
    <FormPageSection />
    <TeamPageSection />
    <FooterPageSection />
  </main>
</template>

<style lang="ts" scoped>
css({
  'main': {
    overflow: 'hidden',
  },
})
</style>
