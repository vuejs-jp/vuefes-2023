<script setup lang="ts">
import SectionTitle from '~/components/SectionTitle.vue'
import MarkDownText from '~/components/MarkDownText.vue'
</script>

<template>
  <div class="event">
    <SectionTitle id="event" color="vue.blue" :title="'Events'" yamato-title="イベント" />
    <div class="explain">
      <MarkDownText path="event" />
    </div>
    <div class="event-menu">
      <div class="event-card">
        <img
          width="690"
          height="388"
          :alt="'リフレッシュメントスペース supported by giftee'"
          :src="'event/refreshment_space.png'"
          decoding="async"
        />
        <div class="title">リフレッシュメントスペース<br />supported by giftee</div>
        <div class="description">
          喉が渇いたらお茶やコーヒーはいかがですか？
          小腹を満たすお菓子もご用意しています。もちろん無料です。
        </div>
      </div>
      <div class="event-card">
        <img
          width="690"
          height="388"
          :alt="'クリエイティブウォール'"
          :src="'event/creative_wall.png'"
          decoding="async"
        />
        <div class="title">クリエイティブウォール</div>
        <div class="description">
          自由に書き込みができるビッグなクリエイティブウォールを会場入口に設置します。自分の名前や、Vue.js
          に対する熱い想いなど、なんでも書き込み OK。記念写真にもピッタリです。
        </div>
      </div>
      <div class="event-card">
        <img
          width="690"
          height="388"
          :alt="'ハンズオン'"
          :src="'event/hands_on.png'"
          decoding="async"
        />
        <div class="title">ハンズオン</div>
        <div class="description">
          一緒に手を動かしながら Vue.js
          アプリケーション開発を体験できるハンズオンを実施します。詳しくは<nuxt-link
            to="/#handson"
            title="ハンズオンについて"
            >ハンズオンについて</nuxt-link
          >をご覧ください。
        </div>
      </div>
      <div class="event-card">
        <img
          width="690"
          height="388"
          :alt="'タトゥースペース'"
          :src="'event/tattoo_space.png'"
          decoding="async"
        />
        <div class="title">タトゥースペース</div>
        <div class="description">
          顔や手に Vue Fes Japan
          特製タトゥーシールを貼り付けて、フェス気分を盛り上げましょう。おなじみの Vue.js や Nuxt
          などのロゴマークをその場ですぐに付けられます。
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="ts" scoped>
css({
  '.event': {
    padding: '40px',
    display: 'grid',
    placeItems: 'center',
    gap: '40px',
  },
  '.explain': {
    maxWidth: '760px',
    display: 'flex',
    justifyContent: 'center',
    '::v-deep(p)': {
      textAlign: 'left',
    }
  },
  '.event-menu': {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '2em',
    justifyContent: 'center',
  },
  '.event-card': {
    '--img-size': '475px',
    maxWidth: '475px',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.6em',
    '.title': {
      fontWeight: 'bold',
      fontFamily: 'Yu Gothic',
      fontSize: '22px',
      whiteSpace: 'pre-wrap',
      lineHeight: '1.2',
    },
    '.description': {
      fontSize: '16px',
      '::v-deep(a)': {
        textDecoration: 'underline',
        '&:hover': {
          opacity: 0.4,
          transition: '.2s',
        },
      },
    }
  },
  '@tablet': {
    '.explain': {
      maxWidth: '730px',
    },
    '.event-card': {
      '--img-size': '368px',
      maxWidth: '368px',
    },
  },
  '@mobile': {
    '.event': {
      padding: '80px 20px',
    },
    '.explain': {
      maxWidth: '690px',
    },
    '.event-card': {
      '--img-size': '690px',
      maxWidth: '690px',
    },
  },
});
</style>
