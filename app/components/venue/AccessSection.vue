<script lang="ts" setup>
import RoundButton from '~/components/button/RoundButton.vue'

// デスクトップ表示の画像サイズに合わせる
const imageWidth = 320
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
            alt="Event Hall"
            src="/venue/hall.jpeg"
            :width="imageWidth"
            :height="(imageWidth * 2) / 3"
            decoding="async"
          />
          <img
            class="image image-entrance"
            alt="Entrance Photo"
            src="/venue/entrance.jpg"
            :width="imageWidth"
            :height="(imageWidth * 2) / 3"
            decoding="async"
          />
        </div>
        <div class="route">
          <h3>{{ $t('top.access_place') }}</h3>
          <p>
            {{ $t('top.access_address') }}
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
            {{ $t('top.access_detail_1') }}
            <br />
            {{ $t('top.access_detail_2') }}
            <br />
            <small>
              {{ $t('top.access_detail_3') }}
            </small>
          </p>
        </div>
      </div>
      <RoundButton href="https://goo.gl/maps/TBWRVrd3dthoe98s5" target="_blank">
        {{ $t('top.check_google_map') }}
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
    '--images-gap': 'calc({space.8} * 1.5)',
    display: 'flex',
    flexDirection: 'column',
    gap: '{images.gap}',

    '.image': {
      '--image-width': '100%',
      flexBasis: '{image.width}',
      maxWidth: '{image.width}',
      aspectRatio: '3/2',
      objectFit: 'cover',
    },
    '.image-hall': {
      filter: 'brightness(180%) saturate(120%)',
    },
    '.image-entrance': {
      filter: 'brightness(120%) saturate(150%)',
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
  '@mobile': {
    'section': {
      padding: 'calc({space.8} * 10) 0 calc({space.8} * 8)',
    },
    '.access-root': {
      padding: 'calc({space.8} * 4) calc({space.8} * 2)',
    },
    '.access-content': {
      flexDirection: 'column-reverse',
    },
    '.images': {
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'center',

      '.image': {
        '--image-width': 'calc((100% - {images.gap}) / 2)',
      },
    },
  },
})
</style>
