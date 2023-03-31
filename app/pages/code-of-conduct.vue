<script setup lang="ts">
import NavPageSection from '~/components/NavPageSection.vue'
import FooterPageSection from '~/components/FooterPageSection.vue'
import PageTitle from '~/components/PageTitle.vue'
import { conferenceTitle, linkUrl, ogCoCDescription } from '~/utils/constants'
import { generalOg, twitterOg } from '~/utils/og.constants'

useHead({
  title: `行動規範 | ${conferenceTitle}`,
  meta: [
    ...generalOg({
      title: `行動規範 | ${conferenceTitle}`,
      description: ogCoCDescription,
      url: `${linkUrl}code-of-conduct`,
    }),
    ...twitterOg({
      title: `行動規範 | ${conferenceTitle}`,
      description: ogCoCDescription,
      url: `${linkUrl}code-of-conduct`,
    }),
  ],
})
</script>

<template>
  <main>
    <NavPageSection />
    <div class="coc-root">
      <PageTitle id="coc" title="Code of Conduct" yamato-title="行動規範" />
      <div class="explain">
        <p>
          Vue Fes Japan 2023
          のすべての参加者、スピーカー、スポンサー、スタッフは、オープンかつ友好的な環境を育むため、以下の行動規範に同意していただく必要があります。主催者である
          Vue.js
          日本ユーザーグループは、この規範の実施を遵守します。誰にとっても安全な環境を守るために、すべての参加者のご協力をお願いいたします。
        </p>

        <h2>差別、ハラスメント行為の禁止</h2>
        <p>
          年齢、外見、身体の大きさ、性別、性的指向、障害の有無、人種、民族、国籍、宗教、学歴、社会的地位、技術選択、経験の度合いに関わらず、すべての参加者が安全に参加できる環境の提供に努め、いかなる差別も容認しません。
        </p>
        <p>
          性的な表現、不適切な身体接触、暴言、挑発的または侮蔑的な表現、意図的な威力行為、脅迫、ストーカー行為、つきまとい、写真撮影や録音などによる嫌がらせ、トークやその他のイベントに対して繰り返して意図的に中断させる行為といったハラスメント行為を一切容認しません。
        </p>
        <p>
          これらの差別、ハラスメント行為は会話、セッション、ライブ配信上のチャット、メール、SNS
          など、Vue Fes Japan 2023
          に関連するあらゆる場面、場所に不適切です。意図して行ったかどうかに関わらず、Vue.js
          日本ユーザーグループの判断でこれらの行為を止めるように求められた場合、すみやかに従わなければなりません。指示に従わない場合、Vue
          Fes Japan 2023 内での行動を制限、または一切の参加を拒否する場合があります。
        </p>

        <h2>いやな思いをしてしまったら</h2>
        <p>
          もしあなたが差別やハラスメント行為を受けたと感じた場合や、誰かがハラスメント行為を受けていることに気づいた場合、またはその懸念がある場合は、すぐに<nuxt-link
            :to="{ path: '/', hash: '#form' }"
            class="form-link"
          >
            お問い合わせフォーム </nuxt-link
          >からご連絡ください。
        </p>
        <p>
          Vue.js
          日本ユーザーグループは安全な環境を守るため、警察への連絡を含め、その他のあらゆる支援を行います。私達にとってあなたの参加が何よりも大切なことであり、常に差別、ハラスメント行為を受けた人の味方であり続けます。
        </p>

        <h2>何かお困りですか？</h2>
        <p>
          Vue.js 日本ユーザーグループへのお問い合わせは、<nuxt-link
            :to="{ path: '/', hash: '#form' }"
            class="form-link"
          >
            お問い合わせフォーム </nuxt-link
          >よりお願いいたします。
        </p>
      </div>
    </div>
    <FooterPageSection />
  </main>
</template>

<style lang="ts" scoped>
css({
  '.coc-root': {
    padding: '120px 11.53% 80px',
    color: '{color.vue.blue}',
    background: '{color.white}',
    'p': {
      color: '{color.vue.blue}',
      fontWeight: 500,
      fontSize: '18px',
    },
  },
  '.explain': {
    display: 'grid',
    placeItems: 'flex-start',
    marginTop: '32px',
    gap: '32px',
    'h2': {
      color: '{color.vue.blue}',
      fontWeight: 700,
      fontSize: '24px',
    },
    'p': {
      color: '{color.vue.blue}',
      fontWeight: 500,
      fontSize: '18px',
    },
  },
  '.form-link': {
    color: '{color.vue.green}',
  },
})
</style>