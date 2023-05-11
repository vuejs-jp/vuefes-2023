<script setup lang="ts">
import { conferenceTitle } from '~/utils/constants'
import { generalOg, twitterOg } from '~/utils/og.constants'

useHead({
  title: conferenceTitle,
  meta: [...generalOg(), ...twitterOg()],
})
</script>

<template>
  <main>
    <NavPageSection />
    <TopPageSection />
    <MessagePageSection />
    <SponsorPageSection />
    <FormPageSection />
    <FooterPageSection />
  </main>
</template>
