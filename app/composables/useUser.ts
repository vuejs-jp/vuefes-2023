import { Database } from '~/types/supabase'
import { createEmptyUser } from '~/atoms/user'

export async function useUser() {
  const user = useSupabaseUser()
  const userId = user.value?.id || ''
  const client = useSupabaseClient<Database>()
  const { data: res } = await useAsyncData('event_users', async () => {
    return await client.from('event_users').select().eq('user_id', userId).single()
  })
  const eventUser = res.value?.data || createEmptyUser()
  const error = res.value?.error || null

  const activated = computed(() => {
    return Boolean(eventUser?.activated_at)
  })

  return { eventUser, error, activated }
}
