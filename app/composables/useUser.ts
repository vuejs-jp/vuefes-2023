import { Database } from '~/types/supabase'
import { createEmptyUser } from '~/atoms/user'

export async function useUser(userId: string) {
  let eventUser = createEmptyUser()
  let error = null

  if (!userId) {
    return { eventUser, error, activated: false }
  }
  const client = useSupabaseClient<Database>()
  const { data: res } = await useAsyncData('event_users', async () => {
    return await client.from('event_users').select().eq('user_id', userId).single()
  })
  eventUser = res.value?.data || createEmptyUser()
  error = res.value?.error || null

  const activated = computed(() => {
    return Boolean(eventUser?.activated_at)
  })

  return { eventUser, error, activated }
}
