<template>
  <VoiceFrame class="message-root">
    <section class="message">
      <div class="message-body">
        <SectionTitle
          id="message"
          color="white"
          title="Message"
          :yamato-title="$t('top.message_subtitle')"
        />
        <div class="text">
          <p>{{ $t('top.message_text1') }}</p>
          <p>{{ $t('top.message_text2') }}</p>
          <p>{{ $t('top.message_text3') }}</p>
          <p>{{ $t('top.message_text4') }}</p>
          <p>{{ $t('top.message_text5') }}</p>
        </div>
        <div class="representative">
          <p>
            <span>Vue.js</span>
            <span>{{ $t('top.message_from_1') }}</span>
            <span>{{ $t('top.message_from_2') }}</span>
            <span>{{ $t('top.message_from_3') }}</span>
            <span
              >(
              <a href="https://twitter.com/kazu_pon" target="_blank" rel="noreferrer">
                @kazu_pon
              </a>
              )</span
            >
          </p>
        </div>
      </div>
    </section>
  </VoiceFrame>
  <VoiceAudioSpectrum />
</template>

<style lang="ts" scoped>
css({
  '.message-root': {
    background: '{color.vue.blue}',
  },
  '.message': {
    padding: '40px 0 120px',
    display: 'grid',
    gridTemplateColumns: '1fr min(988px, calc(100% - 40px)) 1fr',
  },
  '.message-body': {
    padding: '68px 11.53% 72px',
    gridColumn: '2',
    color: '{color.white}',
    background: 'rgba(255, 255, 255, 0.05)',
    borderRadius: '40px',
  },
  '.title': {
    textAlign: 'center',
    lineHeight: '1',
  },
  '.title-main': {
    fontSize: 'calc(40*{fontSize.base})',
    fontWeight: 'bold',
    lineHeight: '1',
  },
  '.title-sub': {
    textAlign: 'center',
    fontSize: 'calc(20*{fontSize.base})',
    lineHeight: '1',
    marginTop: '18px',
    display: 'grid',
    gridTemplateColumns: '96px max-content 96px',
    justifyContent: 'center',
    placeItems: 'center',
    columnGap: '16px',
    '&::before, &::after': {
      content: '""',
      display: 'inline-block',
      background: '{color.white}',
      width: '96px',
      height: '1px',
    },
  },
  '.text': {
    marginTop: '32px',
    whiteSpace: 'pre-line',
    'p': {
      fontSize: '18px',
      lineHeight: '1.8',
      '& + &': {
        marginTop: '1.8em',
      },
    },
  },
  '.representative': {
    marginTop: '24px',
    textAlign: 'right',
    fontSize: 'calc(18*{fontSize.base})',
    lineHeight: '1.8',
    'span': {
      display: 'inline-block',
    },
    'span + span': {
      marginLeft: '0.5em',
    }
  },
  '@media(min-width: 768px)': {
    '.message-body': {
      borderRadius: '60px',
    },
    'p': {
      fontSize: '16px',
    }
  },
})
</style>
