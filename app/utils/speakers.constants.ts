import { Speaker } from '~/types/app'

export const speakers: Speaker[] = [
  // Evan
  {
    id: 'yyx990803',
    type: 'evan',
    session: {
      title: 'Keynote / キーノート',
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
      titleKey: 'sessions.sapphi_red',
      track: 'medpeer',
      time: '16:30 - 17:00',
      type: 'main',
      archives: {
        slide: 'https://vue-fes-japan-2023-multithread-slide.sapphi.red/1',
      },
    },
    profile: {
      image: 'speakers/sapphi_red.png',
      title: 'Vite Core Team Member\n東工大デジタル創作同好会traP所属',
      titleKey: 'speakers.sapphi_red',
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
      title: 'eslint-plugin-vueの現状と今後',
      titleKey: 'sessions.ota_meshi',
      track: 'medpeer',
      time: '17:15 - 17:45',
      type: 'main',
      archives: {
        slide: 'https://ota-meshi.github.io/vue-fes-japan-2023-slide/1',
      },
    },
    profile: {
      image: 'speakers/ota-meshi.jpg',
      title: 'フューチャー株式会社\nTechnology Innovation Group シニアアーキテクト',
      titleKey: 'speakers.ota_meshi',
      name: '太田 洋介 / ota-meshi',
      twitterId: 'omoteota',
      githubId: 'ota-meshi',
    },
  },
  {
    id: 'wattanx',
    type: 'domestic',
    session: {
      title: 'Demystifying Nuxt Bridge 〜 あなたがまだ見ぬ可能性とその活用法 〜',
      titleKey: 'sessions.wattanx',
      track: 'medpeer',
      time: '15:00 - 15:30',
      type: 'main',
      archives: {
        slide: 'https://speakerdeck.com/wattanx/demystifying-nuxt-bridge',
      },
    },
    profile: {
      image: 'speakers/wattanx.png',
      title: 'STORES株式会社 ソフトウェアエンジニア',
      titleKey: 'speakers.wattanx',
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
      titleKey: 'sessions.sorami',
      track: 'm3',
      time: '16:30 - 17:00',
      type: 'main',
      archives: {
        slide: 'https://speakerdeck.com/sorami/vue-fes-japan-2023',
      },
    },
    profile: {
      image: 'speakers/sorami.png',
      title: '株式会社MIERUNE',
      titleKey: 'sponsors.mierune',
      name: 'sorami / ソラミ',
      twitterId: 'sorami',
      githubId: 'sorami',
    },
  },
  {
    id: 'mizdra',
    type: 'domestic',
    session: {
      title: 'Vue Language Serverから生まれたVolar.jsと、それが秘める可能性',
      titleKey: 'sessions.mizdra',
      track: 'm3',
      time: '15:00 - 15:30',
      type: 'main',
      archives: {
        slide:
          'https://speakerdeck.com/mizdra/vue-language-server-karasheng-mareta-volar-dot-js-to-soregami-meruke-neng-xing',
      },
    },
    profile: {
      image: 'speakers/mizdra.png',
      title: '株式会社はてな\nWebアプリケーションエンジニア フロントエンドエキスパート',
      titleKey: 'speakers.mizdra',
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
      archives: {
        slide: 'https://speakerdeck.com/nozomuikuta/deep-dive-to-unjs-and-nuxt-3',
      },
    },
    profile: {
      image: 'speakers/nozomu_ikuta.png',
      title: 'グローバル・ブレイン株式会社\nUnJS Team Member / Vue.js-JP Core Staff',
      titleKey: 'speakers.nozomu_ikuta',
      name: 'Nozomu Ikuta',
      twitterId: 'NozomuIkuta',
      githubId: 'NozomuIkuta',
    },
  },
  {
    id: 'yamanoku',
    type: 'domestic',
    session: {
      title: '画面遷移から考えるNuxtアプリケーションをアクセシブルにする方法',
      titleKey: 'sessions.yamanoku',
      track: 'm3',
      time: '13:30 - 14:00',
      type: 'main',
      archives: {
        slide: 'https://yamanoku.net/vuefes-japan-2023/ja/',
      },
    },
    profile: {
      image: 'speakers/yamanoku.png',
      title: '株式会社クラウドワークス プロダクト本部プロダクト開発部プラットフォーム開発3グループ',
      titleKey: 'speakers.yamanoku',
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
      titleKey: 'sessions.chocodogmagic',
      track: 'm3',
      time: '14:15 - 14:45',
      type: 'main',
      archives: {
        slide: 'https://speakerdeck.com/chinen/vue-fes-japan-2023',
      },
    },
    profile: {
      image: 'speakers/chocodogmagic.jpg',
      title: '株式会社TAMTO フロントエンドエンジニア',
      titleKey: 'speakers.chocodogmagic',
      name: 'まぁし（知念）',
      twitterId: 'chocodogmagic',
    },
  },
  {
    id: 'keima',
    type: 'domestic',
    session: {
      title: 'STUDIOの作り方 2023 ver.',
      titleKey: 'sessions.keima',
      track: 'm3',
      time: '17:15 - 17:45',
      type: 'main',
      archives: {
        slide: 'https://docs.google.com/presentation/d/1sVPisJofs18G8WUitn4l53s-mXFLRTs2Q4F0hqFqS5A/edit#slide=id.p',
      },
    },
    profile: {
      image: 'speakers/keima.jpg',
      title: 'STUDIO, Inc. CPO / Founder',
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
      titleKey: 'sessions.baseballyama',
      track: 'medpeer',
      time: '14:15 - 14:45',
      type: 'main',
      archives: {
        slide:
          'https://speakerdeck.com/baseballyama/vue-fes-2023-18ying-ye-ri-de350konponentogui-mo-novueapurinidezainsisutemuwodao-ru-surufang-fa',
      },
    },
    profile: {
      image: 'speakers/baseballyama.jpeg',
      title: '株式会社フライル ソフトウェアエンジニア\nSvelteコアチームメンバー',
      titleKey: 'speakers.baseballyama.position',
      name: '山下 裕一朗 / Yuichiro Yamashita',
      nameKey: 'speakers.baseballyama.name',
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
      titleKey: 'sessions.kira_puka',
      track: 'medpeer',
      time: '13:30 - 14:00',
      type: 'lt',
      archives: {
        slide: 'https://www.docswell.com/s/kira_puka/ZRXM6E-2023-10-25-064822',
      },
    },
    profile: {
      image: 'speakers/kira_puka.png',
      title: '合同会社めもらば 代表',
      titleKey: 'speakers.kira_puka',
      name: 'きらぷか / kira-puka',
      twitterId: 'kira_puka',
      githubId: 'memory-lovers',
    },
  },
  {
    id: 'northprint',
    type: 'domestic',
    session: {
      title: 'WebGISとVue.jsの親和性について',
      titleKey: 'sessions.tetsuhiro_narayama',
      track: 'medpeer',
      time: '13:30 - 14:00',
      type: 'lt',
      archives: {
        slide:
          'https://docs.google.com/presentation/d/1KwLPyFLE0J3W9BwFmROHtgG0qQbGdYCnbEXjuJTYpJ4/edit#slide=id.g24fad336807_0_0',
      },
    },
    profile: {
      image: 'speakers/northprint.png',
      title: '株式会社MIERUNE',
      titleKey: 'sponsors.mierune',
      name: '楢山 哲弘',
      nameKey: 'speakers.tetsuhiro_narayama',
      twitterId: 'northprint',
      githubId: 'northprint',
    },
  },
  {
    id: 't0yohei',
    type: 'domestic',
    session: {
      title: 'Vueを使ってGrid Systemを実装した話',
      titleKey: 'sessions.t0yohei',
      track: 'medpeer',
      time: '13:30 - 14:00',
      type: 'lt',
      archives: {
        slide: 'https://speakerdeck.com/t0yohei/vue-woshi-tute-grid-system-woshi-zhuang-sitahua',
      },
    },
    profile: {
      image: 'speakers/t0yohei.jpg',
      title: '株式会社クラウドワークス web エンジニア',
      titleKey: 'speakers.t0yohei',
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
      titleKey: 'sessions.yud0uhu',
      track: 'medpeer',
      time: '13:30 - 14:00',
      type: 'lt',
      archives: {
        slide: 'https://speakerdeck.com/yud0uhu/tauriniripureisusitahua',
      },
    },
    profile: {
      image: 'speakers/yud0uhu.jpg',
      title: '合同会社DMM.com 動画配信事業部所属 フロントエンドエンジニア',
      titleKey: 'speakers.yud0uhu',
      name: '0yu / オユ',
      twitterId: 'yud0uhu',
      githubId: 'yud0uhu',
    },
  },
  {
    id: '53able',
    type: 'domestic',
    session: {
      title: 'SOLID原則に基づくSFC実装',
      titleKey: 'sessions._53able',
      track: 'medpeer',
      time: '15:45 - 16:15',
      type: 'lt',
      archives: {
        slide: 'https://slides-one.vercel.app/1?clicks=1',
      },
    },
    profile: {
      image: 'speakers/53able.png',
      title:
        '株式会社クラウドワークス プロダクト本部 プロダクト開発部 プラットフォーム開発3グループ',
      titleKey: 'speakers._53able',
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
      titleKey: 'sessions.fuqda',
      track: 'm3',
      time: '15:45 - 16:15',
      type: 'lt',
      archives: {
        slide: 'https://speakerdeck.com/fuqda/subpatandenozhuang-tai-guan-li',
      },
    },
    profile: {
      image: 'speakers/fuqda.png',
      title: 'ペイトナー株式会社 フロントエンドエンジニア',
      titleKey: 'speakers.fuqda',
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
      titleKey: 'sessions.mew_ton',
      track: 'm3',
      time: '12:45 - 13:15',
      type: 'lt',
      archives: {
        slide: 'https://tome.app/mewton-8cb/vue-fes-2023-clnjmh8ez0044l77dwardvtga',
      },
    },
    profile: {
      image: 'speakers/mew-ton.png',
      title:
        '株式会社hacomono フロントエンドテックリード 基盤グループ Enabling チーム VRChat フロントエンドエンジニア集会主催',
      titleKey: 'speakers.mew_ton',
      name: 'みゅーとん / mew-ton',
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
      titleKey: 'speakers.hieu',
      name: 'Hieu / グエンゴックヒエウ',
      twitterId: 'hieune_151',
      githubId: 'hieu-brain',
    },
  },
  {
    id: 'hitoki-wakugawa',
    type: 'domestic',
    session: {
      title: 'フルスクラッチECの基盤であるNuxt 2を3に移行し、開発の効率性とパフォーマンスを高める',
      titleKey: 'sessions.hitoki_wakugawa',
      track: 'm3',
      time: '15:45 - 16:15',
      type: 'lt',
      archives: {
        slide:
          'https://speakerdeck.com/wakkn/hurusukuratutiecnoji-pan-dearunuxt-2wo3niyi-xing-si-kai-fa-noxiao-lu-xing-topahuomansuwogao-meru',
      },
    },
    profile: {
      image: 'speakers/hitoki-wakugawa.jpg',
      title: '株式会社TENTIAL テクノロジー本部EC プラットフォーム部 マネージャー',
      titleKey: 'speakers.hitoki_wakugawa.position',
      name: '湧川 仁貴 / Hitoki Wakugawa',
      nameKey: 'speakers.hitoki_wakugawa.nameOnly',
      twitterId: '_wakkn',
      githubId: 'waku-waku',
    },
  },
]

export const sessionSpeakers = speakers.filter((speaker) => speaker.session.type !== 'lt')

export const ltSpeakers = speakers.filter((speaker) => speaker.session.type === 'lt')
