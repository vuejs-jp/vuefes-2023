import { createClient } from '@supabase/supabase-js'

enum EventType {
  INITIAL_SESSION = 'INITIAL_SESSION',
  SIGNED_IN = 'SIGNED_IN',
  SIGNED_OUT = 'SIGNED_OUT',
}

const initialUser = {
  id: '',
  name: '',
  avatarUrl: '',
  email: '',
  createdAt: '',
}

export type LoginUser = typeof initialUser

const useAuth = async () => {
  let loginUser = reactive<LoginUser>({ ...initialUser })

  const supabase = getClient()
  supabase.auth.onAuthStateChange((evt, session) => {
    console.log('onAuthStateChange', evt, session)

    switch (evt) {
      case EventType.SIGNED_OUT:
        loginUser = { ...initialUser }
        break
      case EventType.SIGNED_IN:
        if (session?.user) {
          const { user } = session
          loginUser.id = user.id || ''
          loginUser.name = user?.user_metadata.preferred_username || user?.user_metadata.name || ''
          loginUser.avatarUrl = user?.user_metadata.avatar_url || ''
          loginUser.email = user?.email || ''
          loginUser.createdAt = user?.created_at || ''
        }
        break
      default:
        break
    }
  })
  const signInWithGoogle = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
    })
    if (error) {
      throw new Error('can not signin with Google')
    }
  }
  const signInWithGitHub = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'github',
    })
    if (error) {
      throw new Error('can not signin with GitHub')
    }
  }
  const logout = async () => {
    const { error } = await supabase.auth.signOut()
    if (error) {
      throw new Error('can not signout')
    }
  }

  return { logout, signInWithGoogle, signInWithGitHub, loginUser }
}

function getClient() {
  const config = useRuntimeConfig()
  const { supabaseProjectUrl, supabaseApiKey } = config.public
  const supabase = createClient(supabaseProjectUrl, supabaseApiKey)
  return supabase
}

export default useAuth
