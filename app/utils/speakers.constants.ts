import { Speaker } from '~/types/app'

export const speakers: Speaker[] = [
  // Evan
  {
    id: 'yyx990803',
    type: 'evan',
    session: {
      title: 'キーノート',
      track: 'all',
      time: '10:25 - 11:05',
      type: 'main',
    },
    profile: {
      image: 'speakers/evan.jpg',
      title: 'Creator of Vue / Vite',
      name: 'Evan You',
      twitterId: 'youyuxi',
      githubId: 'yyx990803',
    },
  },

  // 海外スピーカー
  {
    id: 'atinux',
    type: 'foreign',
    session: {
      title: 'Nuxt to the Edge',
      track: 'cloudsign',
      time: '13:30 - 14:00',
      type: 'main',
    },
    profile: {
      image: 'speakers/sebastien.jpg',
      title: 'NuxtLabs CEO',
      name: 'Sebastien Chopin',
      twitterId: 'Atinux',
      githubId: 'Atinux',
    },
  },
  {
    id: 'patak-dev',
    type: 'foreign',
    session: {
      title: 'Vite: Stories of collaboration',
      track: 'cloudsign',
      time: '15:45 - 16:15',
      type: 'main',
    },
    profile: {
      image: 'speakers/matias.jpg',
      title: 'Vite Core Team Member',
      name: 'Matias Capeletto',
      twitterId: 'patak_dev',
      githubId: 'patak-dev',
    },
  },
  {
    id: 'antfu',
    type: 'foreign',
    session: {
      title: "Anthony's Roads to Open Source - The Set Theory",
      track: 'cloudsign',
      time: '15:00 - 15:30',
      type: 'main',
    },
    profile: {
      image: 'speakers/antfu.png',
      title: 'Vue/Vite/Nuxt Core Team Member',
      name: 'Anthony Fu',
      twitterId: 'antfu7',
      githubId: 'antfu',
    },
  },
  {
    id: 'daniel-roe',
    type: 'foreign',
    session: {
      title: 'A New Nuxt',
      track: 'cloudsign',
      time: '14:15 - 14:45',
      type: 'main',
    },
    profile: {
      image: 'speakers/daniel_roe.jpg',
      title: 'Nuxt Core Team Member',
      name: 'Daniel Roe',
      twitterId: 'danielcroe',
      githubId: 'danielroe',
      mastodonUrl: 'https://mastodon.roe.dev/@daniel',
    },
  },

  // 国内スピーカー
  {
    id: 'sapphi-red',
    type: 'domestic',
    session: {
      title: 'マルチスレッドフレンドリーなJavaScriptを求めて',
      track: 'medpeer',
      time: '16:30 - 17:00',
      type: 'main',
    },
    profile: {
      image: 'speakers/sapphi_red.png',
      title: 'Vite Core Team Member\n東工大デジタル創作同好会traP所属',
      name: '翠 / sapphi-red',
      twitterId: 'sapphi_red',
      githubId: 'sapphi-red',
      mastodonUrl: 'https://m.webtoo.ls/@sapphi_red',
    },
  },
  {
    id: 'ota-meshi',
    type: 'domestic',
    session: {
      title: 'eslint-plugin-vue の現状と今後',
      track: 'medpeer',
      time: '17:15 - 17:45',
      type: 'main',
    },
    profile: {
      image: 'speakers/ota-meshi.jpg',
      title: 'フューチャー株式会社\nTechnology Innovation Group シニアアーキテクト',
      name: '太田 洋介 / ota-meshi',
      twitterId: 'omoteota',
      githubId: 'ota-meshi',
    },
  },
  {
    id: 'wattanx',
    type: 'domestic',
    session: {
      title: 'Demystifying Nuxt Bridge〜あなたがまだ見ぬ可能性とその活用法〜',
      track: 'medpeer',
      time: '15:00 - 15:30',
      type: 'main',
    },
    profile: {
      image: 'speakers/wattanx.png',
      title: 'STORES 株式会社\nソフトウェアエンジニア',
      name: 'wattanx / ワッタン',
      twitterId: 'pontaxx',
      githubId: 'wattanx',
    },
  },
  {
    id: 'sorami',
    type: 'domestic',
    session: {
      title: 'Vue.jsと3D可視化 - 産総研のOSS「AIST 3DDB Client」を例に',
      track: 'm3',
      time: '16:30 - 17:00',
      type: 'main',
    },
    profile: {
      image: 'speakers/sorami.png',
      title: '株式会社MIERUNE',
      name: 'sorami / ソラミ',
      twitterId: 'sorami',
      githubId: 'sorami',
    },
  },
  {
    id: 'mizdra',
    type: 'domestic',
    session: {
      title: 'Vue Language Server から生まれた Volar.js と、それが秘める可能性',
      track: 'm3',
      time: '15:00 - 15:30',
      type: 'main',
    },
    profile: {
      image: 'speakers/mizdra.png',
      title: '株式会社はてな\nWebアプリケーションエンジニア フロントエンドエキスパート',
      name: 'mizdra / ミズドラ',
      twitterId: 'mizdra',
      githubId: 'mizdra',
    },
  },
  {
    id: 'nozomu-ikuta',
    type: 'domestic',
    session: {
      title: 'Deep Dive to UnJS and Nuxt 3',
      track: 'medpeer',
      time: '15:45 - 16:15',
      type: 'main',
    },
    profile: {
      image: 'speakers/nozomu_ikuta.png',
      title: 'グローバル・ブレイン株式会社\nUnJS Team Member / Vue.js-JP Core Staff',
      name: 'Nozomu Ikuta',
      twitterId: 'NozomuIkuta',
      githubId: 'NozomuIkuta',
    },
  },
  {
    id: 'yamanoku',
    type: 'domestic',
    session: {
      title: '画面遷移から考える Nuxt アプリケーションをアクセシブルにする方法',
      track: 'm3',
      time: '13:30 - 14:00',
      type: 'main',
    },
    profile: {
      image: 'speakers/yamanoku.png',
      title:
        '株式会社クラウドワークス\nプロダクト本部プロダクト開発部プラットフォーム開発3グループ',
      name: 'やまのく',
      twitterId: 'yamanoku',
      githubId: 'yamanoku',
      mastodonUrl: 'https://mstdn.jp/@yamanoku',
    },
  },
  {
    id: 'harlan-zw',
    type: 'foreign',
    session: {
      title: 'Getting your head around your <head>',
      track: 'cloudsign',
      time: '16:30 - 17:00',
      type: 'main',
    },
    profile: {
      image: 'speakers/harlan_zw.jpg',
      title: 'Open-Source Developer',
      name: 'Harlan Wilton',
      twitterId: 'harlan_zw',
      githubId: 'harlan-zw',
    },
  },
  {
    id: 'chocodogmagic',
    type: 'domestic',
    session: {
      title: 'Nuxt 3でJamstackテンプレートを作るときの考え方',
      track: 'm3',
      time: '14:15 - 14:45',
      type: 'main',
    },
    profile: {
      image: 'speakers/chocodogmagic.jpg',
      title: '株式会社TAMTO フロントエンドエンジニア',
      name: 'まぁし（知念）',
      twitterId: 'chocodogmagic',
    },
  },
  {
    id: 'keima',
    type: 'domestic',
    session: {
      title: 'STUDIOの作り方 2023 ver.',
      track: 'm3',
      time: '17:15 - 17:45',
      type: 'main',
    },
    profile: {
      image: 'speakers/keima.jpg',
      title: 'STUDIO Inc. CPO / Founder',
      name: '甲斐 啓真 / Keima',
      twitterId: 'keima_studio',
      githubId: 'keimakai',
    },
  },
  {
    id: 'baseballyama',
    type: 'domestic',
    session: {
      title: '18営業日で350コンポーネント規模のVueアプリにデザインシステムを導入する方法',
      track: 'medpeer',
      time: '14:15 - 14:45',
      type: 'main',
    },
    profile: {
      image: 'speakers/baseballyama.jpeg',
      title: '株式会社フライル ソフトウェアエンジニア\nSvelteコアチームメンバー',
      name: '山下 裕一朗',
      twitterId: 'baseballyama_',
      githubId: 'baseballyama',
    },
  },

  // LT
  {
    id: 'kira-puka',
    type: 'domestic',
    session: {
      title: 'Nuxt3のモジュール開発は意外と簡単？ Module Author Guideをのぞいてみよう',
      track: 'medpeer',
      time: '13:30 - 14:00',
      type: 'lt',
    },
    profile: {
      image: 'speakers/kira_puka.png',
      title: '合同会社めもらば 代表',
      name: 'きらぷか',
      twitterId: 'kira_puka',
      githubId: 'memory-lovers',
    },
  },
  {
    id: 'northprint',
    type: 'domestic',
    session: {
      title: 'WebGISとVue.jsの親和性について',
      track: 'medpeer',
      time: '13:30 - 14:00',
      type: 'lt',
    },
    profile: {
      image: 'speakers/northprint.png',
      title: '株式会社MIERUNE',
      name: '楢山哲弘',
      twitterId: 'northprint',
      githubId: 'northprint',
    },
  },
  {
    id: 't0yohei',
    type: 'domestic',
    session: {
      title: 'Vue を使って Grid System を実装した話',
      track: 'medpeer',
      time: '13:30 - 14:00',
      type: 'lt',
    },
    profile: {
      image: 'speakers/t0yohei.jpg',
      title: '株式会社クラウドワークス\nweb エンジニア',
      name: 't0yohei / トヨヘイ',
      twitterId: 't0yohei',
      githubId: 't0yohei',
    },
  },
  {
    id: 'yud0uhu',
    type: 'domestic',
    session: {
      title: 'Vue3/Electronで自作したマークダウンエディタをVue3/Tauriにリプレイスした話',
      track: 'medpeer',
      time: '13:30 - 14:00',
      type: 'lt',
    },
    profile: {
      image: 'speakers/yud0uhu.jpg',
      title: '合同会社DMM.com 動画配信事業部所属\nフロントエンドエンジニア',
      name: '0yu / オユ',
      twitterId: 'yud0uhu',
      githubId: 'yud0uhu',
    },
  },
  {
    id: '53able',
    type: 'domestic',
    session: {
      title: 'SOLID 原則に基づくSFC 実装',
      track: 'medpeer',
      time: '15:45 - 16:05',
      type: 'lt',
    },
    profile: {
      image: 'speakers/53able.png',
      title:
        '株式会社クラウドワークス\nプロダクト本部 プロダクト開発部\nプラットフォーム開発3グループ',
      name: '53able / ゴー',
      twitterId: '53able',
      githubId: '53able',
    },
  },
  {
    id: 'fuqda',
    type: 'domestic',
    session: {
      title: 'Composition API時代のPub/Subパターンでの状態管理',
      track: 'medpeer',
      time: '15:45 - 16:05',
      type: 'lt',
    },
    profile: {
      image: 'speakers/fuqda.png',
      title: 'ペイトナー株式会社\nフロントエンドエンジニア',
      name: 'fuqda / フクダ',
      twitterId: 'fuqda90',
      githubId: 'Shigeyuki-fukuda',
    },
  },
  {
    id: 'mew-ton',
    type: 'domestic',
    session: {
      title:
        'Nuxt2 から 3 へマイグレーションする方法考えてたら、マイクロフロントエンドのフレームワークができた話',
      track: 'm3',
      time: '15:45 - 16:05',
      type: 'lt',
    },
    profile: {
      image: 'speakers/mew-ton.png',
      title:
        '株式会社 hacomono フロントエンドテックリード\n基盤グループ Enabling チーム\nVRChat フロントエンドエンジニア集会主催',
      name: 'みゅーとん',
      twitterId: '_mew_ton',
      githubId: 'mew-ton',
    },
  },
  {
    id: 'hieu',
    type: 'domestic',
    session: {
      title: 'Exploring the Power of Error Handling in Vue JS',
      track: 'm3',
      time: '15:45 - 16:15',
      type: 'lt',
    },
    profile: {
      image: 'speakers/hieu.png',
      title: '株式会社ブレイン フロントエンドエンジニア',
      name: 'Hieu / グエンゴックヒエウ',
      twitterId: 'hieune_151',
      githubId: 'hieu-brain',
    },
  },
  {
    id: 'hitoki-wakugawa',
    type: 'domestic',
    session: {
      title: 'フルスクラッチECの基盤であるNuxt2を3に移行し、開発の効率性とパフォーマンスを高める',
      track: 'm3',
      time: '15:45 - 16:15',
      type: 'lt',
    },
    profile: {
      image: 'speakers/hitoki-wakugawa.jpg',
      title: '株式会社TENTIAL\nテクノロジー本部EC プラットフォーム部 マネージャー',
      name: '湧川 仁貴',
      twitterId: '_wakkn',
      githubId: 'waku-waku',
    },
  },
]

export const sessionSpeakers = speakers.filter((speaker) => speaker.session.type !== 'lt')

export const ltSpeakers = speakers.filter((speaker) => speaker.session.type === 'lt')
