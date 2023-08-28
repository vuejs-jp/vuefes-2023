import { Database } from '~/types/supabase'
import { Role } from '~/types/app'
import { useUserStore } from './useUserStore'
import { useToast } from './useToast'

export function useSupabase() {
  const client = useSupabaseClient<Database>()
  const { signedUser: user } = useUserStore()
  const { onError, onSuccess } = useToast()

  async function addEventUser(displayName: string, secretWord: string, receiptId: string) {
    const userData = {
      ...user,
      display_name: displayName,
      secret_word: secretWord,
      receipt_id: receiptId,
    }

    const { error } = await client.from('event_users').insert(userData)
    if (error) {
      onError('登録できませんでした', 3000)
      return
    }

    onSuccess('登録しました', 3000)
  }

  async function updateEventUser(
    displayName: string,
    secretWord: string,
    receiptId: string,
    userId: string,
  ) {
    const userData = {
      ...user,
      display_name: displayName,
      secret_word: secretWord,
      receipt_id: receiptId,
    }

    const { error } = await client.from('event_users').update(userData).eq('user_id', userId)
    if (error) {
      onError('編集できませんでした', 3000)
      return
    }

    onSuccess('編集しました', 3000)
  }

  async function updatePMReceipt(receiptIds: { role: Role; receipt_id: string }[]) {
    const { error } = await client
      .from('pm_receipts')
      .upsert(receiptIds, { onConflict: 'receipt_id' })
      .select()
    if (error) {
      onError('購入情報を取り込めませんでした', 3000)
      return
    }

    onSuccess('購入情報を取り込みました', 3000)
  }

  return { addEventUser, updateEventUser, updatePMReceipt }
}
