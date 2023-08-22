<script setup lang="ts">
import { Speaker } from '~/types/app'
import SpeakerCard from '~/components/speaker/SpeakerCard.vue'
import MarkDownText from '~/components/MarkDownText.vue'
import RoundButton from '~/components/button/RoundButton.vue'
import { useSession } from '~/composables/useSession'
import { speakers } from '~/utils/speakers.constants'

const { showSpeakerInfo, getTrackColor } = useSession()

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
      <div class="detailhead-tags">
        <SponsorTag
          v-if="speakerData.session.track"
          :label="$t(`track.${speakerData.session.track}`)"
          :color="getTrackColor(speakerData.session.track)"
        />
        <SponsorTag
          v-if="speakerData.session.time"
          :label="speakerData.session.time"
          color="vue.blue"
        />
      </div>
    </section>
    <section class="detailbody">
      <h2 class="detailbody-title">
        {{ speakerData.session.title || 'セッション' }}
      </h2>
      <div class="detailbody-explain">
        <MarkDownText :path="`sessions/${speakerData.id}/head`" />
      </div>
      <div class="detailbody-persons">
        <SpeakerCard :speaker="speakerData" />
        <MarkDownText :path="`sessions/${speakerData.id}/profile`" />
      </div>
    </section>
    <div class="back">
      <RoundButton to="/" outline>
        {{ $t('words.back_top') }}
      </RoundButton>
    </div>
  </main>
  <FooterPageSection />
</template>

<style lang="ts" scoped>
css({
  'main': {
    '--max-width': '1280px',
    '--head-img-width': '475px',
    padding: 'calc({space.header} + {space.8} * 10) calc({space.8} * 4) calc({space.bodybottom})',
    color: '{color.vue.blue}',
    lineHeight: '1.8',
    maxWidth: '{max.width}',
    margin: '0 auto',
    display: 'grid',
    gap: 'calc({space.8} * 8)',
  },
  '.detailhead-tags': {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: 'calc({space.8} * 4)',
    columnGap: 'calc({space.8} * 1.5)',
    gap: 'calc({space.8} * 0.5)',
  },
  '.detailbody': {
    margin: '0 auto',
    width: '100%',
  },
  '.detailbody-title': {
    textAlign: 'center',
    fontSize: 'calc(32*{fontSize.base})',
    fontWeight: '700',
    marginBottom: 'calc({space.8} * 3)',
  },
  '.detailbody-explain': {
    fontSize: 'calc(18*{fontSize.base})',
    margin: '0 auto calc({space.8} * 8)',
  },
  '.detailbody-persons': {
    fontSize: 'calc(18*{fontSize.base})',
    display: 'grid',
    gridTemplateColumns: 'auto 1fr',
    gap: 'calc({space.8} * 4)',
  },
  '.back': {
    textAlign: 'center',
  },
  '@tablet': {
    'main': {
      '--head-img-width': '368px',
    }
  },
  '@mobile': {
    'main': {
      '--max-width': '100%',
      '--head-img-width': '100%',
    },
    '.detailhead-body': {
      display: 'block',
    },
    '.detailbody-persons': {
      gridTemplateColumns: '1fr',
      placeItems: 'center',
    },
  },
})
</style>
