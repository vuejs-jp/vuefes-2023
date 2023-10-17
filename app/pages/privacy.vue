<script setup lang="ts">
import RoundButton from '~/components/button/RoundButton.vue'
import NavPageSection from '~/components/NavPageSection.vue'
import FooterPageSection from '~/components/FooterPageSection.vue'
import MarkDownText from '~/components/MarkDownText.vue'
import PageTitle from '~/components/PageTitle.vue'
import { conferenceTitle, linkUrl, ogPrivacyDescription } from '~/utils/constants'
import { generalOg, twitterOg } from '~/utils/og.constants'

useHead({
  titleTemplate: (titleChunk) => `プライバシーポリシー | ${conferenceTitle}`,
  meta: [
    ...generalOg({
      title: `プライバシーポリシー | ${conferenceTitle}`,
      description: ogPrivacyDescription,
      url: `${linkUrl}privacy`,
    }),
    ...twitterOg({
      title: `プライバシーポリシー | ${conferenceTitle}`,
      description: ogPrivacyDescription,
      url: `${linkUrl}privacy`,
    }),
  ],
})
</script>

<template>
  <main>
    <NavPageSection />
    <div class="privacy-root">
      <PageTitle
        id="privacy"
        color="vue.blue"
        title="Privacy Policy"
        :yamato-title="$t('words.privacypolicy')"
      />

      <MarkDownText path="privacy" class="explain" />

      <div class="back">
        <RoundButton to="../" outline> トップに戻る </RoundButton>
      </div>
    </div>
    <FooterPageSection />
  </main>
</template>

<style lang="ts" scoped>
css({
  '.privacy-root': {
    '--list-margin-left': 'calc({space.8} * 6)',

    padding: 'calc({space.8} * 10) 11.53%',
    color: '{color.vue.blue}',
    background: '{color.white}',
    '::v-deep(.title)': {
      marginBottom: 'calc({space.8} * 10)',
    },
    '::v-deep(p)': {
      fontWeight: 500,
      fontSize: '18px',
      lineHeight: '1.8',
      marginBottom: '1.5em',
    },
    '::v-deep(a)': {
      color: '{color.vue.green}',
      textDecoration: 'underline',
      '&:hover': {
        opacity: 0.4,
        transition: '.2s',
      },
    },
    '::v-deep(h2)': {
      fontWeight: 700,
      fontSize: '32px',
      marginTop: 'calc({space.8} * 6)',
      marginBottom: 'calc({space.8} * 2)',
    },
    '::v-deep(ul)': {
      paddingLeft: '{list.margin.left}',
      margin: '0 0 2em',
      fontWeight: 500,
      fontSize: '18px',
      width: '100%',
      listStyleType: 'disc',
      '&:first-child': {
        marginTop: '.5em',
      },
      '&:last-child': {
        marginBottom: '.5em',
      },
      'li': {
        marginBottom: '.5em',
      },
      'ul': {
        paddingLeft: '{list.margin.left}',
        margin: 0,
      },
    },
    '::v-deep(li),::v-deep(p)': {
      'a': {
        color: '{color.vue.green}',
      },
    },
    '::v-deep(ol)': {
      paddingLeft: '{list.margin.left}',
      listStyleType: 'decimal',
      fontSize: '18px',
      marginBottom: '.5em',
      'li': {
        marginBottom: '.5em',
      },
    },
  },
  '.back': {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 'calc({space.8} * 10)',
    'a': {
      textDecoration: 'none',
    },
  },
  '@mobile': {
    '.privacy-root': {
      '--list-margin-left': '28px',
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
  },
})
</style>
