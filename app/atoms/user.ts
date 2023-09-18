import { FormUser, User } from '~/types/app'

type State = {
  user: FormUser
}

export function createEmptyUser(): User {
  return {
    activated_at: null,
    avatar_url: '',
    created_at: '',
    display_name: '',
    email: '',
    full_name: '',
    id: '',
    provider: '',
    receipt_id: '',
    role: null,
    updated_at: '',
    user_id: '',
  }
}

export function useStore() {
  const globalState = reactive<State>({
    user: {
      user_id: '',
      full_name: '',
      avatar_url: '',
      provider: '',
      email: '',
      created_at: '',
      display_name: '',
      receipt_id: '',
    },
  })

  const setUser = (newUser?: FormUser) => Object.assign(globalState.user, { ...newUser })

  return { ...toRefs(globalState), setUser }
}

type storeType = ReturnType<typeof useStore>

export const storeKey: InjectionKey<storeType> = Symbol('user')
