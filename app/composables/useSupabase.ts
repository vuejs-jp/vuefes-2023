import { Database } from '~/types/supabase'
import { Role } from '~/types/app'
import { useUserStore } from './useUserStore'
import { useToast } from './useToast'

export function useSupabase() {
  const config = useRuntimeConfig()
  const { supabaseProjectUrl } = config.public
  const client = useSupabaseClient<Database>()
  const { signedUser: user } = useUserStore()
  const { onError, onSuccess } = useToast()

  async function addEventUser(displayName: string, avatarUrl: string, receiptId: string) {
    const userData = {
      ...user,
      display_name: displayName,
      avatar_url: getFullAvatarUrl(avatarUrl),
      receipt_id: receiptId,
    }

    const { error } = await client.from('event_users').insert(userData)
    if (error) {
      onError('登録できませんでした', 3000)
      return
    }

    onSuccess('登録しました', 3000)
  }

  async function updateEventUser(displayName: string, avatarUrl: string, userId: string) {
    const userData = {
      // ...user,
      display_name: displayName,
      avatar_url: getFullAvatarUrl(avatarUrl),
    }

    const { error } = await client.from('event_users').update(userData).eq('user_id', userId)
    if (error) {
      onError('編集できませんでした', 3000)
      return
    }

    onSuccess('編集しました', 3000)
  }

  function getFullAvatarUrl(avatarUrl: string) {
    if (avatarUrl.startsWith('https://') || avatarUrl.startsWith(supabaseProjectUrl))
      return avatarUrl
    return `${supabaseProjectUrl}/storage/v1/object/public/avatar/${avatarUrl}`
  }

  async function uploadAvatar(filePath: string, file: File) {
    await client.storage.from('avatar').upload(filePath, file)
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

  return { addEventUser, updateEventUser, getFullAvatarUrl, uploadAvatar, updatePMReceipt }
}
