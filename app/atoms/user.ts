import { FormUser } from '~/types/app'

type State = {
  user: FormUser
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
    },
  })

  const setUser = (newUser?: FormUser) => Object.assign(globalState.user, { ...newUser })

  return { ...toRefs(globalState), setUser }
}

type storeType = ReturnType<typeof useStore>

export const storeKey: InjectionKey<storeType> = Symbol('user')
