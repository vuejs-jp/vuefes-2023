<script lang="ts" setup></script>

<template>
  <section>
    <div class="sponsor-root">
      <SectionTitle id="sponsor" color="vue.blue" title="Sponsors" yamato-title="スポンサー" />
      <div class="subtitle">
        <p>
          Vue.js に関わる人々が集まる Vue Fes Japan 2023
          をより良いカンファレンスにするため、スポンサー募集をします。募集スケジュールなどの詳しい内容は資料をご参照ください。
        </p>
      </div>
      <div class="link-box">
        <a
          class="base-link contact-link"
          href="https://forms.gle/rxHNdjFDnFGxzf5SA"
          target="_blank"
          rel="noreferrer"
        >
          申し込みフォーム
        </a>
        <a
          class="base-link sponsor-link"
          href="https://docs.google.com/presentation/d/1cgBIP6m8E82oef3p3BUZ7mMBFxnvTeA_t9kSwdnipgs/edit?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          スポンサー資料
        </a>
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
    marginTop: '-90px',
    padding: '120px 0',
    background: '#EEEEEE'
  },
  '.sponsor-root': {
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
      fontSize: '18px',
      lineHeight: '180%'
    },
  },
  '.link-box': {
    display: 'flex',
    gap: '40px'
  },
  '.base-link': {
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '344px',
    width: '100%',
    height: '88px',
    borderRadius: '50px',
    fontWeight: 'bold',
    fontSize: '20px',
    cursor: 'pointer',
  },
  '.contact-link': {
    background: '{color.vue.green}',
    boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.24)',
    color: '{color.white}',
    '&:hover': {
      background: 'linear-gradient(0deg, rgba(255, 255, 255, 0.24), rgba(255, 255, 255, 0.24)), {color.vue.green}',
      transition: '.2s',
    },
  },
  '.sponsor-link': {
    background: '{color.white}',
    color: '{color.vue.blue}',
    border: '2px solid {color.vue.blue}',
    '&:hover': {
      background: 'rgba(53, 73, 94, 0.2)',
      transition: '.2s',
    }
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
  '@media(max-width: 1023px)': {
    'section': {
      padding: '120px 40px',
    },
    '.link-box': {
      flexDirection: 'column'
    },
  },
})
</style>
