<script setup lang="ts">
const { locale } = useI18n()
const docPath = computed(() => {
  return `/${locale.value}/top/message`
})
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
        <ContentDoc :path="docPath" v-slot="{ doc }">
          <ContentRenderer class="text" :value="doc" />
        </ContentDoc>
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
