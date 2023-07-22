import { Sponsor } from '~/types/app'

const platinumSponsors: Sponsor[] = [
  {
    name: 'クラウドサイン（弁護士ドットコム株式会社）',
    image: '/sponsors/cloudsign.png',
    category: 'platinum',
    site: '',
  },
  {
    name: 'ユニークビジョン株式会社',
    image: '/sponsors/unique-vision.png',
    category: 'platinum',
    site: '',
  },
  {
    name: '株式会社リンクアンドモチベーション',
    image: '/sponsors/link-and-motivation-group.png',
    category: 'platinum',
    site: '',
  },
]

const goldSponsors: Sponsor[] = [
  {
    name: '株式会社ヤプリ',
    image: '/sponsors/yappli.png',
    category: 'gold',
    site: '',
  },
  {
    name: 'フューチャーアーキテクト株式会社',
    image: '/sponsors/feature-architect.png',
    category: 'gold',
    site: '',
  },
  {
    name: 'JetBrains s.r.o.',
    image: '/sponsors/jetbrains.png',
    category: 'gold',
    site: '',
  },
  {
    name: 'メドピア株式会社',
    image: '/sponsors/medpeer.png',
    category: 'gold',
    site: '',
  },
  {
    name: '株式会社hacomono',
    image: '/sponsors/hacomono.png',
    category: 'gold',
    site: '',
  },
  {
    name: '株式会社PLAID',
    image: '/sponsors/plaid.svg',
    category: 'gold',
    site: '',
  },
]

const silverSponsors: Sponsor[] = [
  {
    name: 'BASE株式会社',
    image: '/sponsors/base.png',
    category: 'silver',
    site: '',
  },
  {
    name: 'サイボウズ株式会社',
    image: '/sponsors/cybozu.png',
    category: 'silver',
    site: '',
  },
  {
    name: 'MNTSQ株式会社',
    image: '/sponsors/mntsq.png',
    category: 'silver',
    site: '',
  },
  {
    name: '株式会社MIERUNE',
    image: '/sponsors/mierune.svg',
    category: 'silver',
    site: '',
  },
  {
    name: '株式会社ビザスク',
    image: '/sponsors/visasq.png',
    category: 'silver',
    site: '',
  },
  {
    name: 'STORES株式会社',
    image: '/sponsors/stores.png',
    category: 'silver',
    site: '',
  },
  {
    name: 'LINE Fukuoka株式会社',
    image: '/sponsors/line-fukuoka.png',
    category: 'silver',
    site: '',
  },
  {
    name: 'ラクスル株式会社',
    image: '/sponsors/raksul.jpg',
    category: 'silver',
    site: '',
  },
  {
    name: 'LAPRAS株式会社',
    image: '/sponsors/lapras.png',
    category: 'silver',
    site: '',
  },
  {
    name: '株式会社ギフティ',
    image: '/sponsors/gifee.png',
    category: 'silver',
    site: '',
  },
]

const bronzeSponsors: Sponsor[] = [
  {
    name: '株式会社タノム',
    image: '/sponsors/tanomu.png',
    category: 'bronze',
    site: '',
  },
  {
    name: '株式会社スタディスト',
    image: '/sponsors/studist.png',
    category: 'bronze',
    site: '',
  },
  {
    name: '株式会社coco',
    image: '/sponsors/coco.png',
    category: 'bronze',
    site: '',
  },
  {
    name: '株式会社TENTIAL',
    image: '/sponsors/tential.svg',
    category: 'bronze',
    site: '',
  },
  {
    name: '株式会社メルカリ',
    image: '/sponsors/mercari.png',
    category: 'bronze',
    site: '',
  },
]

const namingRightSponsors: Sponsor[] = [
  {
    name: 'クラウドサイン（弁護士ドットコム株式会社）',
    image: '/sponsors/cloudsign.png',
    category: 'session-room-naming-rights',
    site: '',
  },
  {
    name: 'メドピア株式会社',
    image: '/sponsors/medpeer.png',
    category: 'session-room-naming-rights',
    site: '',
  },
  {
    name: 'エムスリー株式会社',
    image: '/sponsors/m3.svg',
    category: 'session-room-naming-rights',
    site: '',
  },
]

const specialLunchSponsors: Sponsor[] = [
  {
    name: 'MNTSQ株式会社',
    image: '/sponsors/mntsq.png',
    category: 'special-lunch',
    site: '',
  },
  {
    name: 'STORES株式会社',
    image: '/sponsors/stores.png',
    category: 'special-lunch',
    site: '',
  },
  {
    name: 'メドピア株式会社',
    image: '/sponsors/medpeer.png',
    category: 'special-lunch',
    site: '',
  },
]

const lunchSponsors: Sponsor[] = [
  {
    name: '株式会社ココナラ',
    image: '/sponsors/coconala.png',
    category: 'lunch',
    site: '',
  },
]

const afterPartySponsors: Sponsor[] = [
  {
    name: 'GMOインターネットグループ株式会社',
    image: '/sponsors/gmo-internet-group.svg',
    category: 'after-party',
    site: '',
  },
]

const namecardSponsors: Sponsor[] = [
  {
    name: '株式会社タノム',
    image: '/sponsors/tanomu.png',
    category: 'name-card',
    site: '',
  },
]

const refreshmentSponsors: Sponsor[] = [
  {
    name: '株式会社ギフティ',
    image: '/sponsors/gifee.png',
    category: 'refreshment',
    site: '',
  },
]

const interpretationSponsors: Sponsor[] = [
  {
    name: '株式会社クラウドワークス',
    image: '/sponsors/crowdworks.svg',
    category: 'simultaneous-interpretation',
    site: '',
  },
]

const mediaSponsors: Sponsor[] = [
  {
    name: 'Newt',
    image: '/sponsors/newt.png',
    category: 'media',
    site: '',
  },
  {
    name: '株式会社技術評論社',
    image: '/sponsors/gihyojp.svg',
    category: 'media',
    site: '',
  },
]

const all = [
  ...platinumSponsors,
  ...goldSponsors,
  ...silverSponsors,
  ...bronzeSponsors,
  ...namingRightSponsors,
  ...specialLunchSponsors,
  ...lunchSponsors,
  ...afterPartySponsors,
  ...namecardSponsors,
  ...interpretationSponsors,
  ...refreshmentSponsors,
  ...mediaSponsors,
]

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
  refreshmentSponsors,
  mediaSponsors,
  all,
}
