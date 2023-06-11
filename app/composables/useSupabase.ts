import { FormUser } from '~/types/app'
import { Database } from '~/types/supabase'

export interface UseSupabaseProps {
  user: FormUser
}

export async function useSupabase({ user }: UseSupabaseProps) {
  const client = useSupabaseClient<Database>()

  async function addEventUser(secretWord: string, receiptId: string) {
    const userData = {
      ...user,
      secret_word: secretWord,
      receipt_id: receiptId,
    }

    const { error } = await client.from('event_users').insert(userData)
    if (error) throw error
  }

  return { addEventUser }
}
