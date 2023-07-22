<script setup lang="ts">
import NavPageSectionContainer from '~/container/NavPageSectionContainer.vue'
import { useNamecard } from '~/composables/useNamecard'
import { conferenceTitle } from '~/utils/constants'
import { generalOg, twitterOg } from '~/utils/og.constants'

const { canRegister } = useNamecard()

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
    <template v-if="canRegister">
      <TicketPageSection />
    </template>
    <SpeakerPageSection />
    <SponsorPageSection />
    <FormPageSection />
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
