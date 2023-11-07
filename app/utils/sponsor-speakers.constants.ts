import { SponsorSpeaker } from '~/types/app'

export const sponsorSpeakers: SponsorSpeaker[] = [
  {
    id: 'cloudsign',
    type: 'domestic',
    session: {
      title: '走りながらエンジンを交換する ~ 大規模プロダクトを成長させつつVue3にするには ~',
      titleKey: 'sessions.cloudsign',
      track: 'all',
      time: '11:05 - 11:25',
      type: 'main',
      archives: {
        slide: 'https://speakerdeck.com/bengo4com/20231028',
      },
    },
    profile: [
      {
        id: 'takahiro-shinoda',
        image: 'sponsor-speakers/takahiro_shinoda.jpg',
        title: '弁護士ドットコム株式会社\nクラウドサイン事業本部 ProductEngineering部\nエンジニア',
        titleKey: 'speakers.takahiro_shinoda.position',
        name: '篠田 貴大 / Takahiro Shinoda',
        nameKey: 'speakers.takahiro_shinoda.nameOnly',
        twitterId: 'tttttt_621_s',
      },
    ],
    sponsorId: 'cloudsign',
  },
  {
    id: 'unique-vision',
    type: 'domestic',
    session: {
      title: '社内UIコンポーネントライブラリがエンジニアチームにもたらした本当の価値',
      titleKey: 'sessions.unique_vision',
      track: 'all',
      time: '11:25 - 11:45',
      type: 'main',
      archives: {
        slide: '',
      },
    },
    profile: [
      {
        id: 'kazumasa-yamamoto',
        image: 'sponsor-speakers/kazumasa_yamamoto.png',
        title: 'ユニークビジョン株式会社\nエンジニア',
        titleKey: 'speakers.kazumasa_yamamoto.position',
        name: '山本 一将 / Kazumasa Yamamoto',
        nameKey: 'speakers.kazumasa_yamamoto.nameOnly',
        twitterId: 'kyamamoto9120',
      },
    ],
    sponsorId: 'unique-vision',
  },
  {
    id: 'link-and-motivation-group',
    type: 'domestic',
    session: {
      title: 'Vue.jsを活用して開発リードタイムが1/3になった話',
      titleKey: 'sessions.link_and_motivation_group',
      track: 'all',
      time: '11:45 - 12:05',
      type: 'main',
      archives: {
        slide: 'https://speakerdeck.com/lmi/vuefes2023-link-and-motivation',
      },
    },
    profile: [
      {
        id: 'yoshihide-unoki',
        image: 'sponsor-speakers/yoshihide_unoki.png',
        title:
          '株式会社リンクアンドモチベーション\nプロダクトデザイン室 Developer Productivityユニット イネーブリンググループ',
        titleKey: 'speakers.yoshihide_unoki.position',
        name: '鵜木 義秀 / Yoshihide Unoki',
        nameKey: 'speakers.yoshihide_unoki.nameOnly',
        twitterId: 'nokki_y',
      },
    ],
    sponsorId: 'link-and-motivation-group',
  },
  {
    id: 'medpeer',
    type: 'domestic',
    session: {
      title: 'Vue2のEOLまで二ヶ月ですが進捗どうですか？',
      titleKey: 'sessions.medpeer',
      track: 'medpeer',
      time: '12:30 - 12:50',
      type: 'main',
      archives: {
        slide: 'https://speakerdeck.com/kzhrk/vue-2-no-eol-made-2-keyue-desugajin-bu-doudesuka',
      },
    },
    profile: [
      {
        id: 'kazuhiro-kobayashi',
        image: 'sponsor-speakers/kazuhiro_kobayashi.jpg',
        title:
          'メドピア株式会社\nプライマリケアプラットフォーム事業部 サービス開発部 フロント・モバイルグループ\nフロントエンドテックリード',
        titleKey: 'speakers.kazuhiro_kobayashi.position',
        name: '小林 和弘 / Kazuhiro Kobayashi',
        nameKey: 'speakers.kazuhiro_kobayashi.nameOnly',
        twitterId: 'kzhrk0430',
        githubId: 'kzhrk',
      },
    ],
    sponsorId: 'medpeer',
  },
  {
    id: 'coconala',
    type: 'domestic',
    session: {
      title: 'OpenAI APIをNuxt.jsに入れてみた的な話',
      titleKey: 'sessions.coconala',
      track: 'vue',
      time: '12:30 - 12:40',
      type: 'main',
    },
    profile: [
      {
        id: 'yuta-ichihara',
        image: 'sponsor-speakers/yuta_ichihara.png',
        title: '株式会社ココナラ\nフロントエンドエンジニア',
        titleKey: 'speakers.yuta_ichihara.position',
        name: '市原 雄太 / Yuta Ichihara',
        nameKey: 'speakers.yuta_ichihara.nameOnly',
      },
    ],
    sponsorId: 'coconala',
  },
  {
    id: 'stores',
    type: 'domestic',
    session: {
      title: '「Youはなぜコントリビュータに？」論より動くもの.fm 出張版',
      titleKey: 'sessions.stores',
      track: 'cloudsign',
      time: '12:25 - 12:45',
      type: 'main',
    },
    profile: [
      {
        id: 'daisuke-fujimura',
        image: 'sponsor-speakers/daisuke_fujimura.png',
        title: 'STORES株式会社 CTO',
        titleKey: 'speakers.daisuke_fujimura.position',
        name: '藤村 大介',
        nameKey: 'speakers.daisuke_fujimura.name',
        twitterId: 'ffu_',
      },
      {
        id: 'wattanx',
        image: 'speakers/wattanx.png',
        title: 'STORES 株式会社\nソフトウェアエンジニア',
        titleKey: 'speakers.wattanx',
        name: 'wattanx / ワッタン',
        twitterId: 'pontaxx',
        githubId: 'wattanx',
      },
    ],
    sponsorId: 'stores',
  },
  {
    id: 'mntsq',
    type: 'domestic',
    session: {
      title: 'Vue.jsプロジェクト設計のベストプラクティスを求めて',
      titleKey: 'sessions.mntsq',
      track: 'cloudsign',
      time: '12:55 - 13:15',
      type: 'main',
      archives: {
        slide:
          'https://speakerdeck.com/cyber_snufkin/28-vue-fes-tokyo-vue-dot-js-puroziekutoshe-ji-nobesutopurakuteisuwoqiu-mete',
      },
    },
    profile: [
      {
        id: 'hiroshi-azumi',
        image: 'sponsor-speakers/hiroshi_azumi.jpg',
        title: 'MNTSQ株式会社 エンジニア（フロントエンド担当）',
        titleKey: 'speakers.hiroshi_azumi.position',
        name: '安積 洋 / Hiroshi Azumi',
        nameKey: 'speakers.hiroshi_azumi.nameOnly',
        twitterId: 'cyber_snufkin',
      },
    ],
    sponsorId: 'mntsq',
  },
  {
    id: 'hacomono',
    type: 'domestic',
    session: {
      title: 'Nuxt3ではじめるテスト導入戦略と初手',
      titleKey: 'sessions.hacomono',
      track: 'm3',
      time: '12:20 - 12:40',
      type: 'main',
      archives: {
        slide: 'https://speakerdeck.com/hacomono/nuxt-3dehazimerutesutodao-ru-zhan-lue-tochu-shou',
      },
    },
    profile: [
      {
        id: 'saimon-nozaki',
        image: 'sponsor-speakers/saimon-nozaki.jpg',
        title: '株式会社 hacomono プロダクト開発本部 POS グループ',
        titleKey: 'speakers.saimon_nozaki.position',
        name: '野崎 才門 / Saimon Nozaki',
        nameKey: 'speakers.saimon_nozaki.nameOnly',
        twitterId: 'serum_vision',
      },
    ],
    sponsorId: 'hacomono',
  },
  {
    id: 'gmo-internet-group',
    type: 'domestic',
    session: {
      title: '「defineCustomElement」を活用したサービス共通のUIコンポーネントライブラリ',
      titleKey: 'sessions.gmo_internet_group',
      track: 'all',
      time: '',
      type: 'lt',
    },
    profile: [
      {
        id: 'shohei-ogata',
        image: 'speakers/shohei-ogata.png',
        title: 'GMOペパボ株式会社 EC事業部 エンジニア',
        titleKey: 'speakers.shohei_ogata.position',
        name: '尾形 将平 / Shohei Ogata',
        nameKey: 'speakers.shohei_ogata.name',
        githubId: 'piyoppi',
      },
    ],
    sponsorId: 'gmo-internet-group',
  },
]
