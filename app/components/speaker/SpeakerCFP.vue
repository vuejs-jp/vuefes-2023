<script lang="ts" setup>
import RoundButton from '~/components/button/RoundButton.vue'
</script>

<template>
  <div class="speaker-cfp">
    <div class="speaker-cfp-description">
      <p>
        Vue Fes Japan 2023 に登壇してみませんか？<br />
        <br />
        Vueとそのエコシステムについて、あなただけが持つ知見と経験を、日本最大級の Vue.js
        カンファレンスでぜひ日本中に共有してください。<br />
        <br />
        Vue Fes Japan 2023 では、スピーカー発表を広く一般から募集するため、CFP（Call for
        Papers）の仕組みを利用し、ご応募に対して Vue Fes Japan 2023
        実行委員会が選考の上、正式なセッションとして採用します。<br />
        <br />
        30分間の発表となる「セッション」と5分間の「ライトニングトーク（LT）」の2つの発表方式を用意しています。<br />
        <br />
        Vueが大好きでたまらない、そんな皆さんならではのアツい発表をお待ちしています！
      </p>
    </div>
    <div class="speaker-cfp-schedule">
      <h3>募集スケジュール</h3>
      <p class="deadline">応募期限: <em>2022/6/30（木）23:59:59</em>まで</p>
      <p class="apply-button">
        <RoundButton
          href="https://docs.google.com/forms/d/e/1FAIpQLScdrdrV8qOhMrSfExUzt_mYXahyGQGtXZE5G69JkFflunuj-A/viewform"
          target="_blank"
          rel="noreferrer"
          >申し込みフォーム
        </RoundButton>
      </p>
      <p class="twitter-text">
        最新情報は、<a
          class="twitter-link"
          href="https://twitter.com/vuefes"
          target="_blank"
          rel="noreferrer"
          >Vue Fes Japan の Twitter </a
        >をご確認ください。
      </p>
    </div>
  </div>
</template>

<style lang="ts" scoped>
css({
    '.speaker-cfp': {
        display: 'flex',
        flexDirection: 'column',
        gap: '2.5em',
    },
    '.speaker-cfp-description': {
        'p': {
            color: '{color.vue.blue}',
            fontWeight: 500,
            fontSize: '16px',
            lineHeight: '1.8',
            'a': {
                color: '{color.vue.green}',
                textDecoration: 'underline',
                '&:hover': {
                    transition: '.2s',
                },
            },
        },
    },
    '.speaker-cfp-schedule': {
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5em',
        textAlign: 'center',
        'h3': {
            color: '{color.vue.blue}',
            fontWeight: 700,
            fontSize: '32px',
        },
        '.deadline': {
            color: '{color.vue.blue}',
            fontSize: '24px',
            margin: '0 auto',

            'em': {
                fontStyle: 'normal',
                fontWeight: 700,
            }
        },
        '.apply-button': {
            margin: '0 auto',
        },
        '.twitter-text': {
            fontSize: '18px',
            color: '{color.vue.blue}',
            margin: '0 auto',
        },
        '.twitter-link': {
            color: '{color.vue.green}',
            textDecoration: 'underline',

            '&:hover': {
                transition: '.2s',
            },
        },
    },
    '@mobile': {
        '.speaker-cfp-description': {
            'p': {
                fontSize: '18px',
            },
        },
    },
})
</style>
