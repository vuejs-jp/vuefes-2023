export function useForm() {
  const config = useRuntimeConfig()
  const endpoint = `https://${config.newtSpaceUid}.form.newt.so/v1/${config.newtFormUid}`
  return { endpoint }
}
