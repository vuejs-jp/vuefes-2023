import { REGISTER_NAMECARD } from '~/utils/feature.constants'

export function useNamecard() {
  const canRegister = REGISTER_NAMECARD

  return { canRegister }
}
