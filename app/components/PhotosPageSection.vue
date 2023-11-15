<script setup lang="ts">
import SectionTitle from '~/components/SectionTitle.vue'
import TimetableView from '~/components/timetable/TimetableView.vue'
</script>

<template>
  <section class="photos">
    <p>
      Vue Fes Japan 2023 にご参加いただいたみなさん、ありがとうございました。
    </p>
    <p>
      当日撮影された写真を CC0 ライセンスにて公開しますので、ブログや SNS などにご自由にお使いください。
    </p>
    <ul>
      <li>
        <NuxtLink to="https://photos.app.goo.gl/fKbJAQRuzGBA8GAz7" target="_blank">
          クラウドサイントラック
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="https://photos.app.goo.gl/Sw3UK3fxzRTJieX39" target="_blank">
          メドピアトラック
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="https://photos.app.goo.gl/RK76fpsSfmfKVPjL9" target="_blank">
          エムスリーやっていきトラック
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="https://photos.app.goo.gl/6KKD8TqasLDSa98Q7" target="_blank">
          Vueトラック
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="https://photos.app.goo.gl/crd4ftGMSNUPPkjF6" target="_blank">
          受付
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="https://photos.app.goo.gl/QsxLYZq4hQVd6oa59" target="_blank">
          Vue Fes Store
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="https://photos.app.goo.gl/ArsmgEEh2G4QdQr29" target="_blank">
          クリエイティブウォール
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="https://photos.app.goo.gl/Zv1dahbu7Fcstgvz5" target="_blank">
          リフレッシュメントスペース
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="https://photos.app.goo.gl/RqKxcjP7TcbiziwW8" target="_blank">
          スポンサーブース
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="https://photos.app.goo.gl/XTdtY6kwyspjTGu16" target="_blank">
          アフターパーティー
        </NuxtLink>
      </li>
    </ul>
  </section>
  <VoiceAudioSpectrum />
</template>

<style lang="ts" scoped>
css({
  'section': {
    padding: '120px 20px 120px',
  },
  '.photos': {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '1080px',
    margin: '0 auto',
    fontSize: 'calc(16*{fontSize.base})',
  },
  '.photos p': {
    margin: '0 0 16px',
  },
  '.photos li': {
    listStyle: 'disc',
    listStylePosition: 'inside',
  },
  '.photos a': {
    color: '{color.primary.500}',
    textDecoration: 'underline',
  },
  '@mobile': {
    'section': {
      padding: '80px 20px 120px',
    },
  },
})
</style>
