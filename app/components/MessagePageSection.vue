<script setup lang="ts">
import MarkDownText from '~/components/MarkDownText.vue'
</script>

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
          <MarkDownText path="message" />
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
    borderRadius: '60px',
  },
  '.title': {
    textAlign: 'center',
    lineHeight: '1',
  },
  '.text': {
    marginTop: '32px',
    whiteSpace: 'pre-line',
    '::v-deep(p)': {
      fontSize: '18px',
      lineHeight: '1.8',
    },
    '::v-deep(p + p)': {
      marginTop: '1.8em',
    },
  },
  '::v-deep(.representative)': {
    marginTop: '24px',
    textAlign: 'right',
    fontSize: 'calc(18*{fontSize.base})',
    lineHeight: '1.8',
  },
  '@mobile': {
    '.message': {
      padding: '0px 0 80px',
    },
    '.message-body': {
      paddingLeft: '20px',
      paddingRight: '20px',
      padding: '24px 16px 24px',
      borderRadius: '32px',
    },
    '.text': {
      '::v-deep(p)': {
        fontSize: '16px',
      },
    },
    '::v-deep(.representative)': {
      marginTop: '0px',
      fontSize: '16px',
    },
  },
})
</style>
