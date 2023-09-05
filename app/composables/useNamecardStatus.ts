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
        detail: 'あなたのネームカードは、当日受付にてお渡しいたします。開催を楽しみにお待ちください 😍',
      }))
      .with('failed', () => ({
        title: 'チケット購入状況との照合に失敗しました',
        detail:
          'チケットご購入後、24時間以内に情報を入力した場合、購入状況との照合に失敗することがあります。少し時間を置いて再度編集・照合をお試しください。正しい情報を入力しているにも関わらず、何度もこのエラーが表示される場合は、お問い合わせフォームよりお問い合わせください。',
      }))
      .exhaustive()

  return { message }
}
