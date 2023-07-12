import { storeKey } from '~/atoms/user'

export function useUserStore() {
  const store = inject(storeKey)

  if (!store) {
    throw new Error()
  }

  const signedUser = store.user.value

  return { signedUser }
}
