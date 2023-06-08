<script lang="ts" setup>
import RoundButton from '~/components/button/RoundButton.vue'
</script>

<template>
  <section>
    <div class="sponsors-root">
      <SectionTitle
        id="sponsors"
        color="vue.blue"
        title="Sponsors"
        :yamato-title="$t('top.sponsors_subtitle')"
      />
      <!-- タイトル下テキスト -->
      <div class="subtitle">
        <p>{{ $t('top.sponsors_toptext') }}</p>
      </div>
      <div class="link-box">
        <!-- 申し込みフォーム -->
        <RoundButton href="https://forms.gle/rxHNdjFDnFGxzf5SA" target="_blank" rel="noreferrer">
          {{ $t('words.application_form') }}
        </RoundButton>
        <!-- スポンサー資料 -->
        <RoundButton
          href="https://docs.google.com/presentation/d/1cgBIP6m8E82oef3p3BUZ7mMBFxnvTeA_t9kSwdnipgs/edit?usp=sharing"
          target="_blank"
          rel="noreferrer"
          outline
        >
          {{ $t('words.sponsordoc') }}
        </RoundButton>
      </div>
      <!-- 詳細情報は、Vue Fes Japan の Twitterをご確認ください。 -->
      <i18n-t keypath="top.sponsors_infolink" tag="p" class="twitter-text">
        <a
          href="https://twitter.com/vuefes"
          target="_blank"
          class="twitter-link"
          rel="noreferrer"
          >{{ $t('top.sponsors_infolink_label') }}</a
        >
      </i18n-t>
    </div>
  </section>
  <VoiceAudioSpectrum />
</template>

<style lang="ts" scoped>
css({
  'section': {
    padding: '120px 20px',
    background: '#EEEEEE'
  },
  '.sponsors-root': {
    display: 'grid',
    gap: '40px',
    maxWidth: '768px',
    margin: '0 auto',
    width: '100%',
  },
  '.subtitle': {
    display: 'grid',
    placeItems: 'center',
    gap: '40px',
    'p': {
      color: '{color.vue.blue}',
      fontWeight: 500,
      fontSize: '16px',
      lineHeight: '180%'
    },
  },
  '.link-box': {
    display: 'flex',
    flexWrap: 'wrap',
    padding: '0 16px',
    justifyContent: 'center',
    gap: '40px'
  },
  '.twitter-text': {
    fontSize: '18px',
    color: '{color.vue.blue}',
  },
  '.twitter-link': {
    color: '{color.vue.green}',
    textDecoration: 'underline',
    '&:hover': {
      transition: '.2s',
    },
  },
  '@tablet': {
    'section': {
      padding: '120px 40px',
    },
  },
  '@mobile': {
    '.subtitle': {
      'p': {
        fontSize: '18px',
      },
    },
  },
})
</style>
