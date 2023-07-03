export function useDialog() {
  const isShow = ref()

  function handle(flag: boolean) {
    isShow.value = flag
  }

  return { isShow, handle }
}
