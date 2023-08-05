import { Database } from '~/types/supabase'

export function useUser(userId: string) {
  const client = useSupabaseClient<Database>()
  const { data: eventUser } = useAsyncData('event_users', async () => {
    const { data } = await client.from('event_users').select().eq('user_id', userId).single()
    return data
  })

  return { eventUser: eventUser.value }
}
