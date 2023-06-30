import { match } from 'ts-pattern'
import { Status } from '~/types/app'

interface Result {
  title: string
  detail: string
}

export function useNamecardStatus() {
  const message = (status: Status) =>
    match<Status, Result>(status)
      .with('registered', () => ({
        title: '参加登録が完了しました！',
        detail: '当日の開催を楽しみにお待ちください 😍',
      }))
      .with('activating', () => ({
        title: 'ネームカードの登録は完了していません！',
        detail: '編集画面からチケット購入情報を入力してください。',
      }))
      .with('pending', () => ({
        title: '購入情報を照合中です',
        detail:
          'ご登録いただいたチケット情報を照合中です。この処理には時間がかかる場合がございます。\nご不明な点があればサポートへお問い合わせください。',
      }))
      .exhaustive()

  return { message }
}
