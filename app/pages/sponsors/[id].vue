<script setup lang="ts">
import { SponsorUser, Sponsor } from '~/types/app'
import RoundButton from '~/components/button/RoundButton.vue'
import SectionTitle from '~/components/SectionTitle.vue'
import NavPageSectionContainer from '~/container/NavPageSectionContainer.vue'
import { sponsorUsers } from '~/utils/sponsor-users.constants'
import { generalOg, twitterOg } from '~/utils/og.constants'
import { conferenceTitle } from '~/utils/constants'
import { all } from '~/utils/sponsor.constants'

const route = useRoute()
const sponsorId = route.params.id
const sponsorData = all.find((s: Sponsor) => {
  return s.name === sponsorId
})

const users = sponsorUsers.filter((user: SponsorUser) => {
  return user.sponsorName === 'クラウドサイン（弁護士ドットコム株式会社）'
})

useHead({
  titleTemplate: (titleChunk) => `スポンサー詳細 | ${conferenceTitle}`,
  meta: [...generalOg(), ...twitterOg()],
})
</script>

<template>
  <NavPageSectionContainer />
  <main v-if="sponsorData" class="sponsors-detail">
    <section class="detailhead">
      <SectionTitle
        id="sponsor-detail"
        color="vue.blue"
        title="Sponsors"
        :yamato-title="$t('top.sponsors_subtitle')"
      />

      <ul class="detailhead-tags">
        <li>
          <SponsorTag
            :label="$t(`category.${sponsorData.category}`)"
            :color="sponsorData.category"
          />
        </li>
        <li><SponsorTag label="Session room naming rights" /></li>
      </ul>
      <div class="detailhead-body">
        <div class="detailhead-left">
          <p class="detailhead-img">
            <img
              :src="sponsorData.image"
              :alt="sponsorData.name"
              width="570"
              height="322"
              decoding="async"
            />
          </p>
          <a
            class="detailhead-sponsorname"
            :href="sponsorData.site"
            target="_blank"
            rel="noreferrer"
          >
            <h1>{{ sponsorData.name }}</h1>
          </a>
        </div>
        <div class="detailhead-right">
          クラウドサインは、契約の締結から管理までデジタルで完結させる契約マネジメントプラットフォームです。企業や自治体などでの導入実績250万社を超える電子契約市場No.1の電子契約サービスです。Vue.jsはサービス初期から活用しており、プロダクトを長年支えてきました。今年は長らく待ち望んでいたオフライン開催。クラウドサインとしても運営の皆様をはじめ、参加者の方々と一緒にVue.jsのコミュニティを盛り上げていきたいと思います。当日会場でお会いできるのを楽しみにしております。
        </div>
      </div>
    </section>
    <section class="detailbody">
      <h2 class="detailbody-title">セッションタイトル</h2>
      <p>
        セッション内容セッション内容セッション内容セッション内容セッション内容セッション内容セッション内容セッション内容セッション内容セッション内容セッション内容セッション内容セッション内容セッション内容セッション内容セッション内容セッション内容セッション内容セッション内容セッション内容セッション内容セッション内容セッシ
        ョン内容セッション内容セッション内容セッション内容セッション内容セッション内容
      </p>

      <ul class="detailbody-persons">
        <li v-for="u in users" :key="u.id">
          <SpeakerCard :speaker="u" />
        </li>
      </ul>
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
