<script setup lang="ts">
import NavPageSection from '~/components/NavPageSection.vue'
import FooterPageSection from '~/components/FooterPageSection.vue'
import PageTitle from '~/components/PageTitle.vue'
import LinkButton from '~/components/forms/LinkButton.vue'
import { conferenceTitle, linkUrl, ogPrivacyDescription } from '~/utils/constants'
import { generalOg, twitterOg } from '~/utils/og.constants'

useHead({
  title: `プライバシーポリシー | ${conferenceTitle}`,
  meta: [
    ...generalOg({
      title: `プライバシーポリシー | ${conferenceTitle}`,
      description: ogPrivacyDescription,
      url: `${linkUrl}privacy`,
    }),
    ...twitterOg({
      title: `プライバシーポリシー | ${conferenceTitle}`,
      description: ogPrivacyDescription,
      url: `${linkUrl}privacy`,
    }),
  ],
})
</script>

<template>
  <main>
    <NavPageSection />
    <div class="privacy-root">
      <PageTitle
        id="privacy"
        color="vue.blue"
        title="Privacy Policy"
        yamato-title="プライバシーポリシー"
      />
      <div class="explain">
        <p style="margin-bottom: 30px">
          Vue Fes Japan 2023（以下、
          カンファレンス）では、カンファレンスへの参加者およびスポンサー（以下、ユーザー）の個人情報保護の重要性について認識しています。
        </p>
        <p style="margin-bottom: 60px">
          個人情報の保護に関する法律を遵守できるよう、以下のプライバシーポリシー（以下、本プライバシーポリシー）に従い、適切な取扱い、保護そして継続的改善に努めます。
        </p>

        <h2 style="margin-bottom: 24px">個人情報の定義</h2>
        <p style="margin-bottom: 60px">
          本プライバシーポリシーにおいて、「個人情報」とは、個人情報保護法にいう、生存する個人に関する情報であり、当該情報に含まれる氏名、生年月日その他の記述等により特定の個人を識別することができるもの（他の情報と容易に照合することができ、それにより特定の個人を識別することができることとなるものを含みます）、もしくは個人識別符号が含まれる情報を意味するものとします。
        </p>

        <h2 style="margin-bottom: 25px">個人情報の収集</h2>
        <p style="margin-bottom: 30px">
          当カンファレンスは、個人情報の入手を適法かつ公正な手段によって行うものとし、ユーザーの意思に反する不正な入手を行わないものとします。
        </p>
        <p style="margin-bottom: 30px">
          当カンファレンスでは、ユーザーの以下の個人情報を取り扱います。
        </p>
        <ul>
          <li class="disc" style="margin-bottom: 5px">
            メールアドレス
            <ul>
              <li class="disc">配送が伴うサービスのお申し込みフォームで入力されたお名前</li>
              <li class="disc">本ウェブサイトで入力されたメールアドレス</li>
              <li class="disc">スポンサーお申し込みフォームで入力されたメールアドレス</li>
              <li class="disc">CFP お申し込みフォームで入力されたメールアドレス</li>
            </ul>
          </li>
          <li class="disc" style="margin-bottom: 5px">
            名前
            <ul>
              <li class="disc">スポンサーお申し込みフォームで入力されたご担当者名</li>
              <li class="disc">CFP お申し込みフォームで入力されたお名前</li>
            </ul>
          </li>
          <li class="disc" style="margin-bottom: 60px">
            住所、電話番号
            <ul>
              <li class="disc">配送が伴うサービスのお申し込みフォームで入力された住所、電話番号</li>
            </ul>
          </li>
        </ul>

        <h2 style="margin-bottom: 25px">個人情報の利用目的</h2>
        <p style="margin-bottom: 25px">
          当カンファレンスは、ユーザーから収集した個人情報を、以下の目的で利用するものとします。
        </p>
        <ul style="margin-bottom: 60px">
          <li class="decimal">当カンファレンスの更新情報、関連情報をご提供する場合</li>
          <li class="decimal">当カンファレンスに関するご案内、お問い合わせ等へ対応する場合</li>
          <li class="decimal">
            ユーザーに対して当カンファレンスに対する意見、感想のご提供を求める場合
          </li>
          <li class="decimal">
            当カンファレンス各規約等に違反する行為又はその恐れのある行為を行ったユーザーに対して注意又は警告を行う場合
          </li>
          <li class="decimal">
            当カンファレンスに対する債務を有するユーザーに同債務の履行を要求する場合
          </li>
          <li class="decimal">当カンファレンスに関する規約等の変更などを通知する場合</li>
        </ul>

        <h2 style="margin-bottom: 25px">個人情報利用目的の変更</h2>
        <p style="margin-bottom: 60px">
          当カンファレンスは、個人情報の利用目的を、関連性を有すると合理的に認められる範囲内において変更することがあり、変更した場合には当カンファレンスに関わる皆様に通知又は公表します。本プライバシーポリシーの変更は、本プライバシーポリシーを本ウェブサイト上に掲載した時点で効力を生じるものとします。
        </p>

        <h2 style="margin-bottom: 25px">個人情報の利用期限</h2>
        <p style="margin-bottom: 60px">
          当カンファレンスは、ユーザーから収集した個人情報を開催月の2023年11月30日まで利用するものとします。その利用期限が過ぎましたら、速やかに個人情報を完全に削除します。
        </p>

        <h2 style="margin-bottom: 25px">個人情報の安全管理</h2>
        <p style="margin-bottom: 60px">
          当カンファレンスは、個人情報の紛失、破壊、改ざん及び漏洩などのリスクに対して、個人情報の安全管理が図られるよう、Vue.js
          日本ユーザーグループおよびその関係者に対し、必要かつ適切な監督を行います。
        </p>

        <h2 style="margin-bottom: 25px">個人情報の委託</h2>
        <p style="margin-bottom: 60px">
          当カンファレンスは、業務運営上、お客様により良いサービスを提供するために、業務の一部を外部に委託することがあります。その際に業務委託先に個人情報を預けることがあります。この場合、十分な個人情報の保護の水準を満たしている委託先を選定し、個人情報の保護に関する委託契約を締結すると共に、委託先に対する管理・監督を実施いたします。
        </p>

        <h2 style="margin-bottom: 25px">個人情報の第三者提供</h2>
        <p style="margin-bottom: 30px">
          当カンファレンスは、収集した個人情報を個人情報保護法に基づき業務委託先以外の第三者に対して開示又は提供しないものとします。ただし、以下に該当する場合は、この限りではありません。
        </p>
        <ul style="margin-bottom: 60px">
          <li class="disc">法令により開示が認められている場合</li>
          <li class="disc">法令により開示を求められた場合</li>
          <li class="disc">
            人の生命、身体又は財産の保護のために必要がある場合であって、本人の同意を得ることが困難である場合
          </li>
          <li class="disc">警察、検察、裁判所等公的機関等によって開示を求められた場合</li>
        </ul>

        <h2 style="margin-bottom: 25px">個人情報等の最新性、正確性の維持</h2>
        <p style="margin-bottom: 60px">
          当カンファレンスは、利用目的の達成に必要な範囲内において、ユーザーの個人情報等を正確かつ最新の内容に保つよう努めるものとします。
        </p>

        <h2 style="margin-bottom: 25px">個人情報の照会、訂正、削除等</h2>
        <p style="margin-bottom: 60px">
          当カンファレンスは、ユーザーより当該ユーザーの個人情報の照会、訂正、追加、削除、利用の停止又は消去を求められた場合、本人確認を行うものとします。なお、当カンファレンスは、ユーザー本人による照会等であると当カンファレンスが判断した場合、合理的な期間内に同照会等に対応するものとします。
        </p>

        <h2 style="margin-bottom: 25px">Cookie または類似技術の利用と目的</h2>
        <p style="margin-bottom: 60px">
          当カンファレンスのウェブサイトは、Cookie
          及び類似技術を利用します。これらの技術で、本ウェブサイトの利便性の向上および利用状況を分析するために、Cookie
          を利用して情報を収集しています。
        </p>

        <h2 style="margin-bottom: 25px">使用する Third Party Cookie</h2>
        <p style="margin-bottom: 30px">
          当カンファレンスでは、本ウェブサイトの利用状況や利便性を向上させるために、Third Party
          が提供するサービスを利用しており、その Third Party によって Cookie
          が設定されることがあります。当カンファレンスで利用している Third Party
          のサービスは以下のとおりです。
        </p>
        <ul style="margin-bottom: 30px">
          <li class="disc">Google Analytics</li>
          <li class="disc">Google フォーム</li>
          <li class="disc">Google プレゼンテーション</li>
          <li class="disc">Fortee</li>
        </ul>
        <p style="margin-bottom: 30px">
          Third Party それぞれの Cookie
          の利用により取得されたデータは、各サービスの運営会社が定めるプライバシーポリシーに従って取得、管理されます。
        </p>
        <p style="margin-bottom: 30px">
          当該運営会社のプライバシーポリシーや Cookie に関する説明は、以下をご参照ください。
        </p>
        <ul style="margin-bottom: 60px">
          <li class="disc">
            Google 社の
            <a
              class="policy-link"
              target="_blank"
              rel="noreferrer"
              href="https://policies.google.com/privacy?hl=ja"
              >プライバシーポリシー</a
            >
          </li>
          <li class="disc">
            Fortee 社の
            <a
              class="policy-link"
              target="_blank"
              rel="noreferrer"
              href="https://fortee.jp/site/privacy"
              >プライバシーポリシー</a
            >
          </li>
        </ul>

        <h2 style="margin-bottom: 25px">Cookie の削除又は無効化</h2>
        <p style="margin-bottom: 25px">
          ほとんどのウェブブラウザでは自動的に Cookie
          を受信するよう初期設定されていますが、ユーザー自身で Cookie を拒否したり、Cookie
          が送信された際に警告が表示されたりするように設定変更できます。Cookie
          の管理にはいくつもの方法があります。
        </p>
        <p style="margin-bottom: 30px">
          ウェブブラウザ設定の調整、変更に関する詳細は、お使いのウェブブラウザのヘルプ画面等をご覧ください。なお、ユーザーが当カンファレンスのウェブサイトで使用する
          Cookie
          を無効化すると、本ウェブサイトの特定箇所にアクセスできなかったり、本ウェブサイトの全部又は一部が利用できなくなったりする等、本ウェブサイトご利用中の動作に影響を及ぼす可能性があります。予めご了承ください。
        </p>
        <p style="margin-bottom: 60px">
          本ウェブサイト上における Cookie
          の保存期間は、ユーザーが本ウェブサイトに最後に訪問した日から最長で 2 年間です。
        </p>

        <h2 style="margin-bottom: 25px">継続的改善</h2>
        <p style="margin-bottom: 60px">
          当カンファレンスでは、個人情報の取扱いに関する運用状況を適宜見直し、継続的な改善に努めるものとし、必要に応じて、本プライバシーポリシーを変更することがあります。
        </p>

        <h2 style="margin-bottom: 25px">お問い合わせ</h2>
        <p style="margin-bottom: 60px">
          開示等のお申出、ご意見、ご質問、苦情のお申出その他個人情報の取扱いに関するお問い合わせは、メールにて
          <a
            class="email-link"
            target="_blank"
            rel="noreferrer"
            href="mailto:vuefes+privacy@gmail.com"
            >vuefes+privacy@gmail.com</a
          >
          にお問い合わせください。
        </p>

        <h2 style="margin-bottom: 25px">附則</h2>
        <p style="margin-bottom: 60px">
          当カンファレンスは、収集した個人情報を個人情報保護法に基づき業務委託先以外の第三者に対して開示又は提供しないものとします。ただし、以下に該当する場合は、この限りではありません。
        </p>
        <ul>
          <li class="disc">2023年4月13日 制定・施行</li>
        </ul>
      </div>

      <div class="back">
        <LinkButton url="/">トップに戻る</LinkButton>
      </div>
    </div>
    <FooterPageSection />
  </main>
</template>

<style lang="ts" scoped>
css({
  '.privacy-root': {
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
    margin: '80px 0',
    'h2': {
      color: '{color.vue.blue}',
      fontWeight: 700,
      fontSize: '32px',
    },
    'p': {
      color: '{color.vue.blue}',
      fontWeight: 500,
      fontSize: '18px',
    },
    'ul': {
      paddingLeft: '48px',
      margin: 0,
      fontWeight: 500,
      fontSize: '18px',
      width: '100%',
      '&:first-child': {
        marginTop: '.5em',
      },
      '&:last-child': {
        marginBottom: '.5em',
      },
      'li': {
        marginBottom: '.5em',
      },
      'ul': {
        paddingLeft: '48px',
        margin: 0,
      },
    },
  },
  '.disc': {
    listStyleType: 'disc',
  },
  '.decimal': {
    listStyleType: 'decimal',
  },
  '.policy-link, .email-link': {
    color: '{color.vue.green}',
  },
  '.back': {
    display: 'grid',
    placeItems: 'center',
  },
  '@media(max-width: 767px)': {
    '.explain': {
      'ul': {
        'ul': {
          paddingLeft: '18px',
        },
      },
    },
  },
})
</style>
