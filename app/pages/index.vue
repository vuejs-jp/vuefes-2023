<script setup lang="ts">
import NavPageSectionContainer from '~/container/NavPageSectionContainer.vue'
import { useNamecard } from '~/composables/useNamecard'
import { conferenceTitle } from '~/utils/constants'
import { generalOg, twitterOg } from '~/utils/og.constants'

const { canPurchase } = useNamecard()

useHead({
  titleTemplate: (titleChunk) => `${conferenceTitle}`,
  meta: [...generalOg(), ...twitterOg()],
})
</script>

<template>
  <main>
    <NavPageSectionContainer />
    <TopPageSection />
    <MessagePageSection />
    <SpeakerPageSection />
    <template v-if="canPurchase">
      <TicketPageSection />
    </template>
    <SponsorPageSection />
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
