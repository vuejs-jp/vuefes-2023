import { FormUser } from '~/types/app'
import { Database } from '~/types/supabase'
import { useToast } from './useToast'

export interface UseSupabaseProps {
  user: FormUser
}

export function useSupabase({ user }: UseSupabaseProps) {
  const client = useSupabaseClient<Database>()
  const { onError, onSuccess } = useToast()

  async function addEventUser(secretWord: string, receiptId: string) {
    const userData = {
      ...user,
      secret_word: secretWord,
      receipt_id: receiptId,
    }

    const { error } = await client.from('event_users').insert(userData)
    if (error) {
      onError('購入できませんでした', 3000)
      return
    }

    onSuccess('購入しました', 3000)
  }

  return { addEventUser }
}
