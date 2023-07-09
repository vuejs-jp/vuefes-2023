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
      .with('failed', () => ({
        title: 'チケット購入ステータスの照合に失敗しました',
        detail:
          '少し時間を置いて登録をお試しください。何度もこのエラーが表示される場合はお問い合わせください。',
      }))
      .exhaustive()

  return { message }
}
