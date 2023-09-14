<script setup lang="ts">
import RoundButton from '~/components/button/RoundButton.vue'
import NavPageSection from '~/components/NavPageSection.vue'
import FooterPageSection from '~/components/FooterPageSection.vue'
import PageTitle from '~/components/PageTitle.vue'
import { conferenceTitle, linkUrl, ogCoCDescription } from '~/utils/constants'
import { generalOg, twitterOg } from '~/utils/og.constants'

useHead({
  titleTemplate: (titleChunk) => `行動規範 | ${conferenceTitle}`,
  meta: [
    ...generalOg({
      title: `行動規範 | ${conferenceTitle}`,
      description: ogCoCDescription,
      url: `${linkUrl}code-of-conduct`,
    }),
    ...twitterOg({
      title: `行動規範 | ${conferenceTitle}`,
      description: ogCoCDescription,
      url: `${linkUrl}code-of-conduct`,
    }),
  ],
})
</script>

<template>
  <main>
    <NavPageSection />
    <div class="coc-root">
      <PageTitle
        id="coc"
        color="vue.blue"
        title="Code of Conduct"
        :yamato-title="$t('words.codeofconduct')"
      />

      <MarkDownText path="code-of-conduct" class="explain" />

      <div class="back">
        <RoundButton to="../" outline> トップに戻る </RoundButton>
      </div>
    </div>
    <FooterPageSection />
  </main>
</template>

<style lang="ts" scoped>
css({
  '.coc-root': {
    padding: 'calc({space.8} * 10) 11.53%',
    color: '{color.vue.blue}',
    background: '{color.white}',
    '::v-deep(a)': {
      color: '{color.vue.green}',
    },
    '::v-deep(.title)': {
      marginBottom: 'calc({space.8} * 10)',
    },
    '::v-deep(p)': {
      fontWeight: 500,
      fontSize: '18px',
      lineHeight: '1.8',
      marginBottom: '1.5em',
    },
    '::v-deep(h2)': {
      fontWeight: 700,
      fontSize: '32px',
      marginTop: '2em',
      marginBottom: '.7em',
    },
  },
  '.back': {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 'calc({space.8} * 10)'
  },
  '@mobile': {
    '.coc-root': {
      padding: 'calc({space.8} * 10) calc({space.8} * 3)',
      '::v-deep(.title)': {
        marginBottom: 'calc({space.8} * 6)',
      },
      '::v-deep(h2)': {
        fontSize: '20px',
      },
      '::v-deep(p), ::v-deep(ol), ::v-deep(ul)': {
        fontSize: '16px',
      },
    },
  }
})
</style>
