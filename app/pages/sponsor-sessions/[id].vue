<script setup lang="ts">
import { SponsorSpeaker } from '~/types/app'
import { useSession } from '~/composables/useSession'
import { sponsorSpeakers } from '~/utils/sponsor-speakers.constants'

const { showSpeakerInfo } = useSession()

if (!showSpeakerInfo) {
  // https://nuxt.com/docs/getting-started/error-handling#showerror
  throw showError({
    statusCode: 500,
    fatal: true,
    message: 'No Enabled Speakers',
  })
}

const route = useRoute()
const speakerId = route.params.id as string
const speakerData: SponsorSpeaker = sponsorSpeakers.find((s: SponsorSpeaker) => {
  return s.id === speakerId
}) as SponsorSpeaker

if (!speakerData.id) {
  // https://nuxt.com/docs/getting-started/error-handling#showerror
  throw showError({
    statusCode: 404,
    fatal: true,
    message: 'Not Found Speakers',
  })
}
</script>

<template>
  <NavPageSection />
  <main class="sponsor-speakers-detail">
    <section class="detailhead">
      <SectionTitle
        id="sponsor-speakers-detail"
        color="vue.blue"
        title="Speakers"
        :yamato-title="$t('top.speakers_subtitle')"
      />
    </section>
  </main>
  <FooterPageSection />
</template>

<style lang="ts" scoped>
css({
  'section': {
    marginTop: '120px',
    display: 'grid',
    placeItems: 'center',
    gap: '40px',
    '::v-deep(h2)': {
      color: '{color.vue.blue}',
      fontSize: 'calc(32*{fontSize.base})',
      fontWeight: 900,
    },
  }
})
</style>
