<script setup lang="ts">
import { Sponsor, SponsorSpeaker } from '~/types/app'
import SponsorSpeakerCard from '~/components/speaker/SponsorSpeakerCard.vue'
import MarkDownText from '~/components/MarkDownText.vue'
import RoundButton from '~/components/button/RoundButton.vue'
import SectionTitle from '~/components/SectionTitle.vue'
import NavPageSection from '~/components/NavPageSection.vue'
import { generalOg, twitterOg } from '~/utils/og.constants'
import { conferenceTitle } from '~/utils/constants'
import { all } from '~/utils/sponsor.constants'
import { sponsorSpeakers } from '~/utils/sponsor-speakers.constants'
import { useSponsor } from '~/composables/useSponsor'

const urlBasePath = useRuntimeConfig().app.baseURL
const emptySponsor: Sponsor = {
  id: '',
  name: '',
  image: '',
  categories: ['lunch'],
  url: '',
}

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
      image: '',
      title: '',
      name: '',
      twitterId: '',
    },
  ],
  sponsorId: '',
}

const { getCategoryType, isMoreSilver, isOptions, isPlatinum, isBronze } = useSponsor()
const route = useRoute()
const sponsorId = route.params.id as string
const sponsorData: Sponsor =
  all.find((s: Sponsor) => {
    return s.id === sponsorId
  }) || emptySponsor

if (!sponsorData.id) {
  // https://nuxt.com/docs/getting-started/error-handling#showerror
  throw showError({
    statusCode: 404,
    fatal: true,
    message: 'Not Found Sponsors',
  })
}

const sponsorSpeakerData: SponsorSpeaker =
  sponsorSpeakers.find((s: SponsorSpeaker) => {
    return s.id === sponsorId
  }) || emptySponsorSpeaker

useHead({
  titleTemplate: (titleChunk) => `${sponsorData.name} | ${conferenceTitle}`,
  meta: [
    ...generalOg({
      title: `${sponsorData.name} | ${conferenceTitle}`,
      description: `${sponsorData.name} のスポンサー情報を掲載しています。`,
      url: `${linkUrl}sponsors/${sponsorData.id}`,
      image: `${linkUrl}og/sponsors/${sponsorData.id}.png`,
    }),
    ...twitterOg({
      title: `${sponsorData.name} | ${conferenceTitle}`,
      description: `${sponsorData.name} のスポンサー情報を掲載しています。`,
      url: `${linkUrl}sponsors/${sponsorData.id}`,
      image: `${linkUrl}og/sponsors/${sponsorData.id}.png`,
    }),
  ],
})
</script>

<template>
  <NavPageSection />
  <main class="sponsors-detail">
    <section class="detailhead">
      <SectionTitle
        id="sponsor-detail"
        color="vue.blue"
        title="Sponsors"
        :yamato-title="$t('top.sponsors_subtitle')"
      />

      <ul class="detailhead-tags">
        <li v-for="category in sponsorData.categories" :key="`category-${category}`">
          <SponsorTag :label="$t(`category.${category}`)" :color="getCategoryType(category)" />
        </li>
      </ul>
      <div
        class="detailhead-body"
        :style="
          isOptions(sponsorData.categories) || isBronze(sponsorData.categories)
            ? { gridTemplateColumns: '1fr', placeItems: 'center' }
            : { gridTemplateColumns: 'auto 1fr' }
        "
      >
        <div class="detailhead-left">
          <p class="detailhead-img">
            <img
              :src="`${urlBasePath}${sponsorData.image}`"
              :alt="`${sponsorData.name}のロゴ`"
              width="570"
              height="322"
              decoding="async"
            />
          </p>
          <a
            class="detailhead-sponsorname"
            :href="sponsorData.url"
            target="_blank"
            rel="noreferrer"
          >
            <h2>{{ sponsorData.name }}</h2>
          </a>
        </div>
        <div v-if="isMoreSilver(sponsorData.categories)" class="detailhead-right">
          <MarkDownText :path="`sponsors/${sponsorData.id}/head`" />
        </div>
      </div>
    </section>
    <section v-if="isPlatinum(sponsorData.categories)" class="detailbody">
      <h2 class="detailbody-title">
        {{ sponsorSpeakerData.session.title || 'セッション' }}
      </h2>
      <div class="detailbody-explain">
        <MarkDownText :path="`sponsor-sessions/${sponsorData.id}/head`" />
      </div>
      <div
        v-for="(profile, index) in sponsorSpeakerData.profile"
        :key="index"
        class="detailbody-persons"
      >
        <SponsorSpeakerCard :id="sponsorSpeakerData.id" :profile="profile" />
      </div>
    </section>
    <div class="back">
      <!-- トップにもどる -->
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
  },
  '.detailhead-tags': {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: 'calc({space.8} * 8)',
    columnGap: 'calc({space.8} * 1.5)',
    gap: 'calc({space.8} * 0.5)',
  },
  '.detailhead-body': {
    display: 'grid',
    marginTop: 'calc({space.8} * 4)',
    color: '#292C33',
    gap: 'calc({space.8} * 5)',
  },
  '.detailhead-left': {
    position: 'relative',
    flex: '0 0 auto',
  },
  '.detailhead-right': {
    fontSize: 'calc(18*{fontSize.base})',
    '::v-deep(a)': {
      textDecoration: 'underline',
      '&:hover': {
        transition: '.2s',
      },
    },
  },
  '.detailhead-img': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '{head.img.width}',
    height: 'auto',
    aspectRatio: '690 / 388',
    boxShadow: '0px 4px 4px 0px #00000040',
    borderRadius: 'calc({space.8} * 1)'
  },
  '.detailhead-img img': {
    maxWidth: '60%',
    maxHeight: '60%',
    objectFit: 'contain'
  },
  '.detailhead-sponsorname': {
    display: 'inline-block',
    color: '{color.vue.green}',
    textDecoration: 'underline',
    marginTop: 'calc({space.8} * 2)',
    '&:hover': {
      transition: '.2s',
    },
  },
  '.detailbody': {
    margin: 'calc({space.8} * 4) auto 0',
  },
  '.detailbody-title': {
    textAlign: 'center',
    fontSize: 'calc(32*{fontSize.base})',
    fontWeight: '700',
    marginBottom: 'calc({space.8} * 4)',
  },
  '.detailbody-explain': {
    fontSize: 'calc(18*{fontSize.base})',
    margin: '0 auto',
  },
  '.detailbody-persons': {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    margin: 'calc({space.8} * 10) auto',
    gap: 'calc({space.8} * 4)',
  },
  '.back': {
    textAlign: 'center',
    marginTop: 'calc({space.8} * 8)',
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
    '.detailhead-right': {
      marginTop: 'calc({space.8} * 4)',
    },
  },
})
</style>
