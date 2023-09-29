import { SponsorSpeaker } from '~/types/app'

export const sponsorSpeakers: SponsorSpeaker[] = [
  {
    id: 'cloudsign',
    type: 'domestic',
    session: {
      title: '走りながらエンジンを交換する ~ 大規模プロダクトを成長させつつVue3にするには ~',
      track: 'all',
      time: '11:05 - 11:25',
      type: 'main',
    },
    profile: [
      {
        id: 'takahiro-shinoda',
        image: 'sponsor-speakers/takahiro_shinoda.jpg',
        title: '弁護士ドットコム株式会社\nクラウドサイン事業本部 ProductEngineering部\nエンジニア',
        name: '篠田 貴大',
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
      track: 'all',
      time: '11:25 - 11:45',
      type: 'main',
    },
    profile: [
      {
        id: 'kazumasa-yamamoto',
        image: 'sponsor-speakers/kazumasa_yamamoto.png',
        title: 'ユニークビジョン株式会社\nエンジニア',
        name: '山本 一将',
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
      track: 'all',
      time: '11:45 - 12:05',
      type: 'main',
    },
    profile: [
      {
        id: 'yoshihide-unoki',
        image: 'sponsor-speakers/yoshihide_unoki.png',
        title:
          '株式会社リンクアンドモチベーション\nプロダクトデザイン室 Developer Productivityユニット イネーブリンググループ',
        name: '鵜木 義秀',
        twitterId: 'nokki_y',
      },
    ],
    sponsorId: 'link-and-motivation-group',
  },
  {
    id: 'medpeer',
    type: 'domestic',
    session: {
      title: 'Vue2 の EOL まで二ヶ月ですが進捗どうですか？',
      track: 'medpeer',
      time: '12:30 - 12:50',
      type: 'main',
    },
    profile: [
      {
        id: 'kazuhiro-kobayashi',
        image: 'sponsor-speakers/kazuhiro_kobayashi.jpg',
        title:
          'メドピア株式会社\nプライマリケアプラットフォーム事業部 サービス開発部 フロント・モバイルグループ\nフロントエンドテックリード',
        name: '小林 和弘',
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
      track: 'vue',
      time: '12:30 - 12:40',
      type: 'main',
    },
    profile: [
      {
        id: 'yuta-ichihara',
        image: 'sponsor-speakers/yuta_ichihara.png',
        title: '株式会社ココナラ\nフロントエンドエンジニア',
        name: '市原 雄太',
      },
    ],
    sponsorId: 'coconala',
  },
  {
    id: 'stores',
    type: 'domestic',
    session: {
      title: '「Youはなぜコントリビュータに？」論より動くもの.fm 出張版',
      track: 'cloudsign',
      time: '12:25 - 12:45',
      type: 'main',
    },
    profile: [
      {
        id: 'daisuke-fujimura',
        image: 'sponsor-speakers/daisuke_fujimura.png',
        title: 'STORES 株式会社\nCTO',
        name: '藤村 大介',
        twitterId: 'ffu_',
      },
      {
        id: 'wattanx',
        image: 'speakers/wattanx.png',
        title: 'STORES 株式会社\nソフトウェアエンジニア',
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
      track: 'cloudsign',
      time: '12:55 - 13:15',
      type: 'main',
    },
    profile: [
      {
        id: 'hiroshi-azumi',
        image: 'sponsor-speakers/hiroshi_azumi.jpg',
        title: 'MNTSQ株式会社\nエンジニア（フロントエンド担当）',
        name: '安積 洋',
        twitterId: 'cyber_snufkin',
      },
    ],
    sponsorId: 'mntsq',
  },
  {
    id: 'hacomono',
    type: 'domestic',
    session: {
      title: 'Nuxt 3 ではじめるテスト導入戦略と初手',
      track: 'm3',
      time: '12:20 - 12:40',
      type: 'main',
    },
    profile: [
      {
        id: 'saimon-nozaki',
        image: 'sponsor-speakers/saimon-nozaki.jpg',
        title: '株式会社 hacomono\nプロダクト開発本部 POS グループ',
        name: '野崎 才門',
        twitterId: 'serum_vision',
      },
    ],
    sponsorId: 'hacomono',
  },
]
