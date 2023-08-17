import { Speaker } from '~/types/app'

export const speakers: Speaker[] = [
  // Evan
  {
    id: 'yyx990803',
    type: 'evan',
    session: {
      title: 'キーノート',
      description: '＜未定＞',
      time: 0,
      type: 'main',
    },
    profile: {
      image: '/speakers/evan.jpg',
      title: 'Creator of Vue / Vite',
      name: 'Evan You',
      twitterId: 'youyuxi',
      githubId: 'yyx990803',
      description:
        'Evan is an independent open source developer and is the creator / project lead of Vue and Vite.',
    },
  },
  // 海外スピーカー
  {
    id: 'Atinux',
    type: 'foreign',
    session: {
      title: 'Nuxt to the Edge',
      description:
        'Learn how to build a Vue application deployed to the edge to bring a blazing fast experience to your end users.',
      time: 0,
      type: 'main',
    },
    profile: {
      image: '/speakers/sebastien.jpg',
      title: 'NuxtLabs CEO',
      name: 'Sebastien Chopin',
      twitterId: 'Atinux',
      githubId: 'Atinux',
      description:
        'Author of Nuxt and CEO at NuxtLabs. I am passionate about open source and developer experience. I strive to make the web faster and create the flow feeling for developers by making the best tools to express their full creativity.',
    },
  },
  {
    id: 'patak-dev',
    type: 'foreign',
    session: {
      title: '＜未定＞',
      description: '＜未定＞',
      time: 0,
      type: 'main',
    },
    profile: {
      image: '/speakers/matias.jpg',
      title: 'Vite Core team Member',
      name: 'Matias Capeletto',
      twitterId: 'patak_dev',
      githubId: 'patak-dev',
      description: 'A collaborative being, working full time on the Vite ecosystem @StackBlitz.',
    },
  },
  {
    id: 'antfu',
    type: 'foreign',
    session: {
      title: '＜未定＞',
      description: '＜未定＞',
      time: 0,
      type: 'main',
    },
    profile: {
      image: '/speakers/antfu.png',
      title: 'Vue/Vite/Nuxt Core team Member',
      name: 'Anthony Fu',
      twitterId: 'antfu7',
      githubId: 'antfu',
      description:
        'Anthony is a fanatical open sourceror. DX and ecosystem for Vue, Vite and Nuxt.',
    },
  },
  {
    id: 'daniel-roe',
    type: 'foreign',
    session: {
      title: '＜未定＞',
      description: '＜未定＞',
      time: 0,
      type: 'main',
    },
    profile: {
      image: '/speakers/daniel_roe.jpg',
      title: 'Nuxt Core Team Member',
      name: 'Daniel Roe',
      twitterId: 'danielcroe',
      githubId: 'danielroe',
      mastodonUrl: 'https://mastodon.roe.dev/@daniel',
      description:
        "Daniel leads the Nuxt core team - previously CTO of SaaS startup and founder of a creative agency focusing on clarity of vision and message. His open-source work has a focus in the Vue.js and Nuxt ecosystems and he's involved in consultancy with companies around the world, particularly around JAMstack, serverless and software architecture. He's based in the North East of England where he lives with his family, three cats, and a dog.",
    },
  },

  // 国内スピーカー
  {
    id: 'sapphi_red',
    type: 'domestic',
    session: {
      title: '＜未定＞',
      description: '＜未定＞',
      time: 0,
      type: 'main',
    },
    profile: {
      image: '/speakers/sapphi_red.png',
      title: 'Vite Core team Member',
      name: '翠 / sapphi-red',
      twitterId: 'sapphi_red',
      githubId: 'sapphi-red',
      mastodonUrl: 'https://m.webtoo.ls/@sapphi_red',
      description: 'ユーザーフレンドリーな開発を目指して活動しています。',
    },
  },
  {
    id: 'wattanx',
    type: 'domestic',
    session: {
      title: 'Demystifying Nuxt Bridge〜あなたがまだ見ぬ可能性とその活用法〜',
      description: '＜未定＞',
      time: 0,
      type: 'main',
    },
    profile: {
      image: '/speakers/wattanx.png',
      title: '',
      name: 'wattanx / ワッタン',
      twitterId: 'pontaxx',
      githubId: 'wattanx',
      description: '',
    },
  },
  {
    id: 'sorami',
    type: 'domestic',
    session: {
      title: 'Vue.jsと3D可視化 - 産総研のOSS「AIST 3DDB Client」を例に',
      description: '＜未定＞',
      time: 0,
      type: 'main',
    },
    profile: {
      image: '/speakers/sorami.png',
      title: '',
      name: 'sorami / ソラミ',
      twitterId: 'sorami',
      githubId: 'sorami',
      description: '',
    },
  },
  {
    id: 'mizdra',
    type: 'domestic',
    session: {
      title: 'Vue Language Server から生まれた Volar.js と、それが秘める可能性',
      description: '＜未定＞',
      time: 0,
      type: 'main',
    },
    profile: {
      image: '/speakers/mizdra.png',
      title: '',
      name: 'mizdra / ミズドラ',
      twitterId: 'mizdra',
      githubId: 'mizdra',
      description: '',
    },
  },
  {
    id: 'nozomu-ikuta',
    type: 'domestic',
    session: {
      title: 'Deep dive to unjs and Nuxt 3',
      description: '＜未定＞',
      time: 0,
      type: 'main',
    },
    profile: {
      image: '/speakers/nozomu_ikuta.png',
      title: '',
      name: 'Nozomu Ikuta',
      twitterId: 'NozomuIkuta',
      githubId: 'NozomuIkuta',
      description: '',
    },
  },
  {
    id: 'yamanoku',
    type: 'domestic',
    session: {
      title: '画面遷移から考える Nuxt アプリケーションをアクセシブルにする方法',
      description: '＜未定＞',
      time: 0,
      type: 'main',
    },
    profile: {
      image: '/speakers/yamanoku.png',
      title: '',
      name: 'やまのく',
      twitterId: 'yamanoku',
      githubId: 'yamanoku',
      mastodonUrl: 'https://mstdn.jp/@yamanoku',
      description: '',
    },
  },
  {
    id: 'harlan-zw',
    type: 'foreign',
    session: {
      title: 'Getting Your Head Around useHead',
      description: '＜未定＞',
      time: 0,
      type: 'main',
    },
    profile: {
      image: '/speakers/harlan_zw.jpg',
      title: '',
      name: 'Harlan Wilton',
      twitterId: 'harlan_zw',
      githubId: 'harlan-zw',
      description: '',
    },
  },
  {
    id: 'chocodogmagic',
    type: 'domestic',
    session: {
      title: 'Nuxt 3でJamstackテンプレートを作るときの考え方',
      description: '＜未定＞',
      time: 0,
      type: 'main',
    },
    profile: {
      image: '/speakers/chocodogmagic.jpg',
      title: '',
      name: 'まぁし（知念）',
      twitterId: 'chocodogmagic',
      description: '',
    },
  },
  {
    id: 'keima',
    type: 'domestic',
    session: {
      title: 'STUDIOの作り方 2023 ver.',
      description: '＜未定＞',
      time: 0,
      type: 'main',
    },
    profile: {
      image: '/speakers/keima.jpg',
      title: '',
      name: 'Keima',
      twitterId: 'keima_studio',
      githubId: 'keimakai',
      description: '',
    },
  },

  // LT
  {
    id: 'kira-puka',
    type: 'domestic',
    session: {
      title: 'Nuxt3のモジュール開発は意外と簡単？ Module Author Guideをのぞいてみよう',
      description: '＜未定＞',
      time: 0,
      type: 'lt',
    },
    profile: {
      image: '/speakers/kira_puka.png',
      title: '',
      name: 'きらぷか',
      twitterId: 'kira_puka',
      githubId: 'memory-lovers',
      description: '',
    },
  },
  {
    id: 'northprint',
    type: 'domestic',
    session: {
      title: 'WebGISとVue.jsの親和性について',
      description: '＜未定＞',
      time: 0,
      type: 'lt',
    },
    profile: {
      image: '/speakers/northprint.png',
      title: '',
      name: '楢山哲弘',
      twitterId: 'northprint',
      githubId: 'northprint',
      description: '',
    },
  },
  {
    id: 't0yohei',
    type: 'domestic',
    session: {
      title: 'Vue を使って Grid System を実装した話',
      description: '＜未定＞',
      time: 0,
      type: 'lt',
    },
    profile: {
      image: '/speakers/t0yohei.jpg',
      title: '',
      name: 't0yohei / トヨヘイ',
      twitterId: 't0yohei',
      githubId: 't0yohei',
      description: '',
    },
  },
  {
    id: 'yud0uhu',
    type: 'domestic',
    session: {
      title: 'Vue3/Electornで自作したマークダウンエディタをVue3/Tauriにリプレイスした話',
      description: '＜未定＞',
      time: 0,
      type: 'lt',
    },
    profile: {
      image: '/speakers/yud0uhu.jpg',
      title: '',
      name: '0yu / オユ',
      twitterId: 'yud0uhu',
      githubId: 'yud0uhu',
      description: '',
    },
  },
  {
    id: '53able',
    type: 'domestic',
    session: {
      title: 'SOLID 原則に基づくSFC 実装',
      description: '＜未定＞',
      time: 0,
      type: 'lt',
    },
    profile: {
      image: '/speakers/53able.png',
      title: '',
      name: '53able / ゴー',
      twitterId: '53able',
      githubId: '53able',
      description: '',
    },
  },
  {
    id: 'fuqda',
    type: 'domestic',
    session: {
      title: 'Composition API時代のPub/Subパターンでの状態管理',
      description: '＜未定＞',
      time: 0,
      type: 'lt',
    },
    profile: {
      image: '/speakers/fuqda.jpg',
      title: '',
      name: 'fuqda / フクダ',
      twitterId: 'fuqda90',
      githubId: 'Shigeyuki-fukuda',
      description: '',
    },
  },
]

export const sessionSpeakers = speakers.filter((speaker) => speaker.session.type !== 'lt')

export const ltSpeakers = speakers.filter((speaker) => speaker.session.type === 'lt')
