export function useNamecard() {
  const config = useRuntimeConfig()
  const canRegister = config.public.registerNameCardFeature === 'true'

  return { canRegister }
}
