<script lang="ts" setup>
import RoundButton from '~/components/button/RoundButton.vue'
</script>

<template>
  <section>
    <div class="access-root">
      <SectionTitle
        id="access"
        color="vue.blue"
        title="Access"
        :yamato-title="$t('top.access_subtitle')"
      />
      <div class="access-content">
        <div class="images">
          <img
            class="image image-hall"
            alt="イベントホールの写真"
            src="/venue/hall.jpeg"
            decoding="async"
          />
          <img
            class="image image-entrance"
            alt="イベント入り口の写真"
            src="/venue/entrance.jpg"
            decoding="async"
          />
        </div>
        <div class="route">
          <h3>会場: 中野セントラルパーク カンファレンス</h3>
          <p>
            東京都中野区中野 4-10-2 中野セントラルパークサウス 1F、B1F
            <br />
            <a
              href="https://www.nakano-centralpark.jp/conference/"
              target="_blank"
              rel="noreferrer"
            >
              https://www.nakano-centralpark.jp/conference/
            </a>
          </p>
          <p>
            JR 中央線・総武線、東京メトロ東西線
            <br />
            「中野」駅北口より徒歩5分
            <br />
            <small>※JR新宿駅から中野駅まで中央線で1駅（約4分）です。</small>
          </p>
        </div>
      </div>
      <RoundButton href="https://goo.gl/maps/TBWRVrd3dthoe98s5" target="_blank">
        Google マップで見る
      </RoundButton>
    </div>
  </section>
  <VoiceAudioSpectrum />
</template>

<style lang="ts" scoped>
css({
  'section': {
    padding: '120px 0',
    background: '{color.gradient.lightblue}',
    display: 'grid',
    gridTemplateColumns: '1fr min(1280px, calc(100% - 40px)) 1fr',
  },
  '.access-root': {
    gridColumn: '2',
    color: '{color.vue.blue}',
    background: '{color.white}',
    padding: 'calc({space.8} * 10) 11.53%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 'calc({space.8} * 5)',
  },
  '.access-content': {
    display: 'flex',
    gap: 'calc({space.8} * 3)',
  },
  '.images': {
    display: 'flex',
    flexDirection: 'column',
    gap: 'calc({space.8} * 1.5)',

    '.image': {
      flexBasis: '100%',
      aspectRatio: '3/2',
      objectFit: 'cover',
    },
  },
  '.route': {
    flexGrow: '1',

    'h3': {
      fontWeight: 700,
      fontSize: 'calc(24*{fontSize.base})',
    },
    'p': {
      fontSize: 'calc(18*{fontSize.base})',
      marginTop: 'calc({space.8} * 3)',
    },
    'small': {
      fontSize: 'calc(12*{fontSize.base})',
    },
    'a': {
      textDecoration: 'underline',
    },
  },
})
</style>
