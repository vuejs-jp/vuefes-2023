<script setup lang="ts">
import { Speaker } from '~/types/app'
import { useSession } from '~/composables/useSession'
import { speakers } from '~/utils/speakers.constants'

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
const speakerData: Speaker = speakers.find((s: Speaker) => {
  return s.id === speakerId
}) as Speaker

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
  <main class="speakers-detail">
    <section class="detailhead">
      <SectionTitle
        id="speakers-detail"
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
