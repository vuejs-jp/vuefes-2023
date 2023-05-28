<script lang="ts" setup>
import RoundButton from '@/components/button/RoundButton.vue'
</script>

<template>
  <section>
    <div class="sponsors-root">
      <SectionTitle id="sponsors" color="vue.blue" title="Sponsors" yamato-title="スポンサー" />
      <div class="subtitle">
        <p>
          Vue.js に関わる人々が集まる Vue Fes Japan 2023
          をより良いカンファレンスにするため、スポンサー募集をします。募集スケジュールなどの詳しい内容は資料をご参照ください。
        </p>
      </div>
      <div class="link-box">
        <RoundButton href="https://forms.gle/rxHNdjFDnFGxzf5SA" target="_blank" rel="noreferrer"
          >申し込みフォーム</RoundButton
        >
        <RoundButton
          href="https://docs.google.com/presentation/d/1cgBIP6m8E82oef3p3BUZ7mMBFxnvTeA_t9kSwdnipgs/edit?usp=sharing"
          target="_blank"
          rel="noreferrer"
          is-secondry
          >スポンサー資料</RoundButton
        >
      </div>
      <p class="twitter-text">
        詳細情報は、<a
          class="twitter-link"
          href="https://twitter.com/vuefes"
          target="_blank"
          rel="noreferrer"
          >Vue Fes Japan の Twitter </a
        >をご確認ください。
      </p>
    </div>
  </section>
  <VoiceAudioSpectrum />
</template>

<style lang="ts" scoped>
css({
  'section': {
    padding: '120px 40px',
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
    '.subtitle': {
      'p': {
        fontSize: '18px',
      },
    },
  },
})
</style>
