import { conferenceTitle, ogDescription, linkUrl, vuefesTwitterID } from './constants'

export type OGProp = {
  title?: string // タイトル
  description?: string // 説明文
  url?: string // URL
  image?: string // 画像
}
export type Meta = {
  hid: string
  name: string
  content: string
}

/**
 * OG情報とTwitterOG情報をまとめて生成
 * @param oGProp
 * @returns
 */
export const createOg = (oGProp: OGProp): Meta[] => {
  return [...generalOg(oGProp), ...twitterOg(oGProp)]
}

/**
 * OG情報を生成
 * @param title タイトル
 * @param description 説明文
 * @param url URL
 * @param image 画像
 * @returns
 */
export const generalOg = (oGProp: OGProp): Meta[] => {
  const { description, title, url, image } = oGProp
  return [
    {
      hid: 'description',
      name: 'description',
      content: description ? description : ogDescription,
    },
    {
      hid: 'og:site_name',
      name: 'og:site_name',
      content: title ? title : conferenceTitle,
    },
    {
      hid: 'og:type',
      name: 'og:type',
      content: 'website',
    },
    {
      hid: 'og:description',
      name: 'og:description',
      content: description ? description : ogDescription,
    },
    {
      hid: 'og:title',
      name: 'og:title',
      content: title ? title : conferenceTitle,
    },
    {
      hid: 'og:url',
      name: 'og:url',
      content: url ? url : linkUrl,
    },
    {
      hid: 'og:image',
      name: 'og:image',
      content: image ? image : `${linkUrl}img/og-image.png`,
    },
    {
      hid: 'og:image:secure_url',
      name: 'og:image:secure_url',
      content: image ? image : `${linkUrl}img/og-image.png`,
    },
  ]
}

/**
 * TwitterOG情報を生成
 * @param title タイトル
 * @param description 説明文
 * @param image 画像
 * @returns
 */
export const twitterOg = (oGProp: OGProp): Meta[] => {
  const { description, title, image } = oGProp
  return [
    {
      hid: 'twitter:description',
      name: 'twitter:description',
      content: description ? description : ogDescription,
    },
    {
      hid: 'twitter:title',
      name: 'twitter:title',
      content: title ? title : conferenceTitle,
    },
    {
      hid: 'twitter:card',
      name: 'twitter:card',
      content: 'summary_large_image', // ex: summary, summary_large_image
    },
    {
      hid: 'twitter:site',
      name: 'twitter:site',
      content: vuefesTwitterID,
    },
    {
      hid: 'twitter:creator',
      name: 'twitter:creator',
      content: vuefesTwitterID,
    },
    {
      hid: 'twitter:site',
      name: 'twitter:site',
      content: vuefesTwitterID,
    },
    {
      hid: 'twitter:image',
      name: 'twitter:image',
      content: image ? image : `${linkUrl}img/og-image.png`,
    },
  ]
}
