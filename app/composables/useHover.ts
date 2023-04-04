export function useHover(el: Ref<null | HTMLElement>) {
  const isHovered = ref(false)

  function mouseEnter() {
    isHovered.value = true
  }

  function mouseLeave() {
    isHovered.value = false
  }

  onMounted(function () {
    if (!el.value) return

    el.value.addEventListener('mouseenter', mouseEnter)
    el.value.addEventListener('mouseleave', mouseLeave)
  })

  onUnmounted(function () {
    if (!el.value) return

    el.value.removeEventListener('mouseenter', mouseEnter)
    el.value.removeEventListener('mouseleave', mouseLeave)
  })

  return isHovered
}
