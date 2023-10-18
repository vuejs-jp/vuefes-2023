export function useLocaleCurrent() {
  const { locale } = useI18n({ useScope: 'global' })
  return { locale }
}
