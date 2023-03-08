export function useNav() {
  const navRef = ref<HTMLElement | null>(null)
  const showNav = ref(false)

  function checkShowNav() {
    showNav.value = window.pageYOffset > 50
  }

  onMounted(function () {
    checkShowNav()
    window.addEventListener('scroll', checkShowNav)
  })

  onUnmounted(function () {
    window.removeEventListener('scroll', checkShowNav)
  })

  return { navRef, showNav }
}
