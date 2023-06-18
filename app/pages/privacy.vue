<script setup lang="ts">
import RoundButton from '~/components/button/RoundButton.vue'
import NavPageSection from '~/components/nav/NavPageSection.vue'
import FooterPageSection from '~/components/FooterPageSection.vue'
import MarkDownText from '~/components/MarkDownText.vue'
import PageTitle from '~/components/PageTitle.vue'
import { conferenceTitle, linkUrl, ogPrivacyDescription } from '~/utils/constants'
import { generalOg, twitterOg } from '~/utils/og.constants'

useHead({
  title: `プライバシーポリシー | ${conferenceTitle}`,
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
        <RoundButton to="/" outline> トップに戻る </RoundButton>
      </div>
    </div>
    <FooterPageSection />
  </main>
</template>

<style lang="ts" scoped>
css({
  '.privacy-root': {
    padding: '80px 11.53%',
    color: '{color.vue.blue}',
    background: '{color.white}',
    '::v-deep(.title)': {
      marginBottom: '80px',
    },
    '::v-deep(p)': {
      fontWeight: 500,
      fontSize: '18px',
      marginBottom: '1.5em',
    },
    '::v-deep(h2)': {
        fontWeight: 700,
        fontSize: '32px',
        marginTop: '2em',
        marginBottom: '.7em',
    },
   '::v-deep(ul)': {
      paddingLeft: '48px',
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
        paddingLeft: '48px',
        margin: 0,
       },

    },
    '::v-deep(li),::v-deep(p)': {
      'a': {
        color: '{color.vue.green}',
      },
    },
    '::v-deep(ol)': {
      paddingLeft: '48px',
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
    marginTop: '80px'
  },
  // '@media(max-width: 767px)': {
  //   '.explain': {
  //     'ul': {
  //       'ul': {
  //         paddingLeft: '18px',
  //       },
  //     },
  //   },
  // },
})
</style>
