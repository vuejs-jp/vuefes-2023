import { createClient } from '@supabase/supabase-js'

enum EventType {
  INITIAL_SESSION = 'INITIAL_SESSION',
  SIGNED_IN = 'SIGNED_IN',
  SIGNED_OUT = 'SIGNED_OUT',
}

export enum AuthProvider {
  GITHUB = 'github',
  GOOGLE = 'google',
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
  let signedUser = reactive<LoginUser>({ ...initialUser })

  const supabase = getClient()
  supabase.auth.onAuthStateChange((evt, session) => {
    console.log('onAuthStateChange', evt, session)

    switch (evt) {
      case EventType.SIGNED_OUT:
        signedUser = { ...initialUser }
        location.href = '/'
        break
      case EventType.INITIAL_SESSION:
      case EventType.SIGNED_IN:
        if (session?.user) {
          const { user } = session
          signedUser.id = user.id || ''
          signedUser.name = user?.user_metadata.preferred_username || user?.user_metadata.name || ''
          signedUser.avatarUrl = user?.user_metadata.avatar_url || ''
          signedUser.email = user?.email || ''
          signedUser.createdAt = user?.created_at || ''
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
  const signIn = async (provider: AuthProvider) => {
    switch (provider) {
      case AuthProvider.GITHUB:
        signInWithGitHub()
        break
      case AuthProvider.GOOGLE:
        signInWithGoogle()
        break
      default:
        break
    }
  }
  const logout = async () => {
    const { error } = await supabase.auth.signOut()
    if (error) {
      throw new Error('can not signout')
    }
  }
  const hasAuth = computed(() => {
    return Boolean(signedUser.id)
  })

  return { logout, signIn, signedUser, hasAuth }
}

function getClient() {
  const config = useRuntimeConfig()
  const { supabaseProjectUrl, supabaseApiKey } = config.public
  const supabase = createClient(supabaseProjectUrl, supabaseApiKey)
  return supabase
}

export default useAuth
