<script setup lang="ts">
import { Sponsor, SponsorSpeaker } from '~/types/app'
import SponsorSpeakerCard from '~/components/speaker/SponsorSpeakerCard.vue'
import MarkDownText from '~/components/MarkDownText.vue'
import RoundButton from '~/components/button/RoundButton.vue'
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
    time: '',
    type: 'main',
  },
  profile: [
    {
      id: '',
      image: '',
      title: '',
      name: '',
      twitterId: '',
    },
  ],
  sponsorId: '',
}

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

const description =
  sponsorData[0].id === 'gmo-internet-group'
    ? `${sponsorData[0].name} のスポンサーLTを掲載しています。`
    : `${sponsorData[0].name} のスポンサーセッションを掲載しています。`

useHead({
  titleTemplate: (titleChunk) => `${sponsorData[0].name} | ${conferenceTitle}`,
  meta: [
    ...generalOg({
      title: `${sponsorData[0].name} | ${conferenceTitle}`,
      description: description,
      url: `${linkUrl}sponsor-sessions/${sponsorSpeakerData.id}`,
      image: `${linkUrl}og/sponsors/${sponsorSpeakerData.id}.png`,
    }),
    ...twitterOg({
      title: `${sponsorData[0].name} | ${conferenceTitle}`,
      description: description,
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
      <div class="detailhead-tags">
        <SponsorTag
          v-if="sponsorSpeakerData.session.track"
          :label="$t(`track.${sponsorSpeakerData.session.track}`)"
          :color="getTrackColor(sponsorSpeakerData.session.track)"
        />
        <SponsorTag
          v-if="sponsorSpeakerData.session.time"
          :label="sponsorSpeakerData.session.time"
          color="vue.blue"
        />
      </div>
    </section>
    <section class="detailbody">
      <h2 class="detailbody-title">
        {{ sponsorSpeakerData.session.title || 'セッション' }}
      </h2>
      <div class="detailbody-explain">
        <MarkDownText :path="`sponsor-sessions/${sponsorSpeakerData.id}/head`" />
      </div>
      <div
        v-for="(profile, index) in sponsorSpeakerData.profile"
        :key="index"
        class="detailbody-persons"
      >
        <SponsorSpeakerCard :id="sponsorSpeakerData.id" :profile="profile" />
        <div class="person-info">
          <MarkDownText :path="`sessions/${profile.id}/profile`" />
        </div>
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
    '::v-deep(ul)': {
      listStyleType: 'square',
      marginLeft: 'calc({space.8} * 4)',
      marginBottom: 'calc({space.8} * 2)',
    },
    '::v-deep(p)': {
      color: '{color.vue.blue}',
      fontWeight: 500,
      fontSize: 'calc(18*{fontSize.base})',
      lineHeight: '1.8',
      'a': {
        color: '{color.vue.green}',
        textDecoration: 'underline',
        '&:hover': {
          transition: '.2s',
        },
      },
    },
  },
  '.detailbody-persons': {
    fontSize: 'calc(18*{fontSize.base})',
    display: 'grid',
    gridTemplateColumns: 'auto 1fr',
    gap: 'calc({space.8} * 4)',
    paddingBottom: 'calc({space.8} * 3)',
    ':deep(.speaker-card)': {
      maxWidth: '400px'
    },
    '::v-deep(img)': {
      width: '308px',
    },
  },
  '.person-info': {
    '::v-deep(ul)': {
      listStyleType: 'square',
      marginLeft: 'calc({space.8} * 4)',
      marginBottom: 'calc({space.8} * 2)',
    },
    '::v-deep(p)': {
      color: '{color.vue.blue}',
      fontWeight: 500,
      fontSize: 'calc(18*{fontSize.base})',
      lineHeight: '1.8',
      'a': {
        color: '{color.vue.green}',
        textDecoration: 'underline',
        '&:hover': {
          transition: '.2s',
        },
      },
    },
  },
  '.back': {
    textAlign: 'center',
  },
  '@tablet': {
    'main': {
      '--head-img-width': '368px',
      display: 'block',
    },
    '.detailbody-persons': {
      '::v-deep(img)': {
        width: '275px',
      },
    },
  },
  '@mobile': {
    'main': {
      '--max-width': '100%',
      '--head-img-width': '100%',
    },
    '.detailbody': {
      display: 'block',
    },
    '.detailbody-title': {
      fontSize: 'calc(24*{fontSize.base})',
    },
    '.detailbody-explain': {
      '::v-deep(p)': {
        fontSize: 'calc(16*{fontSize.base})',
      },
    },
    '.detailbody-persons': {
      gridTemplateColumns: '1fr',
      placeItems: 'center',
    },
    '.person-info': {
      '::v-deep(p)': {
        fontSize: 'calc(16*{fontSize.base})',
      },
    },
  },
})
</style>
