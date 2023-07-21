<script setup lang="ts">
import RoundButton from '~/components/button/RoundButton.vue'
import SectionTitle from '~/components/SectionTitle.vue'
const route = useRoute()
const id = route.params.id
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

      <div class="detailhead-body">
        <div class="detailhead-left">
          <p class="detailhead-img">
            <img src="/sponsors/cloudsign.png" alt="" width="570" height="322" decoding="async" />
          </p>
          <a class="detailhead-sponsorname" href="#">
            <h1>クラウドサイン（弁護士ドットコム株式会社）様</h1>
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
    </section>
    <footer>
      <!-- スポンサー資料 -->
      <RoundButton
        href="https://docs.google.com/presentation/d/1cgBIP6m8E82oef3p3BUZ7mMBFxnvTeA_t9kSwdnipgs/edit?usp=sharing"
        target="_blank"
        rel="noreferrer"
        outline
      >
        {{ $t('words.back_top') }}
      </RoundButton>
    </footer>
  </main>
  <FooterPageSection />
</template>

<style lang="ts" scoped>
css({
  'main': {
    '--max-width': '1280px',
    padding: 'calc({space.header} + {space.8} * 10) 0 calc({space.bodybottom})',
    color: '{color.vue.blue}',
    lineHeight: '1.8',
  },
  'section': {
    maxWidth: '{max.width}',
    margin: '0 auto',
  },
  '.detailhead-body': {
    display: 'flex',
    marginTop: 'calc({space.8} * 10)',
    color: '#292C33',
  },
  '.detailhead-left': {
    flex: '0 0 auto',
    marginRight: 'calc({space.8} * 5)',
  },
  '.detailhead-right': {
    fontSize: 'calc(18*{fontSize.base})',
  },
  '.detailhead-img': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '475px',
    height: '267px',
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
    marginTop: 'calc({space.8} * 1)',
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
  'footer': {
    textAlign: 'center',
    marginTop: 'calc({space.8} * 8)',
  }


})
</style>
