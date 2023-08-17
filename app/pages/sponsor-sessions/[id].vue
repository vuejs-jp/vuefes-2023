<script setup lang="ts">
import { Sponsor, SponsorSpeaker } from '~/types/app'
import { useSession } from '~/composables/useSession'
import { generalOg, twitterOg } from '~/utils/og.constants'
import { conferenceTitle } from '~/utils/constants'
import { all } from '~/utils/sponsor.constants'
import { sponsorSpeakers } from '~/utils/sponsor-speakers.constants'

const emptySponsorSpeaker: SponsorSpeaker = {
  id: '',
  type: 'domestic',
  session: {
    title: '',
    description: '',
    time: 0,
    type: 'main',
  },
  profile: [
    {
      image: '',
      title: '',
      name: '',
      twitterId: '',
      description: '',
    },
  ],
  sponsorId: '',
}

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
const sponsorId = route.params.id as string
const sponsorSpeakerData: SponsorSpeaker =
  sponsorSpeakers.find((s: SponsorSpeaker) => {
    return s.id === sponsorId
  }) || emptySponsorSpeaker

if (!sponsorSpeakerData.id) {
  // https://nuxt.com/docs/getting-started/error-handling#showerror
  throw showError({
    statusCode: 404,
    fatal: true,
    message: 'Not Found Speakers',
  })
}

const sponsorData: Sponsor[] = all.filter((s: Sponsor) => {
  return s.id === sponsorSpeakerData.id
})

if (sponsorData.length === 0) {
  // https://nuxt.com/docs/getting-started/error-handling#showerror
  throw showError({
    statusCode: 404,
    fatal: true,
    message: 'Not Found Sponsors',
  })
}

if (sponsorData.length > 1) {
  // https://nuxt.com/docs/getting-started/error-handling#showerror
  throw showError({
    statusCode: 404,
    fatal: true,
    message: 'Exceed Sponsor Size Requirements',
  })
}

useHead({
  titleTemplate: (titleChunk) => `${sponsorData[0].name} | ${conferenceTitle}`,
  meta: [
    ...generalOg({
      title: `${sponsorData[0].name} | ${conferenceTitle}`,
      description: `${sponsorData[0].name} のスポンサーセッションを掲載しています。`,
      url: `${linkUrl}sponsor-sessions/${sponsorSpeakerData.id}`,
      image: `${linkUrl}og/sponsors/${sponsorSpeakerData.id}.png`,
    }),
    ...twitterOg({
      title: `${sponsorData[0].name} | ${conferenceTitle}`,
      description: `${sponsorData[0].name} のスポンサーセッションを掲載しています。`,
      url: `${linkUrl}sponsor-sessions/${sponsorSpeakerData.id}`,
      image: `${linkUrl}og/sponsors/${sponsorSpeakerData.id}.png`,
    }),
  ],
})
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
