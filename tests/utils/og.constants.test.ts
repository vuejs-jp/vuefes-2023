import { describe, expect, it } from 'vitest'
import { createOg, generalOg, twitterOg } from 'app/utils/og.constants'

describe('generalOg', () => {
  it('default value', () => {
    expect(generalOg()).toMatchObject([
      {
        hid: 'description',
        name: 'description',
        content:
          '2023年10月28日（土）に開催される日本最大級の Vue.js オンラインカンファレンス。国内外の著名スピーカーによるセッションの他、初心者向けハンズオンなどのイベントも企画しています。ぜひ、一緒に Vue.js を楽しみ、盛り上げていきましょう！',
      },
      {
        hid: 'og:site_name',
        name: 'og:site_name',
        content: 'Vue Fes Japan Online 2023',
      },
      {
        hid: 'og:type',
        name: 'og:type',
        content: 'website',
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content:
          '2023年10月28日（土）に開催される日本最大級の Vue.js オンラインカンファレンス。国内外の著名スピーカーによるセッションの他、初心者向けハンズオンなどのイベントも企画しています。ぜひ、一緒に Vue.js を楽しみ、盛り上げていきましょう！',
      },
      {
        hid: 'og:title',
        name: 'og:title',
        content: 'Vue Fes Japan Online 2023',
      },
      {
        hid: 'og:url',
        name: 'og:url',
        content: 'https://vuefes.jp/2023/',
      },
      {
        hid: 'og:image',
        name: 'og:image',
        content: 'https://vuefes.jp/2023/img/og-image.png',
      },
      {
        hid: 'og:image:secure_url',
        name: 'og:image:secure_url',
        content: 'https://vuefes.jp/2023/img/og-image.png',
      },
    ])
  })
  it('alternative value', () => {
    expect(
      generalOg({
        title: 'マイタイトル',
        description: 'マイディスクリプション',
        url: 'https://test.jp/',
        image: 'https://test.jp/img/test.png',
      }),
    ).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          hid: 'og:site_name',
          name: 'og:site_name',
          content: 'マイタイトル',
        }),
        expect.objectContaining({
          hid: 'description',
          name: 'description',
          content: 'マイディスクリプション',
        }),
        expect.objectContaining({
          hid: 'og:description',
          name: 'og:description',
          content: 'マイディスクリプション',
        }),
        expect.objectContaining({
          hid: 'og:url',
          name: 'og:url',
          content: 'https://test.jp/',
        }),
        expect.objectContaining({
          hid: 'og:image',
          name: 'og:image',
          content: 'https://test.jp/img/test.png',
        }),
        expect.objectContaining({
          hid: 'og:image:secure_url',
          name: 'og:image:secure_url',
          content: 'https://test.jp/img/test.png',
        }),
      ]),
    )
  })
})
describe('twitterOg', () => {
  it('default value', () => {
    expect(twitterOg()).toMatchObject([
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content:
          '2023年10月28日（土）に開催される日本最大級の Vue.js オンラインカンファレンス。国内外の著名スピーカーによるセッションの他、初心者向けハンズオンなどのイベントも企画しています。ぜひ、一緒に Vue.js を楽しみ、盛り上げていきましょう！',
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'Vue Fes Japan Online 2023',
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image', // ex: summary, summary_large_image
      },
      {
        hid: 'twitter:site',
        name: 'twitter:site',
        content: '@vuefes',
      },
      {
        hid: 'twitter:creator',
        name: 'twitter:creator',
        content: '@vuefes',
      },
      {
        hid: 'twitter:site',
        name: 'twitter:site',
        content: '@vuefes',
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: 'https://vuefes.jp/2023/img/og-image.png',
      },
    ])
  })
  it('alternative value', () => {
    expect(
      twitterOg({
        title: 'マイツイッタタイトル',
        description: 'マイツイッタディスクリプション',
        image: 'https://test.jp/img/twitter.png',
      }),
    ).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          hid: 'twitter:title',
          name: 'twitter:title',
          content: 'マイツイッタタイトル',
        }),
        expect.objectContaining({
          hid: 'twitter:description',
          name: 'twitter:description',
          content: 'マイツイッタディスクリプション',
        }),
        expect.objectContaining({
          hid: 'twitter:image',
          name: 'twitter:image',
          content: 'https://test.jp/img/twitter.png',
        }),
      ]),
    )
  })
})
describe('createOg', () => {
  it('default value', () => {
    expect(createOg()).toMatchObject([
      {
        hid: 'description',
        name: 'description',
        content:
          '2023年10月28日（土）に開催される日本最大級の Vue.js オンラインカンファレンス。国内外の著名スピーカーによるセッションの他、初心者向けハンズオンなどのイベントも企画しています。ぜひ、一緒に Vue.js を楽しみ、盛り上げていきましょう！',
      },
      {
        hid: 'og:site_name',
        name: 'og:site_name',
        content: 'Vue Fes Japan Online 2023',
      },
      {
        hid: 'og:type',
        name: 'og:type',
        content: 'website',
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content:
          '2023年10月28日（土）に開催される日本最大級の Vue.js オンラインカンファレンス。国内外の著名スピーカーによるセッションの他、初心者向けハンズオンなどのイベントも企画しています。ぜひ、一緒に Vue.js を楽しみ、盛り上げていきましょう！',
      },
      {
        hid: 'og:title',
        name: 'og:title',
        content: 'Vue Fes Japan Online 2023',
      },
      {
        hid: 'og:url',
        name: 'og:url',
        content: 'https://vuefes.jp/2023/',
      },
      {
        hid: 'og:image',
        name: 'og:image',
        content: 'https://vuefes.jp/2023/img/og-image.png',
      },
      {
        hid: 'og:image:secure_url',
        name: 'og:image:secure_url',
        content: 'https://vuefes.jp/2023/img/og-image.png',
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content:
          '2023年10月28日（土）に開催される日本最大級の Vue.js オンラインカンファレンス。国内外の著名スピーカーによるセッションの他、初心者向けハンズオンなどのイベントも企画しています。ぜひ、一緒に Vue.js を楽しみ、盛り上げていきましょう！',
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'Vue Fes Japan Online 2023',
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image', // ex: summary, summary_large_image
      },
      {
        hid: 'twitter:site',
        name: 'twitter:site',
        content: '@vuefes',
      },
      {
        hid: 'twitter:creator',
        name: 'twitter:creator',
        content: '@vuefes',
      },
      {
        hid: 'twitter:site',
        name: 'twitter:site',
        content: '@vuefes',
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: 'https://vuefes.jp/2023/img/og-image.png',
      },
    ])
  })
})
