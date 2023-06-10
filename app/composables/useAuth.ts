import { onMounted } from 'vue'
import { createClient } from '@supabase/supabase-js'
import { AuthProvider } from '~/types/app'

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

const dummyUser = {
  id: 'dummy-user',
  name: 'ダミーユーザ',
  avatarUrl: 'https://vuefes.jp/2022/speaker/evan.jpeg',
  email: 'dummy@cy.com',
  createdAt: '2023-06-02T15:12:03.369752Z',
} as LoginUser

let signedUser = reactive<LoginUser>({ ...initialUser })

const useAuth = async () => {
  // for dev
  onMounted(() => {
    if (shouldDevLogin()) {
      Object.entries(dummyUser).forEach(([key, value]) => {
        signedUser[key as keyof LoginUser] = value
      })
    }
  })

  const supabase = getClient()
  supabase.auth.onAuthStateChange((evt, session) => {
    switch (evt) {
      case EventType.SIGNED_OUT:
        Object.entries(initialUser).forEach(([key, value]) => {
          signedUser[key as keyof LoginUser] = value
        })
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
  const signIn = async (provider: AuthProvider) => {
    const { error } = await supabase.auth.signInWithOAuth({ provider })
    if (error) {
      throw new Error(`can not signin with ${provider === 'github' ? 'GitHub' : 'Google'}`)
    }
  }
  const signOut = async () => {
    const { error } = await supabase.auth.signOut()
    if (error) {
      throw new Error('can not signout')
    }
  }
  const hasAuth = computed(() => {
    return signedUser.id !== ''
  })

  return { signOut, signIn, signedUser, hasAuth }
}

export function getClient() {
  const config = useRuntimeConfig()
  const { supabaseProjectUrl, supabaseApiKey, inCypress } = config.public
  const option = inCypress
    ? {
        auth: {
          persistSession: false,
        },
      }
    : {}
  const supabase = createClient(supabaseProjectUrl, supabaseApiKey, option)
  return supabase
}

function shouldDevLogin(): boolean {
  return window.location.search.includes('forcelogin=true') && !signedUser.id
}

export default useAuth
