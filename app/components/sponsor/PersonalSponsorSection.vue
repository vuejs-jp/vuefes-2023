<script lang="ts" setup>
import RoundButton from '~/components/button/RoundButton.vue'
import SponsorMerits from '~/components/sponsor/SponsorMerits.vue'
import MarkDownText from '~/components/MarkDownText.vue'
import { ticketUrl } from '~/utils/constants'
</script>

<template>
  <section class="personal-sponsor">
    <!-- 個人スポンサー -->
    <h3 id="personal-sponsor">{{ $t('words.personal_sponsor') }}</h3>
    <MarkDownText path="personal-sponsors-text1" />
    <SponsorMerits />
    <div class="personal-sponsor-cap">
      <MarkDownText path="personal-sponsors-caption" />
    </div>
    <div class="personal-sponsor-apply">
      <!--
      <i18n-t keypath="top.sponsors_personal_limit" tag="p" class="personal-sponsor-limit" scope="global">
        <strong>{{ $t('words.sponsors_personal_deadline_date') }}</strong>
      </i18n-t>
      -->
      <!-- チケットを購入 -->
      <RoundButton
        :href="ticketUrl"
        target="_blank"
        rel="noreferrer"
        class="personal-sponsor-apply-btn"
      >
        {{ $t('words.apply_personal_sponsor') }}
      </RoundButton>
    </div>
  </section>
</template>

<style lang="ts" scoped>
css({
  '.personal-sponsor': {
    padding: 'calc({space.8} * 4) 0',
    background: '#fff',
    fontSize: 'calc(18*{fontSize.base})',
    color: '{color.vue.blue}',
    lineHeight: '1.8',
    display: 'grid',
    gap: 'calc({space.8} * 3)',
  },
  'h3': {
    fontSize: 'calc(32*{fontSize.base})',
    fontWeight: 'bold',
    marginBottom: 'calc({space.8} * 4)',
    textAlign: 'center',
  },
  '.personal-sponsor-limit': {
    fontSize: 'calc(24*{fontSize.base})',
    marginTop: 'calc({space.8} * 6)',
    textAlign: 'center',
  },
  '.personal-sponsor-apply': {
    textAlign: 'center',
  },
  '.personal-sponsor-apply-btn': {
    margin: 'calc({space.8} *  5) 0',
  },
  '.personal-sponsor-img': {
    display: 'block',
    width: '100%',
    height: 'auto',
    maxWidth: '760px',
    margin: 'calc({space.8} * 6) auto calc({space.8} * 4)',
  },
  '.personal-sponsors-text2': {
    ':deep(a)': {
      color: '{color.vue.green}',
      textDecoration: 'underline',
    },
  },
  '.personal-sponsor-cap': {
    ':deep(li)': {
      textIndent: '-1em',
      paddingLeft: '1em',
    },
  },
  '@mobile': {
    '.personal-sponsor': {
      padding: 'calc({space.8} * 2) 0',
    },
    'h3': {
      fontSize: 'calc(24*{fontSize.base})',
      marginBottom: 'calc({space.8} * 0)',
    },
    '::v-deep(p)': {
      fontSize: 'calc(16*{fontSize.base})',
    },
    '.personal-sponsor-apply-btn': {
      margin: '0',
    },
  },
})
</style>
