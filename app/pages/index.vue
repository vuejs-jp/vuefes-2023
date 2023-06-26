<script setup lang="ts">
import { conferenceTitle } from '~/utils/constants'
import { generalOg, twitterOg } from '~/utils/og.constants'

useHead({
  titleTemplate: (titleChunk) => `${conferenceTitle}`,
  meta: [...generalOg(), ...twitterOg()],
})
</script>

<template>
  <main>
    <NavPageSection />
    <TopPageSection />
    <MessagePageSection />
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
});
</style>
