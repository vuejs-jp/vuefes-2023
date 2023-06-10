import { onMounted } from 'vue'
import { createClient } from '@supabase/supabase-js'
import { match } from 'ts-pattern'
import { AuthProvider, FormUser } from '~/types/app'

const initialUser = {
  id: '',
  name: '',
  avatarUrl: '',
  email: '',
  createdAt: '',
}

const dummyUser = {
  id: 'dummy-user',
  name: 'ダミーユーザ',
  avatarUrl: 'https://vuefes.jp/2022/speaker/evan.jpeg',
  email: 'dummy@cy.com',
  createdAt: '2023-06-02T15:12:03.369752Z',
}

let signedUser = reactive<FormUser>({ ...initialUser })

const useAuth = async () => {
  // for dev
  onMounted(() => {
    if (shouldDevLogin()) {
      Object.entries(dummyUser).forEach(([key, value]) => {
        signedUser[key as keyof FormUser] = value
      })
    }
  })

  const supabase = getClient()
  supabase.auth.onAuthStateChange((evt, session) => {
    match(evt)
      .with('INITIAL_SESSION', 'SIGNED_IN', () => {
        if (session?.user) {
          const { user } = session
          signedUser.id = user.id || ''
          signedUser.name = user?.user_metadata.preferred_username || user?.user_metadata.name || ''
          signedUser.avatarUrl = user?.user_metadata.avatar_url || ''
          signedUser.email = user?.email || ''
          signedUser.createdAt = user?.created_at || ''
        }
      })
      .with('SIGNED_OUT', () => {
        Object.entries(initialUser).forEach(([key, value]) => {
          signedUser[key as keyof FormUser] = value
        })
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
