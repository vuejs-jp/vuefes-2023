import { Database } from '~/types/supabase'

export async function useUser(userId: string) {
  const client = useSupabaseClient<Database>()
  const { data: eventUser } = await useAsyncData('event_users', async () => {
    const { data } = await client.from('event_users').select().eq('user_id', userId).single()
    return data
  })

  const isActivated = eventUser.value?.activated_at !== null

  return { eventUser: eventUser.value, isActivated }
}
