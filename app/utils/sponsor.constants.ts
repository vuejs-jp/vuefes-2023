import { Sponsor } from '~/types/app'

const all: Sponsor[] = [
  {
    id: 'cloudsign',
    name: 'クラウドサイン（弁護士ドットコム株式会社）',
    image: '/sponsors/cloudsign.png',
    categories: ['platinum', 'session-room-naming-rights'],
    url: 'https://www.cloudsign.jp/',
  },
  {
    id: 'unique-vision',
    name: 'ユニークビジョン株式会社',
    image: '/sponsors/unique-vision.png',
    categories: ['platinum'],
    url: 'https://www.uniquevision.co.jp/',
  },
  {
    id: 'link-and-motivation-group',
    name: '株式会社リンクアンドモチベーション',
    image: '/sponsors/link-and-motivation-group.png',
    categories: ['platinum'],
    url: 'https://www.lmi.ne.jp/',
  },
  {
    id: 'yappli',
    name: '株式会社ヤプリ',
    image: '/sponsors/yappli.png',
    categories: ['gold'],
    url: 'https://yappli.co.jp/',
  },
  {
    id: 'future-architect',
    name: 'フューチャーアーキテクト株式会社',
    image: '/sponsors/future-architect.png',
    categories: ['gold'],
    url: 'https://www.future.co.jp/architect/',
  },
  {
    id: 'jetbrains',
    name: 'JetBrains s.r.o.',
    image: '/sponsors/jetbrains.png',
    categories: ['gold'],
    url: 'https://jb.gg/vuefes2023-webstorm',
  },
  {
    id: 'medpeer',
    name: 'メドピア株式会社',
    image: '/sponsors/medpeer.png',
    categories: ['gold', 'session-room-naming-rights', 'special-lunch'],
    url: 'https://medpeer.co.jp/',
  },
  {
    id: 'hacomono',
    name: '株式会社hacomono',
    image: '/sponsors/hacomono.png',
    categories: ['gold', 'special-lunch'],
    url: 'https://www.hacomono.jp/',
  },
  {
    id: 'plaid',
    name: '株式会社プレイド',
    image: '/sponsors/plaid.svg',
    categories: ['gold'],
    url: 'https://plaid.co.jp/',
  },
  {
    id: 'base',
    name: 'BASE株式会社',
    image: '/sponsors/base.png',
    categories: ['silver'],
    url: 'https://thebase.com',
  },
  {
    id: 'cybozu',
    name: 'サイボウズ株式会社',
    image: '/sponsors/cybozu.png',
    categories: ['silver'],
    url: 'https://tech.cybozu.io/',
  },
  {
    id: 'mntsq',
    name: 'MNTSQ株式会社',
    image: '/sponsors/mntsq.png',
    categories: ['silver', 'special-lunch'],
    url: 'https://www.mntsq.co.jp/',
  },
  {
    id: 'mierune',
    name: '株式会社MIERUNE',
    image: '/sponsors/mierune.svg',
    categories: ['silver'],
    url: 'https://www.mierune.co.jp',
  },
  {
    id: 'visasq',
    name: '株式会社ビザスク',
    image: '/sponsors/visasq.svg',
    categories: ['silver'],
    url: 'https://service.visasq.com/',
  },
  {
    id: 'stores',
    name: 'STORES株式会社',
    image: '/sponsors/stores.png',
    categories: ['silver', 'special-lunch'],
    url: 'https://jobs.st.inc/engineer',
  },
  {
    id: 'line-fukuoka',
    name: 'LINE Fukuoka株式会社',
    image: '/sponsors/line-fukuoka.png',
    categories: ['silver'],
    url: 'https://linefukuoka.co.jp/ja/career/engineer',
  },
  {
    id: 'raksul',
    name: 'ラクスル株式会社',
    image: '/sponsors/raksul.jpg',
    categories: ['silver'],
    url: 'https://corp.raksul.com/',
  },
  {
    id: 'lapras',
    name: 'LAPRAS株式会社',
    image: '/sponsors/lapras.png',
    categories: ['silver'],
    url: 'https://lapras.com/person',
  },
  {
    id: 'giftee',
    name: '株式会社ギフティ',
    image: '/sponsors/giftee.png',
    categories: ['silver', 'refreshment'],
    url: 'https://giftee.co.jp/',
  },
  {
    id: 'tanomu',
    name: '株式会社タノム',
    image: '/sponsors/tanomu.png',
    categories: ['bronze', 'name-card'],
    url: 'https://lp.tano.mu',
  },
  {
    id: 'studist',
    name: '株式会社スタディスト',
    image: '/sponsors/studist.png',
    categories: ['bronze'],
    url: 'https://studist.jp/',
  },
  {
    id: 'coco',
    name: '株式会社coco',
    image: '/sponsors/coco.png',
    categories: ['bronze'],
    url: 'https://thecoco.jp/',
  },
  {
    id: 'tential',
    name: '株式会社TENTIAL',
    image: '/sponsors/tential.svg',
    categories: ['bronze'],
    url: 'https://corp.tential.jp/',
  },
  {
    id: 'mercari',
    name: '株式会社メルカリ',
    image: '/sponsors/mercari.svg',
    categories: ['bronze'],
    url: 'https://jp.merpay.com',
  },
  {
    id: 'm3',
    name: 'エムスリー株式会社',
    image: '/sponsors/m3.svg',
    categories: ['session-room-naming-rights'],
    url: 'https://jobs.m3.com/engineer/',
  },
  {
    id: 'coconala',
    name: '株式会社ココナラ',
    image: '/sponsors/coconala.png',
    categories: ['lunch'],
    url: 'https://coconala.co.jp/',
  },
  {
    id: 'gmo-internet-group',
    name: 'GMOインターネットグループ株式会社',
    image: '/sponsors/gmo-internet-group.svg',
    categories: ['after-party'],
    url: 'https://gmo.jp',
  },
  {
    id: 'crowdworks',
    name: '株式会社クラウドワークス',
    image: '/sponsors/crowdworks.svg',
    categories: ['simultaneous-interpretation'],
    url: 'https://crowdworks.co.jp/',
  },
  {
    id: 'newt',
    name: 'Newt',
    image: '/sponsors/newt.png',
    categories: ['media'],
    url: 'https://www.newt.so/',
  },
  {
    id: 'gihyojp',
    name: '株式会社技術評論社',
    image: '/sponsors/gihyojp.svg',
    categories: ['media'],
    url: 'https://gihyo.jp',
  },
  {
    id: 'yuzuriha',
    name: '株式会社YUZURIHA',
    image: '/sponsors/yuzuriha.png',
    categories: ['bronze'],
    url: 'https://yzrh.jp',
  },
  {
    id: 'attelu',
    name: '株式会社アッテル',
    image: '/sponsors/attelu.svg',
    categories: ['bronze'],
    url: 'https://attelu.jp',
  },
  {
    id: 'algorithms',
    name: '株式会社アルゴリズム',
    image: '/sponsors/algorithms.png',
    categories: ['bronze'],
    url: 'https://algorithms.co.jp',
  },
  {
    id: 'interfirm',
    name: 'KATIX（株式会社インターファーム）',
    image: '/sponsors/interfirm.png',
    categories: ['bronze'],
    url: 'https://www.interfirm.jp',
  },
  {
    id: 'tabian',
    name: 'タビアン株式会社',
    image: '/sponsors/tabian.png',
    categories: ['handson'],
    url: 'https://tabian.co.jp',
  },
  {
    id: 'hennge',
    name: 'HENNGE株式会社',
    image: '/sponsors/hennge.png',
    categories: ['bronze', 'refreshment'],
    url: 'https://hennge.com',
  },
  {
    id: 'tam',
    name: '株式会社TAM',
    image: '/sponsors/tam.png',
    categories: ['refreshment'],
    url: 'https://www.tam-tam.co.jp',
  },
]

const platinumSponsors: Sponsor[] = all.filter((s: Sponsor) => s.categories.includes('platinum'))

const goldSponsors: Sponsor[] = all.filter((s: Sponsor) => s.categories.includes('gold'))

const silverSponsors: Sponsor[] = all.filter((s: Sponsor) => s.categories.includes('silver'))

const bronzeSponsors: Sponsor[] = all.filter((s: Sponsor) => s.categories.includes('bronze'))

const namingRightSponsors: Sponsor[] = all.filter((s: Sponsor) =>
  s.categories.includes('session-room-naming-rights'),
)

const specialLunchSponsors: Sponsor[] = all.filter((s: Sponsor) =>
  s.categories.includes('special-lunch'),
)

const lunchSponsors: Sponsor[] = all.filter((s: Sponsor) => s.categories.includes('lunch'))

const afterPartySponsors: Sponsor[] = all.filter((s: Sponsor) =>
  s.categories.includes('after-party'),
)

const namecardSponsors: Sponsor[] = all.filter((s: Sponsor) => s.categories.includes('name-card'))

const refreshmentSponsors: Sponsor[] = all.filter((s: Sponsor) =>
  s.categories.includes('refreshment'),
)

const interpretationSponsors: Sponsor[] = all.filter((s: Sponsor) =>
  s.categories.includes('simultaneous-interpretation'),
)

const handsonSponsors: Sponsor[] = all.filter((s: Sponsor) => s.categories.includes('handson'))

const mediaSponsors: Sponsor[] = all.filter((s: Sponsor) => s.categories.includes('media'))

const individual: string[] = []

export {
  platinumSponsors,
  goldSponsors,
  silverSponsors,
  bronzeSponsors,
  namingRightSponsors,
  specialLunchSponsors,
  lunchSponsors,
  afterPartySponsors,
  namecardSponsors,
  interpretationSponsors,
  handsonSponsors,
  refreshmentSponsors,
  mediaSponsors,
  individual,
  all,
}
