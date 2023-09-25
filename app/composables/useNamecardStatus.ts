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
        title: 'ネームカードの情報登録が完了しました！',
        detail:
          'あなたのネームカードは、当日受付にてお渡しいたします。開催を楽しみにお待ちください 😍',
      }))
      .with('failed', () => ({
        title: 'チケット購入状況との照合に失敗しました',
        detail:
          'ネームカードを新しく作成した場合、チケット購入状況との照合に失敗することがあります。1日ほど間をおいて再度照合をお試しください。正しい情報を入力しているにも関わらず、何度もこのエラーが表示される場合は、チケット購入時の注文番号とお名前を添えて、お問い合わせフォームよりお問い合わせください。',
      }))
      .with('nouser', () => ({
        title: 'ユーザーが見つかりませんでした',
        detail: 'このURLにひもづくユーザーが見つかりませんでした',
      }))
      .exhaustive()

  return { message }
}
