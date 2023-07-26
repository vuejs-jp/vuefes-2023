<script setup lang="ts">
/* eslint-disable vuejs-accessibility/heading-has-content */

import { SponsorUser, Sponsor, SponsorCategory, OptionCategory } from '~/types/app'
import MarkDownText from '~/components/MarkDownText.vue'
import RoundButton from '~/components/button/RoundButton.vue'
import SectionTitle from '~/components/SectionTitle.vue'
import NavPageSection from '~/components/NavPageSection.vue'
// import { sponsorUsers } from '~/utils/sponsor-users.constants'
import { generalOg, twitterOg } from '~/utils/og.constants'
import { conferenceTitle } from '~/utils/constants'
import { all } from '~/utils/sponsor.constants'
import { useSponsor } from '~/composables/useSponsor'

const emptySponsor: Sponsor = {
  id: '',
  name: '',
  image: '',
  categories: ['lunch'],
  url: '',
}

const { getCategoryType, isPlatinum } = useSponsor()
const route = useRoute()
const sponsorId = route.params.id as string
const sponsorData: Sponsor =
  all.find((s: Sponsor) => {
    return s.id === sponsorId
  }) || emptySponsor

// TODO: develop later
// const users = sponsorUsers.filter((user: SponsorUser) => {
//   return user.sponsorId === sponsorId
// })

useHead({
  titleTemplate: (titleChunk) => `${sponsorData.name} | ${conferenceTitle}`,
  meta: [...generalOg(), ...twitterOg()],
})
</script>

<template>
  <NavPageSection />
  <main v-if="sponsorData.id" class="sponsors-detail">
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
      <div class="detailhead-body">
        <div class="detailhead-left">
          <p class="detailhead-img">
            <img
              :src="sponsorData.image"
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
            <h1>{{ sponsorData.name }}</h1>
          </a>
        </div>
        <div class="detailhead-right">
          <MarkDownText :path="`sponsors/${sponsorData.id}/head`" />
        </div>
      </div>
    </section>
    <section v-if="isPlatinum(sponsorData.categories)" class="detailbody">
      <h2 class="detailbody-title">
        <MarkDownText :path="`sponsors/${sponsorData.id}/title`" />
      </h2>
      <p>
        <MarkDownText :path="`sponsors/${sponsorData.id}/body`" />
      </p>

      <!-- TODO: develop later -->
      <!-- <ul class="detailbody-persons">
        <li v-for="u in users" :key="u.id">
          <SpeakerCard :speaker="u" />
        </li>
      </ul> -->
    </section>
    <footer>
      <!-- トップにもどる -->
      <RoundButton to="/" outline>
        {{ $t('words.back_top') }}
      </RoundButton>
    </footer>
  </main>
  <main v-else class="sponsors-detail -error">
    <h1>ページが存在しません</h1>
    <footer>
      <!-- トップにもどる -->
      <RoundButton to="/" outline>
        {{ $t('words.back_top') }}
      </RoundButton>
    </footer>
  </main>
  <FooterPageSection />
</template>

<style lang="ts" scoped>
css({
  'main.-error': {
    'h1': {
      fontSize: 'calc(22*{fontSize.base})',
      fontWeight: '700',
      textAlign: 'center',
      padding: 'calc({space.8} * 10) 0',
    }
  },
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
    marginTop: 'calc({space.8} * 8)',
    overflow: 'scroll',
    height: 'calc({space.8} * 6)',
    columnGap: 'calc({space.8} * 1.5)',
  },
  '.detailhead-body': {
    display: 'flex',
    marginTop: 'calc({space.8} * 4)',
    color: '#292C33',
    columnGap: 'calc({space.8} * 5)',
  },
  '.detailhead-left': {
    position: 'relative',
    flex: '0 0 auto',
  },
  '.detailhead-right': {
    fontSize: 'calc(18*{fontSize.base})',
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
    marginTop: 'calc({space.8} * 4)',
  },
  '.detailbody-title': {
    textAlign: 'center',
    fontSize: 'calc(32*{fontSize.base})',
    fontWeight: '700',
    marginBottom: 'calc({space.8} * 4)',
  },
  '.detailbody-persons': {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    margin: 'calc({space.8} * 10) auto',
    gap: 'calc({space.8} * 4)',
  },
  'footer': {
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
