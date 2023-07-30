<script lang="ts" setup>
import RoundButton from '~/components/button/RoundButton.vue'
import MarkDownText from '~/components/MarkDownText.vue'
</script>

<template>
  <section class="personal-sponsor">
    <!-- 個人スポンサー -->
    <h3 id="personal-sponsor">{{ $t('words.personal_sponsor') }}</h3>
    <MarkDownText path="personal-sponsors-text1" />
    <div class="personal-sponsor-apply">
      <i18n-t keypath="top.sponsors_personal_limit" tag="p" class="personal-sponsor-limit">
        <strong>{{ $t('words.sponsors_personal_deadline_date') }}</strong>
      </i18n-t>
      <!-- 個人スポンサーに応募 -->
      <RoundButton
        href="https://forms.gle/rxHNdjFDnFGxzf5SA"
        target="_blank"
        rel="noreferrer"
        class="personal-sponsor-apply-btn"
      >
        {{ $t('words.apply_personal_sponsor') }}
      </RoundButton>
    </div>
    <div class="personal-sponsors-text2">
      <MarkDownText path="personal-sponsors-text2" />
    </div>
    <img
      width="760"
      height="498"
      :alt="`個人スポンサー特典 1:限定Tシャツ配布 2:優先入場 3:優先席`"
      src="/sponsors/personal-sponsor.png"
      loading="lazy"
      decoding="async"
      class="personal-sponsor-img"
    />
    <div class="personal-sponsor-cap">
      <MarkDownText path="personal-sponsors-caption" />
    </div>
  </section>
</template>

<style lang="ts" scoped>
css({
  '.personal-sponsor': {
    padding: 'calc({space.8} * 4) 0',
    background: '#EEEEEE',
    fontSize: 'calc(18*{fontSize.base})',
    color: '{color.vue.blue}',
    lineHeight: '1.8',
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
    }
  },
})
</style>
