import { onMounted } from 'vue'
import { createClient } from '@supabase/supabase-js'
import { match } from 'ts-pattern'
import { AuthProvider, FormUser } from '~/types/app'
import { storeKey } from '~/atoms/user'

const initialUser = {
  user_id: '',
  full_name: '',
  avatar_url: '',
  provider: '',
  email: '',
  created_at: '',
}

const dummyUser = {
  user_id: 'dummy-user',
  full_name: 'ダミーユーザ',
  avatar_url: 'https://vuefes.jp/2022/speakers/evan.jpeg',
  provider: 'google',
  email: 'dummy@cy.com',
  created_at: '2023-06-02T15:12:03.369752Z',
}

let signedUser = reactive<FormUser>({ ...initialUser })

const useAuth = () => {
  // for dev
  onMounted(() => {
    if (shouldDevLogin()) {
      Object.entries(dummyUser).forEach(([key, value]) => {
        signedUser[key as keyof FormUser] = value
      })
    }
  })

  const store = inject(storeKey)

  const supabase = getClient()
  supabase.auth.onAuthStateChange((evt, session) => {
    match(evt)
      .with('INITIAL_SESSION', 'SIGNED_IN', () => {
        if (session?.user) {
          const { user } = session
          signedUser.user_id = user.id || ''
          signedUser.full_name =
            user?.user_metadata.preferred_username || user?.user_metadata.name || ''
          signedUser.avatar_url = user?.user_metadata.avatar_url || ''
          signedUser.provider = user?.app_metadata.provider as AuthProvider
          signedUser.email = user?.email || ''
          signedUser.created_at = user?.created_at || ''
          store?.setUser(signedUser)
        }
      })
      .with('SIGNED_OUT', () => {
        Object.entries(initialUser).forEach(([key, value]) => {
          signedUser[key as keyof FormUser] = value
        })
        store?.setUser()
        location.href = '/'
      })
      .with(
        'MFA_CHALLENGE_VERIFIED',
        'PASSWORD_RECOVERY',
        'TOKEN_REFRESHED',
        'USER_UPDATED',
        () => {},
      )
      .exhaustive()
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
    return signedUser.user_id !== ''
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
  return window.location.search.includes('forcelogin=true') && !signedUser.user_id
}

export default useAuth
