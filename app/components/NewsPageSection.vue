<template>
  <section class="photos">
    <SectionTitle
      id="news"
      class="photos_title"
      color="vue.blue"
      title="News"
      yamato-title="お知らせ"
    />
    <p>{{ $t('top.news_subtitle1') }}</p>
    <p>{{ $t('top.news_subtitle2') }}</p>
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
        <NuxtLink to="https://photos.app.goo.gl/crd4ftGMSNUPPkjF6" target="_blank"> 受付 </NuxtLink>
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
  '.photos_title': {
    marginBottom: '40px',
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
  '.photos a:hover': {
    textDecoration: 'none',
  },
  '@mobile': {
    'section': {
      padding: '80px 20px 120px',
    },
  },
})
</style>
