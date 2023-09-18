import { Database } from '~/types/supabase'
import { createEmptyUser } from '~/atoms/user'

export async function useUser(userId: string) {
  const client = useSupabaseClient<Database>()
  const { data: eventUser } = await useAsyncData('event_users', async () => {
    return await client.from('event_users').select().eq('user_id', userId).single()
  })
  const { data, error } = eventUser.value as any

  return { eventUser: data || createEmptyUser(), error }
}
