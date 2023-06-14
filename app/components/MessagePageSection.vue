<template>
  <VoiceFrame class="message-root">
    <section class="message">
      <div class="message-body">
        <SectionTitle id="message" color="white" title="Message" yamato-title="想い" />
        <div class="text">
          <p>
            Vue Fes Japan は 2018 年に誕生した日本最大級の Vue.js カンファレンスです。
            <br />
            文字通り Fes = お祭りのように Vue.js
            を共に盛り上げ、共に学び、そしてなによりも共に楽しむために誕生しました。
          </p>
          <p>
            昨年 2022 年は長引くコロナ禍においてオンラインでの開催を実現し、650
            名以上の事前登録、10,000 回以上の再生回数を記録し、大変盛り上がりました。特に、Vue 2
            から Vue 3 への移行に関する内容が多かったことが印象的でした。
          </p>
          <p>
            2022 年 1 月、Vue.js は最新バージョンである Vue 3 をデフォルトにしました。その結果、npm
            でのダウンロード数が 200% 以上増加しており、Vue 3
            の利用が加速しています。エコシステムにおいても、2022 年 11 月に Vue 3 へ対応した Nuxt 3
            や Vuetify 3 がリリースされました。
          </p>
          <p>
            こうして Vue 3 の利用が本格化する中、Vue.js の作者 Evan You 氏は次の Vue.js
            に向けた取り組みも開始しています。同氏の開発した Vite が Vue.js
            コミュニティだけに留まらず、他の JavaScript コミュニティへも放たれたのと同様に、Nuxt や
            Volar といったエコシステムにおいても新しい展開を見せようとしています。
          </p>
          <p>
            Vue.js とエコシステムがさらに発展しつつある中、この度 2023
            年はオフラインカンファレンスとしての Vue Fes Japan をリブートすることを決意しました。
            <br />
            ぜひ、一緒にカンファレンスに参加し、リアルでしか味わえない体験を楽しみましょう！
          </p>
        </div>
        <div class="representative">
          <p>
            <span>Vue.js</span>
            <span>日本ユーザーグループ</span>
            <span>代表</span>
            <span>川口 和也</span>
            <span
              >(
              <a href="https://twitter.com/kazu_pon" target="_blank" rel="noreferrer">
                @kazu_pon
              </a>
              )</span
            >
          </p>
        </div>
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
    'p': {
      fontSize: '18px',
      lineHeight: '1.8',
      '& + &': {
        marginTop: '1.8em',
      },
    },
  },
  '.representative': {
    marginTop: '24px',
    textAlign: 'right',
    fontSize: 'calc(18*{fontSize.base})',
    lineHeight: '1.8',
    'span': {
      display: 'inline-block',
    },
    'span + span': {
      marginLeft: '0.5em',
    }
  },
  '@mobile': {
    '.message-body': {
      gridColumn: '2',
      borderRadius: '60px',
    },
    '.text': {
      'p': {
        fontSize: '16px',
      }
    }
  },
})
</style>
